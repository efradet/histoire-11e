// Objectif 8 : causes de la révolution russe et sortie de la guerre (manuel p. 38, fiche p. 13, 11)
import {qcm, vf, multi, order, rows, classify, ex} from './helpers.js';

export default {
  id: 8,
  title: 'La révolution russe',
  subtitle: 'Pourquoi la Russie se révolte et quitte la guerre',
  ref: 'Manuel p. 38, fiche p. 13',
  rappel: [
    '**Causes** : défaites et pertes énormes, faim et pénuries, hausse des prix, grèves et mutineries, un tsar autoritaire et impopulaire.',
    '**Février 1917** : révolution à Petrograd, le tsar **Nicolas II abdique**. Un **gouvernement provisoire** continue la guerre.',
    '**Avril 1917** : **Lénine** rentre de Suisse, en traversant l’Allemagne.',
    '**Octobre 1917** : les **bolcheviks** de Lénine prennent le pouvoir et installent un **régime communiste**.',
    'Ils signent un **armistice** (décembre 1917) puis le **traité de Brest-Litovsk** (mars 1918) : la Russie quitte la guerre et perd d’immenses territoires.',
    '« Février » et « octobre » : dates de l’ancien calendrier russe, en retard de 13 jours (mars et novembre pour nous).'
  ],
  levels: {
    1: [
      ex('Questions de cours', [
        qcm('Qui gouverne la Russie en 1914 ?', 'Le tsar Nicolas II', ['Lénine', 'Le roi Nicolas II d’Angleterre', 'Un président élu'],
          'Le tsar est un monarque absolu : il gouverne presque seul, sans vrai parlement.'),
        qcm('Que se passe-t-il en février 1917 ?', 'Une révolution oblige le tsar à abdiquer', ['Les bolcheviks prennent le pouvoir', 'La Russie gagne la guerre', 'Lénine devient tsar'],
          'Manifestations pour le pain, grèves, soldats qui refusent de tirer sur la foule : le tsar Nicolas II abdique. C’est la première révolution.'),
        qcm('Qui dirige les bolcheviks ?', 'Lénine', ['Nicolas II', 'Raspoutine', 'Wilson'],
          'Lénine dirige le parti bolchevik, un parti révolutionnaire communiste.'),
        qcm('Où vivait Lénine avant de rentrer en Russie en avril 1917 ?', 'En Suisse, à Zurich', ['À Paris', 'À Londres', 'En Sibérie'],
          'Exilé, Lénine vit en Suisse de 1914 à 1917. Il quitte Zurich le 9 avril 1917 et traverse l’Allemagne en train.'),
        qcm('Que se passe-t-il en octobre 1917 ?', 'Les bolcheviks prennent le pouvoir', ['Le tsar revient au pouvoir', 'Les États-Unis envahissent la Russie', 'La Russie rejoint les Empires centraux'],
          'Les gardes rouges prennent le palais d’Hiver à Petrograd. C’est la deuxième révolution.'),
        qcm('Quel régime les bolcheviks installent-ils ?', 'Un régime communiste', ['Une monarchie', 'Une démocratie comme la Suisse', 'Un empire allié à l’Allemagne'],
          'Le parti communiste gouverne seul. La Russie deviendra en 1922 l’URSS (Union soviétique).'),
        qcm('Que promettent les bolcheviks au peuple ?', '« La paix, le pain, la terre »', ['« Liberté, égalité, fraternité »', '« On les aura ! »', '« Un pour tous, tous pour un »'],
          'La paix pour les soldats, le pain pour les villes affamées, la terre pour les paysans : c’est ce qui leur donne des soutiens.')
      ], {pick: 5}),
      ex('Février ou octobre ?', [
        classify('Ces faits appartiennent-ils à la révolution de février ou d’octobre 1917 ?', ['Février 1917', 'Octobre 1917'], [
          ['Le tsar abdique', 0],
          ['Un gouvernement provisoire continue la guerre', 0],
          ['Des femmes manifestent pour du pain à Petrograd', 0],
          ['Lénine et les bolcheviks prennent le pouvoir', 1],
          ['Le décret sur la paix', 1],
          ['La prise du palais d’Hiver', 1]
        ], 'Ton schéma heuristique : 1re révolution (février 1917) = abdication du tsar Nicolas II ; 2e révolution (octobre 1917) = Lénine, bolcheviks, régime communiste.')
      ]),
      ex('Vrai ou faux ?', [
        vf('La Russie se bat jusqu’à l’armistice du 11 novembre 1918.', false,
          'Faux. Elle quitte la guerre bien avant : armistice en décembre 1917, traité de Brest-Litovsk en mars 1918.'),
        vf('Lénine a vécu en Suisse pendant la guerre.', true,
          'Vrai. À Berne puis à Zurich, de 1914 à 1917.'),
        vf('Après la révolution de février, le gouvernement provisoire arrête la guerre.', false,
          'Faux. Il continue la guerre aux côtés des Alliés, ce qui le rend très impopulaire. C’est une des raisons du succès des bolcheviks.')
      ], {pick: 2})
    ],
    2: [
      ex('Les causes de la révolution', [
        multi('Coche les causes de la révolution de février 1917.', ['Les défaites et les pertes énormes de l’armée', 'La faim et le manque de pain dans les villes', 'La hausse des prix', 'Un tsar autoritaire qui refuse de partager le pouvoir', 'Les grèves et les mutineries de soldats'], ['La victoire russe à Verdun', 'L’entrée en guerre des États-Unis', 'Le traité de Versailles'],
          'Environ 1,7 million de soldats russes sont tués. À Petrograd, le pain manque, les prix montent. Le tsar, parti au front, est discrédité (l’impératrice, d’origine allemande, et Raspoutine sont détestés). Les États-Unis entrent en guerre après la révolution de février ; Versailles, c’est 1919.')
      ]),
      ex('L’enchaînement', [
        order('Range dans l’ordre.', ['Défaites et pénuries', 'Manifestations et grèves à Petrograd', 'Abdication du tsar', 'Retour de Lénine', 'Prise du pouvoir par les bolcheviks', 'Armistice avec l’Allemagne'],
          'Les défaites et la faim provoquent les manifestations (février 1917) et l’abdication du tsar. Lénine revient en avril, prend le pouvoir en octobre et signe l’armistice en décembre 1917.')
      ]),
      ex('Pourquoi quitter la guerre ? (fiche p. 13, 11a)', [
        qcm('Pourquoi les bolcheviks veulent-ils sortir de la guerre ?', 'Le peuple et les soldats veulent la paix, Lénine l’a promise, et il doit garder ses forces pour rester au pouvoir', ['Ils veulent rejoindre l’Allemagne', 'La Suisse le leur demande', 'Ils ont gagné la guerre'],
          'L’armée russe est épuisée, les soldats désertent. Lénine a promis la paix ; et une guerre civile contre les opposants (les « Blancs ») commence.'),
        qcm('Pourquoi l’Allemagne laisse-t-elle Lénine traverser son territoire en 1917 ?', 'Elle espère qu’il fera sortir la Russie de la guerre', ['Elle veut l’arrêter à Berlin', 'Lénine est allemand', 'C’est la Croix-Rouge qui l’organise'],
          'Pour l’Allemagne, un révolutionnaire qui veut la paix immédiate est une arme contre la Russie. Le voyage est négocié avec l’aide de socialistes suisses (Robert Grimm, Fritz Platten).'),
        qcm('Qu’est-ce qu’un soviet ?', 'Un conseil d’ouvriers, de soldats et de paysans', ['Un soldat russe', 'Un journal de propagande', 'Le palais du tsar'],
          'Les soviets naissent pendant la révolution de février. Le slogan de Lénine : « Tout le pouvoir aux soviets ! »'),
        qcm('Pourquoi parle-t-on de révolution « d’octobre » alors qu’elle a lieu en novembre pour nous ?', 'La Russie utilisait encore un ancien calendrier, en retard de 13 jours', ['Elle a duré d’octobre à novembre', 'C’est une erreur des journaux', 'Elle a commencé en Suisse en octobre'],
          'Le calendrier julien était en retard de 13 jours. Les bolcheviks adoptent notre calendrier en 1918.')
      ], {pick: 3}),
      ex('Cause et conséquence', [
        rows('Associe chaque cause à sa conséquence.', [
          ['Les soldats manquent d’armes et meurent en masse', 'Mutineries et désertions'],
          ['Le pain manque à Petrograd', 'Manifestations et grèves'],
          ['Le gouvernement provisoire continue la guerre', 'Il devient impopulaire'],
          ['Lénine promet la paix et la terre', 'Les bolcheviks gagnent des soutiens']
        ], null, 'Chaque problème nourrit la révolte : l’armée, les villes et les campagnes se détournent du pouvoir.')
      ]),
      ex('Vrai ou faux ?', [
        vf('Les soviets sont des conseils d’ouvriers, de soldats et de paysans.', true,
          'Vrai. Ils se forment partout en 1917. Lénine réclame « tout le pouvoir aux soviets ».'),
        vf('Le tsar Nicolas II reste au pouvoir jusqu’en octobre 1917.', false,
          'Faux. Il abdique dès la révolution de février (mars 1917 pour nous).'),
        vf('Lénine traverse la France pour rentrer en Russie.', false,
          'Faux. Il traverse l’Allemagne, puis la Suède et la Finlande. Les Alliés refusaient le passage à ceux qui voulaient une paix immédiate.'),
        vf('Les bolcheviks promettent la paix.', true,
          'Vrai : « la paix, le pain, la terre ». C’est ce qui attire les soldats épuisés.')
      ], {pick: 3})
    ],
    3: [
      ex('Comprendre la révolution (fiche p. 13, 11b)', [
        qcm('L’URSS commémore la révolution d’octobre, mais pas celle de février. Pourquoi ?', 'Octobre est la prise du pouvoir par les communistes : la naissance de leur régime. Février avait donné le pouvoir à d’autres', ['Parce qu’il faisait trop froid en février', 'Parce que février n’a pas existé', 'Parce que Lénine était au pouvoir en février'],
          'La révolution de février est spontanée et met en place un gouvernement provisoire, non communiste. Les communistes célèbrent leur propre révolution, celle d’octobre.'),
        qcm('Quelle conséquence la sortie de la Russie a-t-elle sur la guerre ?', 'L’Allemagne envoie ses troupes à l’ouest et lance de grandes offensives au printemps 1918', ['La guerre s’arrête immédiatement', 'La France quitte aussi la guerre', 'La Suisse entre en guerre'],
          'Les offensives allemandes de 1918 échouent pourtant, car les Américains arrivent en masse.'),
        qcm('Que perd la Russie au traité de Brest-Litovsk ?', 'D’immenses territoires à l’ouest : Pologne, pays baltes, Finlande, Ukraine', ['L’Alsace-Lorraine', 'La Sibérie', 'Rien'],
          'Une paix très dure, signée en mars 1918. Elle est annulée après la défaite de l’Allemagne en novembre 1918.'),
        qcm('Pourquoi la révolution russe fait-elle peur en Suisse en 1918 ?', 'Les autorités craignent que la grève générale devienne une révolution communiste', ['Les Russes menacent d’envahir la Suisse', 'Lénine veut devenir conseiller fédéral', 'La Russie arrête d’acheter du chocolat'],
          'C’est le lien entre la révolution et la présence de soldats à Granges (fiche p. 15, 15c) : par peur du « bolchevisme », l’armée occupe les villes.'),
        qcm('Que devient la famille du tsar ?', 'Elle est exécutée par les bolcheviks en 1918', ['Elle s’exile en Suisse', 'Elle reprend le pouvoir en 1920', 'Elle part vivre en Amérique'],
          'Nicolas II, sa femme et leurs enfants sont tués en juillet 1918, pendant la guerre civile.')
      ], {pick: 4}),
      ex('Vrai ou faux ? (pièges)', [
        vf('La révolution de février est organisée par Lénine.', false,
          'Faux. Elle est spontanée : quand elle éclate, Lénine est encore en exil à Zurich.'),
        vf('Le gouvernement provisoire continue la guerre aux côtés des Alliés.', true,
          'Vrai. C’est l’une des causes de son échec.'),
        vf('Les États-Unis entrent en guerre après l’abdication du tsar.', true,
          'Vrai. Le tsar abdique en mars 1917 ; les États-Unis déclarent la guerre en avril 1917.'),
        vf('Le traité de Brest-Litovsk est signé entre la Russie et la France.', false,
          'Faux. Il est signé entre la Russie des bolcheviks et les Empires centraux (Allemagne en tête).')
      ], {pick: 3})
    ]
  },
  master: [
    multi('Coche les causes de la révolution russe de 1917.', ['Défaites et pertes énormes', 'Faim dans les villes', 'Tsar autoritaire et impopulaire'], ['Victoire à Verdun', 'Traité de Versailles'],
      'Guerre, faim, régime autoritaire : les trois grandes causes.'),
    qcm('Pourquoi la Russie quitte-t-elle la guerre ?', 'Les bolcheviks ont promis la paix à un peuple et à une armée épuisés', ['Elle a gagné toutes ses batailles', 'La Suisse l’a convaincue', 'Les États-Unis le lui ont ordonné'],
      'Armistice en décembre 1917, traité de Brest-Litovsk en mars 1918.'),
    qcm('L’URSS commémore octobre mais pas février 1917 : pourquoi ?', 'Octobre est la prise du pouvoir par les communistes', ['Février est une révolution allemande', 'Il n’y a pas eu de révolution en février', 'Octobre est le mois de la fin de la guerre'],
      'Février a mis en place un gouvernement provisoire non communiste.')
  ],
  cours: [
    {h: 'Pourquoi la Russie se révolte'},
    {p: 'En 1914, la Russie est un immense empire gouverné par un **tsar**, Nicolas II, qui décide presque seul. La guerre tourne vite au désastre :'},
    {list: [
      '**défaites** et pertes énormes (environ 1,7 million de soldats tués) ; les soldats manquent d’armes ;',
      '**faim** et **pénuries** dans les villes, **hausse des prix** ;',
      '**grèves** d’ouvriers et **mutineries** de soldats ;',
      'un pouvoir **discrédité** : le tsar refuse de partager le pouvoir ; l’impératrice, d’origine allemande, et son conseiller Raspoutine sont détestés.'
    ]},
    {h: 'Deux révolutions en 1917'},
    {table: {head: ['', 'Février 1917 (mars pour nous)', 'Octobre 1917 (novembre pour nous)'], rows: [
      ['Ce qui se passe', 'Manifestations pour le pain à Petrograd, grèves, les soldats rejoignent la foule', 'Les gardes rouges de Lénine prennent le palais d’Hiver'],
      ['Résultat', 'Le tsar **abdique** ; un **gouvernement provisoire** (puis Kerenski) **continue la guerre**', 'Les **bolcheviks** prennent le pouvoir : **régime communiste**'],
      ['Qui ?', 'Révolution spontanée, sans chef', '**Lénine**, revenu de Suisse en avril, et Trotski']
    ]}},
    {p: 'Entre les deux, Lénine rentre de **Zurich** : l’Allemagne le laisse traverser son territoire, en espérant qu’il fera sortir la Russie de la guerre. Son programme : « **la paix, le pain, la terre** » et « **tout le pouvoir aux soviets** » (conseils d’ouvriers, de soldats et de paysans).'},
    {h: 'La Russie quitte la guerre'},
    {list: [
      'Dès leur arrivée, les bolcheviks publient un **décret sur la paix**.',
      '**Décembre 1917** : armistice avec l’Allemagne (« la Russie demande l’armistice », repère R de ta frise).',
      '**Mars 1918** : **traité de Brest-Litovsk**, très dur : la Russie perd la Pologne, les pays baltes, la Finlande, l’Ukraine.',
      'Conséquence : l’Allemagne envoie ses troupes à l’ouest et attaque au printemps 1918. En Russie, une **guerre civile** commence ; la famille du tsar est exécutée en 1918.'
    ]},
    {keys: [
      'Causes : **guerre**, **faim**, **régime autoritaire**.',
      'Février = fin du tsar ; octobre = **Lénine** et le **communisme**.',
      'La Russie quitte la guerre : **armistice** (décembre 1917), **Brest-Litovsk** (mars 1918).'
    ]},
    {warn: [
      'Ce n’est **pas** Lénine qui fait la révolution de février : il est alors en Suisse.',
      'Le gouvernement provisoire **continue** la guerre ; ce sont les bolcheviks qui l’arrêtent.'
    ]},
    {tip: 'Lien avec la Suisse : Lénine a vécu à Zurich, et la peur d’une révolution « bolchevique » explique en partie la réaction très dure contre la grève générale de 1918 (objectif 7).'},
    {quiz: qcm('À toi : pourquoi l’URSS commémore-t-elle octobre et non février ?', 'Octobre est la prise du pouvoir par les communistes', ['Février est trop froid pour une fête', 'Le tsar a gagné en février', 'Octobre est la fin de la guerre mondiale'],
      'C’est la question 11b de ta fiche p. 13.')}
  ],
  sources: ['fiche', 'wikiRevolution', 'mnsLenine', 'hlsPGM', 'wikiChrono']
};
