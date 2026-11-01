import React, {useState} from 'react';
import {Check, X, CircleAlert, Lightbulb, RotateCcw, Maximize2, Undo2} from 'lucide-react';
import Rich, {fr} from './Rich.jsx';
import EuropeMap, {regionOf} from './EuropeMap.jsx';
import {itemPoints, rowResults} from './grading.js';
import {nameOf} from '../content/countries.js';
import {assetUrl} from '../asset-url.js';
import maps from '../data/maps.json';

// ---------- Document (image ou texte) ----------
export function Doc({doc}) {
  const [big, setBig] = useState(false);
  if (!doc) return null;
  if (doc.img) {
    return <figure className="doc doc-img">
      {doc.title && <p className="doc-title">{doc.title}</p>}
      <button type="button" className="doc-zoom" onClick={() => setBig(true)} aria-label="Agrandir l’image">
        <img src={assetUrl(doc.img)} alt={doc.caption || doc.title || ''} loading="lazy"/>
        <span className="zoom-hint"><Maximize2 size={14}/> Agrandir</span>
      </button>
      {doc.caption && <figcaption>{doc.caption}</figcaption>}
      {big && <div className="lightbox" role="dialog" aria-label={doc.title} onClick={() => setBig(false)}>
        <img src={assetUrl(doc.img)} alt={doc.caption || ''}/>
        <p>Touche l’image pour fermer</p>
      </div>}
    </figure>;
  }
  return <blockquote className="doc doc-text">
    {doc.title && <p className="doc-title">{doc.title}</p>}
    <Rich text={doc.text} as="p" className="doc-body"/>
  </blockquote>;
}

// ---------- Correction ----------
function Verdict({points, explain}) {
  const status = points === 1 ? 'right' : points > 0 ? 'form' : 'wrong';
  const icon = status === 'right' ? <Check size={17}/> : status === 'form' ? <CircleAlert size={17}/> : <X size={17}/>;
  const label = status === 'right' ? 'Juste.' : status === 'form' ? 'En partie juste.' : 'Pas juste.';
  return <div className={`feedback ${status}`} role="status">
    {icon}
    <div><strong>{label}</strong> <Rich text={explain}/></div>
  </div>;
}

function Head({item, points, shown}) {
  const status = shown ? (points === 1 ? 'right' : points > 0 ? 'form' : 'wrong') : '';
  return <div className="item-head">
    {item.label && <span className="item-label">{item.label}</span>}
    <Rich text={item.q} as="p" className="item-text"/>
    <span className={`mark ${status}`} aria-hidden="true">{status === 'right' ? <Check size={20}/> : status === 'wrong' ? <X size={18}/> : status === 'form' ? '~' : ''}</span>
  </div>;
}

function Tools({item, st, update, canCheck, onCheck, locked, exam, points}) {
  if (exam) return null;
  return <div className="tool-row">
    {!locked && onCheck && <button type="button" className="btn-check" disabled={!canCheck} onClick={onCheck}>Vérifier</button>}
    {!locked && item.hint && <button type="button" className={`btn-ghost${st.hint ? ' on' : ''}`} onClick={() => update({hint: !st.hint})}><Lightbulb size={16}/> Indice</button>}
    {locked && points < 1 && <button type="button" className="btn-ghost" onClick={() => update(null)}><RotateCcw size={16}/> Recommencer</button>}
  </div>;
}

function useItem({item, state, setState, exam, revealed}) {
  const st = state || {};
  const locked = exam ? !!revealed : !!st.checked;
  const shown = exam ? !!revealed : !!st.checked;
  const points = shown ? itemPoints(item, st) : 0;
  const update = patch => setState(patch === null ? {} : {...st, ...patch});
  return {st, locked, shown, points, update};
}

const Extras = ({item}) => <>
  {item.doc && <Doc doc={item.doc}/>}
  {item.map && <EuropeMap year={item.map.year} paint={item.map.paint} labels={item.map.labels}/>}
</>;

// ---------- QCM et vrai/faux ----------
function QcmItem(props) {
  const {item, exam} = props;
  const {st, locked, shown, points, update} = useItem(props);
  const pick = i => { if (locked) return; update(exam ? {choice: i} : {choice: i, checked: true}); };
  return <li className={`item${shown && points === 1 ? ' solved' : ''}`} id={item.id}>
    <Head item={item} points={points} shown={shown}/>
    <Extras item={item}/>
    <div className={item.vf ? 'vf-row' : 'options'}>
      {item.options.map((o, i) => {
        const cls = ['opt'];
        if (st.choice === i) cls.push('picked');
        if (shown && i === item.answer) cls.push('good');
        if (shown && st.choice === i && i !== item.answer) cls.push('bad');
        return <button key={i} type="button" className={cls.join(' ')} disabled={locked} onClick={() => pick(i)} aria-pressed={st.choice === i}>
          {!item.vf && <span className="opt-letter">{'ABCDEF'[i]}</span>}<span>{fr(o)}</span>
        </button>;
      })}
    </div>
    {!exam && !locked && item.hint && <Tools item={item} st={st} update={update} locked={locked} exam={exam} points={points}/>}
    {!exam && st.hint && !locked && <p className="hint"><Lightbulb size={16}/><span>{item.hint}</span></p>}
    {shown && <Verdict points={points} explain={item.explain}/>}
    {!exam && locked && points < 1 && <Tools item={item} st={st} update={update} locked={locked} exam={exam} points={points}/>}
  </li>;
}

// ---------- Plusieurs bonnes réponses ----------
function MultiItem(props) {
  const {item, exam} = props;
  const {st, locked, shown, points, update} = useItem(props);
  const sel = st.sel || [];
  const toggle = i => { if (locked) return; update({sel: sel.includes(i) ? sel.filter(x => x !== i) : [...sel, i]}); };
  return <li className={`item${shown && points === 1 ? ' solved' : ''}`} id={item.id}>
    <Head item={item} points={points} shown={shown}/>
    <Extras item={item}/>
    <p className="instr">Plusieurs réponses possibles.</p>
    <div className="options">
      {item.options.map((o, i) => {
        const on = sel.includes(i), good = item.answers.includes(i);
        const cls = ['opt', 'check'];
        if (on) cls.push('picked');
        if (shown && good) cls.push(on ? 'good' : 'missed');
        if (shown && on && !good) cls.push('bad');
        return <button key={i} type="button" className={cls.join(' ')} disabled={locked} onClick={() => toggle(i)} aria-pressed={on}>
          <span className="box">{on ? <Check size={15}/> : ''}</span><span>{fr(o)}</span>
          {shown && good && !on && <em className="tag">oubliée</em>}
        </button>;
      })}
    </div>
    <Tools item={item} st={st} update={update} locked={locked} exam={exam} points={points} canCheck={sel.length > 0} onCheck={() => update({checked: true})}/>
    {shown && <Verdict points={points} explain={item.explain}/>}
  </li>;
}

// ---------- Remettre dans l'ordre ----------
function OrderItem(props) {
  const {item, exam} = props;
  const {st, locked, shown, points, update} = useItem(props);
  const seq = st.seq || [];
  const res = shown ? rowResults(item, st) : [];
  const remaining = item.display.filter(i => !seq.includes(i));
  return <li className={`item${shown && points === 1 ? ' solved' : ''}`} id={item.id}>
    <Head item={item} points={points} shown={shown}/>
    <Extras item={item}/>
    <p className="instr">Touche les éléments dans l’ordre : du plus ancien (1) au plus récent.</p>
    <ol className="order-answer">
      {item.items.map((_, pos) => {
        const v = seq[pos];
        if (!shown && pos > seq.length) return null;
        return <li key={pos} className={`slot${v === undefined ? ' empty' : ''}${shown ? (res[pos] ? ' good' : ' bad') : ''}`}>
          <span className="pos">{pos + 1}</span>
          {v !== undefined ? <button type="button" disabled={locked} onClick={() => update({seq: seq.filter((_, k) => k < pos)})}>{fr(item.items[v])}</button> : <span className="placeholder">{pos === seq.length ? 'Touche l’élément n° ' + (pos + 1) + ' ci-dessous' : '…'}</span>}
        </li>;
      })}
    </ol>
    {!locked && remaining.length > 0 && <div className="order-pool">
      {remaining.map(i => <button key={i} type="button" className="chip-btn" onClick={() => update({seq: [...seq, i]})}>{fr(item.items[i])}</button>)}
    </div>}
    {!locked && seq.length > 0 && <button type="button" className="btn-ghost small" onClick={() => update({seq: seq.slice(0, -1)})}><Undo2 size={15}/> Retirer le dernier</button>}
    <Tools item={item} st={st} update={update} locked={locked} exam={exam} points={points} canCheck={seq.length === item.items.length} onCheck={() => update({checked: true})}/>
    {shown && points < 1 && <div className="solution"><p className="solution-title">Le bon ordre</p><ol>{item.items.map((t, i) => <li key={i}>{fr(t)}</li>)}</ol></div>}
    {shown && <Verdict points={points} explain={item.explain}/>}
  </li>;
}

// ---------- Une réponse par ligne (associer, classer, frise) ----------
function RowsItem(props) {
  const {item, exam} = props;
  const {st, locked, shown, points, update} = useItem(props);
  const vals = st.vals || [];
  const res = shown ? rowResults(item, st) : [];
  const chips = item.choices.length <= 4;
  const set = (r, v) => { if (locked) return; const vs = [...vals]; vs[r] = v; update({vals: vs}); };
  return <li className={`item${shown && points === 1 ? ' solved' : ''}`} id={item.id}>
    <Head item={item} points={points} shown={shown}/>
    <Extras item={item}/>
    <ul className="rows">
      {item.rows.map((r, i) => <li key={i} className={`row${shown ? (res[i] ? ' good' : ' bad') : ''}`}>
        <span className="row-label"><Rich text={r.label}/></span>
        {chips
          ? <div className="seg" role="group" aria-label={r.label}>
              {item.choices.map(c => <button key={c} type="button" disabled={locked} className={vals[i] === c ? 'on' : ''} aria-pressed={vals[i] === c} onClick={() => set(i, c)}>{fr(c)}</button>)}
            </div>
          : <select value={vals[i] || ''} disabled={locked} onChange={e => set(i, e.target.value)} aria-label={r.label}>
              <option value="">Choisir…</option>
              {item.choices.map(c => <option key={c} value={c}>{c}</option>)}
            </select>}
        {shown && !res[i] && <span className="correction">→ {fr(r.answer)}</span>}
      </li>)}
    </ul>
    <Tools item={item} st={st} update={update} locked={locked} exam={exam} points={points} canCheck={item.rows.every((_, i) => vals[i])} onCheck={() => update({checked: true})}/>
    {shown && <Verdict points={points} explain={item.explain}/>}
  </li>;
}

// ---------- Texte à trous ----------
function GapItem(props) {
  const {item, exam} = props;
  const {st, locked, shown, points, update} = useItem(props);
  const vals = st.vals || [];
  const res = shown ? rowResults(item, st) : [];
  const set = (b, v) => { const vs = [...vals]; vs[b] = v; update({vals: vs}); };
  let b = -1;
  return <li className={`item${shown && points === 1 ? ' solved' : ''}`} id={item.id}>
    <Head item={{...item, q: item.q || 'Complète le texte.'}} points={points} shown={shown}/>
    <p className="gap-text">
      {item.parts.map((part, k) => {
        if (part !== null) return <Rich key={k} text={part}/>;
        b += 1;
        const bi = b, blank = item.blanks[bi];
        return <span key={k} className={`gap${shown ? (res[bi] ? ' good' : ' bad') : ''}`}>
          <select value={vals[bi] || ''} disabled={locked} onChange={e => set(bi, e.target.value)} aria-label={`Trou ${bi + 1}`}>
            <option value="">…</option>
            {blank.options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          {shown && !res[bi] && <span className="correction"> ({blank.answer})</span>}
        </span>;
      })}
    </p>
    <Tools item={item} st={st} update={update} locked={locked} exam={exam} points={points} canCheck={item.blanks.every((_, i) => vals[i])} onCheck={() => update({checked: true})}/>
    {shown && <Verdict points={points} explain={item.explain}/>}
  </li>;
}

// ---------- Carte ----------
const isSmall = (year, id) => { const c = maps.maps[year].countries.find(x => x.id === id); return c && (c.b[2] - c.b[0]) * (c.b[3] - c.b[1]) < 9000; };

function MapItem(props) {
  const {item, exam} = props;
  const {st, locked, shown, points, update} = useItem(props);
  const year = item.year;
  if (item.mode === 'select') {
    const sel = st.sel || [];
    const marks = {};
    for (const id of sel) marks[id] = shown ? (item.answers.includes(id) ? 'right' : 'wrong') : 'picked';
    if (shown) for (const id of item.answers) if (!sel.includes(id)) marks[id] = 'missed';
    const toggle = id => { if (locked) return; update({sel: sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id]}); };
    return <li className={`item${shown && points === 1 ? ' solved' : ''}`} id={item.id}>
      <Head item={item} points={points} shown={shown}/>
      <EuropeMap year={year} onPick={locked ? undefined : toggle} marks={marks} labels={shown ? [...new Set([...sel, ...item.answers])] : sel}/>
      <p className="map-status">{sel.length ? `Touché : ${sel.map(id => nameOf(year, id)).join(', ')}` : 'Touche les pays sur la carte (touche encore pour enlever).'}</p>
      <Tools item={item} st={st} update={update} locked={locked} exam={exam} points={points} canCheck={sel.length > 0} onCheck={() => update({checked: true})}/>
      {shown && <Verdict points={points} explain={item.explain}/>}
    </li>;
  }
  // mode « find » : un pays après l'autre
  const picks = st.picks || [];
  const cur = picks.length;
  const done = cur >= item.targets.length;
  const target = item.targets[Math.min(cur, item.targets.length - 1)];
  const instant = !exam; // à l'entraînement, on voit tout de suite si c'est juste
  const marks = {};
  picks.forEach((id, i) => { if (id) marks[id] = instant || shown ? (id === item.targets[i] ? 'right' : 'wrong') : 'picked'; });
  if (shown) item.targets.forEach((t, i) => { if (picks[i] !== t) marks[t] = 'missed'; });
  const pick = id => {
    if (locked || done) return;
    const np = [...picks, id];
    update(!exam && np.length >= item.targets.length ? {picks: np, checked: true} : {picks: np});
  };
  const labels = shown ? item.targets : instant ? picks : [];
  const auto = item.zoomSmall && !done && isSmall(year, target) ? regionOf(year, target) : null;
  return <li className={`item${shown && points === 1 ? ' solved' : ''}`} id={item.id}>
    <Head item={item} points={points} shown={shown}/>
    {!done && !locked && <p className="map-target">Touche : <strong>{nameOf(year, target)}</strong> <span className="small">({cur + 1} / {item.targets.length})</span></p>}
    <EuropeMap year={year} onPick={locked || done ? undefined : pick} marks={marks} labels={labels} autoRegion={auto}/>
    <ul className="target-list">
      {item.targets.map((t, i) => {
        const p = picks[i];
        const ok = p === t;
        const vis = p !== undefined && (instant || shown);
        return <li key={t} className={vis ? (ok ? 'good' : 'bad') : p !== undefined ? 'done' : i === cur ? 'current' : ''}>
          {vis ? (ok ? <Check size={14}/> : <X size={14}/>) : null} {nameOf(year, t)}
          {vis && !ok && <span className="small"> (tu as touché : {nameOf(year, p)})</span>}
        </li>;
      })}
    </ul>
    {exam && !locked && picks.length > 0 && <button type="button" className="btn-ghost small" onClick={() => update({picks: []})}><RotateCcw size={15}/> Recommencer la carte</button>}
    <Tools item={item} st={st} update={update} locked={locked} exam={exam} points={points}/>
    {shown && <Verdict points={points} explain={item.explain}/>}
  </li>;
}

export function Item(props) {
  switch (props.item.kind) {
    case 'qcm': return <QcmItem {...props}/>;
    case 'multi': return <MultiItem {...props}/>;
    case 'order': return <OrderItem {...props}/>;
    case 'rows': return <RowsItem {...props}/>;
    case 'gap': return <GapItem {...props}/>;
    case 'map': return <MapItem {...props}/>;
    default: return null;
  }
}
