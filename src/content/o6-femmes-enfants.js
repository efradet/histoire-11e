// Objectif 6 : l'implication des femmes et des enfants durant le conflit (manuel p. 34-35, fiche p. 12)
import {qcm, vf, multi, classify, ex} from './helpers.js';

export default {
  id: 6,
  title: 'Les femmes et les enfants',
  subtitle: 'À l’arrière, pendant et après la guerre',
  ref: 'Manuel p. 28, 34-35, 39, fiche p. 12',
  rappel: [
    'Les hommes partent au front : les **femmes les remplacent** aux champs, dans les **usines d’armement** (les « munitionnettes »), les transports, les bureaux, les commerces.',
    'Elles sont aussi **infirmières** et **marraines de guerre** (lettres et colis aux soldats). Elles sont **moins payées** que les hommes.',
    'Les **enfants** : l’école parle de la guerre (propagande), ils aident aux champs, participent aux collectes ; beaucoup perdent leur père.',
    '**Après 1918** : beaucoup de femmes doivent rendre leur emploi aux soldats revenus. Le droit de vote progresse (Royaume-Uni et Allemagne 1918, États-Unis 1920), mais pas en France (1944) ni en Suisse (1971).',
    '**En Suisse** : pas de combats, mais les hommes mobilisés sont remplacés par les femmes à la ferme, au commerce, à l’usine.'
  ],
  levels: {
    1: [
      ex('Qui fait quoi ?', [
        classify('Ces activités sont-elles surtout celles des femmes ou des enfants ?', ['Femmes', 'Enfants'], [
          ['Fabriquer des obus dans les usines d’armement', 0],
          ['Conduire les tramways', 0],
          ['Soigner les blessés comme infirmières', 0],
          ['Écrire et envoyer des colis aux soldats (marraines de guerre)', 0],
          ['Faire des dictées et des dessins sur la guerre à l’école', 1],
          ['Ramasser des noyaux de fruits et d’autres matériaux pour les collectes', 1]
        ], 'Ta fiche p. 12 : les femmes travaillent dans les champs, à l’usine à obus, conduisent les trams ; les enfants ramassent des pépins et des noyaux de fruits pour les collectes et participent aux travaux agricoles.')
      ]),
      ex('Questions de cours', [
        qcm('Pourquoi les femmes remplacent-elles les hommes ?', 'Les hommes sont mobilisés au front', ['Les hommes sont en vacances', 'Une loi interdit aux hommes de travailler', 'Les femmes sont mieux payées'],
          'Des millions d’hommes partent à la guerre. Il faut pourtant continuer à cultiver, fabriquer des armes, faire rouler les trains et les trams.'),
        qcm('Qu’est-ce qu’une « munitionnette » ?', 'Une ouvrière qui fabrique des obus et des munitions', ['Une petite munition', 'Une infirmière', 'Une espionne'],
          'Dans la région de Paris, les femmes passent d’environ 5 % des ouvriers de la métallurgie en 1914 à près d’un tiers en 1918. Le travail est dur et dangereux (explosions, produits toxiques).'),
        qcm('Qu’est-ce qu’une marraine de guerre ?', 'Une femme qui écrit et envoie des colis à un soldat, souvent seul', ['La mère d’un général', 'Une religieuse', 'Une femme soldat'],
          'Les lettres et les colis aident les soldats à tenir le coup, surtout ceux qui n’ont pas de famille.'),
        qcm('Les femmes sont-elles payées comme les hommes ?', 'Non, elles gagnent moins', ['Oui, exactement pareil', 'Elles gagnent plus', 'Elles ne sont pas payées du tout'],
          'Dans l’armement, elles gagnent plus que dans les métiers « féminins » d’avant, mais bien moins que les hommes.'),
        qcm('Quel est le drame vécu par beaucoup d’enfants ?', 'Ils perdent leur père à la guerre et deviennent orphelins', ['Ils doivent aller au front', 'Ils n’ont plus le droit d’aller à l’école', 'Ils doivent quitter l’Europe'],
          'En France, la guerre laisse environ 630 000 veuves. L’État crée en 1917 le statut de « pupille de la Nation » pour aider les orphelins.')
      ], {pick: 4}),
      ex('Vrai ou faux ?', [
        vf('En Suisse, les femmes obtiennent le droit de vote juste après la guerre.', false,
          'Faux. La grève générale de 1918 le réclame, mais les Suissesses n’obtiennent le droit de vote fédéral qu’en 1971.'),
        vf('Après la guerre, beaucoup de femmes doivent quitter leur emploi pour laisser la place aux soldats revenus.', true,
          'Vrai. Ta fiche p. 12 : « beaucoup de femmes doivent quitter leurs emplois ». Le retour au foyer est encouragé.'),
        vf('À l’école, la guerre est présente dans les leçons, les dictées et les dessins.', true,
          'Vrai. L’école participe à la propagande : on y apprend à aimer sa patrie et à détester l’ennemi.'),
        vf('Les femmes ne participent pas à l’effort de guerre.', false,
          'Faux. Sans elles, ni les usines d’armement, ni les champs, ni les hôpitaux n’auraient pu fonctionner.')
      ], {pick: 3})
    ],
    2: [
      ex('Ce qui change, ce qui reste (fiche p. 12, 10a)', [
        classify('Pendant la guerre, est-ce un changement ou quelque chose qui reste comme avant ?', ['Changement', 'Ce qui reste'], [
          ['Les femmes font des métiers d’hommes (usines, tramways)', 0],
          ['Les femmes s’occupent toujours de la maison et des enfants', 1],
          ['Les femmes gagnent moins que les hommes', 1],
          ['Des femmes deviennent cheffes de famille et gèrent la ferme', 0],
          ['Les enfants travaillent davantage aux champs', 0],
          ['Les enfants vont toujours à l’école', 1]
        ], 'Les femmes prennent de nouvelles responsabilités, mais gardent les tâches de la maison et restent moins payées : c’est un changement… incomplet.')
      ]),
      ex('Pendant ou après le conflit ? (10a et 10b)', [
        classify('Range chaque situation.', ['Pendant (1914-1918)', 'Après (dès 1918)'], [
          ['Les femmes fabriquent des obus', 0],
          ['Beaucoup de femmes sont renvoyées des usines', 1],
          ['Les Britanniques de plus de 30 ans obtiennent le droit de vote', 1],
          ['Les enfants ramassent des matériaux pour l’effort de guerre', 0],
          ['Les enfants retournent normalement à l’école', 1],
          ['Les marraines de guerre écrivent aux soldats', 0]
        ], 'Après la guerre, on veut revenir « comme avant » : les femmes quittent souvent l’usine, les enfants reprennent l’école. Mais certaines choses ont changé, comme le droit de vote dans plusieurs pays.', {pickRows: 5})
      ]),
      ex('La guerre et le droit de vote des femmes (10d)', [
        multi('Dans quels pays les femmes obtiennent-elles le droit de vote juste à la fin de la guerre (1918-1920) ?', ['Royaume-Uni', 'Allemagne', 'États-Unis'], ['France', 'Suisse', 'Italie'],
          'Royaume-Uni (1918, d’abord les femmes de plus de 30 ans), Allemagne (1918), États-Unis (1920). En France, il faut attendre 1944 ; en Italie 1945 ; en Suisse 1971 au niveau fédéral.'),
        qcm('Pourquoi la guerre a-t-elle aidé les femmes à obtenir le droit de vote dans certains pays ?', 'Elles ont montré qu’elles pouvaient faire tourner le pays : il devient difficile de leur refuser ce droit', ['Parce que les hommes ne voulaient plus voter', 'Parce que la Suisse l’a exigé', 'Parce que les élections étaient interdites'],
          'Leur rôle dans l’effort de guerre est reconnu. Mais la guerre ne suffit pas partout : la France, qui a pourtant beaucoup compté sur les femmes, attend 1944.')
      ], {keep: true}),
      ex('Comprendre', [
        qcm('Pourquoi les usines d’armement embauchent-elles tant de femmes ?', 'Il faut produire énormément d’obus alors que les ouvriers sont au front', ['Parce que les femmes demandent des salaires plus élevés', 'Parce que les hommes refusent d’y travailler', 'Parce que la loi interdit aux hommes d’y entrer'],
          'La guerre de position consomme des millions d’obus. Sans les femmes, les usines s’arrêteraient.'),
        qcm('Que deviennent beaucoup de munitionnettes après 1918 ?', 'Elles sont renvoyées pour laisser la place aux hommes démobilisés', ['Elles deviennent toutes cheffes d’usine', 'Elles partent à la guerre', 'Elles reçoivent une médaille et une pension'],
          'Ta fiche (10b) : « beaucoup de femmes doivent quitter leurs emplois ». Les usines d’armement ferment ou se reconvertissent.'),
        qcm('Qu’appelle-t-on « l’arrière » ?', 'Les régions loin du front, où vit la population civile', ['La dernière tranchée', 'Le dos des soldats', 'Les pays neutres'],
          'Le front, c’est là où l’on combat ; l’arrière, c’est le reste du pays, qui travaille pour la guerre.'),
        qcm('Pourquoi la vie des enfants change-t-elle ?', 'Le père est au front ou mort, la mère travaille : les enfants ont plus de travail et de responsabilités', ['Ils partent tous en vacances', 'Ils n’ont plus le droit de jouer', 'Ils doivent apprendre l’allemand'],
          'Ta fiche : ils participent aux travaux agricoles et aux collectes, tout en allant à l’école.')
      ], {pick: 3})
    ],
    3: [
      ex('La Suisse et l’Europe (10c)', [
        qcm('Quelle est la grande différence entre la Suisse et les pays en guerre ?', 'La Suisse ne fait pas la guerre : les hommes sont mobilisés mais ne meurent pas au combat, les changements sont moins forts', ['En Suisse, les femmes partent au front', 'En Suisse, les enfants ne vont plus à l’école', 'Il n’y a aucune différence'],
          'Ta fiche : « la Suisse est restée neutre ». Les familles suisses ne connaissent pas les millions de morts au combat. Mais les hommes mobilisés manquent pendant des centaines de jours.'),
        qcm('Que crée Else Züblin-Spiller en 1914 ?', 'Des foyers et des cantines pour les soldats suisses mobilisés', ['Le Comité international de la Croix-Rouge', 'Le premier parti politique féminin', 'Une usine d’obus'],
          'Elle fonde l’Association suisse pour le bien-être du soldat : des repas bon marché, équilibrés et sans alcool. Elle ouvre ensuite des cantines dans les usines.'),
        qcm('Pourquoi le travail des femmes suisses est-il indispensable pendant la guerre ?', 'Les soldats mobilisés ne touchent pas de compensation de salaire : la famille a besoin de l’argent gagné par la femme', ['Parce que les femmes suisses vont au front', 'Parce que les usines suisses sont fermées', 'Parce que l’État leur verse un salaire de soldat'],
          'Pendant la Première Guerre mondiale, il n’existe pas d’assurance pour la perte de salaire des soldats suisses : beaucoup de familles tombent dans la pauvreté.'),
        qcm('Pourquoi dit-on que le rôle des femmes change, mais pas complètement ?', 'Elles prouvent leurs capacités, mais après la guerre beaucoup retournent au foyer et restent moins payées', ['Parce qu’elles n’ont rien fait pendant la guerre', 'Parce qu’elles deviennent toutes députées', 'Parce que la guerre a duré trop peu'],
          'Ta fiche (10e) : la guerre a montré l’importance des femmes dans l’économie et la société. Mais l’égalité reste lointaine.')
      ], {pick: 3}),
      ex('Vrai ou faux ? (pièges)', [
        vf('En France, les femmes votent dès 1919 grâce à leur rôle pendant la guerre.', false,
          'Faux. Les Françaises n’obtiennent le droit de vote qu’en 1944.'),
        vf('En Allemagne, les femmes obtiennent le droit de vote à la fin de 1918.', true,
          'Vrai. La nouvelle république allemande l’accorde en novembre 1918.'),
        vf('La grève générale suisse de 1918 réclamait le droit de vote des femmes.', true,
          'Vrai. C’est la deuxième des neuf revendications du Comité d’Olten. Il faudra attendre 1971.'),
        vf('En Suisse, les femmes ont remplacé les hommes mobilisés dans les fermes et les commerces.', true,
          'Vrai. Sur les fermes, les femmes ou les parents font tourner l’exploitation ; dans les villes, elles reprennent des emplois.'),
        vf('Pendant la guerre, des femmes britanniques servent dans des unités de l’armée, sans combattre.', true,
          'Vrai. Environ 80 000 Britanniques s’engagent dans des unités non combattantes (secrétaires, cuisinières, conductrices…).')
      ], {pick: 4}),
      ex('Coche les bonnes réponses', [
        multi('Coche les activités que des femmes exercent pendant la guerre en Europe.', ['Ouvrières dans les usines d’armement', 'Conductrices de tramway', 'Infirmières', 'Agricultrices qui font les moissons'], ['Soldats dans les tranchées françaises', 'Ministres du gouvernement suisse'],
          'Les femmes occupent presque tous les métiers de l’arrière. Elles ne combattent pas dans l’armée française ; en Suisse, elles n’ont même pas le droit de vote.')
      ])
    ]
  },
  master: [
    classify('Changement ou ce qui reste ?', ['Changement', 'Ce qui reste'], [
      ['Les femmes travaillent à l’usine d’armement', 0], ['Les femmes gagnent moins que les hommes', 1], ['Les femmes gèrent seules la ferme', 0], ['Les femmes s’occupent toujours des enfants', 1]
    ], 'Nouvelles responsabilités, mais inégalités et tâches domestiques maintenues.'),
    multi('Où les femmes obtiennent-elles le droit de vote dès la fin de la guerre (1918-1920) ?', ['Royaume-Uni', 'Allemagne', 'États-Unis'], ['France', 'Suisse'],
      'France : 1944. Suisse : 1971.'),
    qcm('Quelle grande différence entre la Suisse et le reste de l’Europe ?', 'La Suisse reste neutre : ses hommes sont mobilisés mais ne meurent pas au combat', ['Les femmes suisses partent au front', 'La Suisse n’a pas d’usines', 'Les enfants suisses font la guerre'],
      'C’est la question 10c de ta fiche.')
  ],
  cours: [
    {h: 'Pendant la guerre : l’arrière tient le pays'},
    {p: 'Des millions d’hommes sont au front. À l’**arrière** (loin des combats), il faut continuer à nourrir le pays et à fabriquer des armes : ce sont surtout les **femmes**, les **enfants** et les plus âgés qui s’en chargent. C’est un aspect de la **guerre totale**.'},
    {table: {head: ['', 'Femmes', 'Enfants'], rows: [
      ['**Participation**', 'Champs, usines d’armement (« munitionnettes »), tramways, postes, bureaux ; infirmières ; marraines de guerre', 'Travaux des champs, collectes (noyaux de fruits, métaux…), école où l’on parle de la guerre'],
      ['**Ce qui change**', 'Elles font des métiers d’hommes, deviennent cheffes de famille', 'Ils travaillent plus, grandissent sans leur père'],
      ['**Ce qui reste**', 'Elles s’occupent toujours de la famille, sont moins payées', 'Ils vont toujours à l’école']
    ]}},
    {p: 'Exemple : dans la métallurgie de la région parisienne, les femmes passent d’environ **5 %** des ouvriers en 1914 à près d’**un tiers** en 1918.'},
    {h: 'Après la guerre'},
    {list: [
      'Beaucoup de femmes doivent **rendre leur emploi** aux soldats démobilisés ; le retour au foyer est encouragé.',
      'La guerre laisse des **veuves** (environ 630 000 en France) et des **orphelins**.',
      '**Droit de vote** : Russie (1917), Royaume-Uni (1918, d’abord dès 30 ans), Allemagne (1918), États-Unis (1920)… mais **France 1944** et **Suisse 1971**.'
    ]},
    {h: 'Et en Suisse ?'},
    {p: 'La Suisse ne combat pas, mais ses soldats sont **mobilisés** pendant des centaines de jours, **sans compensation de salaire**. Les femmes reprennent la ferme, le commerce, l’atelier ; leur salaire devient vital. **Else Züblin-Spiller** crée dès 1914 des foyers et des cantines pour les soldats. La grève générale de 1918 réclame le **droit de vote des femmes**, obtenu seulement en **1971**.'},
    {keys: [
      'Les femmes **remplacent** les hommes et participent à l’effort de guerre.',
      'Changement **incomplet** : moins payées, retour au foyer après 1918.',
      'Le droit de vote progresse dans plusieurs pays, **pas** en France ni en Suisse.'
    ]},
    {warn: [
      'La **grande différence** Suisse/Europe : la Suisse est **neutre**, ses soldats ne meurent pas au combat.',
      'Le droit de vote des femmes en Suisse n’est **pas** une conséquence directe de la guerre : il arrive en **1971**.'
    ]},
    {quiz: qcm('À toi : qu’est-ce qui reste comme avant pour les femmes pendant la guerre ?', 'Elles sont moins payées que les hommes', ['Elles conduisent les tramways', 'Elles fabriquent des obus', 'Elles dirigent la ferme'],
      'Les trois autres réponses sont des changements.')}
  ],
  sources: ['fiche', 'wikiFemmes', 'bnFemmes', 'hlsPGM', 'hlsGreve']
};
