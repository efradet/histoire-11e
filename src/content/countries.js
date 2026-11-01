// Noms des pays sur les cartes, et coloriages (camps) utilisés dans les exercices.
const base = {
  fra: 'France', gbr: 'Royaume-Uni', deu: 'Allemagne', ita: 'Italie', bel: 'Belgique', nld: 'Pays-Bas',
  lux: 'Luxembourg', che: 'Suisse', esp: 'Espagne', prt: 'Portugal', dnk: 'Danemark', nor: 'Norvège',
  swe: 'Suède', alb: 'Albanie', grc: 'Grèce', bgr: 'Bulgarie', rou: 'Roumanie'
};

export const NAMES = {
  1914: {...base, aut: 'Autriche-Hongrie', rus: 'Russie', srb: 'Serbie', mne: 'Monténégro', tur: 'Empire ottoman'},
  1920: {
    ...base, aut: 'Autriche', hun: 'Hongrie', rus: 'Russie soviétique', tur: 'Empire ottoman (future Turquie)',
    pol: 'Pologne', cze: 'Tchécoslovaquie', yug: 'Yougoslavie', fin: 'Finlande', est: 'Estonie', lva: 'Lettonie', ltu: 'Lituanie'
  }
};

export const nameOf = (year, id) => NAMES[year][id] || id;

// Coloriages : catégorie de chaque pays + légende. Les pays absents restent en couleur neutre.
const camp = (groups) => Object.fromEntries(Object.entries(groups).flatMap(([cat, ids]) => ids.map(id => [id, cat])));

export const PAINTS = {
  alliances1914: {
    title: 'Les alliances en 1914',
    legend: [['entente', 'Triple Entente'], ['alliance', 'Triple Alliance']],
    of: camp({entente: ['fra', 'gbr', 'rus'], alliance: ['deu', 'aut', 'ita']})
  },
  aout1914: {
    title: 'Les pays en guerre en août 1914',
    legend: [['allies', 'Alliés'], ['centraux', 'Empires centraux'], ['neutre', 'Neutres']],
    of: camp({allies: ['fra', 'gbr', 'rus', 'srb', 'bel', 'mne'], centraux: ['deu', 'aut'], neutre: ['che', 'esp', 'nld', 'dnk', 'nor', 'swe', 'ita', 'tur', 'bgr', 'rou', 'grc', 'prt']})
  },
  an1917: {
    title: 'L’Europe en 1917',
    legend: [['allies', 'Alliés'], ['centraux', 'Empires centraux'], ['occupe', 'Alliés occupés par les Empires centraux'], ['neutre', 'Neutres']],
    of: camp({allies: ['fra', 'gbr', 'rus', 'ita', 'prt', 'rou', 'grc'], centraux: ['deu', 'aut', 'tur', 'bgr'], occupe: ['srb', 'mne', 'bel'], neutre: ['che', 'esp', 'nld', 'dnk', 'nor', 'swe']})
  },
  nouveaux1920: {
    title: 'Les nouveaux États',
    legend: [['nouveau', 'Nouveaux États (1918-1920)']],
    of: camp({nouveau: ['pol', 'cze', 'yug', 'aut', 'hun', 'fin', 'est', 'lva', 'ltu']})
  }
};
