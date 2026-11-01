// Constructeurs des questions. Toutes se corrigent automatiquement (quiz) et ont une explication.
//
//  qcm(q, bonne, [mauvaises], explication)         une seule bonne réponse (ordre mélangé)
//  vf(q, vrai?, explication)                         vrai ou faux
//  multi(q, [bonnes], [mauvaises], explication)      coche toutes les bonnes réponses
//  order(q, [dans le bon ordre], explication)        remets dans l'ordre
//  rows(q, [[étiquette, réponse]], choix, expl.)     pour chaque ligne, choisis la bonne réponse
//  classify(q, [catégories], [[étiquette, n°]], e.)  range chaque élément dans une catégorie
//  gap(texte avec {{bonne|faux1|faux2}}, expl.)      texte à trous
//  mapFind(q, année, [pays], expl.)                  touche les pays sur la carte, un par un
//  mapSelect(q, année, [pays], expl.)                touche tous les pays demandés, puis vérifie
//
// Options communes : hint (indice), doc (document affiché avec la question), map (carte affichée).

export const qcm = (q, good, bads, explain, extra = {}) => ({kind: 'qcm', q, options: [good, ...bads], answer: 0, explain, ...extra});

export const vf = (q, truth, explain, extra = {}) => ({kind: 'qcm', q, options: ['Vrai', 'Faux'], answer: truth ? 0 : 1, keepOrder: true, vf: true, explain, ...extra});

export const multi = (q, goods, bads, explain, extra = {}) => ({kind: 'multi', q, options: [...goods, ...bads], answers: goods.map((_, i) => i), explain, ...extra});

export const order = (q, items, explain, extra = {}) => ({kind: 'order', q, items, explain, ...extra});

export const rows = (q, pairs, choices, explain, extra = {}) => ({
  kind: 'rows', q,
  rows: pairs.map(([label, answer]) => ({label, answer})),
  choices: choices || [...new Set(pairs.map(p => p[1]))],
  explain, ...extra
});

export const classify = (q, cats, pairs, explain, extra = {}) =>
  rows(q, pairs.map(([label, c]) => [label, cats[c]]), cats, explain, {keepChoiceOrder: true, ...extra});

export const gap = (text, explain, extra = {}) => ({kind: 'gap', text, explain, ...extra});

export const mapFind = (q, year, targets, explain, extra = {}) => ({kind: 'map', mode: 'find', q, year, targets, explain, ...extra});

export const mapSelect = (q, year, answers, explain, extra = {}) => ({kind: 'map', mode: 'select', q, year, answers, explain, ...extra});

// Un exercice regroupe des questions. pick : nombre de questions tirées au hasard dans la liste.
// keep : garder l'ordre des questions (questions sur un même document, qui se suivent).
export const ex = (title, items, opts = {}) => ({title, items, ...opts});
