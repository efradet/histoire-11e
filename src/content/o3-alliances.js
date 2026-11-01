// Objectif 3 : les deux alliances, leur évolution, et les pays sur la carte (manuel p. 30, fiche p. 10-11)
import {qcm, vf, multi, order, classify, mapFind, mapSelect, ex} from './helpers.js';

// Pays nommés sur les cartes coloriées
const L1914 = ['fra', 'gbr', 'rus', 'deu', 'aut', 'ita'];
const L1917 = ['fra', 'gbr', 'rus', 'deu', 'aut', 'ita', 'tur', 'bgr', 'srb', 'rou', 'esp', 'che'];

export default {
  id: 3,
  title: 'Les alliances et la carte',
  subtitle: 'Triple Alliance, Triple Entente, et qui rejoint qui',
  ref: 'Manuel p. 30, fiche p. 10-11',
  rappel: [
    '**Triple Alliance** : Allemagne, Autriche-Hongrie, Italie. **Triple Entente** : France, Royaume-Uni, Russie.',
    'Pendant la guerre : les **Empires centraux** (Allemagne, Autriche-Hongrie, puis Empire ottoman et Bulgarie) contre les **Alliés** (France, Royaume-Uni, Russie, Serbie, Belgique, puis Japon, Italie, Roumanie, États-Unis…).',
    'L’**Italie change de camp** : neutre en 1914, elle rejoint les Alliés en 1915.',
    'La **Serbie** et la **Belgique** sont envahies et occupées, mais restent du côté des Alliés.',
    'La **Russie** quitte la guerre fin 1917. Restent **neutres** : Suisse, Espagne, Pays-Bas, Danemark, Norvège, Suède.'
  ],
  levels: {
    1: [
      ex('Triple Alliance ou Triple Entente ?', [
        classify('Range chaque pays dans son alliance (en 1914).', ['Triple Alliance', 'Triple Entente'], [
          ['Allemagne', 0], ['Autriche-Hongrie', 0], ['Italie', 0], ['France', 1], ['Royaume-Uni', 1], ['Russie', 1]
        ], 'Triple Alliance : Allemagne, Autriche-Hongrie, Italie. Triple Entente : France, Royaume-Uni, Russie. Astuce : l’Entente « entoure » l’Allemagne, à l’ouest (France, Royaume-Uni) et à l’est (Russie).')
      ]),
      ex('Trouve les pays sur la carte de 1914', [
        mapFind('Touche chaque pays demandé sur la carte de 1914.', 1914, ['fra', 'deu', 'gbr', 'rus', 'aut', 'ita', 'che', 'esp'],
          'Les grandes puissances de 1914 : France, Allemagne, Royaume-Uni, Russie, Autriche-Hongrie, Italie. Repère la Suisse au milieu, entre la France, l’Allemagne, l’Autriche-Hongrie et l’Italie.', {pickTargets: 5})
      ]),
      ex('Questions de cours', [
        qcm('Comment appelle-t-on le camp de l’Allemagne pendant la guerre ?', 'Les Empires centraux', ['Les Alliés', 'La Triple Entente', 'Les neutres'],
          'L’Allemagne et l’Autriche-Hongrie sont deux empires au centre de l’Europe : on les appelle les Empires centraux. L’Empire ottoman et la Bulgarie les rejoignent.'),
        qcm('Comment appelle-t-on le camp de la France pendant la guerre ?', 'Les Alliés', ['Les Empires centraux', 'La Triple Alliance', 'Les neutres'],
          'Les pays de la Triple Entente et ceux qui les rejoignent forment les Alliés.'),
        qcm('Quelle est la position de la Suisse ?', 'Neutre : elle ne participe pas à la guerre', ['Alliée de la France', 'Alliée de l’Allemagne', 'Elle change de camp en 1917'],
          'La Suisse déclare sa neutralité le 4 août 1914. Elle mobilise son armée pour garder ses frontières, sans combattre.'),
        qcm('Quel pays neutre est envahi par l’Allemagne en août 1914 ?', 'La Belgique', ['La Suisse', 'Les Pays-Bas', 'L’Espagne'],
          'Pour attaquer la France par le nord, l’Allemagne envahit la Belgique, pourtant neutre. C’est ce qui fait entrer le Royaume-Uni dans la guerre.')
      ], {pick: 3}),
      ex('Vrai ou faux ?', [
        vf('La Serbie rejoint la Triple Alliance pendant la guerre.', false,
          'Faux. La Serbie est l’alliée de la Russie et se bat avec les Alliés dès 1914. Envahie en 1915, elle est occupée par les Empires centraux : c’est pour cela qu’elle a leur couleur sur la carte de 1917.'),
        vf('L’Italie combat aux côtés de l’Allemagne.', false,
          'Faux. Membre de la Triple Alliance avant la guerre, l’Italie reste neutre en 1914, puis se bat contre l’Autriche-Hongrie à partir de 1915, avec les Alliés.'),
        vf('La Suisse a pour voisins des pays des deux camps.', true,
          'Vrai. La France et l’Italie (dès 1915) sont dans le camp des Alliés ; l’Allemagne et l’Autriche-Hongrie dans celui des Empires centraux.'),
        vf('Le Royaume-Uni fait partie de la Triple Entente.', true,
          'Vrai, avec la France et la Russie.')
      ], {pick: 3})
    ],
    2: [
      ex('Qui rejoint quel camp ?', [
        classify('Dans quel camp ces pays entrent-ils en guerre ?', ['Alliés', 'Empires centraux'], [
          ['Japon (1914)', 0], ['Empire ottoman (fin 1914)', 1], ['Italie (1915)', 0], ['Bulgarie (1915)', 1], ['Roumanie (1916)', 0],
          ['Portugal (1916)', 0], ['États-Unis (1917)', 0], ['Grèce (1917)', 0], ['Brésil (1917)', 0]
        ], 'Seuls deux pays rejoignent les Empires centraux : l’Empire ottoman (fin 1914) et la Bulgarie (1915). Tous les autres rejoignent les Alliés, qui sont de plus en plus nombreux.', {pickRows: 7})
      ]),
      ex('Trouve les pays sur la carte de 1914', [
        mapFind('Touche chaque pays demandé. La carte se rapproche pour les petits pays.', 1914, ['srb', 'bel', 'tur', 'bgr', 'rou', 'nld', 'grc', 'prt'],
          'La Serbie et la Bulgarie sont voisines dans les Balkans ; la Roumanie est au nord de la Bulgarie. La Belgique est entre la France et les Pays-Bas.', {pickTargets: 5, zoomSmall: true})
      ]),
      ex('Le cas de l’Italie (fiche p. 11, 5b)', [
        qcm('En 1914, l’Italie est membre de la Triple Alliance, mais elle reste neutre. Pourquoi ?', 'L’alliance est défensive : elle ne l’oblige pas à suivre l’Autriche-Hongrie, qui a attaqué la première', ['Elle n’a pas d’armée', 'La Suisse lui interdit d’entrer en guerre', 'Elle est déjà alliée au Japon'],
          'La Triple Alliance oblige à aider un allié attaqué, pas un allié qui attaque. Et l’Italie a de vieux conflits avec l’Autriche-Hongrie, qui possède des régions où l’on parle italien.'),
        qcm('Pourquoi l’Italie rejoint-elle les Alliés en 1915 ?', 'Ils lui promettent des territoires de l’Autriche-Hongrie (Trentin, Tyrol du Sud, Trieste…)', ['L’Allemagne l’a envahie', 'Elle veut défendre la Suisse', 'Les États-Unis l’y obligent'],
          'Par le pacte secret de Londres (avril 1915), la France et le Royaume-Uni promettent des terres à l’Italie. Elle déclare la guerre à l’Autriche-Hongrie en mai 1915. Chaque camp avait essayé de l’attirer.'),
        vf('La Corée rejoint les Alliés pendant la guerre.', false,
          'Faux. La Corée est alors une colonie du Japon (depuis 1910) : ce n’est pas un pays indépendant. C’est le Japon qui rejoint les Alliés, dès 1914.')
      ], {keep: true}),
      ex('Touche les membres d’une alliance', [
        mapSelect('Touche les trois pays de la Triple Entente, puis vérifie.', 1914, ['fra', 'gbr', 'rus'],
          'Triple Entente : France, Royaume-Uni, Russie. Elle prend l’Allemagne en tenaille, à l’ouest et à l’est.'),
        mapSelect('Touche les trois pays de la Triple Alliance, puis vérifie.', 1914, ['deu', 'aut', 'ita'],
          'Triple Alliance : Allemagne, Autriche-Hongrie, Italie. Ensemble, ils forment un bloc au centre de l’Europe.')
      ], {pick: 1}),
      ex('Vrai ou faux ?', [
        vf('L’Empire ottoman rejoint les Empires centraux.', true,
          'Vrai, fin 1914. Il ferme aux Alliés le passage vers la Russie par la mer Noire.'),
        vf('Le Japon combat aux côtés de l’Allemagne.', false,
          'Faux. Le Japon rejoint les Alliés dès août 1914 et s’empare des colonies allemandes en Chine et dans le Pacifique.'),
        vf('Les États-Unis rejoignent les Alliés en 1917.', true,
          'Vrai, en avril 1917.'),
        vf('La Bulgarie rejoint les Alliés.', false,
          'Faux. Elle rejoint les Empires centraux en 1915 et attaque la Serbie.'),
        vf('Les Alliés sont de plus en plus nombreux au fil de la guerre.', true,
          'Vrai. Japon, Italie, Portugal, Roumanie, États-Unis, Grèce, Brésil, Chine… Les Empires centraux ne sont que quatre.')
      ], {pick: 3})
    ],
    3: [
      ex('Lis la carte de 1917', [
        qcm('Sur cette carte de 1917, quel pays a changé de camp par rapport aux alliances d’avant-guerre ?', 'L’Italie', ['La France', 'L’Allemagne', 'La Suisse'],
          'Membre de la Triple Alliance avant 1914, l’Italie se bat avec les Alliés depuis 1915.', {map: {year: 1914, paint: 'an1917', labels: L1917}}),
        qcm('La Serbie a la couleur « occupée » en 1917. Pourquoi ?', 'Elle a été envahie en 1915 par l’Autriche-Hongrie, l’Allemagne et la Bulgarie', ['Elle a rejoint la Triple Alliance', 'Elle est devenue neutre', 'Elle a gagné la guerre'],
          'Envahie à l’automne 1915, la Serbie est occupée jusqu’en 1918. Son armée s’est réfugiée en Grèce et continue la lutte avec les Alliés. Sur ta fiche, attention : la Serbie ne « rejoint » pas les Empires centraux.', {map: {year: 1914, paint: 'an1917', labels: L1917}}),
        qcm('Quel pays, entré en guerre en 1915, relie l’Allemagne et l’Autriche-Hongrie à l’Empire ottoman ?', 'La Bulgarie', ['La Roumanie', 'La Grèce', 'La Suisse'],
          'La Bulgarie rejoint les Empires centraux en octobre 1915. Avec la Serbie occupée, une route directe relie Berlin à Constantinople.', {map: {year: 1914, paint: 'an1917', labels: L1917}}),
        multi('Coche les pays qui restent neutres pendant toute la guerre.', ['La Suisse', 'L’Espagne', 'Les Pays-Bas', 'La Suède'], ['L’Italie', 'La Belgique', 'La Grèce', 'Le Portugal'],
          'Suisse, Espagne, Pays-Bas, Danemark, Norvège et Suède restent neutres. La Belgique était neutre mais a été envahie ; l’Italie, la Grèce et le Portugal entrent en guerre avec les Alliés.')
      ], {keep: true}),
      ex('Les petits pays sur la carte', [
        mapFind('Touche chaque pays demandé. La carte se rapproche pour les petits pays.', 1914, ['mne', 'alb', 'lux', 'dnk', 'nor', 'swe', 'rou', 'bgr'],
          'Le Monténégro (allié de la Serbie) et l’Albanie bordent l’Adriatique ; le Luxembourg, neutre, est occupé par l’Allemagne dès août 1914.', {pickTargets: 5, zoomSmall: true})
      ]),
      ex('Qui renforce les Empires centraux ?', [
        mapSelect('Touche les deux pays qui rejoignent l’Allemagne et l’Autriche-Hongrie pendant la guerre, puis vérifie.', 1914, ['tur', 'bgr'],
          'L’Empire ottoman (fin 1914) et la Bulgarie (1915) rejoignent les Empires centraux. Regarde la carte : la Bulgarie fait le lien entre l’Autriche-Hongrie et l’Empire ottoman. L’Italie, elle, change de camp et rejoint les Alliés en 1915.')
      ]),
      ex('La sortie de la Russie', [
        qcm('Pourquoi la sortie de la Russie inquiète-t-elle les Alliés ?', 'L’Allemagne n’a plus à se battre à l’est et peut envoyer ses soldats à l’ouest', ['La Russie rejoint les Empires centraux', 'La Russie envahit la Suisse', 'La Russie ferme la mer du Nord'],
          'Avec un seul front, l’Allemagne lance de grandes offensives au printemps 1918. Heureusement pour les Alliés, les Américains arrivent.'),
        qcm('Que perd la Russie au traité de Brest-Litovsk (mars 1918) ?', 'D’immenses territoires à l’ouest : Pologne, pays baltes, Finlande, Ukraine', ['L’Alsace-Lorraine', 'Ses colonies en Afrique', 'Rien du tout'],
          'La paix est très dure pour la Russie, qui perd une grande partie de sa population, de ses terres agricoles et de ses industries. Ce traité sera annulé par la défaite allemande de 1918.')
      ], {pick: 1})
    ]
  },
  master: [
    classify('Dans quel camp ? (pendant la guerre)', ['Alliés', 'Empires centraux', 'Neutres'], [
      ['Bulgarie', 1], ['Roumanie', 0], ['Espagne', 2], ['Empire ottoman', 1], ['Italie', 0], ['Pays-Bas', 2]
    ], 'Empires centraux : Allemagne, Autriche-Hongrie, Empire ottoman, Bulgarie. Neutres : Suisse, Espagne, Pays-Bas, pays scandinaves. Tous les autres pays en guerre sont Alliés.'),
    mapFind('Touche chaque pays demandé sur la carte de 1914.', 1914, ['srb', 'bgr', 'bel', 'tur', 'rou'],
      'Serbie et Bulgarie dans les Balkans, Belgique au nord de la France, Empire ottoman à cheval sur l’Europe et l’Asie, Roumanie au nord de la Bulgarie.', {pickTargets: 4, zoomSmall: true}),
    qcm('Sur la carte de 1917, la Serbie et l’Italie ont changé par rapport à 1914. Que s’est-il passé ?', 'La Serbie est occupée par les Empires centraux ; l’Italie s’est rangée du côté des Alliés', ['La Serbie et l’Italie ont rejoint la Triple Alliance', 'L’Italie a perdu son territoire', 'Les deux sont devenues neutres'],
      'C’est la question 2 de ta fiche p. 9. La Serbie, alliée, est envahie (1915). L’Italie ne perd pas son territoire : elle change de camp (1915). L’Empire ottoman, lui, s’est rangé avec les Empires centraux.', {map: {year: 1914, paint: 'an1917', labels: L1917}})
  ],
  cours: [
    {h: 'En 1914 : deux alliances'},
    {table: {head: ['Triple Alliance', 'Triple Entente'], rows: [['Allemagne', 'France'], ['Autriche-Hongrie', 'Royaume-Uni'], ['Italie', 'Russie']]}},
    {map: {year: 1914, paint: 'alliances1914', labels: L1914, caption: 'Les deux alliances avant la guerre'}},
    {h: 'Pendant la guerre : deux camps qui changent'},
    {p: 'Une fois la guerre commencée, on ne parle plus de Triple Alliance et de Triple Entente, mais de deux **camps** :'},
    {list: [
      '**Les Empires centraux** : Allemagne, Autriche-Hongrie, rejointes par l’**Empire ottoman** (fin 1914) et la **Bulgarie** (1915).',
      '**Les Alliés** : France, Royaume-Uni, Russie, Serbie, Belgique, Monténégro, rejoints par le **Japon** (1914), l’**Italie** (1915), le **Portugal** et la **Roumanie** (1916), les **États-Unis**, la **Grèce**, le **Brésil** et la **Chine** (1917)…'
    ]},
    {p: 'La guerre devient **mondiale** : des pays d’Asie et d’Amérique y participent, ainsi que les soldats venus des colonies.'},
    {map: {year: 1914, paint: 'an1917', labels: L1917, caption: 'L’Europe en 1917 (frontières de 1914)'}},
    {h: 'Trois changements à comprendre'},
    {list: [
      '**L’Italie change de camp.** Neutre en 1914 (la Triple Alliance était défensive et l’Autriche-Hongrie avait attaqué), elle rejoint les Alliés en mai 1915 contre la promesse de territoires autrichiens (pacte de Londres).',
      '**La Serbie et la Belgique sont occupées**, mais elles restent dans le camp des Alliés.',
      '**La Russie quitte la guerre** après la révolution d’octobre : armistice en décembre 1917, traité de Brest-Litovsk en mars 1918.'
    ]},
    {h: 'Les neutres'},
    {p: 'La **Suisse**, l’**Espagne**, les **Pays-Bas**, le **Danemark**, la **Norvège** et la **Suède** restent neutres pendant toute la guerre. La Suisse est entourée de pays des deux camps.'},
    {warn: [
      'Sur ta fiche p. 9 : la Serbie ne « rejoint » pas la Triple Alliance. Elle est **envahie et occupée** (1915).',
      'L’Italie ne « perd » pas de territoire en 1917 : elle a **changé de camp**.',
      'La Corée ne rejoint pas les Alliés : c’est une **colonie du Japon**. C’est le Japon qui entre en guerre (1914).'
    ]},
    {quiz: qcm('À toi : quels sont les deux pays qui rejoignent les Empires centraux ?', 'L’Empire ottoman et la Bulgarie', ['L’Italie et la Roumanie', 'Le Japon et la Grèce', 'La Suisse et l’Espagne'],
      'Seuls l’Empire ottoman (fin 1914) et la Bulgarie (1915) rejoignent l’Allemagne et l’Autriche-Hongrie.')}
  ],
  sources: ['fiche', 'wikiChrono', 'wikiCauses', 'wikiRevolution', 'cartes']
};
