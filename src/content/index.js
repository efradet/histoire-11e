// Sommaire : les 10 objectifs, leurs 3 niveaux, et le mode Master.
import {makeRng, shuffle, sample} from './rng.js';
import o1 from './o1-dates.js';
import o2 from './o2-tensions.js';
import o3 from './o3-alliances.js';
import o4 from './o4-declencheur.js';
import o5 from './o5-propagande.js';
import o6 from './o6-femmes-enfants.js';
import o7 from './o7-suisse.js';
import o8 from './o8-russie.js';
import o9 from './o9-consequences.js';
import o10 from './o10-documents.js';

export const objectives = [o1, o2, o3, o4, o5, o6, o7, o8, o9, o10];
export const objectiveById = id => objectives.find(o => o.id === id);

export const LEVELS = [
  {n: 1, name: 'Niveau 1', sub: 'Les bases'},
  {n: 2, name: 'Niveau 2', sub: 'Entraînement'},
  {n: 3, name: 'Niveau 3', sub: 'Approfondir'}
];

const letter = i => 'abcdefghijklmnopqrstuvwxyz'[i];
const blankRe = /\{\{(.+?)\}\}/g;

// Prépare une question pour l'affichage : mélange des réponses, tirage des lignes, etc.
export function instantiate(item, rng) {
  switch (item.kind) {
    case 'qcm': {
      const idx = item.options.map((_, i) => i);
      const order = item.keepOrder ? idx : shuffle(idx, rng);
      return {...item, options: order.map(i => item.options[i]), answer: order.indexOf(item.answer)};
    }
    case 'multi': {
      const order = shuffle(item.options.map((_, i) => i), rng);
      return {...item, options: order.map(i => item.options[i]), answers: item.answers.map(a => order.indexOf(a)).sort((a, b) => a - b)};
    }
    case 'order': {
      let display = shuffle(item.items.map((_, i) => i), rng);
      if (display.every((v, i) => v === i)) display = [...display.slice(1), display[0]];
      return {...item, display};
    }
    case 'rows': {
      const picked = item.pickRows ? sample(item.rows, item.pickRows, rng) : shuffle(item.rows, rng);
      const choices = item.keepChoiceOrder ? item.choices : [...item.choices].sort((a, b) => a.localeCompare(b, 'fr'));
      return {...item, rows: picked, choices};
    }
    case 'gap': {
      const blanks = [];
      const parts = [];
      let last = 0;
      for (const m of item.text.matchAll(blankRe)) {
        parts.push(item.text.slice(last, m.index));
        const opts = m[1].split('|');
        blanks.push({answer: opts[0], options: shuffle(opts, rng)});
        parts.push(null);
        last = m.index + m[0].length;
      }
      parts.push(item.text.slice(last));
      return {...item, parts, blanks};
    }
    case 'map': {
      if (item.mode === 'find') {
        const targets = item.pickTargets ? sample(item.targets, item.pickTargets, rng) : shuffle(item.targets, rng);
        return {...item, targets};
      }
      return item;
    }
    default:
      return item;
  }
}

function finalize(exercises, prefix, rng) {
  return exercises.map((exo, e) => {
    const chosen = exo.pick ? sample(exo.items, exo.pick, rng) : exo.keep ? exo.items : shuffle(exo.items, rng);
    return {
      ...exo,
      number: e + 1,
      items: chosen.map((it, i) => ({...instantiate(it, rng), id: `${prefix}.${e + 1}${letter(i)}`, label: chosen.length > 1 ? `${letter(i)})` : ''}))
    };
  });
}

export function buildSeries(objectiveId, level, seed) {
  const o = objectiveById(objectiveId);
  const rng = makeRng(seed * 7919 + objectiveId * 131 + level);
  return finalize(o.levels[level], `${objectiveId}.${level}`, rng);
}

// Test blanc : deux questions par objectif, tirées des questions « Master », dans l'ordre des objectifs.
export function buildMaster(seed) {
  const rng = makeRng(seed * 104729 + 77);
  const exercises = objectives.map(o => ({
    title: o.title,
    objective: o.id,
    items: sample(o.master, 2, rng)
  }));
  return finalize(exercises.map(e => ({...e, keep: true})), 'M', rng);
}

export const itemCount = exercises => exercises.reduce((n, exo) => n + exo.items.length, 0);
