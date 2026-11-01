// Objectif 10 : savoir analyser des textes et des œuvres en lien avec la période (fiche p. 11, 14-16)
import {qcm, vf, multi, rows, ex} from './helpers.js';

const VAILLAGOU = {
  title: 'Doc. b · Lettre de Martin Vaillagou à son fils Maurice, hiver 1914 (résumé et extraits, d’après ta fiche p. 11)',
  text: 'Maurice, resté à la maison, a demandé à son père soldat **un plan des lignes**, **des balles allemandes** et **un casque de soldat prussien**. Son père promet de dessiner un plan au dos de sa feuille et de rapporter des balles quand il reviendra. Pour le casque, « cela n’est pas sûr » : il plaisante qu’« il fait trop froid, ils pourraient attraper la grippe ». Puis il explique que « les Prussiens sont comme nous » : eux aussi ont des papas à la guerre et des petits garçons qui les attendent avec leur maman. Et si un petit Prussien demandait un képi de Français… et si c’était celui de son papa ? Il conclut : « Tu comprendras mieux » plus tard, quand tu seras grand.'
};
const OLTEN = {
  title: 'Doc. f · Appel du Comité d’Olten, 11 novembre 1918 (extrait)',
  text: '« Nous demandons la réforme immédiate du gouvernement actuel du pays, conformément à la volonté présente du peuple. […] le programme minimum suivant :\n1. Renouvellement immédiat du Conseil national d’après la proportionnelle.\n2. Droit de vote et d’éligibilité de la femme.\n3. Introduction du droit au travail pour tous.\n4. Introduction de la semaine de 48 heures dans toutes les entreprises publiques et privées.\n5. Organisation d’une armée essentiellement populaire.\n6. En accord avec les producteurs agraires, assurer le ravitaillement.\n7. Assurance-vieillesse et invalidité.\n8. Monopole de l’État pour l’importation et l’exportation.\n9. Payement des dettes publiques par les possédants. »'
};
const PLAQUES = {
  title: 'Doc. h et i · Deux plaques commémoratives (fiche p. 15)',
  text: '**Plaque h (Genève)** : « Aux soldats de Genève morts au service de la patrie, 1914-1918 ».\n\n**Plaque i (Granges, en allemand, traduite)** : « Grève générale 1918. À Granges, la grève générale de 1918 a fait trois victimes : Hermann Lanz, 29 ans ; Marius Noirjean, 17 ans ; Fritz Scholl, 21 ans. Pour un monde plus juste, ils sont morts le 14 novembre 1918 sous les balles des troupes de l’ordre. En souvenir et avec reconnaissance. »'
};
const CARICATURE = {
  title: 'Doc. e · Caricature de Charles Clément, « On les tue d’un côté… on les soigne de l’autre », 1917 (fiche p. 14)',
  text: 'Ce dessin paraît en 1917 dans **L’Arbalète**, un journal satirique de Lausanne. Sous une grande croix suisse, il oppose deux scènes : à l’arrière-plan, des **fabricants et marchands suisses font affaire avec des soldats des deux camps** (on reconnaît le casque à pointe allemand) ; au premier plan, on **soigne un soldat blessé**, comme le fait la Croix-Rouge.'
};
const ART231 = {
  title: 'Doc. · Article 231 du traité de Versailles, 28 juin 1919 (résumé)',
  text: 'Les gouvernements alliés déclarent, et l’Allemagne reconnaît, que **l’Allemagne et ses alliés sont responsables** de toutes les pertes et de tous les dommages subis par les Alliés et leurs habitants, à cause de la guerre qui leur a été **imposée par l’agression** de l’Allemagne et de ses alliés.'
};
const WILSON = {
  title: 'Doc. 45 · Quelques-uns des 14 points du président américain Wilson, 8 janvier 1918 (résumé)',
  text: '**1.** Des traités de paix conclus au grand jour, sans accords secrets.\n**4.** Réduire les armements au minimum.\n**8.** Libérer le territoire français et réparer le tort fait à la France en 1871 (Alsace-Lorraine).\n**13.** Créer un État polonais indépendant, avec un accès à la mer.\n**14.** Créer une association générale des nations, qui garantit l’indépendance de tous, grands et petits.'
};

export default {
  id: 10,
  title: 'Analyser des documents',
  subtitle: 'Lettres, caricatures, plaques, traités : la méthode',
  ref: 'Fiches p. 11, 14-16',
  rappel: [
    '**1. Identifier** : la nature (lettre, affiche, caricature, discours, traité, plaque…), l’auteur, la date, le destinataire.',
    '**2. Situer** : que se passe-t-il à ce moment de la guerre ?',
    '**3. Comprendre** : que dit ou que montre le document ?',
    '**4. Interpréter** : quel est le message, l’intention, le point de vue de l’auteur ?',
    '**5. Critiquer** : le document est-il fiable ? (propagande, témoin direct, censure, souvenir écrit après coup)'
  ],
  levels: {
    1: [
      ex('Quelle est la nature du document ?', [
        rows('Associe chaque description à la nature du document.', [
          ['Un texte écrit par un soldat à son fils', 'Une lettre (témoignage)'],
          ['Une image avec un slogan pour convaincre la population', 'Une affiche de propagande'],
          ['Un dessin qui se moque en exagérant', 'Une caricature'],
          ['Un texte signé par des pays pour fixer la paix', 'Un traité'],
          ['Une pierre gravée pour se souvenir des morts', 'Une plaque commémorative']
        ], null, 'Reconnaître la nature d’un document est la première étape : on ne lit pas une affiche de propagande comme une lettre privée.')
      ]),
      ex('Analyse le doc. b (fiche p. 11)', [
        qcm('Qui écrit, et à qui ?', 'Martin Vaillagou, soldat français, à son fils Maurice', ['Maurice à son père', 'Un soldat prussien à son fils', 'Un journaliste à ses lecteurs'],
          'C’est une lettre privée, citée par l’historien Jean-Pierre Guéno dans un livre sur les lettres de pères soldats.'),
        qcm('Quand cette lettre est-elle écrite ?', 'Pendant l’hiver 1914, au début de la guerre', ['Après la guerre, en 1919', 'En 1871', 'En novembre 1918'],
          'Hiver 1914 : la guerre de position commence, les soldats s’installent dans les tranchées.'),
        multi('Que demandait Maurice à son père ?', ['Un plan des lignes (des tranchées)', 'Des balles allemandes', 'Un casque de soldat prussien'], ['Un fusil', 'Une médaille', 'Du chocolat suisse'],
          'Maurice voit la guerre comme un jeu, avec des souvenirs à collectionner. C’est l’effet de la propagande sur les enfants.'),
        qcm('Quel message le père transmet-il à son fils ?', 'Les soldats ennemis sont des humains comme nous, avec des enfants qui les attendent', ['Il faut détester tous les Prussiens', 'La guerre est un beau jeu', 'Il va bientôt rapporter un casque'],
          'Il refuse la haine de la propagande : « les Prussiens sont comme nous ». Prendre un casque, c’est peut-être tuer un papa.')
      ], {keep: true, doc: VAILLAGOU}),
      ex('Vrai ou faux ? (méthode)', [
        vf('Une affiche de propagande est un document fiable pour connaître la réalité du front.', false,
          'Faux. Elle montre ce que le gouvernement veut faire croire. Elle est fiable pour étudier… la propagande elle-même.'),
        vf('Une lettre de soldat est un témoignage direct, mais elle peut être censurée ou adoucie.', true,
          'Vrai. Le courrier est contrôlé, et les soldats évitent souvent d’inquiéter leur famille.'),
        vf('Il faut toujours chercher qui est l’auteur d’un document et à qui il s’adresse.', true,
          'Vrai. L’auteur et le destinataire expliquent souvent le point de vue du document.'),
        vf('Un document écrit longtemps après les faits raconte forcément mieux ce qui s’est passé.', false,
          'Faux. Il peut avoir plus de recul, mais aussi déformer les souvenirs. Il faut toujours noter la date du document.')
      ], {pick: 3})
    ],
    2: [
      ex('Analyse le doc. f (fiche p. 15)', [
        qcm('Qui est l’auteur de ce texte ?', 'Le Comité d’Olten, qui dirige la grève générale', ['Le Conseil fédéral', 'Le général Wille', 'La Croix-Rouge'],
          'Le Comité d’Olten réunit des syndicalistes et des socialistes, dont Robert Grimm.'),
        qcm('Quand le texte est-il publié ?', 'Le 11 novembre 1918, le jour de l’armistice', ['Le 28 juin 1914', 'En 1971', 'Le 1er août 1914'],
          'La guerre s’arrête ce jour-là ; la grève générale commence le lendemain.'),
        qcm('Laquelle de ces revendications a été obtenue le plus tard ?', 'Le droit de vote des femmes (1971)', ['La semaine de 48 heures (1919)', 'La proportionnelle (1919)', 'L’assurance-vieillesse (1948)'],
          'Fiche p. 15 (14b) : il a fallu plus de cinquante ans pour certaines demandes. Constat : les réformes sociales se font lentement en Suisse.'),
        qcm('Quel est le but de ce texte ?', 'Imposer des réformes politiques et sociales au gouvernement', ['Déclarer la guerre à l’Allemagne', 'Demander l’entrée dans la SDN', 'Annoncer la fin de la grippe'],
          'Le texte commence par « Nous demandons la réforme immédiate du gouvernement » : c’est un programme de revendications.')
      ], {keep: true, doc: OLTEN}),
      ex('Analyse les doc. h et i (fiche p. 15)', [
        qcm('Qui la plaque de Genève honore-t-elle ?', 'Les soldats genevois morts pendant leur service, sans combattre', ['Les soldats tués à Verdun', 'Les grévistes de 1918', 'Les victimes d’un bombardement'],
          'Environ 3 000 soldats suisses meurent en service pendant la guerre, surtout de maladie (grippe de 1918) ou d’accident.'),
        qcm('Qui la plaque de Granges honore-t-elle ?', 'Trois jeunes grévistes tués par l’armée le 14 novembre 1918', ['Trois généraux suisses', 'Trois soldats morts au front', 'Trois membres de la Croix-Rouge'],
          'Hermann Lanz, Marius Noirjean et Fritz Scholl, ouvriers horlogers.'),
        qcm('Quel monument peut créer des tensions ? Pourquoi ?', 'Celui de Granges : il présente l’armée comme responsable de leur mort et les grévistes comme des héros', ['Celui de Genève : il critique les grévistes', 'Aucun : ils disent la même chose', 'Celui de Genève : il est en allemand'],
          'Pour certains, l’armée a sauvé le pays d’une révolution ; pour d’autres, elle a tiré sur des ouvriers qui voulaient « un monde plus juste ». La mémoire de 1918 est longtemps divisée.'),
        qcm('Quel lien entre la révolution russe et la présence de soldats à Granges ?', 'Par peur d’une révolution communiste comme en Russie, le gouvernement envoie l’armée contre les grévistes', ['Les soldats russes occupaient Granges', 'Lénine dirigeait la grève de Granges', 'Il n’y a aucun lien'],
          'Fiche p. 15 (15c) : cause (la peur du bolchevisme après octobre 1917) → effet (mobilisation de l’armée contre la grève).')
      ], {keep: true, doc: PLAQUES})
    ],
    3: [
      ex('Analyse le doc. e : une caricature (fiche p. 14, 12f)', [
        qcm('Quel est le point de vue de l’auteur ?', 'Il dénonce l’hypocrisie : la Suisse gagne de l’argent en vendant de quoi tuer, tout en se disant humanitaire', ['Il félicite la Suisse pour sa neutralité parfaite', 'Il veut que la Suisse entre en guerre', 'Il fait de la publicité pour la Croix-Rouge'],
          'C’est une critique : les actions de l’arrière-plan (commerce avec les belligérants) s’opposent à celle du premier plan (soigner les blessés).'),
        vf('La critique de la caricature repose sur des faits réels.', true,
          'Vrai. En 1917, les exportations liées aux munitions atteignent environ 300 millions de francs, environ 13 % des exportations suisses, vers les deux camps.'),
        qcm('Quelle est la nature de ce document ?', 'Une caricature parue dans un journal satirique', ['Une photo de presse', 'Une affiche officielle du Conseil fédéral', 'Une lettre de soldat'],
          'Une caricature exagère pour faire réagir. Elle exprime le point de vue de son auteur, pas un fait neutre.')
      ], {keep: true, doc: CARICATURE}),
      ex('Analyse un article du traité de Versailles', [
        qcm('De quelle nature est ce document ?', 'Un article d’un traité de paix', ['Une affiche de propagande', 'Une lettre privée', 'Un discours de Lénine'],
          'Un traité est un texte officiel signé par des États.'),
        qcm('Pourquoi cet article indigne-t-il les Allemands ?', 'Il les rend seuls responsables de la guerre, ce qu’ils refusent', ['Il leur donne trop de territoires', 'Il est écrit en anglais', 'Il leur interdit de faire du commerce avec la Suisse'],
          'Pour les Allemands, la guerre est née d’un engrenage dont tous sont responsables. Cet article devient le symbole du « Diktat ».'),
        qcm('À quoi sert cet article dans le traité ?', 'À justifier les réparations que l’Allemagne doit payer', ['À créer la SDN', 'À rendre l’Alsace à l’Allemagne', 'À libérer les prisonniers'],
          'Si l’Allemagne est responsable des dommages, elle doit les payer : c’est la base des réparations.')
      ], {keep: true, doc: ART231}),
      ex('Analyse les 14 points de Wilson (fiche p. 16, 16d)', [
        rows('Quel point répond à chaque objectif ?', [
          ['Éviter les alliances secrètes d’avant 1914', 'Point 1'],
          ['Rendre l’Alsace-Lorraine à la France', 'Point 8'],
          ['Faire renaître la Pologne', 'Point 13'],
          ['Créer une organisation pour garder la paix', 'Point 14'],
          ['Arrêter la course aux armements', 'Point 4']
        ], ['Point 1', 'Point 4', 'Point 8', 'Point 13', 'Point 14'],
        'Tous ces points ont un lien avec les causes de la guerre : alliances secrètes, armements, revanche, peuples sans État. Les points 8, 13 et 14 deviennent réalité en 1919-1920.', {keepChoiceOrder: true})
      ], {doc: WILSON}),
      ex('Œuvres et témoignages', [
        qcm('Henri Barbusse, soldat, publie en 1916 « Le Feu », un roman sur la vie d’une escouade dans les tranchées (prix Goncourt). Quel intérêt pour l’historien ?', 'C’est le témoignage d’un combattant sur le front, même sous forme de roman', ['C’est un document officiel de l’armée', 'C’est une affiche de propagande', 'Il n’a aucun intérêt car c’est un roman'],
          'Un roman écrit par un témoin direct apprend beaucoup sur ce que vivaient les soldats ; il faut seulement se rappeler que l’auteur a pu inventer des personnages.'),
        qcm('Dans presque tous les villages de France, un monument aux morts est construit après 1918. Que nous apprend-il ?', 'Le nombre d’hommes du village morts à la guerre et la volonté de s’en souvenir', ['La date de la construction du village', 'Le résultat des élections', 'Les dates des batailles gagnées'],
          'Ce sont des documents de mémoire : ils montrent l’ampleur du deuil et la façon dont on veut se souvenir.')
      ], {pick: 1})
    ]
  },
  master: [
    qcm('Doc. b : quel est le point de vue de Martin Vaillagou ?', 'Il refuse de haïr l’ennemi : les Prussiens sont des pères comme lui', ['Il veut rapporter un casque à tout prix', 'Il trouve la guerre amusante', 'Il déteste les Prussiens'],
      'Son point de vue s’oppose à celui des affiches de propagande.', {doc: VAILLAGOU}),
    qcm('Doc. e : en quoi l’arrière-plan s’oppose-t-il au premier plan ?', 'À l’arrière, on fait commerce avec les soldats (munitions) ; au premier plan, on soigne leurs blessés', ['À l’arrière, on fait la fête ; au premier plan, on travaille', 'Il n’y a pas d’opposition', 'À l’arrière, des Suisses combattent'],
      'C’est la question 12f de ta fiche.', {doc: CARICATURE}),
    vf('Une caricature exprime toujours un point de vue, et non un fait neutre.', true,
      'Vrai. Elle exagère pour critiquer ; il faut chercher ce que l’auteur dénonce.')
  ],
  cours: [
    {h: 'La méthode en cinq questions'},
    {table: {head: ['Étape', 'Je me demande…'], rows: [
      ['**1. Identifier**', 'Quelle est la **nature** du document ? Qui est l’**auteur** ? Quelle est la **date** ? Pour qui (**destinataire**) ?'],
      ['**2. Situer**', 'Que se passe-t-il à ce moment de la guerre ? (utilise ta frise)'],
      ['**3. Comprendre**', 'Que dit le texte ? Que montre l’image ? Quels personnages, symboles, mots importants ?'],
      ['**4. Interpréter**', 'Quel **message** ? Quelle **intention** (convaincre, témoigner, dénoncer, se souvenir) ? Quel **point de vue** ?'],
      ['**5. Critiquer**', 'Est-ce **fiable** ? Témoin direct ou non ? Propagande ? Censure ? Écrit longtemps après ?']
    ]}},
    {h: 'Les types de documents de ta fiche'},
    {table: {head: ['Nature', 'Exemple', 'Attention à…'], rows: [
      ['**Lettre privée** (témoignage)', 'Martin Vaillagou à son fils (hiver 1914)', 'Témoin direct, mais le courrier peut être censuré ou adouci.'],
      ['**Lettre diplomatique**', 'Lardy (Paris) et Carlin (Londres) au Conseil fédéral', 'Point de vue officiel suisse, qui défend la neutralité.'],
      ['**Affiche de propagande**', 'Doc. 6, 7, 8', 'Fiable sur ce que le pays veut faire croire, pas sur la réalité.'],
      ['**Caricature**', 'Charles Clément, 1917', 'Exagère pour critiquer : chercher ce qu’elle dénonce.'],
      ['**Appel, programme**', 'Comité d’Olten, 11 novembre 1918', 'Texte militant qui veut convaincre.'],
      ['**Traité**', 'Versailles, article 231', 'Texte officiel imposé par les vainqueurs.'],
      ['**Plaque, monument**', 'Genève et Granges', 'Documents de **mémoire** : ce qu’on choisit de rappeler, et comment.']
    ]}},
    {h: 'Exemple : deux regards opposés'},
    {p: 'Les **affiches** (objectif 5) montrent l’ennemi comme un monstre. La **lettre de Martin Vaillagou** dit au contraire que « les Prussiens sont comme nous ». Comparer des documents de natures différentes permet de voir que la propagande ne disait pas tout.'},
    {h: 'Exemple : deux mémoires'},
    {p: 'À **Genève**, une plaque honore les soldats « morts au service de la patrie ». À **Granges**, une plaque honore trois grévistes tués « sous les balles des troupes de l’ordre ». Les deux parlent de 1914-1918, mais pas avec le même point de vue : la seconde peut créer des **tensions**, car elle accuse l’armée.'},
    {keys: [
      'Toujours : **nature, auteur, date, destinataire**.',
      'Puis : **contexte**, **contenu**, **message**, **point de vue**.',
      'Enfin : **fiabilité** (propagande ? témoin ? mémoire ?).'
    ]},
    {quiz: qcm('À toi : une lettre d’un général écrite en 1930 pour raconter sa victoire de 1918. Quel est le principal risque ?', 'Il écrit longtemps après et cherche peut-être à se donner le beau rôle', ['C’est forcément faux', 'C’est de la propagande ennemie', 'Il n’y a aucun risque'],
      'Date tardive et intérêt personnel : deux raisons d’être prudent.')}
  ],
  sources: ['fiche', 'hlsGreve', 'swissinfoArmes', 'wikiVersailles', 'wikiWilson', 'wikiBourrage']
};
