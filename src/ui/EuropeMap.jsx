import React, {useEffect, useMemo, useState} from 'react';
import {ZoomIn} from 'lucide-react';
import maps from '../data/maps.json';
import {PAINTS, nameOf} from '../content/countries.js';

const W = maps.width, H = maps.height;
const FULL = [0, 0, W, H];

// Zones de zoom (pour toucher facilement les petits pays sur téléphone)
const REGIONS = {
  1914: [['ouest', 'Ouest', ['bel', 'nld', 'lux', 'che']], ['nord', 'Nord', ['dnk', 'nld', 'bel']], ['balkans', 'Balkans', ['srb', 'mne', 'alb', 'bgr', 'grc', 'rou']]],
  1920: [['ouest', 'Ouest', ['bel', 'nld', 'lux', 'che']], ['centre', 'Centre', ['cze', 'aut', 'hun', 'che']], ['baltique', 'Baltique', ['est', 'lva', 'ltu', 'dnk']], ['balkans', 'Balkans', ['yug', 'alb', 'bgr', 'grc', 'rou']]]
};

function boxOf(year, ids) {
  const cs = maps.maps[year].countries.filter(c => ids.includes(c.id));
  let [x0, y0, x1, y1] = [Infinity, Infinity, -Infinity, -Infinity];
  for (const c of cs) { x0 = Math.min(x0, c.b[0]); y0 = Math.min(y0, c.b[1]); x1 = Math.max(x1, c.b[2]); y1 = Math.max(y1, c.b[3]); }
  let w = (x1 - x0) * 1.36, h = (y1 - y0) * 1.36;
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  if (w / h < W / H) w = h * (W / H); else h = w / (W / H);
  if (w < 240) { w = 240; h = w / (W / H); }
  const x = Math.min(Math.max(0, cx - w / 2), W - w), y = Math.min(Math.max(0, cy - h / 2), H - h);
  return [x, y, w, h];
}

export const regionOf = (year, id) => (REGIONS[year].find(([, , ids]) => ids.includes(id)) || [null])[0];

export default function EuropeMap({year = 1914, paint, onPick, marks = {}, labels = [], autoRegion, caption}) {
  const data = maps.maps[year];
  const p = paint ? PAINTS[paint] : null;
  const [region, setRegion] = useState(autoRegion || null);
  useEffect(() => { setRegion(autoRegion || null); }, [autoRegion]);
  const view = useMemo(() => {
    const r = REGIONS[year].find(([k]) => k === region);
    return r ? boxOf(year, r[2]) : FULL;
  }, [year, region]);
  const fs = view[2] * 0.034;
  const labelSet = new Set(labels);
  return <figure className="europe-map">
    <div className="map-frame">
      <svg viewBox={view.map(v => v.toFixed(1)).join(' ')} role="img" aria-label={caption || `Carte de l’Europe en ${year}`}>
        <defs>
          <pattern id={`hatch-${year}`} patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
            <rect width="8" height="8" fill="#e9c9bf"/><line x1="0" y1="0" x2="0" y2="8" stroke="#b85c45" strokeWidth="3"/>
          </pattern>
        </defs>
        <rect x="-50" y="-50" width={W + 100} height={H + 100} className="sea"/>
        <path d={data.bg} className="bg-land"/>
        {data.countries.map(c => {
          const cat = p?.of[c.id];
          const mark = marks[c.id];
          const style = cat === 'occupe' && !mark ? {fill: `url(#hatch-${year})`} : undefined;
          return <path key={c.id} d={c.d} style={style} vectorEffect="non-scaling-stroke"
            className={`land${cat ? ` p-${cat}` : ''}${mark ? ` m-${mark}` : ''}${onPick ? ' pickable' : ''}`}
            onClick={onPick ? () => onPick(c.id) : undefined}>
            <title>{onPick ? '' : nameOf(year, c.id)}</title>
          </path>;
        })}
        {data.countries.filter(c => labelSet.has(c.id)).map(c => <text key={`t-${c.id}`} x={c.c[0]} y={c.c[1]} fontSize={fs} className="map-label">{nameOf(year, c.id)}</text>)}
      </svg>
    </div>
    <div className="map-zoom" role="group" aria-label="Zoom">
      <ZoomIn size={15} aria-hidden="true"/>
      <button type="button" className={!region ? 'on' : ''} onClick={() => setRegion(null)}>Europe</button>
      {REGIONS[year].map(([k, label]) => <button key={k} type="button" className={region === k ? 'on' : ''} onClick={() => setRegion(k)}>{label}</button>)}
    </div>
    {p && <ul className="map-legend">{p.legend.map(([cat, label]) => <li key={cat}><i className={`sw p-${cat}`}/>{label}</li>)}</ul>}
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}
