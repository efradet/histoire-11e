// Objectif 4 : connaître l'élément déclencheur de la guerre (fiche p. 10, 4d)
import {qcm, vf, multi, order, rows, classify, gap, ex} from './helpers.js';

export default {
  id: 4,
  title: 'L’élément déclencheur',
  subtitle: 'L’attentat de Sarajevo et l’engrenage des alliances',
  ref: 'Manuel p. 29, fiche p. 10',
  rappel: [
    '**28 juin 1914, Sarajevo** (Bosnie, annexée par l’Autriche-Hongrie en 1908) : l’archiduc **François-Ferdinand**, héritier de l’Autriche-Hongrie, et son épouse Sophie sont assassinés.',
    'L’assassin, **Gavrilo Princip** (19 ans), est un nationaliste serbe de Bosnie, armé par une société secrète serbe, la **Main noire**.',
    '**Ultimatum** de l’Autriche-Hongrie à la Serbie (23 juillet), puis **déclaration de guerre** (28 juillet).',
    '**L’engrenage** : la Russie soutient la Serbie, l’Allemagne soutient l’Autriche-Hongrie et déclare la guerre à la Russie puis à la France ; elle envahit la Belgique ; le Royaume-Uni entre en guerre (1er-4 août).',
    'Les tensions et les alliances sont le **baril de poudre** ; l’attentat est l’**étincelle**.'
  ],
  levels: {
    1: [
      ex('L’attentat de Sarajevo', [
        qcm('Où a lieu l’attentat qui déclenche la guerre ?', 'À Sarajevo, en Bosnie', ['À Paris', 'À Berlin', 'À Genève'],
          'Sarajevo est la capitale de la Bosnie-Herzégovine, une région annexée par l’Autriche-Hongrie en 1908.'),
        qcm('Qui est assassiné ?', 'L’archiduc François-Ferdinand, héritier du trône d’Autriche-Hongrie', ['Le tsar de Russie', 'Le roi de Serbie', 'L’empereur d’Allemagne'],
          'François-Ferdinand devait devenir empereur d’Autriche-Hongrie. Sa femme, Sophie, est tuée avec lui.'),
        qcm('Qui est l’assassin ?', 'Gavrilo Princip, un jeune nationaliste serbe de Bosnie', ['Un soldat français', 'Un espion russe', 'Un anarchiste suisse'],
          'Gavrilo Princip a 19 ans. Il fait partie d’un groupe de jeunes (la « Jeune Bosnie ») qui veulent libérer la Bosnie de l’Autriche-Hongrie et la réunir à la Serbie.'),
        qcm('Quelle est la date de l’attentat ?', 'Le 28 juin 1914', ['Le 1er août 1914', 'Le 11 novembre 1918', 'Le 28 juin 1919'],
          'Le 28 juin 1914. Cinq ans plus tard, jour pour jour, on signera le traité de Versailles.'),
        qcm('Quel pays l’Autriche-Hongrie accuse-t-elle d’être derrière l’attentat ?', 'La Serbie', ['La France', 'La Russie', 'L’Italie'],
          'Les armes venaient d’une société secrète serbe, la Main noire, liée à des officiers serbes. L’Autriche-Hongrie en profite pour vouloir écraser la Serbie.'),
        qcm('Qu’envoie l’Autriche-Hongrie à la Serbie le 23 juillet 1914 ?', 'Un ultimatum', ['Des excuses', 'Une aide financière', 'Une invitation à la paix'],
          'Un ultimatum est une liste d’exigences à accepter dans un délai très court (48 heures), sinon c’est la guerre.')
      ], {pick: 4}),
      ex('Vrai ou faux ?', [
        vf('L’attentat de Sarajevo est la seule cause de la guerre.', false,
          'Faux. C’est l’élément déclencheur. Les causes profondes sont les tensions d’avant 1914 (objectif 2) et le système des alliances.'),
        vf('L’archiduc assassiné était l’héritier du trône d’Autriche-Hongrie.', true,
          'Vrai. C’est pour cela que l’attentat est si grave pour l’Autriche-Hongrie.'),
        vf('Le matin de l’attentat, une première bombe a raté la voiture de l’archiduc.', true,
          'Vrai. Un complice lance une bombe qui rebondit et explose sous la voiture suivante. Plus tard, après une erreur de parcours du chauffeur, la voiture s’arrête devant Princip.'),
        vf('La Serbie accepte toutes les exigences de l’ultimatum.', false,
          'Faux. La Serbie accepte presque tout, mais refuse que des policiers autrichiens enquêtent sur son territoire. L’Autriche-Hongrie lui déclare la guerre le 28 juillet 1914.')
      ], {pick: 3}),
      ex('La métaphore du baril de poudre', [
        gap('On compare l’Europe de 1914 à un {{baril de poudre|lac tranquille|château fort}} : les tensions et les {{alliances|colonies|élections}} sont prêtes à exploser. L’attentat de Sarajevo est l’{{étincelle|eau|armistice}} qui met le feu.',
          'Ta fiche p. 10 (4d) : « Les alliances sont un baril de poudre et l’attentat de Sarajevo l’étincelle qui fait tout exploser. » Une petite étincelle suffit, parce que la poudre (les tensions et les alliances) est déjà là.')
      ])
    ],
    2: [
      ex('L’engrenage des alliances', [
        order('Range ces étapes dans l’ordre.', ['Attentat de Sarajevo', 'Ultimatum de l’Autriche-Hongrie à la Serbie', 'L’Autriche-Hongrie déclare la guerre à la Serbie', 'La Russie mobilise pour défendre la Serbie', 'L’Allemagne déclare la guerre à la Russie, puis à la France', 'L’Allemagne envahit la Belgique', 'Le Royaume-Uni déclare la guerre à l’Allemagne'],
          '28 juin, 23 juillet, 28 juillet, fin juillet, 1er et 3 août, 4 août, 4 août 1914. En cinq semaines, un attentat devient une guerre européenne.')
      ]),
      ex('Qui soutient qui ?', [
        rows('Complète chaque phrase.', [
          ['La Serbie est soutenue par…', 'la Russie'],
          ['L’Autriche-Hongrie est soutenue par…', 'l’Allemagne'],
          ['La Russie est alliée de…', 'la France'],
          ['La Belgique, neutre et envahie, est défendue par…', 'le Royaume-Uni']
        ], ['la Russie', 'l’Allemagne', 'la France', 'le Royaume-Uni', 'l’Italie'],
        'Chaque pays entraîne son allié : Serbie → Russie → France ; Autriche-Hongrie → Allemagne ; l’invasion de la Belgique fait entrer le Royaume-Uni. L’Italie, elle, reste neutre.')
      ]),
      ex('Comprendre', [
        qcm('Pourquoi le Royaume-Uni entre-t-il en guerre ?', 'L’Allemagne a envahi la Belgique, un pays neutre', ['La Serbie le lui demande', 'L’Autriche-Hongrie l’attaque', 'L’Italie l’envahit'],
          'Le Royaume-Uni s’était engagé à protéger la neutralité belge. Il ne veut pas non plus que l’Allemagne contrôle les côtes de la mer du Nord, face à l’Angleterre.'),
        qcm('Qu’est-ce qu’un ultimatum ?', 'Une liste d’exigences à accepter très vite, sinon c’est la guerre', ['Un traité de paix', 'Une déclaration de neutralité', 'Un journal de propagande'],
          'L’ultimatum autrichien du 23 juillet 1914 laisse 48 heures à la Serbie. Certaines exigences étaient faites pour être refusées.'),
        qcm('Pourquoi Gavrilo Princip n’est-il pas condamné à mort ?', 'Il est trop jeune : il n’a pas 20 ans', ['Il s’est enfui en Suisse', 'La Serbie l’a protégé', 'Il a été acquitté'],
          'La loi autrichienne interdisait la peine de mort pour les moins de 20 ans. Princip, 19 ans, est condamné à 20 ans de prison ; il meurt de maladie en prison en 1918.'),
        qcm('Que veulent les nationalistes serbes de Bosnie ?', 'Libérer la Bosnie de l’Autriche-Hongrie et la réunir à la Serbie', ['Que la Bosnie devienne allemande', 'Que la Serbie rejoigne la Triple Alliance', 'Que la Bosnie devienne neutre comme la Suisse'],
          'Beaucoup de Serbes vivent en Bosnie, annexée par l’Autriche-Hongrie en 1908. Ils rêvent d’un grand État des Slaves du Sud autour de la Serbie.')
      ], {pick: 3}),
      ex('Vrai ou faux ?', [
        vf('L’Allemagne déclare la guerre à la Russie, puis à la France.', true,
          'Vrai : à la Russie le 1er août, à la France le 3 août 1914.'),
        vf('Le Royaume-Uni entre en guerre pour défendre la Serbie.', false,
          'Faux. Il entre en guerre parce que l’Allemagne envahit la Belgique, un pays neutre.'),
        vf('L’Autriche-Hongrie déclare la guerre à la Serbie le jour même de l’attentat.', false,
          'Faux. Elle le fait le 28 juillet 1914, un mois après l’attentat, après l’ultimatum.'),
        vf('L’archiduc est assassiné avec sa femme.', true,
          'Vrai. Sophie, duchesse de Hohenberg, meurt aussi.'),
        vf('La Russie mobilise son armée pour soutenir la Serbie.', true,
          'Vrai. C’est ce qui pousse l’Allemagne, alliée de l’Autriche-Hongrie, à déclarer la guerre à la Russie.')
      ], {pick: 3})
    ],
    3: [
      ex('Cause profonde ou élément déclencheur ?', [
        classify('Range chaque élément.', ['Cause profonde', 'Élément déclencheur'], [
          ['L’assassinat de François-Ferdinand', 1], ['Les rivalités économiques', 0], ['La course aux armements', 0],
          ['Le système des alliances', 0], ['Les nationalismes dans les Balkans', 0], ['L’esprit de revanche français', 0]
        ], 'Une seule étincelle, l’attentat ; mais beaucoup de poudre : les causes profondes accumulées pendant des années.')
      ]),
      ex('Aller plus loin', [
        qcm('Le « chèque en blanc » (juillet 1914) : que promet l’Allemagne à l’Autriche-Hongrie ?', 'De la soutenir quoi qu’elle fasse contre la Serbie', ['De lui payer la guerre', 'De rester neutre', 'De lui rendre l’Alsace'],
          'Sûre du soutien allemand, l’Autriche-Hongrie ose un ultimatum très dur à la Serbie, au risque d’une guerre avec la Russie.'),
        qcm('Pourquoi une petite étincelle provoque-t-elle une si grande explosion ?', 'Les alliances entraînent les pays les uns après les autres dans la guerre', ['Parce que l’archiduc était très populaire en France', 'Parce que la Serbie était la plus grande puissance', 'Parce que la Suisse a déclaré la guerre'],
          'Sans les alliances, l’attentat aurait pu rester un conflit entre l’Autriche-Hongrie et la Serbie.'),
        qcm('Pourquoi l’Allemagne attaque-t-elle la France en passant par la Belgique ?', 'Pour contourner les défenses françaises et battre la France très vite, avant de se tourner vers la Russie', ['Parce que la Belgique l’a attaquée', 'Pour rejoindre la Suisse', 'Parce que la Belgique était son alliée'],
          'C’est le plan Schlieffen : vaincre la France en quelques semaines, puis tout envoyer contre la Russie. Il échoue à la bataille de la Marne (septembre 1914).'),
        qcm('En combien de temps passe-t-on de l’attentat à une guerre entre les grandes puissances ?', 'Un peu plus d’un mois', ['Une journée', 'Un an', 'Trois ans'],
          'Du 28 juin au 1er-4 août 1914 : cinq semaines, appelées la « crise de juillet ».')
      ], {pick: 3}),
      ex('Qui est en guerre début août 1914 ?', [
        multi('Coche les pays en guerre au 5 août 1914.', ['Autriche-Hongrie', 'Serbie', 'Allemagne', 'Russie', 'France', 'Belgique', 'Royaume-Uni'], ['Italie', 'Suisse', 'États-Unis', 'Empire ottoman'],
          'Au 5 août 1914 : Autriche-Hongrie et Allemagne d’un côté ; Serbie, Russie, France, Belgique et Royaume-Uni de l’autre. L’Italie et l’Empire ottoman ne sont pas encore entrés en guerre ; la Suisse reste neutre.')
      ]),
      ex('Vrai ou faux ? (pièges)', [
        vf('L’Allemagne pensait battre la France en quelques semaines.', true,
          'Vrai. C’est le plan Schlieffen. Beaucoup de soldats partent en croyant être rentrés « pour Noël ».'),
        vf('Sans le système d’alliances, l’attentat aurait pu rester un conflit entre l’Autriche-Hongrie et la Serbie.', true,
          'Vrai. C’est tout le sens de la métaphore du baril de poudre.'),
        vf('La Main noire est une société secrète autrichienne.', false,
          'Faux. C’est une société secrète serbe, liée à des officiers de l’armée serbe.'),
        vf('L’Italie déclare la guerre à la Serbie en 1914.', false,
          'Faux. L’Italie reste neutre en 1914.')
      ], {pick: 3})
    ]
  },
  master: [
    order('Range ces étapes dans l’ordre.', ['Attentat de Sarajevo', 'Ultimatum à la Serbie', 'L’Autriche-Hongrie déclare la guerre à la Serbie', 'L’Allemagne déclare la guerre à la Russie', 'Le Royaume-Uni déclare la guerre à l’Allemagne'],
      '28 juin, 23 juillet, 28 juillet, 1er août, 4 août 1914.'),
    qcm('Explique la métaphore « Les alliances sont un baril de poudre et l’attentat de Sarajevo l’étincelle ».', 'Les tensions et les alliances rendent la guerre prête à éclater ; l’attentat suffit à tout déclencher', ['L’attentat a été commis avec de la poudre à canon', 'Les alliances ont empêché la guerre', 'La Serbie possédait la plus grande réserve de poudre'],
      'C’est la question 4d de ta fiche. Une étincelle ne fait exploser que s’il y a déjà de la poudre.'),
    vf('L’Italie, membre de la Triple Alliance, entre en guerre en août 1914 pour aider l’Allemagne.', false,
      'Faux. L’Italie reste neutre en 1914 et rejoint les Alliés en 1915.')
  ],
  cours: [
    {h: 'Le 28 juin 1914 à Sarajevo'},
    {p: 'Sarajevo est la capitale de la **Bosnie-Herzégovine**, que l’Autriche-Hongrie a annexée en 1908. Beaucoup de Serbes y vivent et rêvent d’être rattachés à la **Serbie**.'},
    {p: 'Ce jour-là, l’**archiduc François-Ferdinand**, héritier du trône d’Autriche-Hongrie, visite la ville avec sa femme Sophie. Le matin, une bombe rate leur voiture. Plus tard, après une erreur de parcours, la voiture s’arrête devant **Gavrilo Princip**, 19 ans, nationaliste serbe de Bosnie, qui tire deux coups de pistolet : l’archiduc et sa femme meurent.'},
    {p: 'Princip et ses complices ont reçu leurs armes de la **Main noire**, une société secrète serbe liée à des officiers. Trop jeune pour être condamné à mort, Princip est condamné à 20 ans de prison.'},
    {h: 'L’engrenage : cinq semaines pour une guerre mondiale'},
    {table: {head: ['Date (1914)', 'Événement'], rows: [
      ['28 juin', 'Attentat de Sarajevo'],
      ['5-6 juillet', 'L’Allemagne promet son soutien total à l’Autriche-Hongrie (« chèque en blanc »)'],
      ['23 juillet', 'Ultimatum de l’Autriche-Hongrie à la Serbie'],
      ['28 juillet', 'L’Autriche-Hongrie déclare la guerre à la Serbie'],
      ['Fin juillet', 'La Russie mobilise son armée pour défendre la Serbie'],
      ['1er et 3 août', 'L’Allemagne déclare la guerre à la Russie, puis à la France'],
      ['4 août', 'L’Allemagne envahit la Belgique neutre ; le Royaume-Uni lui déclare la guerre']
    ]}},
    {h: 'Le baril de poudre et l’étincelle'},
    {p: 'Ta fiche p. 10 compare les **alliances** et les **tensions** à un **baril de poudre**, et l’attentat à l’**étincelle**. L’attentat seul n’aurait pas provoqué une guerre mondiale : c’est parce que l’Europe était déjà divisée et armée que chaque pays a entraîné son allié.'},
    {keys: [
      '**Élément déclencheur** : l’attentat de Sarajevo (28 juin 1914).',
      '**Causes profondes** : rivalités, course aux armements, nationalismes, alliances (objectif 2).',
      '**Engrenage** : Serbie → Russie → France ; Autriche-Hongrie → Allemagne ; Belgique envahie → Royaume-Uni.'
    ]},
    {warn: [
      'L’attentat n’est pas « la cause » de la guerre : c’est le **déclencheur**.',
      'L’Italie, pourtant dans la Triple Alliance, **n’entre pas en guerre** en 1914.'
    ]},
    {quiz: qcm('À toi : pourquoi la Russie mobilise-t-elle son armée fin juillet 1914 ?', 'Pour défendre la Serbie attaquée par l’Autriche-Hongrie', ['Pour attaquer la Suisse', 'Pour aider l’Allemagne', 'Pour venger l’archiduc'],
      'La Russie se veut la protectrice des Serbes et des peuples slaves.')}
  ],
  sources: ['fiche', 'wikiSarajevo', 'wikiChrono', 'wikiCauses', 'wikiMarne']
};
