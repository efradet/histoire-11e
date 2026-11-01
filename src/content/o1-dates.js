// Objectif 1 : connaître les dates des principaux événements (fiche p. 9)
import {qcm, vf, multi, order, rows, classify, ex} from './helpers.js';

const YEARS = ['1914', '1915', '1916', '1917', '1918', '1919'];

export default {
  id: 1,
  title: 'Les dates clés',
  subtitle: 'Situer la guerre dans le temps',
  ref: 'Fiche p. 9',
  rappel: [
    '**28 juin 1914** : attentat de Sarajevo. **Début août 1914** : les grandes puissances entrent en guerre.',
    '**3 août 1914** : la Suisse élit un général (Ulrich Wille) et mobilise son armée.',
    '**1914** : guerre de mouvement. **Fin 1914 à début 1918** : guerre de position (tranchées). **1918** : à nouveau guerre de mouvement.',
    '**1917** : entrée en guerre des **États-Unis** (avril), la **Russie** demande l’armistice (décembre).',
    '**11 novembre 1918** : armistice, les combats s’arrêtent.',
    '**28 juin 1919** : traité de Versailles, la paix est imposée à l’Allemagne.'
  ],
  levels: {
    1: [
      ex('Place les repères de ta fiche sur la frise', [
        rows('Choisis l’année de chaque événement.', [
          ['A · Attentat de Sarajevo', '1914'],
          ['S · La Suisse nomme un général', '1914'],
          ['É · Entrée en guerre des États-Unis', '1917'],
          ['R · Demande d’armistice de la Russie', '1917'],
          ['Armistice : les combats s’arrêtent', '1918'],
          ['T · Traité de Versailles', '1919']
        ], YEARS, 'Les repères de ta fiche p. 9 : A (Sarajevo) et S (la Suisse nomme un général) en 1914, É (États-Unis) et R (Russie) en 1917, T (traité de Versailles) en 1919. Entre les deux, l’armistice du 11 novembre 1918 arrête les combats.', {keepChoiceOrder: true})
      ]),
      ex('Questions de cours', [
        qcm('Quand les grandes puissances européennes entrent-elles en guerre ?', 'Début août 1914', ['Fin juin 1914, le jour de l’attentat', 'En janvier 1915', 'En août 1916'],
          'L’attentat de Sarajevo a lieu le 28 juin 1914. Un mois plus tard, l’Autriche-Hongrie déclare la guerre à la Serbie, puis le jeu des alliances fait entrer l’Allemagne, la Russie, la France et le Royaume-Uni dans la guerre au tout début d’août 1914.'),
        qcm('Quel jour les combats s’arrêtent-ils ?', 'Le 11 novembre 1918', ['Le 11 novembre 1917', 'Le 28 juin 1919', 'Le 8 mai 1918'],
          'L’armistice est signé le 11 novembre 1918 à Rethondes, en France. Les armes se taisent à 11 heures. Attention : ce n’est pas encore la paix, qui sera signée à Versailles en 1919.'),
        qcm('Combien de temps la guerre dure-t-elle ?', 'Un peu plus de quatre ans', ['Environ un an', 'Deux ans', 'Dix ans'],
          'D’août 1914 à novembre 1918 : plus de quatre ans de guerre. Au début, beaucoup pensaient qu’elle serait finie « à Noël ».'),
        qcm('En quelle année le traité de Versailles est-il signé ?', '1919', ['1918', '1914', '1920'],
          'Le traité de Versailles est signé le 28 juin 1919, sept mois et demi après l’armistice. C’est le repère T de ta frise.'),
        qcm('En quelle année a lieu la bataille de Verdun, sur ton schéma heuristique ?', '1916', ['1914', '1915', '1918'],
          'La bataille de Verdun dure presque toute l’année 1916. C’est le symbole de la guerre de position.'),
        qcm('Quand la Suisse élit-elle un général pour commander son armée ?', 'En août 1914, au début de la guerre', ['En 1916, pendant la bataille de Verdun', 'En novembre 1918, après l’armistice', 'Jamais : la Suisse n’a pas d’armée'],
          'Le 3 août 1914, l’Assemblée fédérale élit Ulrich Wille général. En Suisse, on n’élit un général qu’en temps de guerre ou de grand danger. C’est le repère S de ta frise.')
      ], {pick: 4}),
      ex('Vrai ou faux ?', [
        vf('Le traité de Versailles est signé le jour de l’armistice.', false,
          'Faux. L’armistice (11 novembre 1918) arrête les combats. Le traité de Versailles (28 juin 1919) fixe les conditions de la paix, plus de sept mois plus tard.'),
        vf('Les États-Unis entrent en guerre dès 1914.', false,
          'Faux. Les États-Unis restent neutres jusqu’en avril 1917 (repère É).'),
        vf('La Russie quitte la guerre avant la fin du conflit.', true,
          'Vrai. Fin 1917, la Russie demande l’armistice (repère R) : elle ne se bat plus en 1918.'),
        vf('La guerre de position (les tranchées) dure la plus grande partie du conflit.', true,
          'Vrai. De la fin de 1914 au printemps 1918, le front ne bouge presque plus : plus de trois ans de guerre de position.'),
        vf('L’attentat de Sarajevo et le traité de Versailles ont lieu le même jour de l’année.', true,
          'Vrai. Les deux ont lieu un 28 juin, à cinq ans d’écart : 1914 et 1919. Ce n’est pas un hasard : les vainqueurs ont choisi cette date.'),
        vf('Les combats se terminent en 1919.', false,
          'Faux. Les combats s’arrêtent le 11 novembre 1918. En 1919, on signe la paix.')
      ], {pick: 4})
    ],
    2: [
      ex('Remets dans l’ordre', [
        order('Range les repères de ta frise du plus ancien au plus récent.', ['Attentat de Sarajevo', 'La Suisse nomme un général', 'Entrée en guerre des États-Unis', 'Demande d’armistice de la Russie', 'Armistice du 11 novembre', 'Traité de Versailles'],
          'Juin 1914 (A), août 1914 (S), avril 1917 (É), décembre 1917 (R), 11 novembre 1918, juin 1919 (T).'),
        order('Range ces étapes de la guerre sur le front de l’ouest.', ['Les grandes puissances entrent en guerre', 'Bataille de la Marne : les Allemands sont arrêtés', 'Les soldats creusent des tranchées', 'Bataille de Verdun', 'Grandes offensives allemandes', 'Armistice'],
          'Août 1914 : guerre de mouvement. Septembre 1914 : la Marne arrête les Allemands, chacun s’enterre. 1916 : Verdun. Printemps 1918 : offensives allemandes. 11 novembre 1918 : armistice.')
      ], {pick: 1}),
      ex('Guerre de mouvement ou guerre de position ? (fiche p. 9, 1c)', [
        classify('Pour chaque période, indique la forme de la guerre sur le front de l’ouest.', ['Guerre de mouvement', 'Guerre de position'], [
          ['Août à novembre 1914', 0],
          ['1915', 1],
          ['1916, à Verdun', 1],
          ['1917', 1],
          ['Printemps et été 1918', 0]
        ], 'En 1914, les armées avancent vite (invasion de la Belgique, bataille de la Marne) : c’est la guerre de mouvement. Après la Marne, chacun creuse des tranchées : de fin 1914 au printemps 1918, c’est la guerre de position. En 1918, les grandes offensives allemandes puis la contre-attaque des Alliés relancent le mouvement.'),
        qcm('Pourquoi la guerre de position dure-t-elle si longtemps ?', 'Les défenses (tranchées, barbelés, mitrailleuses) rendent les attaques très meurtrières et presque impossibles', ['Les soldats refusent de se battre', 'Il n’y a plus de munitions', 'Les généraux attendent la signature de la paix'],
          'Une mitrailleuse derrière des barbelés peut arrêter des centaines d’attaquants. Chaque offensive coûte des milliers de morts pour gagner quelques kilomètres : le front reste bloqué pendant plus de trois ans.')
      ], {keep: true}),
      ex('Associe chaque date à son repère', [
        rows('Choisis l’événement qui correspond à chaque date.', [
          ['28 juin 1914', 'Attentat de Sarajevo'],
          ['3 août 1914', 'La Suisse élit le général Wille'],
          ['Avril 1917', 'Les États-Unis entrent en guerre'],
          ['Décembre 1917', 'La Russie demande l’armistice'],
          ['11 novembre 1918', 'Armistice'],
          ['28 juin 1919', 'Traité de Versailles']
        ], null, 'Astuce : l’attentat et le traité de Versailles tombent tous les deux un 28 juin, à cinq ans d’écart. Les deux repères de 1917 (É et R) encadrent les révolutions russes.', {pickRows: 5})
      ]),
      ex('Pourquoi ces repères ? (fiche p. 9, 1b)', [
        qcm('Pourquoi l’attentat de Sarajevo est-il un repère ?', 'C’est l’élément déclencheur de la guerre', ['C’est la plus grande bataille de la guerre', 'C’est le jour où la Suisse devient neutre', 'C’est la fin de la guerre'],
          'L’assassinat de l’héritier de l’Autriche-Hongrie, le 28 juin 1914, déclenche la crise qui mène à la guerre un mois plus tard.'),
        qcm('Pourquoi « la Suisse nomme un général » est-il un repère ?', 'La Suisse mobilise son armée pour défendre sa neutralité', ['La Suisse entre en guerre aux côtés de la France', 'La Suisse rejoint la Triple Alliance', 'Le général doit diriger la Croix-Rouge'],
          'La Suisse reste neutre, mais elle mobilise environ 220 000 soldats pour garder ses frontières. Le général Wille les commande pendant toute la guerre.'),
        qcm('Pourquoi la demande d’armistice de la Russie est-elle un repère ?', 'Un grand pays allié quitte la guerre : l’Allemagne peut envoyer ses troupes à l’ouest', ['La Russie rejoint les Empires centraux', 'C’est la fin de la guerre en Europe', 'La Russie devient neutre comme la Suisse'],
          'Fin 1917, la Russie des bolcheviks arrête de se battre. L’Allemagne n’a plus qu’un seul front et lance de grandes offensives à l’ouest au printemps 1918.'),
        qcm('Pourquoi l’entrée en guerre des États-Unis est-elle un repère ?', 'Elle apporte aux Alliés des soldats frais, des armes et de l’argent : la guerre bascule', ['Les États-Unis rejoignent l’Allemagne', 'Elle provoque la révolution russe', 'Elle met fin immédiatement à la guerre'],
          'Les États-Unis sont la première puissance économique du monde. Leurs soldats arrivent en masse en 1918 et compensent la sortie de la Russie.'),
        qcm('Pourquoi le traité de Versailles est-il un repère ?', 'Il fixe les conditions de la paix imposées à l’Allemagne', ['Il déclenche la guerre', 'Il crée l’armée suisse', 'Il arrête les combats le 11 novembre'],
          'Le traité de Versailles (28 juin 1919) enlève des territoires à l’Allemagne, limite son armée et l’oblige à payer des réparations.')
      ], {pick: 3})
    ],
    3: [
      ex('Quel repère de la frise ?', [
        rows('Pour chaque description, retrouve le repère de ta fiche p. 9.', [
          ['L’étincelle qui fait exploser l’Europe', 'A · Attentat de Sarajevo'],
          ['Un pays neutre se prépare à défendre ses frontières', 'S · La Suisse nomme un général'],
          ['Des renforts arrivent d’un autre continent', 'É · Entrée en guerre des États-Unis'],
          ['Une grande puissance alliée abandonne le combat', 'R · Demande d’armistice de la Russie'],
          ['Les vainqueurs imposent leurs conditions au vaincu', 'T · Traité de Versailles']
        ], null, 'C’est exactement la question 1b de ta fiche : chaque repère a été choisi parce qu’il marque un moment clé (début, neutralité suisse, tournant de 1917, paix).')
      ]),
      ex('Émets une hypothèse (fiche p. 9, 1d)', [
        multi('Coche tout ce qui explique pourquoi la guerre de position dure plus de trois ans.', ['Les tranchées protègent les défenseurs', 'Les barbelés ralentissent les attaquants', 'Les mitrailleuses tirent des centaines de balles par minute', 'L’artillerie écrase toute attaque à découvert'], ['Les soldats refusent tous d’attaquer', 'Il neige toute l’année sur le front', 'Les armées n’ont plus de soldats dès 1915'],
          'En 1914-1918, la défense est plus forte que l’attaque : un attaquant qui sort de sa tranchée doit traverser le « no man’s land » sous les balles et les obus, puis franchir les barbelés. Les offensives coûtent des dizaines de milliers de morts pour quelques kilomètres.')
      ]),
      ex('Réfléchir avec les dates', [
        qcm('Combien de temps sépare l’attentat de Sarajevo du traité de Versailles ?', 'Exactement cinq ans', ['Quatre ans et demi', 'Un an', 'Dix ans'],
          '28 juin 1914 et 28 juin 1919 : cinq ans jour pour jour. Les vainqueurs ont choisi cette date comme un symbole.'),
        qcm('Ton schéma heuristique indique « Janvier 1918 : les vainqueurs se réunissent à Paris ». Quelle est la bonne date ?', 'Janvier 1919', ['Janvier 1918, c’est juste', 'Janvier 1917', 'Janvier 1920'],
          'En janvier 1918, la guerre n’est pas finie : il n’y a pas encore de vainqueurs ! La conférence de la paix s’ouvre à Paris en janvier 1919, après l’armistice du 11 novembre 1918.'),
        qcm('En 1918, la guerre redevient une guerre de mouvement. Pourquoi ?', 'L’Allemagne, libérée du front russe, attaque en masse, puis les Alliés renforcés par les Américains contre-attaquent', ['Les tranchées ont été détruites par la pluie', 'La Suisse a ouvert ses frontières', 'Les soldats ont reçu des chevaux'],
          'Les repères R et É expliquent 1918 : grâce à la sortie de la Russie, l’Allemagne lance de grandes offensives au printemps. Elles échouent ; les Alliés, avec l’aide des soldats américains, repoussent alors les Allemands jusqu’à l’armistice.'),
        qcm('Quand les États-Unis entrent en guerre (avril 1917), où en est la Russie ?', 'Le tsar vient d’abdiquer, mais la Russie continue la guerre', ['Lénine est déjà au pouvoir', 'La Russie a déjà signé la paix', 'La Russie n’est pas encore entrée en guerre'],
          'Le tsar abdique en février 1917 (calendrier russe). Le gouvernement provisoire continue la guerre. Les bolcheviks ne prennent le pouvoir qu’en octobre, et la Russie demande l’armistice en décembre.')
      ], {pick: 3}),
      ex('Vrai ou faux ? (pièges)', [
        vf('La guerre de position commence après la bataille de la Marne.', true,
          'Vrai. En septembre 1914, la bataille de la Marne arrête les Allemands. Les deux camps creusent alors des tranchées de la mer du Nord à la frontière suisse.'),
        vf('La Suisse élit son général avant l’attentat de Sarajevo.', false,
          'Faux. L’attentat a lieu le 28 juin 1914 ; le général Wille est élu le 3 août 1914, quand la guerre éclate.'),
        vf('La Suisse nomme un général parce qu’elle entre en guerre.', false,
          'Faux. La Suisse reste neutre pendant toute la guerre. Son armée garde les frontières et ne combat pas.'),
        vf('Entre l’armistice et le traité de Versailles, il se passe plus de sept mois.', true,
          'Vrai. Du 11 novembre 1918 au 28 juin 1919 : sept mois et demi de négociations.')
      ], {pick: 3})
    ]
  },
  master: [
    order('Range dans l’ordre chronologique.', ['Attentat de Sarajevo', 'La Suisse nomme un général', 'Bataille de Verdun', 'Entrée en guerre des États-Unis', 'Demande d’armistice de la Russie', 'Traité de Versailles'],
      'Juin 1914 (A), août 1914 (S), 1916 (Verdun), avril 1917 (É), décembre 1917 (R), juin 1919 (T).'),
    rows('Choisis l’année de chaque repère.', [
      ['Attentat de Sarajevo', '1914'], ['Entrée en guerre des États-Unis', '1917'], ['Demande d’armistice de la Russie', '1917'], ['Armistice', '1918'], ['Traité de Versailles', '1919']
    ], YEARS, 'A : 1914. É et R : 1917. Armistice : 11 novembre 1918. T : 1919.', {keepChoiceOrder: true}),
    classify('Guerre de mouvement ou de position ?', ['Guerre de mouvement', 'Guerre de position'], [
      ['Bataille de la Marne (septembre 1914)', 0], ['Bataille de Verdun (1916)', 1], ['Offensives allemandes du printemps 1918', 0], ['Hiver 1917 dans les tranchées', 1]
    ], 'Mouvement en 1914 et en 1918 ; position entre les deux.')
  ],
  cours: [
    {h: 'Une guerre en trois temps'},
    {p: 'Sur le front de l’ouest (France, Belgique), la guerre change de forme. Ta fiche p. 9 colorie ces phases sur la frise.'},
    {table: {head: ['Période', 'Forme de la guerre', 'Ce qui se passe'], rows: [
      ['Août à novembre 1914', '**Guerre de mouvement**', 'L’Allemagne envahit la Belgique et le nord de la France. La bataille de la Marne (septembre) l’arrête près de Paris.'],
      ['Fin 1914 à début 1918', '**Guerre de position**', 'Le front est bloqué de la mer du Nord à la Suisse. Les soldats vivent dans les tranchées. Verdun (1916).'],
      ['Printemps à novembre 1918', '**Guerre de mouvement**', 'Grandes offensives allemandes, puis contre-attaque des Alliés jusqu’à l’armistice.']
    ]}},
    {h: 'La frise à connaître'},
    {frise: [
      {y: '1914', items: ['**28 juin** : attentat de Sarajevo (A)', '**Début août** : les grandes puissances entrent en guerre', '**3 août** : la Suisse nomme un général, Ulrich Wille (S)', '**Septembre** : bataille de la Marne, fin de la guerre de mouvement']},
      {y: '1915', items: ['Génocide des Arméniens (schéma heuristique)']},
      {y: '1916', items: ['Bataille de Verdun']},
      {y: '1917', items: ['**Février** : 1re révolution russe, le tsar abdique', '**Avril** : entrée en guerre des États-Unis (É)', '**Octobre** : les bolcheviks prennent le pouvoir', '**Décembre** : la Russie demande l’armistice (R)']},
      {y: '1918', items: ['**Printemps** : grandes offensives allemandes', '**11 novembre** : armistice']},
      {y: '1919', items: ['**Janvier** : les vainqueurs se réunissent à Paris (conférence de la paix)', '**28 juin** : traité de Versailles (T)']}
    ]},
    {h: 'Pourquoi ces repères ?'},
    {list: [
      '**A, l’attentat de Sarajevo** : l’élément déclencheur de la guerre.',
      '**S, la Suisse nomme un général** : la Suisse reste neutre mais mobilise son armée pour défendre ses frontières.',
      '**É, les États-Unis entrent en guerre** : des renforts énormes pour les Alliés, qui font basculer la guerre.',
      '**R, la Russie demande l’armistice** : une grande puissance alliée quitte la guerre ; l’Allemagne peut concentrer ses forces à l’ouest.',
      '**T, le traité de Versailles** : il fixe les conditions de la paix imposées à l’Allemagne.'
    ]},
    {warn: [
      '**Armistice ≠ paix.** L’armistice du 11 novembre 1918 arrête les combats ; la paix est signée à Versailles le 28 juin 1919.',
      'Ton schéma heuristique indique « janvier 1918 » pour la réunion des vainqueurs à Paris : c’est **janvier 1919**. En janvier 1918, la guerre n’est pas finie.',
      'Pas besoin d’apprendre d’autres dates : les **repères de la frise** (A, S, É, R, T), les **trois phases** de la guerre et les dates du schéma heuristique suffisent.'
    ]},
    {tip: 'Pour retenir : **28 juin 1914 → 28 juin 1919**, cinq ans jour pour jour entre l’attentat et le traité. Et **1917** est l’année du tournant : les États-Unis arrivent (É), la Russie s’en va (R).'},
    {quiz: qcm('À toi : quel événement est le plus récent ?', 'La demande d’armistice de la Russie', ['L’entrée en guerre des États-Unis', 'L’abdication du tsar', 'La bataille de Verdun'],
      'Verdun (1916), abdication du tsar (mars 1917), États-Unis (avril 1917), demande d’armistice de la Russie (décembre 1917).')}
  ],
  sources: ['fiche', 'wikiChrono', 'wikiMarne', 'wikiVerdun', 'wikiTrenches', 'wikiUSA', 'hlsPGM']
};
