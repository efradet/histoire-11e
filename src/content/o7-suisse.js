// Objectif 7 : la position de la Suisse durant le conflit (manuel p. 36-37, fiche p. 13-15)
import {qcm, vf, rows, classify, ex} from './helpers.js';

const LARDY = {
  title: 'Doc. d · Lettre de Charles Lardy, représentant de la Suisse à Paris, au conseiller fédéral Arthur Hoffmann, 7 août 1914 (adaptée)',
  text: '« La déclaration de neutralité m’est parvenue par télégramme le 5 août et je suis un peu surpris qu’on ne lui ait donné en France aucune publicité. J’aurais été heureux qu’on connût ici, en France, les termes de votre déclaration d’indépendance, car, surtout depuis l’élection du général Wille, une légion de Français sont convaincus qu’il ne résistera pas à des ordres venant d’Allemagne. »'
};
const CARLIN = {
  title: 'Doc. c · Lettre de Gaston Carlin, ministre suisse à Londres (résumé d’après ta fiche p. 13)',
  text: 'Carlin rapporte ce qu’il a dit au ministre britannique des Affaires étrangères. Le Conseil fédéral et le peuple suisse veulent **maintenir une stricte neutralité, politique et économique**. La Suisse **souffre** de ne pas recevoir assez de **matières premières** pour ses industries. Il conteste l’accusation selon laquelle une partie des importations suisses (**laine, cuivre, pétrole, coton**) partirait vers l’**Allemagne et l’Autriche**. Bloquer ces importations priverait de leur pain des milliers d’ouvriers suisses.'
};

export default {
  id: 7,
  title: 'La Suisse dans la guerre',
  subtitle: 'Neutralité, divisions, crise et grève générale',
  ref: 'Manuel p. 36-37, fiche p. 13-15',
  rappel: [
    '**Neutralité** déclarée le 4 août 1914. Environ **220 000 soldats** mobilisés. Le 3 août, l’Assemblée fédérale élit **Ulrich Wille** général.',
    'Wille admire l’Allemagne (sa femme est une von Bismarck) : les Romands et les Français se méfient de lui.',
    '**Fossé** entre Romands (pour la France) et Alémaniques (pour l’Allemagne) : **affaire des colonels** (1916), **affaire Grimm-Hoffmann** (1917).',
    '**Crise** : prix multipliés par plus de deux, salaires en baisse, soldats sans compensation de salaire, rationnement (1917), un Suisse sur six aidé en 1918 ; des **profiteurs de guerre** s’enrichissent.',
    '**Humanitaire** : CICR (Genève) et ses fiches de prisonniers, internement de 68 000 prisonniers malades ou blessés, prix Nobel de la paix 1917.',
    '**Grève générale** du 12 au 14 novembre 1918 (Comité d’Olten) ; l’armée tue trois grévistes à Granges. **Grippe espagnole** : 24 449 morts.'
  ],
  levels: {
    1: [
      ex('Questions de cours', [
        qcm('Quelle est la position officielle de la Suisse pendant la guerre ?', 'Neutre', ['Alliée de la France', 'Alliée de l’Allemagne', 'Elle change de camp en 1917'],
          'Le Conseil fédéral déclare la neutralité le 4 août 1914. Les pays en guerre la reconnaissent dans les jours qui suivent.'),
        qcm('Qui est élu général de l’armée suisse en août 1914 ?', 'Ulrich Wille', ['Henri Guisan', 'Guillaume-Henri Dufour', 'Gustave Ador'],
          'Ulrich Wille est élu le 3 août 1914 par l’Assemblée fédérale (122 voix contre 63 pour Theophil Sprecher von Bernegg). Henri Guisan sera le général de la Seconde Guerre mondiale ; Dufour, celui de 1847.'),
        qcm('Que fait l’armée suisse pendant la guerre ?', 'Elle garde les frontières, sans combattre', ['Elle combat en France', 'Elle envahit l’Italie', 'Elle est dissoute'],
          'Les soldats montent la garde aux frontières, surtout dans le Jura, tout près du front. On compte environ 1 000 violations de frontière, dont 800 par des avions.'),
        qcm('Combien de soldats suisses entrent en service en août 1914 ?', 'Environ 220 000', ['Environ 2 000', 'Environ 22 000', 'Environ 2 millions'],
          'Environ 220 000 hommes entrent en service entre le 3 et le 7 août 1914. Ensuite, on les fait tourner : chaque soldat sert en moyenne 500 à 600 jours pendant la guerre.'),
        qcm('Quelle organisation de Genève aide les prisonniers de guerre ?', 'Le Comité international de la Croix-Rouge (CICR)', ['La Société des Nations', 'L’armée suisse', 'Le Comité d’Olten'],
          'Le CICR ouvre en août 1914 l’Agence internationale des prisonniers de guerre : à la fin de la guerre, elle a rempli plus de six millions de fiches pour retrouver les prisonniers et informer leurs familles.'),
        qcm('Pourquoi les Suisses manquent-ils de nourriture et de matières premières ?', 'La Suisse importe beaucoup, et les pays en guerre contrôlent son commerce', ['Les paysans suisses font grève', 'La Suisse refuse d’acheter à l’étranger', 'Les Alpes bloquent les trains'],
          'La Suisse dépend des importations (blé, charbon, matières premières). Les Alliés et l’Allemagne surveillent ce qu’elle importe pour que rien n’aille à l’ennemi.'),
        qcm('Quelle maladie tue des milliers de Suisses en 1918 ?', 'La grippe espagnole', ['La peste', 'Le choléra', 'La varicelle'],
          'La grippe espagnole fait 24 449 morts en Suisse entre juillet 1918 et juin 1919, surtout des jeunes adultes, dont beaucoup de soldats mobilisés.')
      ], {pick: 5}),
      ex('Vrai ou faux ?', [
        vf('Aucun soldat suisse ne meurt pendant la guerre.', false,
          'Faux. Environ 3 000 soldats suisses meurent pendant leur service, d’accidents ou de maladie (dont environ 1 800 de la grippe de 1918). Aucun ne meurt au combat.'),
        vf('La Suisse ne fait pas de commerce avec les pays en guerre.', false,
          'Faux. Elle commerce avec les deux camps. Elle vend même des pièces pour les munitions : en 1917, c’est environ 13 % de ses exportations.'),
        vf('Les Romands et les Alémaniques ne soutiennent pas le même camp.', true,
          'Vrai. Les Romands penchent pour la France, les Alémaniques souvent pour l’Allemagne : c’est le « fossé ».'),
        vf('Les soldats mobilisés touchent leur salaire habituel pendant leur service.', false,
          'Faux. Ils ne reçoivent qu’une petite solde, sans compensation pour la perte de leur salaire. Beaucoup de familles s’appauvrissent.'),
        vf('La Suisse accueille des soldats blessés ou malades des deux camps.', true,
          'Vrai. À partir de 1916, environ 68 000 prisonniers de guerre malades ou blessés sont internés dans des hôtels et des sanatoriums de montagne (Château-d’Oex, Davos, Leysin…).')
      ], {pick: 4}),
      ex('Les conséquences de la neutralité (fiche p. 13, 12a)', [
        classify('Pour qui ces conséquences comptent-elles surtout ?', ['Le gouvernement', 'Les militaires', 'La population'], [
          ['Doit rester neutre sans fâcher aucun des deux camps', 0],
          ['Craint que le pays se divise entre Romands et Alémaniques', 0],
          ['Gardent la frontière pendant des centaines de jours', 1],
          ['Ne combattent pas mais perdent leur salaire civil', 1],
          ['Est épargnée par les combats', 2],
          ['Souffre de la hausse des prix et des pénuries', 2]
        ], 'La neutralité protège le pays des combats, mais elle est difficile à tenir, elle divise, et elle coûte cher aux soldats et à la population.')
      ])
    ],
    2: [
      ex('Analyse le doc. d (fiche p. 14)', [
        qcm('Qui écrit cette lettre ?', 'Charles Lardy, représentant de la Suisse à Paris', ['Le général Wille', 'Un soldat français', 'Le président de la France'],
          'Lardy est le diplomate (ministre) de la Suisse en France. Il écrit au conseiller fédéral Arthur Hoffmann, chef de la politique étrangère.'),
        qcm('Que pensent beaucoup de Français du général Wille ?', 'Qu’il obéirait à l’Allemagne au lieu de défendre la neutralité', ['Qu’il est le meilleur ami de la France', 'Qu’il va attaquer l’Allemagne', 'Qu’il est trop jeune'],
          '« Une légion de Français sont convaincus qu’il ne résistera pas à des ordres venant d’Allemagne. »'),
        qcm('Pourquoi ce sentiment ? (manuel p. 36)', 'Wille admire l’armée allemande et a épousé une femme de la famille von Bismarck', ['Wille est né en France', 'Wille a refusé d’être général', 'Wille parle seulement français'],
          'Né à Hambourg, Ulrich Wille a fait de l’armée suisse une armée « à la prussienne » ; il est marié à Clara von Bismarck. En 1915, il propose même au Conseil fédéral d’entrer en guerre aux côtés de l’Allemagne.')
      ], {keep: true, doc: LARDY}),
      ex('Le fossé entre Romands et Alémaniques', [
        classify('Ces attitudes sont-elles surtout celles des Romands ou des Alémaniques ?', ['Romands', 'Alémaniques'], [
          ['Soutiennent plutôt la France et la Belgique', 0],
          ['Admirent souvent l’Allemagne, sa culture et son armée', 1],
          ['Sont choqués par l’invasion de la Belgique neutre', 0],
          ['Se méfient du général Wille', 0],
          ['Partagent la langue des Allemands', 1]
        ], 'Chacun soutient le pays dont il partage la langue et la culture. Les journaux des deux régions s’attaquent : la Suisse risque de se diviser.')
      ]),
      ex('Les affaires qui divisent', [
        qcm('L’affaire des colonels (1916) : que s’est-il passé ?', 'Deux colonels de l’état-major suisse ont transmis des informations secrètes à l’Allemagne et à l’Autriche-Hongrie', ['Deux colonels ont déserté en France', 'Deux colonels ont refusé d’obéir à Wille', 'Deux colonels ont créé la Croix-Rouge'],
          'Les colonels Egli et von Wattenwyl donnaient à l’Allemagne et à l’Autriche-Hongrie un bulletin secret de l’état-major. Ils sont acquittés par la justice et punis seulement de 20 jours d’arrêt.'),
        qcm('Pourquoi la punition des colonels choque-t-elle les Romands ?', 'Elle leur paraît bien trop légère : ils y voient la preuve que l’armée favorise l’Allemagne', ['Elle leur paraît trop dure', 'Les colonels étaient romands', 'Ils voulaient que les colonels soient décorés'],
          'Pour les Romands, la neutralité a été trahie. La presse romande et socialiste se déchaîne.'),
        qcm('L’affaire Grimm-Hoffmann (1917) : de quoi le conseiller fédéral Arthur Hoffmann est-il accusé ?', 'D’avoir aidé à préparer une paix séparée entre l’Allemagne et la Russie', ['D’avoir vendu des armes à la France', 'D’avoir fermé les frontières', 'D’avoir organisé la grève générale'],
          'Une paix entre l’Allemagne et la Russie aurait aidé l’Allemagne : la neutralité suisse est compromise. Plus de 15 000 personnes manifestent à Genève ; Hoffmann démissionne en juin 1917.'),
        qcm('Qui est élu au Conseil fédéral en 1917, ce qui rassure les Romands ?', 'Gustave Ador, Genevois et président du CICR', ['Ulrich Wille', 'Robert Grimm', 'Carl Spitteler'],
          'L’élection d’un Romand, connu pour son action humanitaire, calme la Suisse romande et rassure les Alliés.'),
        qcm('Que demande l’écrivain Carl Spitteler dans son discours « Notre point de vue suisse » (14 décembre 1914) ?', 'Que les Suisses restent unis et neutres au lieu de se diviser selon leur langue', ['Que la Suisse rejoigne l’Allemagne', 'Que la Suisse rejoigne la France', 'Que la Suisse se sépare en deux pays'],
          'Ce discours d’un Alémanique appelle à l’unité du pays. Spitteler recevra le prix Nobel de littérature en 1919, le premier pour un Suisse.')
      ], {pick: 4}),
      ex('Analyse le doc. c (fiche p. 13)', [
        qcm('Selon Carlin, quel est le principal problème de la Suisse ?', 'Elle a du mal à se procurer les matières premières dont ses industries ont besoin', ['Elle a trop de soldats', 'Elle ne sait pas à qui vendre son fromage', 'Elle est envahie par l’Italie'],
          'Sans charbon, coton, cuivre ou pétrole venus de l’étranger, les usines suisses s’arrêtent.'),
        qcm('De quoi la Grande-Bretagne accuse-t-elle la Suisse ?', 'De laisser partir vers l’Allemagne et l’Autriche une partie de ce qu’elle importe', ['D’envoyer des soldats en Allemagne', 'D’héberger Lénine', 'De bombarder Londres'],
          'Les Alliés veulent affamer l’Allemagne par un blocus. Ils craignent que la Suisse serve de « porte d’entrée ».'),
        qcm('Que promet la Suisse ?', 'De maintenir une stricte neutralité, politique et économique', ['D’entrer en guerre avec les Alliés', 'D’arrêter tout commerce', 'De fermer ses usines'],
          'Pour garder ses importations, la Suisse accepte que les Alliés contrôlent son commerce (Société suisse de surveillance économique, 1915). C’est une neutralité sous surveillance.')
      ], {keep: true, doc: CARLIN})
    ],
    3: [
      ex('La grève générale de 1918', [
        qcm('Qui organise la grève générale de novembre 1918 ?', 'Le Comité d’Olten, mené par Robert Grimm', ['Le général Wille', 'Le Conseil fédéral', 'La Croix-Rouge'],
          'Le Comité d’Olten, créé en février 1918, réunit des dirigeants syndicalistes et socialistes. Il appelle à la grève générale le 12 novembre 1918.'),
        qcm('Combien de personnes font grève ?', 'Environ 250 000', ['Environ 2 500', 'Environ 25 000', 'Toute la population'],
          'Environ 250 000 personnes cessent le travail. La grève des cheminots impressionne le plus : les trains s’arrêtent.'),
        qcm('Pourquoi tant de colère en 1918 ?', 'La misère : prix doublés, salaires en baisse, soldats sans salaire, alors que des profiteurs de guerre s’enrichissent', ['Les Suisses veulent entrer en guerre', 'Les ouvriers veulent plus de vacances à la montagne', 'La Suisse a perdu une bataille'],
          'Les prix ont été multipliés par 2,3 entre 1914 et 1918 ; un Suisse sur six a besoin d’aide pour vivre. Certaines industries, elles, font de gros profits.'),
        qcm('Pourquoi le gouvernement envoie-t-il l’armée dans les villes ?', 'Il craint une révolution communiste comme en Russie', ['Pour aider les grévistes', 'Pour fêter l’armistice', 'Pour combattre la grippe'],
          'La révolution d’octobre 1917 fait peur. Wille fait occuper Zurich et Berne. L’armée mobilise près de 100 000 hommes, souvent venus des campagnes.'),
        qcm('Comment la grève se termine-t-elle ?', 'Le Conseil fédéral lance un ultimatum ; le Comité arrête la grève le 14 novembre', ['Les grévistes prennent le pouvoir', 'La France envoie son armée', 'Elle dure jusqu’en 1919'],
          'Le 13 novembre, le Conseil fédéral exige la fin de la grève. Le Comité d’Olten cède le 14 au matin, par peur d’un affrontement avec l’armée.'),
        qcm('Que se passe-t-il à Granges (Grenchen, Soleure) le 14 novembre 1918 ?', 'L’armée tire sur des grévistes : trois jeunes ouvriers horlogers sont tués', ['Une grande fête de la paix', 'Une usine d’armement explose', 'Lénine y fait un discours'],
          'Hermann Lanz (29 ans), Marius Noirjean (17 ans) et Fritz Scholl (21 ans) sont tués, alors que la grève venait d’être arrêtée.')
      ], {pick: 4}),
      ex('Les revendications du Comité d’Olten (fiche p. 15, 14)', [
        rows('Quand ces revendications ont-elles été obtenues ?', [
          ['Élection du Conseil national à la proportionnelle', '1919'],
          ['Semaine de 48 heures', '1919'],
          ['Assurance-vieillesse (AVS)', '1948'],
          ['Droit de vote et d’éligibilité des femmes', '1971'],
          ['Monopole de l’État sur le commerce extérieur', 'Jamais']
        ], ['1919', '1948', '1971', 'Jamais'],
        'La proportionnelle (déjà acceptée en votation en octobre 1918) et les 48 heures arrivent vite, en 1919. L’AVS est acceptée en 1947 et entre en vigueur en 1948. Le vote des femmes attend 1971. Constat : certaines demandes sont vite satisfaites, d’autres demandent des dizaines d’années, et certaines jamais.', {keepChoiceOrder: true})
      ]),
      ex('Mythe et réalités (fiche p. 14, 13)', [
        classify('Range chaque fait dans la bonne « vision » de la Suisse.', ['Une Suisse « exceptionnelle »', 'Le fossé linguistique', 'La crise économique et sociale'], [
          ['Une île de paix au milieu de l’Europe en guerre', 0],
          ['Internement de 68 000 prisonniers malades ou blessés', 0],
          ['Le CICR reçoit le prix Nobel de la paix 1917', 0],
          ['L’affaire des colonels', 1],
          ['Romands pour la France, Alémaniques pour l’Allemagne', 1],
          ['Prix multipliés par plus de deux entre 1914 et 1918', 2],
          ['En 1918, un Suisse sur six a besoin d’aide pour vivre', 2],
          ['La grève générale de novembre 1918', 2]
        ], 'Le « mythe » insiste sur la paix et l’humanitaire ; la réalité, c’est aussi un pays divisé et une population appauvrie.', {pickRows: 6}),
        qcm('Au final, la Suisse était-elle une « île de paix » ?', 'Oui, sans combats, mais elle a connu de fortes divisions, la pauvreté et une grève générale', ['Oui, tout allait parfaitement bien', 'Non, elle a été envahie par l’Allemagne', 'Non, elle a combattu avec les Alliés'],
          'Il faut nuancer : la Suisse est épargnée par les combats, mais pas par la crise, les tensions entre régions et les violences de 1918.')
      ], {keep: true}),
      ex('Vrai ou faux ? (pièges)', [
        vf('La Suisse a vendu des pièces de munitions aux pays en guerre.', true,
          'Vrai. En 1917, les exportations liées aux munitions représentent environ 300 millions de francs, environ 13 % des exportations suisses, vers les deux camps.'),
        vf('Lénine a vécu à Zurich avant de rentrer en Russie en 1917.', true,
          'Vrai. Il habite à la Spiegelgasse 14, à Zurich, et quitte la ville le 9 avril 1917 en train, à travers l’Allemagne.'),
        vf('Le général Wille était très populaire en Suisse romande.', false,
          'Faux. Les Romands se méfient de ce germanophile ; certains voulaient le remplacer par un Romand.'),
        vf('Le CICR a reçu le prix Nobel de la paix en 1917.', true,
          'Vrai, pour son aide aux blessés, aux prisonniers de guerre et à leurs familles.')
      ], {pick: 3})
    ]
  },
  master: [
    qcm('Pourquoi beaucoup de Français se méfient-ils du général Wille en 1914 ?', 'Il admire l’armée allemande et a des liens familiaux avec l’Allemagne', ['Il a combattu contre la France', 'Il est italien', 'Il veut supprimer l’armée'],
      'C’est le doc. d de ta fiche (lettre de Lardy) et la question « Explique la cause de ce sentiment ».', {doc: LARDY}),
    classify('Range chaque fait.', ['Une Suisse « exceptionnelle »', 'Le fossé linguistique', 'La crise économique et sociale'], [
      ['Internement de prisonniers blessés', 0], ['Affaire des colonels', 1], ['Un Suisse sur six aidé en 1918', 2], ['Grève générale', 2]
    ], 'Humanitaire, fossé, crise : les trois visions de la fiche p. 14.'),
    rows('Quand ces revendications de 1918 ont-elles été obtenues ?', [
      ['Semaine de 48 heures', '1919'], ['AVS', '1948'], ['Vote des femmes', '1971']
    ], ['1919', '1948', '1971', 'Jamais'], '48 heures : 1919. AVS : 1948. Vote des femmes : 1971.', {keepChoiceOrder: true}),
    vf('Environ 3 000 soldats suisses meurent pendant leur service, surtout de maladie.', true,
      'Vrai, dont environ 1 800 de la grippe espagnole en 1918. Aucun au combat.')
  ],
  cours: [
    {h: 'Une Suisse neutre… et mobilisée'},
    {p: 'Le **4 août 1914**, la Suisse déclare sa **neutralité** : elle ne prend parti pour aucun camp. Pour la faire respecter, elle **mobilise** son armée : environ **220 000 soldats** entrent en service du 3 au 7 août. Le **3 août**, l’Assemblée fédérale élit **Ulrich Wille** général.'},
    {p: 'Les soldats gardent les frontières (surtout le Jura, tout près du front), en moyenne **500 à 600 jours** pendant la guerre, avec une petite solde **sans compensation de salaire**. Environ **3 000** meurent en service, d’accidents ou de maladie (dont 1 800 de la grippe de 1918), aucun au combat.'},
    {h: 'Un pays divisé : le « fossé »'},
    {list: [
      'Les **Romands** soutiennent la France et sont choqués par l’invasion de la Belgique neutre ; beaucoup d’**Alémaniques** admirent l’Allemagne.',
      '**Wille**, né à Hambourg et marié à Clara von Bismarck, est soupçonné de pencher pour l’Allemagne (lettre de Lardy, fiche p. 14). En 1915, il propose même au Conseil fédéral d’entrer en guerre aux côtés de l’Allemagne.',
      '**Affaire des colonels** (1916) : deux officiers de l’état-major transmettent des informations secrètes à l’Allemagne et à l’Autriche-Hongrie ; ils ne sont punis que de 20 jours d’arrêt.',
      '**Affaire Grimm-Hoffmann** (1917) : le conseiller fédéral Hoffmann aide à préparer une paix séparée entre l’Allemagne et la Russie ; il démissionne. Le Genevois **Gustave Ador**, président du CICR, le remplace.',
      'L’écrivain **Carl Spitteler** appelle à l’unité dans son discours « **Notre point de vue suisse** » (14 décembre 1914).'
    ]},
    {h: 'Une économie sous pression'},
    {p: 'La Suisse dépend des **importations** (blé, charbon, matières premières). Les Alliés contrôlent ce qu’elle reçoit pour que rien n’aille à l’Allemagne (lettre de Carlin, fiche p. 13). Elle commerce avec les deux camps et vend même des **pièces de munitions** (environ 13 % de ses exportations en 1917).'},
    {list: [
      'Les **prix** sont multipliés par environ **2,3** entre 1914 et 1918 ; les salaires réels baissent de 25 à 30 %.',
      '**Rationnement** à partir de 1917 (pain, sucre…).',
      'En 1918, **un Suisse sur six** a besoin de l’aide publique ; des **profiteurs de guerre** s’enrichissent.'
    ]},
    {h: 'L’image humanitaire'},
    {list: [
      'Le **CICR** (Genève) crée en août 1914 l’**Agence internationale des prisonniers de guerre** : plus de six millions de fiches. Il reçoit le **prix Nobel de la paix 1917**.',
      'Dès 1915, des trains de grands blessés traversent la Suisse ; dès 1916, environ **68 000 prisonniers** malades ou blessés sont internés dans des stations de montagne.',
      'Mais une caricature de 1917 résume la critique : « **On les tue d’un côté… on les soigne de l’autre** » (objectif 10).'
    ]},
    {h: 'Novembre 1918 : la grève générale'},
    {p: 'Le **Comité d’Olten** (Robert Grimm) lance la **grève générale du 12 au 14 novembre 1918** : environ **250 000** grévistes. Par peur d’une révolution comme en Russie, le gouvernement envoie près de **100 000 soldats** et lance un **ultimatum** ; la grève s’arrête le 14. À **Granges**, l’armée tue **trois** jeunes horlogers. Au même moment, la **grippe espagnole** fait **24 449** morts en Suisse.'},
    {table: {head: ['Revendication (1918)', 'Obtenue'], rows: [
      ['Proportionnelle pour le Conseil national', '1919 (acceptée en votation dès octobre 1918)'],
      ['Semaine de 48 heures', '1919'],
      ['Assurance-vieillesse (AVS)', '1948 (votée en 1947)'],
      ['Droit de vote des femmes', '1971'],
      ['Monopole d’État sur le commerce extérieur, armée « populaire »…', 'Jamais']
    ]}},
    {keys: [
      'Neutre mais **mobilisée** ; épargnée par les combats, **pas** par la crise.',
      'Un pays **divisé** (fossé linguistique) et **appauvri** (crise sociale).',
      'Une image **humanitaire** (CICR, internés) à nuancer.'
    ]},
    {warn: [
      'Les soldats suisses ne meurent pas au combat, mais **environ 3 000** meurent pendant leur service.',
      'Ne confonds pas **Wille** (1914-1918) et **Guisan** (général de 1939-1945).'
    ]},
    {quiz: qcm('À toi : pourquoi le gouvernement craint-il la grève générale de 1918 ?', 'Il a peur d’une révolution communiste comme en Russie', ['Il a peur que la France attaque', 'Il veut fêter l’armistice', 'Il craint la grippe'],
      'La révolution d’octobre 1917 fait peur à toute l’Europe ; Lénine avait d’ailleurs vécu en Suisse.')}
  ],
  sources: ['fiche', 'hlsPGM', 'hlsWille', 'hlsGreve', 'hlsGrippe', 'hlsInternes', 'hlsSpitteler', 'wikiSuisse', 'tempsGreve', 'swissinfoGreve', 'swissinfoArmes', 'swissinfoInternes', 'cicr', 'nobel1917', 'bnFemmes', 'mnsLenine']
};
