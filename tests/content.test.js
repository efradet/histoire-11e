// Vérifie tout le contenu sur de nombreuses séries tirées au hasard :
// chaque question est bien formée, sa bonne réponse vaut 1 point, ses pays existent sur la carte,
// ses images existent, et chaque objectif a son cours, ses sources et ses questions Master.
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {objectives, buildSeries, buildMaster, instantiate} from '../src/content/index.js';
import {itemPoints} from '../src/ui/grading.js';
import {SOURCES} from '../src/content/sources.js';
import {NAMES, PAINTS} from '../src/content/countries.js';
import {makeRng} from '../src/content/rng.js';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const maps = JSON.parse(fs.readFileSync(path.join(root, 'src/data/maps.json'), 'utf8'));
const SEEDS = Array.from({length: 40}, (_, i) => i + 1);
const unique = list => new Set(list).size === list.length;

function perfect(it) {
  switch (it.kind) {
    case 'qcm': return {choice: it.answer};
    case 'multi': return {sel: it.answers};
    case 'order': return {seq: it.items.map((_, i) => i)};
    case 'rows': return {vals: it.rows.map(r => r.answer)};
    case 'gap': return {vals: it.blanks.map(b => b.answer)};
    case 'map': return it.mode === 'find' ? {picks: it.targets} : {sel: it.answers};
    default: throw new Error(`type inconnu ${it.kind}`);
  }
}

function checkDoc(doc, where) {
  if (!doc) return;
  if (doc.img) assert.ok(fs.existsSync(path.join(root, 'public', doc.img)), `${where} : image manquante ${doc.img}`);
  else assert.ok(doc.text && doc.text.length > 20, `${where} : document sans texte`);
}

function checkMapRef(year, ids, where) {
  const onMap = new Set(maps.maps[year].countries.map(c => c.id));
  for (const id of ids) {
    assert.ok(onMap.has(id), `${where} : ${id} absent de la carte ${year}`);
    assert.ok(NAMES[year][id], `${where} : ${id} sans nom en ${year}`);
  }
}

function checkItem(it, where) {
  const w = `${where} ${it.id || ''} « ${String(it.q || it.text || '').slice(0, 60)} »`;
  assert.ok(it.explain && it.explain.length > 10, `${w} : pas d’explication`);
  switch (it.kind) {
    case 'qcm':
      assert.ok(it.options.length >= 2 && unique(it.options), `${w} : options en double`);
      assert.ok(it.answer >= 0 && it.answer < it.options.length, `${w} : bonne réponse hors liste`);
      break;
    case 'multi':
      assert.ok(unique(it.options) && it.answers.length >= 1 && it.answers.length < it.options.length, `${w} : réponses multiples mal formées`);
      break;
    case 'order':
      assert.ok(it.items.length >= 3 && unique(it.items), `${w} : liste à ordonner mal formée`);
      assert.deepEqual([...it.display].sort((a, b) => a - b), it.items.map((_, i) => i), `${w} : affichage incomplet`);
      assert.ok(!it.display.every((v, i) => v === i), `${w} : déjà dans l’ordre`);
      break;
    case 'rows':
      assert.ok(it.rows.length >= 2 && unique(it.rows.map(r => r.label)), `${w} : lignes en double`);
      assert.ok(unique(it.choices), `${w} : choix en double`);
      for (const r of it.rows) assert.ok(it.choices.includes(r.answer), `${w} : « ${r.answer} » absent des choix`);
      break;
    case 'gap':
      assert.ok(it.blanks.length >= 1, `${w} : pas de trou`);
      for (const b of it.blanks) assert.ok(b.options.includes(b.answer) && unique(b.options), `${w} : trou mal formé`);
      assert.ok(!it.parts.some(p => p && p.includes('{{')), `${w} : accolades restantes`);
      break;
    case 'map':
      assert.ok(maps.maps[it.year], `${w} : année de carte inconnue`);
      checkMapRef(it.year, it.mode === 'find' ? it.targets : it.answers, w);
      if (it.mode === 'find') assert.ok(unique(it.targets), `${w} : pays en double`);
      break;
    default:
      assert.fail(`${w} : type inconnu`);
  }
  if (it.map) { assert.ok(PAINTS[it.map.paint], `${w} : coloriage inconnu`); }
  checkDoc(it.doc, w);
  assert.equal(itemPoints(it, perfect(it)), 1, `${w} : la bonne réponse ne vaut pas 1 point`);
  assert.equal(itemPoints(it, {}), 0, `${w} : une réponse vide rapporte des points`);
}

test('chaque objectif est complet', () => {
  assert.equal(objectives.length, 10);
  objectives.forEach((o, i) => {
    assert.equal(o.id, i + 1);
    assert.ok(o.title && o.subtitle && o.ref, `objectif ${o.id} : titre`);
    assert.ok(o.rappel.length >= 3, `objectif ${o.id} : rappel`);
    for (const l of [1, 2, 3]) assert.ok(o.levels[l]?.length >= 1, `objectif ${o.id} : niveau ${l}`);
    assert.ok(o.master.length >= 2, `objectif ${o.id} : questions Master`);
    assert.ok(o.cours.length >= 6, `objectif ${o.id} : cours trop court`);
    assert.ok(o.cours.some(b => b.quiz), `objectif ${o.id} : pas de question « À toi »`);
    for (const s of o.sources) assert.ok(SOURCES[s], `objectif ${o.id} : source inconnue ${s}`);
    for (const b of o.cours) {
      if (b.quiz) checkItem({...instantiate(b.quiz, makeRng(1)), id: 'cours'}, `cours ${o.id}`);
      if (b.doc) checkDoc(b.doc, `cours ${o.id}`);
      if (b.map) assert.ok(PAINTS[b.map.paint] && maps.maps[b.map.year], `cours ${o.id} : carte`);
    }
  });
});

test('toutes les séries, sur 40 tirages par niveau', () => {
  for (const o of objectives) {
    for (const l of [1, 2, 3]) {
      for (const seed of SEEDS) {
        const series = buildSeries(o.id, l, seed);
        const items = series.flatMap(e => e.items);
        assert.ok(items.length >= 5, `objectif ${o.id} niveau ${l} : seulement ${items.length} questions`);
        assert.ok(unique(items.map(it => it.id)), `objectif ${o.id} niveau ${l} : identifiants en double`);
        for (const exo of series) checkDoc(exo.doc, `objectif ${o.id} niveau ${l}`);
        for (const it of items) checkItem(it, `objectif ${o.id} niveau ${l} graine ${seed}`);
      }
    }
  }
});

test('le test blanc : 2 questions par objectif, sur 40 tirages', () => {
  for (const seed of SEEDS) {
    const exam = buildMaster(seed);
    assert.equal(exam.length, 10);
    const items = exam.flatMap(e => e.items);
    assert.equal(items.length, 20);
    assert.ok(unique(items.map(it => it.id)));
    for (const it of items) checkItem(it, `Master graine ${seed}`);
  }
});

test('style : pas de tirets longs, des apostrophes typographiques', () => {
  const all = JSON.stringify({objectives, SOURCES});
  assert.ok(!/[—–]/.test(all), 'tiret long trouvé dans le contenu');
  const files = fs.readdirSync(path.join(root, 'src/content')).filter(f => f.endsWith('.js'));
  for (const f of files) {
    const src = fs.readFileSync(path.join(root, 'src/content', f), 'utf8');
    const strings = src.match(/'(?:[^'\\\n]|\\.)*'/g) || [];
    for (const s of strings) assert.ok(!/[a-zà-ü]’?\\'[a-zà-ü]/i.test(s), `${f} : apostrophe droite échappée dans ${s.slice(0, 50)}`);
  }
});

test('les coloriages de carte utilisent des pays existants', () => {
  for (const [key, p] of Object.entries(PAINTS)) {
    const year = key === 'nouveaux1920' ? 1920 : 1914;
    checkMapRef(year, Object.keys(p.of), `coloriage ${key}`);
  }
});
