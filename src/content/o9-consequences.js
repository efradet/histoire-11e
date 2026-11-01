// Objectif 9 : les conséquences de la guerre, durant le conflit et à la fin (manuel p. 38, 40-41, fiche p. 11, 16)
import {qcm, vf, multi, order, rows, classify, mapFind, ex} from './helpers.js';

export default {
  id: 9,
  title: 'Les conséquences de la guerre',
  subtitle: 'Pendant le conflit et à la fin : bilan, traités, nouveau monde',
  ref: 'Manuel p. 38, 40-41, fiche p. 11 et 16',
  rappel: [
    '**Pendant** : violence de masse (70 millions de mobilisés, environ **10 millions de soldats tués**), tranchées, nouvelles armes (gaz, chars, avions), Verdun, **guerre totale**, civils victimes, **génocide des Arméniens** (1915).',
    '**Fin** : armistice (11 novembre 1918), conférence de la paix à Paris (janvier 1919, sans les vaincus), **traité de Versailles** (28 juin 1919).',
    'L’Allemagne perd l’**Alsace-Lorraine**, des territoires à l’est et ses colonies ; son armée est limitée à **100 000 hommes** ; elle est déclarée **responsable** de la guerre et doit payer des **réparations**.',
    '**Quatre empires disparaissent** ; **nouveaux États** : Pologne, Tchécoslovaquie, Yougoslavie, Autriche, Hongrie, Finlande, pays baltes.',
    '**Économie** : Europe ruinée et endettée ; les **États-Unis** deviennent la première puissance.',
    '**Société des Nations** (1920, Genève) : la Suisse y entre après le vote du 16 mai 1920. **Rancœurs** : « Diktat » allemand, « victoire mutilée » italienne.'
  ],
  levels: {
    1: [
      ex('Questions de cours', [
        qcm('Environ combien de soldats meurent pendant la guerre ?', 'Environ 10 millions', ['Environ 100 000', 'Environ 1 million', 'Environ 100 millions'],
          'Environ 9,7 millions de soldats meurent, sur environ 70 millions de mobilisés. Il faut y ajouter environ 9 millions de civils (faim, maladies, massacres).'),
        qcm('Que veut dire « gueules cassées » ?', 'Des soldats gravement blessés au visage', ['Des soldats qui ont perdu une bataille', 'Des soldats qui refusent de se battre', 'Des affiches de propagande'],
          'Les éclats d’obus défigurent des milliers de soldats. Ils rappellent après la guerre la violence des combats.'),
        qcm('Quelle nouvelle arme est utilisée pour la première fois en avril 1915, près d’Ypres (Belgique) ?', 'Les gaz asphyxiants', ['Les chars', 'La bombe atomique', 'Les fusils'],
          'L’armée allemande lâche du chlore le 22 avril 1915. Les soldats reçoivent ensuite des masques à gaz. Les chars, eux, apparaissent en 1916.'),
        qcm('Que se passe-t-il le 11 novembre 1918 ?', 'L’armistice : les combats s’arrêtent', ['Le traité de Versailles est signé', 'La guerre commence', 'La révolution russe éclate'],
          'L’armistice est signé à Rethondes (France) ; le cessez-le-feu entre en vigueur à 11 heures.'),
        qcm('Où est signé le traité de paix avec l’Allemagne ?', 'Au château de Versailles, dans la galerie des Glaces', ['À Genève', 'À Berlin', 'À Sarajevo'],
          'Le 28 juin 1919, dans la galerie des Glaces, là même où l’Empire allemand avait été proclamé en 1871.'),
        qcm('Quelle région l’Allemagne doit-elle rendre à la France ?', 'L’Alsace-Lorraine', ['La Bavière', 'La Belgique', 'La Savoie'],
          'Perdue par la France en 1871, l’Alsace-Lorraine redevient française en 1918-1919.'),
        qcm('Où la Société des Nations a-t-elle son siège ?', 'À Genève', ['À Paris', 'À New York', 'À Berlin'],
          'Genève est choisie, soutenue par le président américain Wilson. La première assemblée de la SDN s’y réunit en novembre 1920.'),
        qcm('Que veut dire « guerre totale » ?', 'Toutes les forces du pays sont mobilisées pour gagner : soldats, civils, économie, industrie, propagande', ['Une guerre dans le monde entier', 'Une guerre qui dure très longtemps', 'Une guerre sans armes'],
          'Ton schéma heuristique relie la violence au front et les civils victimes par l’expression « Guerre totale ».')
      ], {pick: 5}),
      ex('Vrai ou faux ?', [
        vf('Les civils ne sont pas touchés par la guerre.', false,
          'Faux. Environ 9 millions de civils meurent (faim, maladies, massacres, bombardements). Ton schéma : pénurie alimentaire, populations déplacées, souffrance psychologique.'),
        vf('L’Allemagne participe aux négociations du traité de Versailles.', false,
          'Faux. Les vaincus ne sont pas invités à négocier. L’Allemagne doit accepter le traité sous la menace d’une invasion : elle parle de « Diktat ».'),
        vf('Après la guerre, de nouveaux pays apparaissent en Europe.', true,
          'Vrai : Pologne, Tchécoslovaquie, Yougoslavie, Autriche et Hongrie séparées, Finlande, Estonie, Lettonie, Lituanie.'),
        vf('La Suisse entre dans la Société des Nations en 1920.', true,
          'Vrai, après une votation très serrée le 16 mai 1920.')
      ], {pick: 3}),
      ex('Durant le conflit ou à la fin ?', [
        classify('Range chaque conséquence (fiche p. 9, objectif 9).', ['Durant le conflit', 'À la fin du conflit'], [
          ['Tranchées et nouvelles armes', 0],
          ['Génocide des Arméniens', 0],
          ['Pénuries de nourriture', 0],
          ['Bataille de Verdun', 0],
          ['Traité de Versailles', 1],
          ['Création de la Société des Nations', 1],
          ['Naissance d’une Pologne indépendante', 1]
        ], 'Ta fiche distingue les conséquences durant le conflit (violence, civils, guerre totale) et à la fin (accords de paix, nouveaux États, économie, pertes, SDN, rôle de la femme).', {pickRows: 6})
      ])
    ],
    2: [
      ex('Le traité de Versailles', [
        multi('Coche ce que le traité de Versailles impose à l’Allemagne.', ['Rendre l’Alsace-Lorraine à la France', 'Perdre ses colonies', 'Limiter son armée à 100 000 hommes', 'Payer des réparations', 'Reconnaître sa responsabilité dans la guerre'], ['Devenir neutre comme la Suisse', 'Céder Berlin à la France', 'Entrer tout de suite dans la SDN'],
          'Ta fiche : « Versailles : l’Allemagne perd du territoire, doit… » payer ! Elle perd environ 15 % de son territoire et 10 % de sa population, n’a plus le droit d’avoir des chars, une aviation ni le service militaire. Elle n’entrera à la SDN qu’en 1926.')
      ]),
      ex('Les nouveaux États sur la carte de 1920', [
        mapFind('Touche chaque nouvel État sur la carte de 1920.', 1920, ['pol', 'cze', 'yug', 'fin', 'aut', 'hun', 'ltu', 'lva'],
          'La Pologne renaît entre l’Allemagne et la Russie ; la Tchécoslovaquie, l’Autriche, la Hongrie et la Yougoslavie naissent de l’Autriche-Hongrie ; la Finlande et les pays baltes se séparent de la Russie.', {pickTargets: 4, zoomSmall: true})
      ]),
      ex('Comprendre la fin de la guerre', [
        qcm('Pourquoi la France tient-elle à signer le traité dans la galerie des Glaces de Versailles ?', 'C’est là que l’Empire allemand avait été proclamé en 1871, après la défaite française : elle prend sa revanche', ['C’est la plus grande salle d’Europe', 'C’est près de la Suisse', 'L’Allemagne l’a demandé'],
          'Fiche p. 16 (16a) : le lieu est un symbole. L’humiliation de 1871 est effacée… et l’Allemagne se sent humiliée à son tour.'),
        qcm('Quels empires disparaissent à la fin de la guerre ?', 'Les empires allemand, austro-hongrois, russe et ottoman', ['Les empires britannique et français', 'L’Empire suisse', 'Aucun'],
          'L’Allemagne devient une république, l’Autriche-Hongrie éclate, le tsar a été renversé, l’Empire ottoman est démembré. Les empires coloniaux britannique et français, eux, s’agrandissent.'),
        qcm('Pourquoi l’Europe sort-elle ruinée de la guerre ?', 'Destructions, dépenses énormes et dettes envers les États-Unis', ['Parce que la Suisse a gardé tout l’or', 'Parce que les usines ont fermé en 1914', 'Parce qu’il n’y a plus de monnaie'],
          'Ta fiche : conséquences économiques. Le nord de la France et la Belgique sont dévastés ; les pays ont emprunté énormément. Les États-Unis deviennent la première puissance mondiale.'),
        qcm('Que sont les 14 points de Wilson (janvier 1918) ?', 'Un programme de paix du président américain : diplomatie ouverte, désarmement, droit des peuples, Société des Nations', ['Un plan d’attaque contre l’Allemagne', 'Le règlement de la Croix-Rouge', 'Les 14 batailles de la guerre'],
          'Wilson veut une paix juste et durable. Seule une partie de ses idées sera appliquée.')
      ], {pick: 3}),
      ex('Un traité pour chaque vaincu', [
        rows('Associe chaque traité de paix au pays vaincu.', [
          ['Traité de Versailles (1919)', 'Allemagne'],
          ['Traité de Saint-Germain-en-Laye (1919)', 'Autriche'],
          ['Traité de Trianon (1920)', 'Hongrie'],
          ['Traité de Neuilly (1919)', 'Bulgarie'],
          ['Traité de Sèvres (1920)', 'Empire ottoman']
        ], null, 'Chaque vaincu a son traité, tous signés près de Paris. Le traité de Sèvres sera remplacé en 1923 par celui de Lausanne, en Suisse.', {pickRows: 4})
      ]),
      ex('Vrai ou faux ?', [
        vf('L’Autriche-Hongrie éclate en plusieurs États.', true,
          'Vrai : l’Autriche, la Hongrie, la Tchécoslovaquie naissent ; d’autres régions rejoignent la Pologne, la Yougoslavie, la Roumanie ou l’Italie.'),
        vf('L’Allemagne devient une république.', true,
          'Vrai. L’empereur Guillaume II abdique le 9 novembre 1918.'),
        vf('Les vaincus participent à la conférence de la paix de Paris.', false,
          'Faux. Seuls les vainqueurs négocient ; les vaincus reçoivent le traité à signer.'),
        vf('Les États-Unis sortent de la guerre plus puissants qu’avant.', true,
          'Vrai. Ils ont prêté de l’argent aux Alliés et deviennent la première puissance économique.'),
        vf('Les « Quatre Grands » de la conférence de la paix sont Wilson, Clemenceau, Lloyd George et Orlando.', true,
          'Vrai : les chefs des États-Unis, de la France, du Royaume-Uni et de l’Italie.')
      ], {pick: 3})
    ],
    3: [
      ex('Des paix qui préparent d’autres guerres (fiche p. 16, 16b-16c)', [
        qcm('Pourquoi les Allemands appellent-ils le traité de Versailles un « Diktat » ?', 'Il leur a été imposé sans négociation', ['Il a été écrit en allemand', 'Il était très favorable à l’Allemagne', 'Il a été signé en Suisse'],
          'Le chancelier allemand démissionne plutôt que de signer. Le traité est accepté sous la menace d’une invasion.'),
        qcm('« Vittoria mutilata » (victoire mutilée) : qu’exprime l’Italie ?', 'Sa déception : elle n’a pas reçu tous les territoires promis en 1915', ['Sa joie d’avoir gagné', 'Sa défaite face à l’Autriche', 'Son entrée dans la SDN'],
          'L’Italie a perdu environ 650 000 soldats et voulait notamment la Dalmatie et la ville de Fiume. Le poète D’Annunzio occupe Fiume en 1919.'),
        qcm('Quelle conséquence peuvent avoir ces rancœurs ?', 'Le nationalisme grandit et prépare de nouveaux conflits (fascisme en Italie, nazisme en Allemagne)', ['Les pays deviennent tous neutres', 'L’Europe s’unit tout de suite', 'Aucune conséquence'],
          'Mussolini arrive au pouvoir en Italie en 1922 ; Hitler promettra d’effacer le « Diktat ». Vingt ans après Versailles commence la Seconde Guerre mondiale.'),
        qcm('Pourquoi la SDN est-elle faible dès le départ ?', 'Les États-Unis n’y entrent pas, et l’Allemagne et la Russie en sont d’abord exclues', ['Elle n’a pas de siège', 'La Suisse la dirige seule', 'Elle a une armée trop puissante'],
          'Le Sénat américain refuse le traité de Versailles : le pays de Wilson, qui a inventé la SDN, n’en fait pas partie. Et la SDN n’a pas d’armée.'),
        qcm('Quel point des 14 points de Wilson devient réalité en 1920 ?', 'La création d’une Société des Nations', ['La liberté totale des mers', 'Le désarmement de tous les pays', 'L’indépendance de toutes les colonies'],
          'Le 14e point propose une « association générale des nations » : la SDN, à Genève.')
      ], {pick: 4}),
      ex('La Suisse et la SDN (fiche p. 16, 17)', [
        qcm('Quel est le résultat de la votation du 16 mai 1920 ?', 'Accepté de justesse : 56 % de oui, 11 ½ cantons contre 10 ½', ['Refusé par tous les cantons', 'Accepté à 99 %', 'Le vote a été annulé'],
          '416 870 oui contre 323 719 non. Ta fiche : la partie francophone du canton de Berne a fait basculer ce canton, et donc la majorité des cantons.'),
        qcm('Quel argument utilisent les opposants ?', 'Entrer dans la SDN met en danger la neutralité suisse', ['La SDN est trop loin de la Suisse', 'La SDN interdit le chocolat', 'La SDN veut supprimer les cantons'],
          'Membre de la SDN, la Suisse pourrait devoir participer à des sanctions, voire laisser passer des troupes. Beaucoup pensent aussi que c’est la « ligue des vainqueurs ».'),
        qcm('Quel arrangement la Suisse obtient-elle (déclaration de Londres, 1920) ?', 'Elle ne participe pas aux sanctions militaires, seulement aux sanctions économiques', ['Elle commande l’armée de la SDN', 'Elle ne paie rien', 'Elle peut quitter la SDN quand elle veut sans prévenir'],
          'C’est la « neutralité différentielle ». En 1938, la Suisse revient à une neutralité complète.')
      ], {pick: 2}),
      ex('Quel type de conséquence ?', [
        classify('Range chaque conséquence de la guerre.', ['Humaine', 'Économique', 'Politique'], [
          ['Près de 10 millions de soldats tués', 0],
          ['Des centaines de milliers de veuves et d’orphelins', 0],
          ['Des « gueules cassées » et des millions de blessés', 0],
          ['Les pays européens sont endettés envers les États-Unis', 1],
          ['Le nord de la France est dévasté (villes, usines, champs)', 1],
          ['Les États-Unis deviennent la première puissance économique', 1],
          ['Les empires disparaissent, de nouveaux États démocratiques naissent', 2],
          ['Création de la Société des Nations', 2],
          ['Des femmes obtiennent le droit de vote dans plusieurs pays', 2]
        ], 'Ta fiche (objectif 9) cite toutes ces conséquences : pertes humaines, conséquences économiques, nouveaux États démocratiques, SDN et nouveau rôle de la femme.', {pickRows: 6})
      ]),
      ex('Vrai ou faux ? (bilan)', [
        vf('La grippe espagnole tue plus de 24 000 personnes en Suisse.', true,
          'Vrai : 24 449 morts entre juillet 1918 et juin 1919.'),
        vf('Le génocide des Arméniens est commis par le gouvernement de l’Empire ottoman.', true,
          'Vrai. À partir d’avril 1915, les Arméniens sont déportés vers le désert de Syrie et massacrés. Environ 1,2 million de morts selon de nombreuses estimations.'),
        vf('Les États-Unis entrent à la SDN.', false,
          'Faux. Le Sénat américain refuse.'),
        vf('Le traité de Versailles oblige l’Allemagne à payer des réparations.', true,
          'Vrai. Leur montant est fixé en 1921 à 132 milliards de marks-or.')
      ], {pick: 3})
    ]
  },
  master: [
    multi('Coche les conséquences du traité de Versailles pour l’Allemagne.', ['Perte de l’Alsace-Lorraine', 'Armée limitée à 100 000 hommes', 'Réparations à payer'], ['Entrée immédiate à la SDN', 'Neutralité imposée'],
      'Territoires, armée, réparations, responsabilité : l’Allemagne vit le traité comme un « Diktat ».'),
    mapFind('Touche ces nouveaux États sur la carte de 1920.', 1920, ['pol', 'cze', 'yug', 'fin'],
      'Pologne, Tchécoslovaquie, Yougoslavie, Finlande : nés de la chute des empires.', {zoomSmall: true}),
    qcm('Pourquoi les opposants suisses refusent-ils d’entrer dans la SDN en 1920 ?', 'Ils craignent pour la neutralité suisse', ['Ils veulent entrer dans la guerre', 'Ils préfèrent la Russie', 'Ils trouvent Genève trop petite'],
      'Le oui l’emporte de justesse : 56 %, 11 ½ cantons contre 10 ½.'),
    qcm('« Vittoria mutilata » et « Diktat » expriment…', 'La rancœur de pays qui se sentent humiliés ou trahis par les traités', ['La joie de la paix', 'La reconnaissance envers Wilson', 'L’envie de devenir neutres'],
      'Ces rancœurs nourrissent le nationalisme de l’entre-deux-guerres.')
  ],
  cours: [
    {h: 'Pendant la guerre : une violence de masse'},
    {list: [
      '**70 millions** de soldats mobilisés, environ **10 millions** tués (environ 9,7 millions), des millions de blessés et de **gueules cassées**.',
      '**Les tranchées** : boue, rats, poux, cadavres, pas d’eau potable, impossible de se laver ; un danger permanent (ton schéma heuristique). Les obus causent la majorité des blessures.',
      '**Nouvelles armes** : gaz asphyxiants (1915), chars (1916), avions, sous-marins, bombes incendiaires.',
      '**Verdun** (1916) : dix mois de combats, plus de 700 000 tués, blessés et disparus français et allemands.'
    ]},
    {h: 'Une guerre totale : les civils aussi'},
    {list: [
      'Toute la société est mobilisée : usines d’armement, ravitaillement, soins aux blessés, propagande.',
      'Les civils souffrent : **pénuries** de nourriture, **populations déplacées**, deuils et souffrance psychologique. Environ **9 millions** de civils meurent.',
      '**Génocide des Arméniens** (1915) : le gouvernement de l’Empire ottoman déporte et massacre les Arméniens (environ 1,2 million de morts).',
      'En 1918-1919, la **grippe espagnole** frappe un monde épuisé (24 449 morts en Suisse).'
    ]},
    {h: 'À la fin : les traités de paix'},
    {p: 'Après l’**armistice** (11 novembre 1918), les vainqueurs se réunissent à **Paris** (janvier 1919). Les « Quatre Grands » : Wilson (États-Unis), Clemenceau (France), Lloyd George (Royaume-Uni), Orlando (Italie). Les vaincus ne sont pas invités.'},
    {table: {head: ['Traité de Versailles (28 juin 1919)', 'Ce que perd l’Allemagne'], rows: [
      ['Territoires', 'Alsace-Lorraine à la France, territoires à l’est pour la Pologne (Dantzig devient ville libre), toutes ses colonies : environ 15 % de son territoire.'],
      ['Armée', '100 000 hommes au maximum, pas de chars, pas d’aviation, plus de service militaire ; la rive gauche du Rhin est démilitarisée.'],
      ['Responsabilité', 'Article 231 : l’Allemagne et ses alliés sont déclarés responsables des pertes et dommages de la guerre.'],
      ['Réparations', 'Elle doit payer : 132 milliards de marks-or (montant fixé en 1921).']
    ]}},
    {p: 'Les autres vaincus ont leur propre traité : **Saint-Germain** (Autriche), **Trianon** (Hongrie), **Neuilly** (Bulgarie), **Sèvres** (Empire ottoman).'},
    {h: 'Un nouveau monde'},
    {map: {year: 1920, paint: 'nouveaux1920', labels: ['pol', 'cze', 'yug', 'aut', 'hun', 'fin', 'est', 'lva', 'ltu', 'deu', 'rus'], caption: 'L’Europe en 1920 : les nouveaux États'}},
    {list: [
      '**Quatre empires disparaissent** : allemand, austro-hongrois, russe, ottoman. **Nouveaux États**, d’abord démocratiques : Pologne, Tchécoslovaquie, Yougoslavie, Autriche, Hongrie, Finlande, Estonie, Lettonie, Lituanie.',
      '**Économie** : l’Europe est ruinée et endettée ; les **États-Unis** deviennent la première puissance.',
      '**Société des Nations** (1920, siège à **Genève**), inspirée du 14e point de Wilson ; mais sans les États-Unis.',
      '**Rôle de la femme** : droit de vote dans plusieurs pays (objectif 6).',
      '**Rancœurs** : « Diktat » en Allemagne, « victoire mutilée » en Italie. Elles nourriront les dictatures et la Seconde Guerre mondiale.'
    ]},
    {h: 'La Suisse et la SDN'},
    {p: 'Le **16 mai 1920**, les Suisses acceptent d’entrer dans la SDN de justesse : **56 %** de oui et **11 ½ cantons contre 10 ½**. Les opposants craignaient pour la **neutralité**. La Suisse obtient de ne pas participer aux sanctions militaires (« **neutralité différentielle** »).'},
    {keys: [
      'Pendant : **violence de masse**, **guerre totale**, civils victimes.',
      'Fin : **Versailles** (territoires, armée, responsabilité, réparations), **nouveaux États**, **SDN**.',
      'Des paix **imposées** qui laissent des rancœurs.'
    ]},
    {warn: [
      'La conférence de la paix s’ouvre en **janvier 1919** (pas 1918).',
      'L’**armistice** arrête les combats ; les **traités** font la paix.'
    ]},
    {quiz: qcm('À toi : pourquoi les Allemands parlent-ils de « Diktat » ?', 'Le traité leur a été imposé sans négociation', ['Ils l’ont écrit eux-mêmes', 'Il leur rend l’Alsace', 'Il a été signé à Berlin'],
      'Les vaincus n’ont pas participé aux négociations.')}
  ],
  sources: ['fiche', 'wikiPertes', 'wikiVerdun', 'wikiTrenches', 'wikiArmeniens', 'wikiVersailles', 'wikiWilson', 'hlsSdn', 'swissvotes', 'hlsGrippe', 'cartes']
};
