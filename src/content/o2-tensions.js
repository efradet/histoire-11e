// Objectif 2 : expliquer le climat de tension avant la guerre (manuel p. 29-30, fiche p. 10)
import {qcm, vf, multi, order, rows, classify, gap, ex} from './helpers.js';

export default {
  id: 2,
  title: 'Le climat de tension',
  subtitle: 'Rivalités, course aux armements et alliances avant 1914',
  ref: 'Manuel p. 29-30, fiche p. 10',
  rappel: [
    '**Rivalités économiques** : le Royaume-Uni s’inquiète de la puissance industrielle et commerciale de l’Allemagne.',
    '**Rivalités coloniales** : l’Allemagne réclame « sa place au soleil » face aux grands empires britannique et français (crises du Maroc, 1905 et 1911).',
    '**Course aux armements** : flottes de guerre géantes, armées toujours plus grandes.',
    '**Esprit de revanche** : la France veut reprendre l’Alsace-Lorraine, perdue en 1871.',
    '**Rivalités dans les Balkans** : l’Autriche-Hongrie contre la Russie, protectrice des Serbes et des Slaves.',
    '**Deux alliances** face à face : la Triple Alliance et la Triple Entente. On parle de **paix armée**.'
  ],
  levels: {
    1: [
      ex('Qui s’oppose à qui ?', [
        rows('Associe chaque rivalité aux pays concernés.', [
          ['Rivalité économique (industrie, commerce)', 'Royaume-Uni et Allemagne'],
          ['Esprit de revanche (Alsace-Lorraine)', 'France et Allemagne'],
          ['Rivalité dans les Balkans', 'Autriche-Hongrie et Russie'],
          ['Crises du Maroc (colonies)', 'France et Allemagne'],
          ['Course aux navires de guerre', 'Royaume-Uni et Allemagne']
        ], ['Royaume-Uni et Allemagne', 'France et Allemagne', 'Autriche-Hongrie et Russie', 'Italie et Suisse'],
        'Ta fiche p. 10 : rivalités économiques (doc. 2) entre le Royaume-Uni et l’Allemagne ; esprit de revanche (doc. 1) entre la France et l’Allemagne ; rivalités territoriales (doc. 5) entre l’Autriche-Hongrie et la Russie. L’Allemagne est au centre de presque toutes les tensions.', {pickRows: 4})
      ]),
      ex('Questions de cours', [
        qcm('Quelle région la France a-t-elle perdue en 1871 au profit de l’Allemagne ?', 'L’Alsace-Lorraine', ['La Savoie', 'La Bretagne', 'La Corse'],
          'Après sa défaite de 1870-1871, la France doit céder l’Alsace et une partie de la Lorraine à l’Empire allemand. Beaucoup de Français rêvent de les reprendre : c’est l’esprit de revanche.'),
        qcm('Que signifie « course aux armements » ?', 'Les pays fabriquent toujours plus d’armes et agrandissent leur armée pour ne pas être plus faibles que leurs rivaux', ['Une compétition sportive entre soldats', 'Les pays vendent leurs armes à la Suisse', 'Les pays détruisent leurs armes pour faire la paix'],
          'Chaque pays a peur de l’autre et s’arme davantage, ce qui fait encore plus peur au voisin. Exemple : en 1913, la France allonge le service militaire à trois ans et l’Allemagne agrandit son armée.'),
        qcm('Que veut l’Allemagne quand elle réclame « sa place au soleil » ?', 'Des colonies, comme le Royaume-Uni et la France', ['Des vacances pour ses soldats', 'Conquérir l’Espagne', 'Quitter l’Europe'],
          'L’Allemagne est devenue un pays puissant mais elle a peu de colonies. Elle veut un empire colonial, ce qui l’oppose au Royaume-Uni et à la France, qui possèdent les plus grands.'),
        qcm('Pourquoi le Royaume-Uni s’inquiète-t-il de l’Allemagne ?', 'L’Allemagne devient une grande puissance industrielle et construit une grande flotte de guerre', ['L’Allemagne veut envahir l’Irlande', 'L’Allemagne refuse de lui vendre du charbon', 'L’Allemagne est alliée à la France'],
          'Avant 1914, l’Allemagne produit plus d’acier que le Royaume-Uni et ses produits concurrencent les produits anglais dans le monde. Sa flotte menace la maîtrise des mers britannique.'),
        qcm('Quel pays se présente comme le protecteur des Serbes et des peuples slaves ?', 'La Russie', ['La France', 'L’Allemagne', 'L’Italie'],
          'La Russie est le plus grand pays slave. Elle soutient la Serbie face à l’Autriche-Hongrie, qui domine plusieurs peuples slaves dans les Balkans.'),
        qcm('Quelles puissances possèdent les plus grands empires coloniaux en 1914 ?', 'Le Royaume-Uni et la France', ['L’Allemagne et l’Autriche-Hongrie', 'La Suisse et la Belgique', 'La Russie et l’Italie'],
          'L’Empire britannique est le plus grand empire du monde ; la France possède un vaste empire en Afrique et en Asie. L’Allemagne arrive trop tard dans le partage.'),
        qcm('Comment appelle-t-on la période avant 1914, en paix mais où tout le monde s’arme ?', 'La paix armée', ['La guerre froide', 'La guerre totale', 'La neutralité'],
          'Les grandes puissances ne se font pas la guerre, mais elles s’arment et forment des alliances : la paix est fragile.')
      ], {pick: 4}),
      ex('Vrai ou faux ?', [
        vf('Avant 1914, les grandes puissances se méfient les unes des autres et forment des alliances.', true,
          'Vrai. Pour ne pas se retrouver seule face à un ennemi, chaque puissance cherche des alliés : Triple Alliance d’un côté, Triple Entente de l’autre.'),
        vf('En 1914, l’Allemagne n’a presque pas d’industrie.', false,
          'Faux. L’Allemagne est devenue une des premières puissances industrielles du monde : elle produit plus d’acier que le Royaume-Uni.'),
        vf('En 1914, les Balkans sont une région calme.', false,
          'Faux. Les Balkans sortent de deux guerres (1912 et 1913). On les surnomme « la poudrière de l’Europe ».'),
        vf('Beaucoup de Français rêvent de reprendre l’Alsace-Lorraine.', true,
          'Vrai. C’est l’esprit de revanche, qui oppose la France à l’Allemagne depuis 1871.'),
        vf('Une alliance oblige les alliés à s’aider en cas de guerre.', true,
          'Vrai. C’est pour cela qu’un conflit entre deux pays peut entraîner tous leurs alliés.'),
        vf('La Triple Entente réunit l’Allemagne, l’Autriche-Hongrie et l’Italie.', false,
          'Faux. Ce sont les pays de la Triple Alliance. La Triple Entente réunit la France, le Royaume-Uni et la Russie.')
      ], {pick: 4})
    ],
    2: [
      ex('Classe les tensions', [
        classify('Range chaque fait dans le bon type de tension.', ['Économique', 'Coloniale', 'Militaire', 'Nationaliste ou territoriale'], [
          ['L’Allemagne produit plus d’acier que le Royaume-Uni', 0],
          ['Les produits allemands concurrencent les produits anglais dans le monde', 0],
          ['Crises du Maroc entre la France et l’Allemagne (1905 et 1911)', 1],
          ['L’Allemagne réclame des colonies (« sa place au soleil »)', 1],
          ['Le Royaume-Uni et l’Allemagne construisent des cuirassés géants', 2],
          ['En 1913, la France allonge le service militaire à trois ans', 2],
          ['L’Autriche-Hongrie annexe la Bosnie-Herzégovine (1908)', 3],
          ['La France veut reprendre l’Alsace-Lorraine', 3],
          ['La Serbie veut réunir les Slaves du Sud', 3]
        ], 'Économique : industrie et commerce. Coloniale : partage du monde. Militaire : armes et armées. Nationaliste ou territoriale : peuples et frontières (Balkans, Alsace-Lorraine).', {pickRows: 6})
      ]),
      ex('Texte à trous', [
        gap('Avant 1914, la France et l’Allemagne sont rivales car la France a perdu l’{{Alsace-Lorraine|Savoie|Normandie}} en 1871 : c’est l’esprit de {{revanche|paix|neutralité}}. Le {{Royaume-Uni|Portugal|Danemark}} craint la puissance industrielle et la flotte de l’Allemagne. Dans les {{Balkans|Alpes|pays scandinaves}}, l’Autriche-Hongrie s’oppose à la {{Russie|France|Suisse}}. Pour se protéger, les puissances forment des {{alliances|colonies|républiques}}.',
          'Les quatre grandes tensions de ta fiche p. 10 : revanche (France-Allemagne), rivalités économiques (Royaume-Uni-Allemagne), rivalités territoriales dans les Balkans (Autriche-Hongrie-Russie), et le système des alliances.')
      ]),
      ex('Comprendre', [
        qcm('Pourquoi appelle-t-on les Balkans « la poudrière de l’Europe » ?', 'Les tensions y sont si fortes qu’une petite étincelle peut provoquer une guerre', ['On y fabrique la poudre des fusils', 'C’est une région désertique', 'C’est la région la plus riche d’Europe'],
          'Plusieurs peuples (Serbes, Bosniaques, Croates, Bulgares…) veulent leur propre État, et l’Autriche-Hongrie et la Russie s’y disputent l’influence. C’est d’ailleurs là qu’éclate l’étincelle : Sarajevo.'),
        qcm('Ta fiche p. 10 (doc. 3) : l’Allemagne veut une grande flotte et des colonies. Avec quelles puissances cela crée-t-il des rivalités ?', 'Le Royaume-Uni (maître des mers) et la France (grand empire colonial)', ['L’Autriche-Hongrie et l’Italie', 'La Suisse et la Belgique', 'La Russie seulement'],
          'Une grande flotte allemande menace la maîtrise des mers du Royaume-Uni ; des colonies allemandes se feraient au détriment des empires britannique et français.'),
        qcm('Pourquoi les alliances rendent-elles la situation dangereuse ?', 'Un conflit entre deux pays peut entraîner tous leurs alliés dans la guerre', ['Elles obligent les pays à désarmer', 'Elles empêchent tout commerce', 'Elles rendent la guerre impossible'],
          'C’est exactement ce qui se passe en 1914 : un conflit entre l’Autriche-Hongrie et la Serbie devient une guerre européenne en une semaine.'),
        qcm('Qu’est-ce que le nationalisme ?', 'Un fort attachement à sa nation, qui peut aller jusqu’au mépris des autres peuples', ['Le fait de vivre à la campagne', 'Le refus de toute armée', 'L’amitié entre tous les pays d’Europe'],
          'Le nationalisme pousse chaque peuple à se croire supérieur ou menacé. Dans les Balkans, il pousse aussi des peuples à réclamer leur indépendance.')
      ], {pick: 3}),
      ex('Vrai ou faux ?', [
        vf('La France et la Russie sont alliées avant 1914.', true,
          'Vrai. Depuis 1892-1894. L’Allemagne craint d’être prise en tenaille entre la France à l’ouest et la Russie à l’est.'),
        vf('Le Royaume-Uni et l’Allemagne se disputent la maîtrise des mers.', true,
          'Vrai. Le Royaume-Uni veut une flotte plus forte que toutes les autres ; l’Allemagne construit la sienne pour le rattraper.'),
        vf('L’Autriche-Hongrie et la Russie s’entendent bien dans les Balkans.', false,
          'Faux. Elles s’y disputent l’influence : l’Autriche-Hongrie domine des peuples slaves que la Russie veut protéger.'),
        vf('Les crises du Maroc opposent la France et l’Allemagne.', true,
          'Vrai : Tanger (1905) et Agadir (1911). Ce sont des rivalités coloniales.'),
        vf('Avant 1914, la Suisse fait partie de la Triple Entente.', false,
          'Faux. La Suisse est neutre depuis 1815 : elle n’appartient à aucune alliance.')
      ], {pick: 3})
    ],
    3: [
      ex('L’enchaînement des tensions', [
        order('Range ces faits pour montrer comment naît la Triple Entente.', ['L’Allemagne devient une grande puissance industrielle', 'Elle veut des colonies et une grande flotte de guerre', 'Le Royaume-Uni se sent menacé', 'Le Royaume-Uni se rapproche de la France et de la Russie', 'La Triple Entente est formée (1907)'],
          'Chaque étape provoque la suivante : la puissance allemande inquiète le Royaume-Uni, qui abandonne son « splendide isolement » et s’entend avec la France (1904) puis avec la Russie (1907).'),
        order('Range ces faits pour montrer comment la France trouve des alliés.', ['La France perd l’Alsace-Lorraine (1871)', 'La France veut sa revanche mais se sent seule face à l’Allemagne', 'Alliance avec la Russie (1892-1894)', 'Entente cordiale avec le Royaume-Uni (1904)', 'Triple Entente (1907)'],
          'Isolée après 1871, la France cherche des alliés : d’abord la Russie, puis le Royaume-Uni. Ensemble, avec l’accord anglo-russe de 1907, ils forment la Triple Entente.')
      ], {pick: 1}),
      ex('Causes profondes', [
        multi('Coche toutes les causes profondes de la guerre (pas l’élément déclencheur).', ['Les rivalités économiques', 'Les rivalités coloniales', 'La course aux armements', 'Les nationalismes', 'Le système des alliances'], ['L’attentat de Sarajevo', 'La révolution russe', 'Le traité de Versailles'],
          'Les causes profondes s’installent pendant des années. L’attentat de Sarajevo est l’élément déclencheur ; la révolution russe et le traité de Versailles arrivent pendant et après la guerre.')
      ]),
      ex('Quelle tension ce fait illustre-t-il ?', [
        qcm('En 1911, l’Allemagne envoie un navire de guerre, la Panther, à Agadir, au Maroc, où la France veut s’installer. Quelle tension cela montre-t-il ?', 'Une rivalité coloniale entre la France et l’Allemagne', ['Une rivalité économique entre le Royaume-Uni et l’Allemagne', 'Une révolution en Russie', 'Un conflit dans les Balkans'],
          'C’est la deuxième crise marocaine. La guerre est évitée de justesse : l’Allemagne reçoit une partie du Congo en échange.'),
        qcm('En 1906, le Royaume-Uni lance le Dreadnought, un cuirassé plus puissant que tous les autres ; l’Allemagne construit aussitôt les siens. Quelle tension ?', 'La course aux armements sur mer', ['L’esprit de revanche', 'La rivalité dans les Balkans', 'La neutralité'],
          'Chaque cuirassé construit par l’un pousse l’autre à en construire davantage : c’est la course navale entre le Royaume-Uni et l’Allemagne.'),
        qcm('En 1908, l’Autriche-Hongrie annexe la Bosnie-Herzégovine, où vivent beaucoup de Serbes. Qui est furieux ?', 'La Serbie, soutenue par la Russie', ['La France, soutenue par le Royaume-Uni', 'L’Italie, soutenue par l’Allemagne', 'La Suisse'],
          'La Serbie rêve de réunir les Slaves du Sud. L’annexion de la Bosnie la révolte. Six ans plus tard, c’est à Sarajevo, capitale de la Bosnie, que l’archiduc est assassiné.'),
        qcm('Pourquoi ces tensions, à elles seules, n’ont-elles pas déclenché la guerre avant 1914 ?', 'Il fallait encore un événement déclencheur : ce sera l’attentat de Sarajevo', ['Parce qu’il n’y avait pas d’armes', 'Parce que la Suisse empêchait la guerre', 'Parce que tous les pays étaient alliés'],
          'Les tensions forment le « baril de poudre » ; il manque l’étincelle. Plusieurs crises (Maroc, Balkans) ont failli dégénérer avant 1914.')
      ], {pick: 3}),
      ex('Vrai ou faux ? (pièges)', [
        vf('La Triple Entente est une alliance aussi solide que la Triple Alliance dès sa création.', false,
          'Faux. La Triple Entente est d’abord un ensemble d’accords (« entente ») plus souples. La Triple Alliance de 1882 est un vrai traité d’alliance. Mais en 1914, l’Entente tiendra.'),
        vf('L’Italie fait partie de la Triple Alliance avant la guerre.', true,
          'Vrai. L’Italie est membre de la Triple Alliance depuis 1882… mais elle restera neutre en 1914, puis rejoindra les Alliés en 1915.'),
        vf('La course aux armements rassure les pays et rend la guerre moins probable.', false,
          'Faux. Elle augmente la peur : chacun croit que l’autre se prépare à attaquer.')
      ], {pick: 2})
    ]
  },
  master: [
    classify('Range chaque fait dans le bon type de tension.', ['Économique', 'Coloniale', 'Militaire', 'Nationaliste ou territoriale'], [
      ['Concurrence entre produits allemands et anglais', 0], ['Crise d’Agadir (1911)', 1], ['Course aux cuirassés', 2], ['Annexion de la Bosnie-Herzégovine', 3]
    ], 'Économique : commerce. Coloniale : Maroc. Militaire : flottes. Territoriale : Balkans.'),
    qcm('Quelle puissance est au cœur de presque toutes les tensions d’avant 1914 ?', 'L’Allemagne', ['La Suisse', 'L’Espagne', 'Les États-Unis'],
      'L’Allemagne est en rivalité avec le Royaume-Uni (économie, flotte), la France (revanche, colonies) et, à travers son allié autrichien, avec la Russie.'),
    gap('La France s’allie à la {{Russie|Italie|Suisse}}, puis s’entend avec le {{Royaume-Uni|Portugal|Danemark}} : ces trois pays forment la Triple {{Entente|Alliance|Couronne}}.',
      'Alliance franco-russe (1892-1894), Entente cordiale (1904), Triple Entente (1907).')
  ],
  cours: [
    {h: 'Une Europe puissante… et inquiète'},
    {p: 'En 1914, l’Europe domine le monde. Mais ses grandes puissances se méfient les unes des autres. Ta fiche p. 10 relève plusieurs **indices de tension**.'},
    {table: {head: ['Tension', 'Qui ?', 'Pourquoi ?'], rows: [
      ['**Rivalités économiques**', 'Royaume-Uni et Allemagne', 'L’Allemagne devient une grande puissance industrielle (plus d’acier que le Royaume-Uni) et ses produits concurrencent les produits anglais.'],
      ['**Rivalités coloniales**', 'Allemagne contre France et Royaume-Uni', 'L’Allemagne veut « sa place au soleil » : des colonies. Crises du Maroc (Tanger 1905, Agadir 1911).'],
      ['**Course aux armements**', 'Toutes les puissances', 'Flottes géantes (cuirassés de type Dreadnought, 1906), armées agrandies, service militaire de trois ans en France (1913).'],
      ['**Esprit de revanche**', 'France et Allemagne', 'La France a perdu l’Alsace-Lorraine en 1871 et veut la reprendre.'],
      ['**Rivalités dans les Balkans**', 'Autriche-Hongrie et Russie (avec la Serbie)', 'L’Autriche-Hongrie annexe la Bosnie (1908) ; la Serbie veut réunir les Slaves du Sud ; la Russie la protège.']
    ]}},
    {h: 'Les nationalismes'},
    {p: 'Le **nationalisme** est un fort attachement à sa nation, qui peut aller jusqu’au mépris des autres. Les **pangermanistes** veulent réunir tous les Allemands ; les **panslavistes** (Russie, Serbie) veulent unir les Slaves. Dans les Balkans, plusieurs peuples réclament leur propre État : on surnomme la région « la **poudrière** de l’Europe ».'},
    {h: 'Deux blocs d’alliances'},
    {table: {head: ['Triple Alliance (1882)', 'Triple Entente (1907)'], rows: [
      ['Allemagne', 'France'], ['Autriche-Hongrie', 'Royaume-Uni'], ['Italie', 'Russie']
    ]}},
    {p: 'La Triple Entente se forme par étapes : alliance **franco-russe** (1892-1894), **Entente cordiale** franco-britannique (1904), accord **anglo-russe** (1907). Chaque bloc doit défendre ses membres : c’est la **paix armée**.'},
    {keys: [
      'Les tensions sont **économiques, coloniales, militaires et nationalistes**.',
      'L’**Allemagne** est au centre de presque toutes les rivalités.',
      'Les **alliances** transforment un conflit local en guerre européenne.'
    ]},
    {warn: [
      'Ne confonds pas **Triple Alliance** (Allemagne, Autriche-Hongrie, Italie) et **Triple Entente** (France, Royaume-Uni, Russie).',
      'Les tensions sont les **causes profondes** ; l’attentat de Sarajevo est l’**élément déclencheur** (objectif 4).'
    ]},
    {quiz: qcm('À toi : quelle tension oppose surtout la France à l’Allemagne ?', 'L’esprit de revanche (Alsace-Lorraine)', ['La rivalité dans les Balkans', 'La course aux cuirassés avec le Royaume-Uni', 'La protection des Slaves'],
      'La France veut reprendre l’Alsace-Lorraine perdue en 1871. (Les crises du Maroc les opposent aussi, sur le plan colonial.)')}
  ],
  sources: ['fiche', 'wikiCauses']
};
