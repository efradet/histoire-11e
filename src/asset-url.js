// Fichiers de public/ (images des documents) : chemin relatif à la page,
// pour que le site marche aussi bien en local que sur GitHub Pages (/histoire-11e/).
export const assetUrl = path => `${import.meta.env.BASE_URL}${String(path).replace(/^\//, '')}`;
