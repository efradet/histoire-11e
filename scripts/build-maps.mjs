// Construit src/data/maps.json : cartes de l'Europe en 1914 et en 1920, en chemins SVG prêts à afficher.
// Source des frontières : historical-basemaps (A. Ourednik, GPL-3.0), voir data/README.md.
// Lancer : npm run maps
import fs from 'node:fs';
import mapshaper from 'mapshaper';
import {geoConicConformal, geoPath, geoCentroid, geoArea} from 'd3-geo';

const CLIP = [-18, 26, 62, 72]; // découpage large (ouest, sud, est, nord) : le cadre visible est plus petit
// Cadre visible : ces points (Irlande, Portugal, Crète, Caucase, Finlande, Norvège) doivent tenir dans l'image.
const VIEW = {type: 'MultiPoint', coordinates: [[-10.6, 52], [-9.6, 37], [-5.6, 35.9], [25, 34.6], [42, 41], [41, 62.5], [24, 63.3], [5, 62.3]]};
const WIDTH = 1000;

const NAMES_1914 = {
  'France': 'fra', 'United Kingdom of Great Britain and Ireland': 'gbr', 'German Empire': 'deu', 'Austro-Hungarian Empire': 'aut',
  'Russian Empire': 'rus', 'Finland': 'rus', 'Georgia': 'rus', 'Armenia': 'rus', 'Azerbaijan': 'rus',
  'Kingdom of Italy': 'ita', 'Serbia': 'srb', 'Montenegro': 'mne', 'Belgium': 'bel', 'Luxembourg': 'lux', 'Netherlands': 'nld',
  'Switzerland': 'che', 'Spain': 'esp', 'Portugal': 'prt', 'Denmark': 'dnk', 'Norway': 'nor', 'Sweden': 'swe', 'Romania': 'rou',
  'Bulgaria': 'bgr', 'Greece': 'grc', 'Albania': 'alb', 'Ottoman Empire': 'tur'
};
const NAMES_1920 = {
  'France': 'fra', 'United Kingdom of Great Britain and Ireland': 'gbr', 'Germany': 'deu', 'East Prussia': 'deu', 'Austria': 'aut',
  'Hungary': 'hun', 'Czechoslovakia': 'cze', 'Poland': 'pol', 'Yugoslavia': 'yug', 'USSR': 'rus', 'Ukraine': 'rus', 'White Russia': 'rus',
  'South Russia': 'rus', 'Armenia': 'rus', 'Azerbaijan': 'rus', 'Georgia': 'rus', 'Finland': 'fin', 'Estonia': 'est', 'Latvia': 'lva',
  'Lithuania': 'ltu', 'Italy': 'ita', 'Belgium': 'bel', 'Luxembourg': 'lux', 'Netherlands': 'nld', 'Switzerland': 'che', 'Spain': 'esp',
  'Portugal': 'prt', 'Denmark': 'dnk', 'Norway': 'nor', 'Sweden': 'swe', 'Romania': 'rou', 'Bulgaria': 'bgr', 'Greece': 'grc',
  'Albania': 'alb', 'Ottoman Sultanate': 'tur'
};

async function prepare(file) {
  const input = fs.readFileSync(file, 'utf8');
  const cmd = `-i in.json -clip bbox=${CLIP.join(',')} -simplify 22% keep-shapes -filter-slivers -o out.json format=geojson precision=0.001`;
  const out = await mapshaper.applyCommands(cmd, {'in.json': input});
  return JSON.parse(out['out.json']);
}

const projection = geoConicConformal().parallels([43, 60]).rotate([-15, 0]).fitWidth(WIDTH, VIEW);
const path = geoPath(projection).digits(1);
const [[, y0], [, y1]] = path.bounds(VIEW);
const HEIGHT = Math.ceil(y1 - y0);
projection.translate([projection.translate()[0], projection.translate()[1] - y0]);

// d3-geo attend les anneaux extérieurs dans le sens horaire (sinon le polygone couvre « tout le reste » du globe)
function rewind(geometry) {
  const fix = coords => {
    const poly = {type: 'Polygon', coordinates: coords};
    return geoArea(poly) > 2 * Math.PI ? coords.map(r => [...r].reverse()) : coords;
  };
  if (geometry.type === 'Polygon') return {...geometry, coordinates: fix(geometry.coordinates)};
  if (geometry.type === 'MultiPolygon') return {...geometry, coordinates: geometry.coordinates.map(fix)};
  return geometry;
}

async function build(file, names) {
  const gj = await prepare(file);
  for (const f of gj.features) if (f.geometry) f.geometry = rewind(f.geometry);
  const byId = {};
  const land = [];
  for (const f of gj.features) {
    if (!f.geometry) continue;
    let id = names[f.properties.NAME];
    // 1920 : la zone d'occupation italienne en Anatolie n'est pas l'Italie elle-même
    if (id === 'ita' && geoCentroid(f)[0] > 25) id = undefined;
    const d = path(f);
    if (!d) continue;
    if (!id) { land.push(d); continue; }
    (byId[id] ||= {parts: [], features: []});
    byId[id].parts.push(d);
    byId[id].features.push(f);
  }
  const countries = [];
  for (const [id, {parts, features}] of Object.entries(byId)) {
    // point d'étiquette : centroïde du plus grand morceau
    const polys = features.flatMap(f => f.geometry.type === 'MultiPolygon' ? f.geometry.coordinates.map(c => ({type: 'Polygon', coordinates: c})) : [f.geometry]);
    const biggest = polys.reduce((a, b) => (geoArea(b) > geoArea(a) ? b : a));
    const [cx, cy] = projection(geoCentroid(biggest));
    const b = path.bounds({type: 'FeatureCollection', features});
    countries.push({id, d: parts.join(''), c: [Math.round(cx), Math.round(cy)], b: b.flat().map(Math.round)});
  }
  return {bg: land.join(''), countries};
}

// Les données brutes (3 Mo) ne sont pas dans le dépôt : on les télécharge si besoin.
const RAW = 'https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/';
for (const y of [1914, 1920]) {
  const f = `data/world_${y}.geojson`;
  if (!fs.existsSync(f)) fs.writeFileSync(f, await (await fetch(`${RAW}world_${y}.geojson`)).text());
}
const maps = {width: WIDTH, height: HEIGHT, maps: {1914: await build('data/world_1914.geojson', NAMES_1914), 1920: await build('data/world_1920.geojson', NAMES_1920)}};
fs.writeFileSync('src/data/maps.json', JSON.stringify(maps));
const size = fs.statSync('src/data/maps.json').size;
console.log(`maps.json : ${WIDTH}×${HEIGHT}, ${Math.round(size / 1024)} Ko`, maps.maps[1914].countries.map(c => c.id).join(' '), '|', maps.maps[1920].countries.map(c => c.id).join(' '));
