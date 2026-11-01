# Histoire 11e : la Première Guerre mondiale

Quiz d’histoire pour préparer le TS n°1 de Daniel (11VG). React + Vite, pensé d’abord pour le téléphone.

## Contenu

Les **dix objectifs** de la fiche « Objectifs TS n°1 », chacun avec un cours d’une à deux pages et trois niveaux de quiz (les bases, entraînement, approfondir) :

1. Les dates clés (frise de la fiche p. 9, guerre de mouvement et de position)
2. Le climat de tension (rivalités, course aux armements, alliances)
3. Les alliances et la carte (Triple Alliance, Triple Entente, qui rejoint qui, carte de l’Europe)
4. L’élément déclencheur (Sarajevo, l’engrenage des alliances)
5. Les affiches de propagande (doc. 6, 7 et 8 de la fiche, autres affiches célèbres)
6. Les femmes et les enfants (pendant et après le conflit, en Suisse et en Europe)
7. La Suisse dans la guerre (neutralité, général Wille, fossé, Croix-Rouge, grève générale)
8. La révolution russe (causes, Lénine, sortie de la guerre)
9. Les conséquences de la guerre (pertes, traités, nouveaux États, SDN)
10. Analyser des documents (lettres, affiches, caricature, plaques, traités)

Le **mode Master** est un test blanc : deux questions par objectif, sans correction avant la fin, puis les points et une note indicative sur 6.

Types de questions, tous corrigés tout de suite avec une explication : QCM, vrai ou faux, cases à cocher, remise en ordre, associations, classements, texte à trous, et cartes de l’Europe (1914 et 1920) où l’on touche les pays. « Nouvelle série » tire d’autres questions. Pas de récompenses ni de scores, seulement une barre de progression. Les réponses restent dans le navigateur (localStorage).

## Sources

Le contenu suit les fiches de Daniel, complétées par le Dictionnaire historique de la Suisse, Swissvotes, le CICR, le Musée national suisse, la Bibliothèque nationale suisse, la presse suisse (Le Temps, swissinfo), des musées (Australian War Memorial, Musée de l’Armée) et Wikipédia. La liste complète est dans l’appli (page « Sources ») et dans `src/content/sources.js`.

Les cartes sont dessinées à partir des frontières de **historical-basemaps** (A. Ourednik, GPL-3.0) : voir `data/README.md`. `npm run maps` les régénère.

## Lancer

Windows : double-cliquer sur `START-HISTOIRE.cmd` (Node.js 20.19+ ou 22.12+).

```sh
npm install
npm run dev      # http://localhost:5186
```

## Vérifications

`npm test` vérifie tout le contenu sur 40 séries tirées au hasard par niveau et 40 tests blancs : chaque question est bien formée, sa bonne réponse vaut 1 point, chaque pays demandé existe sur la carte, chaque image existe, et chaque objectif a son cours, ses sources et ses questions Master.

## Publication

Chaque push sur `main` lance `.github/workflows/pages.yml` : tests, construction, puis publication sur GitHub Pages (https://efradet.github.io/histoire-11e/). Il faut une fois activer **Settings > Pages > Source : GitHub Actions** dans le dépôt.
