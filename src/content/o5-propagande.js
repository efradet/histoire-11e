// Objectif 5 : savoir analyser des affiches de propagande (fiche p. 11-12, manuel p. 31)
import {qcm, vf, rows, classify, ex} from './helpers.js';

const DOC6 = {img: 'docs/affiche-france.jpg', title: 'Doc. 6 · Affiche française (1914-1915)', caption: 'Un géant barbare, coiffé d’un casque à cornes, détruit une ville et sa cathédrale. En haut à gauche, l’aigle noir de l’Empire allemand.'};
const DOC7 = {img: 'docs/affiche-usa.jpg', title: 'Doc. 7 · Affiche américaine de H. R. Hopps (1917)', caption: '« Destroy this mad brute. Enlist » : « Détruis cette brute folle. Engage-toi ».'};
const DOC8 = {img: 'docs/affiche-allemagne.jpg', title: 'Doc. 8 · Affiche allemande (fin de la guerre)', caption: '« Nein! Niemals! » : « Non ! Jamais ! ». En bas, la ville de Strasbourg et sa cathédrale.'};

export default {
  id: 5,
  title: 'Les affiches de propagande',
  subtitle: 'Analyser une affiche : contexte, image, sentiment, message',
  ref: 'Fiche p. 11-12, manuel p. 31',
  rappel: [
    'La **propagande** cherche à influencer ce que pensent les gens : faire s’engager, faire donner de l’argent, garder le moral, faire haïr l’ennemi.',
    'Analyser une affiche : **contexte de production** (date, émetteur, destinataire), **ce qui est représenté** (personnages, symboles, couleurs, slogan), **sentiment**, **message et objectif**.',
    'L’ennemi est souvent montré comme un **monstre, une bête ou un barbare** : on le rend moins humain.',
    'Lien avec le **bilan humain** : apprendre à haïr l’ennemi fait accepter les massacres et rend la paix plus difficile.'
  ],
  levels: {
    1: [
      ex('Analyse le doc. 7', [
        qcm('Dans quel pays cette affiche a-t-elle été faite ?', 'Aux États-Unis', ['En Allemagne', 'En France', 'En Suisse'],
          'Le texte est en anglais et appelle à s’engager dans l’armée américaine. Elle date de 1917, l’année où les États-Unis entrent en guerre.'),
        qcm('Qui le gorille représente-t-il ?', 'L’Allemagne : il porte le casque à pointe des soldats allemands', ['La Russie', 'Les États-Unis', 'Un animal du zoo'],
          'Sur le casque est écrit « Militarism ». Montrer l’ennemi comme un singe féroce, c’est le rendre moins humain.'),
        qcm('Que signifie « Enlist » ?', 'Engage-toi (dans l’armée)', ['Rends-toi', 'Achète', 'Rentre chez toi'],
          'C’est une affiche de recrutement : l’armée américaine a besoin de soldats.'),
        qcm('Quel sentiment l’affiche veut-elle provoquer ?', 'La peur et la haine de l’ennemi', ['La joie', 'La pitié pour le gorille', 'L’indifférence'],
          'La brute arrive en Amérique avec une femme dans les bras : le spectateur doit avoir peur pour son pays et vouloir le défendre.')
      ], {keep: true, doc: DOC7}),
      ex('Associe chaque affiche à son pays', [
        rows('Quel pays a produit chaque affiche ?', [
          ['Un géant barbare détruit une ville et sa cathédrale (doc. 6)', 'France'],
          ['Un gorille casqué enlève une femme (doc. 7)', 'États-Unis'],
          ['« Nein! Niemals! » : un soldat tend la main vers Strasbourg (doc. 8)', 'Allemagne']
        ], ['France', 'États-Unis', 'Allemagne', 'Royaume-Uni'],
        'Chaque camp fait de la propagande : la France et les États-Unis contre l’Allemagne, l’Allemagne contre la France.')
      ]),
      ex('Vrai ou faux ?', [
        vf('Une affiche de propagande montre la guerre telle qu’elle est vraiment.', false,
          'Faux. Elle montre ce que le gouvernement veut que la population pense. Elle exagère, simplifie, cache les horreurs du front.'),
        vf('Tous les pays en guerre font de la propagande.', true,
          'Vrai. Tes trois affiches viennent de France, des États-Unis et d’Allemagne.'),
        vf('Certaines affiches demandent à la population de prêter son argent à l’État.', true,
          'Vrai. Ce sont les affiches des emprunts de guerre, comme « On les aura ! » (France, 1916).'),
        vf('Montrer l’ennemi comme un animal sert à le rendre moins humain.', true,
          'Vrai. C’est plus facile de vouloir tuer un « monstre » qu’un homme comme soi.'),
        vf('La propagande ne s’adresse qu’aux soldats.', false,
          'Faux. Elle s’adresse à toute la population, enfants compris : affiches, journaux, livres d’école, jouets.')
      ], {pick: 3})
    ],
    2: [
      ex('Analyse le doc. 6', [
        qcm('Qui est l’émetteur de cette affiche ?', 'La France', ['L’Allemagne', 'La Suisse', 'Les États-Unis'],
          'C’est une image de propagande française, destinée aux Français, au début de la guerre.'),
        qcm('Qui le géant représente-t-il ?', 'Le soldat allemand, montré comme un barbare', ['Un héros français', 'Un Viking ami de la France', 'Le roi des Belges'],
          'Casque à cornes, peau verte, massue et lance : l’Allemand est un barbare d’un autre âge, un monstre qui ne respecte rien.'),
        qcm('Que représente l’aigle noir, en haut à gauche ?', 'L’Empire allemand, dont c’est le symbole', ['La paix', 'La Suisse', 'La Croix-Rouge'],
          'L’aigle impérial est l’emblème de l’Allemagne de Guillaume II.'),
        qcm('Pourquoi montrer une cathédrale en flammes ?', 'Pour accuser les Allemands de détruire la civilisation', ['Pour montrer que les Français sont maladroits', 'Pour annoncer une fête', 'Pour faire de la publicité pour une église'],
          'En septembre 1914, les Allemands bombardent la cathédrale de Reims, où étaient sacrés les rois de France. La propagande française s’en sert pour montrer les Allemands en barbares.'),
        qcm('Quel sentiment se dégage de l’affiche ?', 'La haine et le dégoût des Allemands', ['L’admiration pour l’Allemagne', 'La pitié pour le géant', 'L’ennui'],
          'Ta fiche : « haine, dégoût pour les Allemands ». Le but est de souder les Français contre un ennemi présenté comme monstrueux.')
      ], {keep: true, doc: DOC6}),
      ex('Analyse le doc. 8', [
        qcm('Que signifie « Nein! Niemals! » ?', 'Non ! Jamais !', ['Oui, tout de suite !', 'Bonne année !', 'En avant !'],
          '« Nein » veut dire non, « niemals » jamais.'),
        qcm('Quelle ville voit-on en bas, avec sa cathédrale ?', 'Strasbourg, en Alsace', ['Paris', 'Berlin', 'Genève'],
          'La flèche de la cathédrale de Strasbourg est reconnaissable. En 1914, l’Alsace est allemande depuis 1871.'),
        qcm('Qui est l’homme qui tend une main crochue vers la ville ?', 'Un soldat français qui veut s’emparer de l’Alsace', ['Un soldat suisse', 'Un paysan alsacien', 'Le roi d’Angleterre'],
          'Il est montré menaçant, avide, comme un voleur. Sa main ressemble à une griffe.'),
        qcm('Quel est le message de l’affiche ?', 'L’Alsace restera allemande : jamais elle ne sera rendue à la France', ['L’Alsace doit devenir suisse', 'La France et l’Allemagne doivent faire la paix', 'Strasbourg est une belle ville à visiter'],
          'Ta fiche : méfiance et crainte des Français qui veulent s’emparer de l’Alsace. L’affiche s’adresse aux Allemands pour qu’ils continuent à se battre.')
      ], {keep: true, doc: DOC8}),
      ex('Les techniques de la propagande', [
        classify('Quel effet cherche chaque technique ?', ['Faire peur ou haïr', 'Rendre fier, encourager', 'Culpabiliser'], [
          ['Montrer l’ennemi comme un monstre', 0],
          ['Montrer des villes détruites et des civils victimes', 0],
          ['Un soldat qui charge avec courage (« On les aura ! »)', 1],
          ['Des drapeaux et des symboles nationaux', 1],
          ['Un doigt pointé vers toi : « Ton pays a besoin de toi »', 2],
          ['« Et toi, qu’as-tu fait pendant la guerre ? »', 2]
        ], 'Les affiches jouent sur les émotions : la peur et la haine de l’ennemi, la fierté de son pays, et la honte de ne pas participer.', {pickRows: 5})
      ])
    ],
    3: [
      ex('D’autres affiches célèbres', [
        qcm('Royaume-Uni, 1914 : Lord Kitchener pointe le doigt, « Your country needs you » (Ton pays a besoin de toi). Pourquoi le Royaume-Uni a-t-il besoin d’une telle affiche ?', 'Son armée est faite de volontaires : il faut convaincre les hommes de s’engager', ['Pour vendre des journaux', 'Pour demander aux femmes de rester à la maison', 'Pour annoncer la fin de la guerre'],
          'Au début de la guerre, le Royaume-Uni n’a pas de service militaire obligatoire (il ne l’introduit qu’en 1916). Le dessin d’Alfred Leete (1914) est l’une des affiches les plus célèbres.'),
        qcm('États-Unis, 1917 : l’Oncle Sam pointe le doigt, « I want you for U.S. Army ». De quoi s’inspire-t-elle ?', 'De l’affiche britannique de Kitchener (1914)', ['D’une affiche allemande', 'D’une photo de Verdun', 'D’un tableau suisse'],
          'Le dessinateur James Montgomery Flagg reprend l’idée du doigt pointé : le spectateur se sent visé personnellement.'),
        qcm('France, 1916 : « On les aura ! » d’Abel Faivre montre un soldat qui charge. Que demande l’affiche aux Français ?', 'De prêter leur argent à l’État (emprunt de la défense nationale)', ['De quitter Paris', 'De s’engager dans l’armée suisse', 'D’arrêter la guerre'],
          'La guerre coûte très cher : l’État emprunte l’argent de la population. Le slogan reprend une phrase du général Pétain pendant la bataille de Verdun.')
      ], {pick: 2}),
      ex('Synthèse (fiche p. 12, 6b et 6c)', [
        qcm('Quel est le point commun des doc. 6, 7 et 8 ?', 'Ils présentent l’ennemi comme une menace pour pousser la population à soutenir la guerre', ['Ils ont tous été faits en Suisse', 'Ils annoncent la paix', 'Ils montrent la vraie vie dans les tranchées'],
          'Ta fiche (6b) : « montrer que le pays adverse est mauvais et encourager le peuple à aller en guerre ».'),
        qcm('Quel lien peut-on faire entre ces affiches et le bilan humain de la guerre ?', 'En apprenant à haïr l’ennemi, on accepte des millions de morts et on prolonge la guerre', ['Les affiches ont tué des soldats', 'Il n’y a aucun lien', 'Les affiches ont arrêté la guerre plus vite'],
          'Ta fiche (6c) : « le nombre de victimes s’explique par la haine de l’autre ». Quand l’ennemi n’est plus un homme mais une « brute », la violence de masse paraît normale.'),
        qcm('Qu’appelle-t-on le « bourrage de crâne » ?', 'La propagande exagérée ou mensongère des journaux pendant la guerre', ['Un exercice de gymnastique', 'Une blessure à la tête', 'Une méthode pour apprendre ses leçons'],
          'Les journaux racontent des victoires imaginaires, ou que les soldats vivent bien dans les tranchées. Les soldats, qui savent la vérité, s’en moquent.'),
        qcm('Pourquoi certains journaux paraissent-ils avec des espaces blancs ?', 'La censure a supprimé des passages', ['L’encre manquait', 'Pour laisser de la place aux dessins des enfants', 'Pour faire des économies de papier'],
          'En France, une loi de 1914 interdit de publier des informations sur les pertes et les opérations militaires. Les passages interdits sont remplacés par un blanc ou par le mot « censuré ».')
      ], {pick: 3}),
      ex('Vrai ou faux ? (détails)', [
        vf('Doc. 7 : le gorille tient une massue sur laquelle est écrit « Kultur ».', true,
          'Vrai. Le mot allemand « Kultur » (culture) est utilisé avec ironie : l’Allemagne prétend être très cultivée, mais elle se conduit en brute.'),
        vf('Doc. 8 : l’affiche « Nein! Niemals! » s’adresse d’abord aux Français.', false,
          'Faux. Elle est en allemand : elle s’adresse aux Allemands, pour qu’ils défendent l’Alsace.'),
        vf('Doc. 7 : la femme enlevée par le gorille représente l’Amérique menacée.', true,
          'Vrai. Elle symbolise l’Amérique (et la liberté) en danger. En arrière-plan, l’Europe est en ruines ; la brute pose le pied sur la côte américaine.'),
        vf('Avec la propagande, on peut savoir exactement ce que vivent les soldats au front.', false,
          'Faux. Pour cela, il vaut mieux lire des lettres et des témoignages de soldats (objectif 10).')
      ], {pick: 3})
    ]
  },
  master: [
    qcm('Doc. 8 : quel est le contexte de production ?', 'Une affiche allemande, destinée aux Allemands, vers la fin de la guerre', ['Une affiche française destinée aux Alsaciens, en 1871', 'Une affiche suisse pour la paix', 'Une affiche américaine de recrutement'],
      'Émetteur : l’Allemagne. Destinataire : la population allemande. Date : fin de la guerre (ta fiche indique 1917).', {doc: DOC8}),
    qcm('Doc. 7 : quel est l’objectif de l’affiche ?', 'Faire s’engager les Américains dans l’armée, en leur faisant peur de l’Allemagne', ['Faire visiter un zoo', 'Faire la paix avec l’Allemagne', 'Faire acheter des journaux'],
      '« Enlist » : engage-toi. La peur de l’ennemi doit pousser les hommes à s’engager.', {doc: DOC7}),
    classify('Quel effet cherche chaque élément d’affiche ?', ['Faire peur ou haïr', 'Rendre fier, encourager', 'Culpabiliser'], [
      ['Une cathédrale en flammes', 0], ['Un doigt pointé vers le spectateur', 2], ['Un soldat héroïque qui charge', 1]
    ], 'Peur et haine, fierté, culpabilité : les trois grands ressorts des affiches.')
  ],
  cours: [
    {h: 'Qu’est-ce que la propagande ?'},
    {p: 'La **propagande**, c’est l’ensemble des moyens qu’un gouvernement utilise pour **influencer l’opinion** : affiches, journaux, cartes postales, films, livres d’école. Pendant la guerre, elle sert à :'},
    {list: [
      '**faire s’engager** les hommes dans l’armée (affiches de recrutement) ;',
      '**financer la guerre** : les emprunts demandent à la population de prêter son argent à l’État ;',
      '**garder le moral** de l’arrière et cacher les mauvaises nouvelles (censure, « bourrage de crâne ») ;',
      '**faire haïr l’ennemi**, montré comme un barbare, une bête ou un monstre.'
    ]},
    {h: 'Méthode : analyser une affiche (fiche p. 11)'},
    {table: {head: ['Étape', 'Questions à se poser'], rows: [
      ['**1. Contexte de production**', 'Quand ? Qui l’a faite (émetteur : quel pays) ? Pour qui (destinataire : quelle population) ?'],
      ['**2. Ce qui est représenté**', 'Personnages, animaux, symboles (aigle, casque à pointe, drapeau), lieux, couleurs, slogan.'],
      ['**3. Sentiment**', 'Peur, haine, dégoût, fierté, culpabilité ?'],
      ['**4. Message et objectif**', 'Que veut-on faire penser ? Que veut-on faire faire (s’engager, donner de l’argent, résister) ?']
    ]}},
    {doc: DOC7},
    {h: 'Tes trois affiches'},
    {table: {head: ['', 'Doc. 6', 'Doc. 7', 'Doc. 8'], rows: [
      ['Émetteur', 'France', 'États-Unis (H. R. Hopps, 1917)', 'Allemagne'],
      ['Représenté', 'Géant barbare, aigle impérial, ville et cathédrale en flammes', 'Gorille au casque à pointe « Militarism », massue « Kultur », femme enlevée, Europe en ruines', 'Soldat français à la main crochue tendue vers Strasbourg, le Rhin'],
      ['Sentiment', 'Haine, dégoût', 'Peur, haine', 'Méfiance, crainte, défi'],
      ['Objectif', 'Souder les Français contre un ennemi « barbare »', 'Faire s’engager les Américains', 'Pousser les Allemands à défendre l’Alsace']
    ]}},
    {h: 'Propagande et bilan humain'},
    {p: 'En présentant l’ennemi comme un monstre, la propagande rend acceptables les **millions de morts** et rend la **réconciliation** plus difficile. Les soldats, eux, se moquent souvent du « bourrage de crâne » des journaux, qui ne raconte pas ce qu’ils vivent.'},
    {keys: [
      'Propagande = influencer l’opinion ; **tous les camps** en font.',
      'Toujours : **émetteur, destinataire, date**, puis image, sentiment, message.',
      'L’ennemi est **déshumanisé** (bête, monstre, barbare).'
    ]},
    {warn: [
      'Une affiche n’est **pas** une source fiable sur la réalité du front ; c’est une source fiable sur **ce que le pays voulait faire croire**.',
      'Le destinataire d’une affiche est **la population du pays qui l’a faite** (doc. 8 : les Allemands, pas les Français).'
    ]},
    {quiz: qcm('À toi : sur une affiche, l’ennemi est dessiné en araignée géante. Quelle technique ?', 'Déshumaniser l’ennemi pour faire peur et haïr', ['Rendre fier de son pays', 'Demander de l’argent', 'Montrer la réalité du front'],
      'Un animal effrayant, c’est la déshumanisation : l’ennemi n’est plus un homme.')}
  ],
  sources: ['fiche', 'ucdBrute', 'awmFaivre', 'armeeFlagg', 'wikiBourrage']
};
