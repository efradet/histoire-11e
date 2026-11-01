import React, {useState} from 'react';
import {ArrowLeft, ChevronRight, TriangleAlert, Lightbulb, PencilLine, Star, Library} from 'lucide-react';
import {objectives, objectiveById} from '../content/index.js';
import {instantiate} from '../content/index.js';
import {makeRng} from '../content/rng.js';
import Rich from './Rich.jsx';
import {Item, Doc} from './Items.jsx';
import EuropeMap from './EuropeMap.jsx';
import {SourceList} from './Pages.jsx';

function Quiz({q}) {
  const [item] = useState(() => ({...instantiate(q, makeRng(Math.floor(Math.random() * 1e6) + 1)), q: q.q.replace(/^À toi\s*:\s*/, ''), id: 'cours-quiz', label: ''}));
  const [st, setSt] = useState({});
  return <div className="try">
    <p className="box-title"><PencilLine size={17}/> À toi</p>
    <ol className="items"><Item item={item} state={st} setState={setSt}/></ol>
  </div>;
}

function Block({b}) {
  if (b.h) return <h2 className="cours-h">{b.h}</h2>;
  if (b.p) return <Rich text={b.p} as="p" className="cours-p"/>;
  if (b.list) return <ul className="cours-list">{b.list.map((l, i) => <li key={i}><Rich text={l}/></li>)}</ul>;
  if (b.table) return <div className="table-scroll"><table className="cours-table">
    <thead><tr>{b.table.head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
    <tbody>{b.table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}><Rich text={c}/></td>)}</tr>)}</tbody>
  </table></div>;
  if (b.keys) return <div className="keys"><p className="box-title"><Star size={17}/> À retenir</p><ul>{b.keys.map((k, i) => <li key={i}><Rich text={k}/></li>)}</ul></div>;
  if (b.warn) return <div className="warn"><p className="box-title"><TriangleAlert size={17}/> Attention, pièges</p><ul>{b.warn.map((w, i) => <li key={i}><Rich text={w}/></li>)}</ul></div>;
  if (b.tip) return <div className="tip"><p className="box-title"><Lightbulb size={17}/> Astuce</p><Rich text={b.tip} as="p"/></div>;
  if (b.frise) return <ol className="frise">{b.frise.map(y => <li key={y.y}>
    <span className="frise-year">{y.y}</span>
    <ul>{y.items.map((t, i) => <li key={i}><Rich text={t}/></li>)}</ul>
  </li>)}</ol>;
  if (b.doc) return <Doc doc={b.doc}/>;
  if (b.map) return <EuropeMap year={b.map.year} paint={b.map.paint} caption={b.map.caption} labels={b.map.labels}/>;
  if (b.quiz) return <Quiz q={b.quiz}/>;
  return null;
}

export default function CoursePage({oid, go}) {
  const o = objectiveById(oid);
  return <main className={`page cours c${oid}`}>
    <header className="page-head">
      <button type="button" className="back" onClick={() => go('/')}><ArrowLeft size={18}/> Sommaire</button>
      <p className="kicker">Cours · Objectif {oid} · {o.ref}</p>
      <h1>{o.title}</h1>
      <p className="lead">{o.subtitle}. Lis tranquillement, puis teste-toi avec la question « À toi » et les trois niveaux.</p>
    </header>
    <article className="cours-body">
      {o.cours.map((b, i) => <Block key={i} b={b}/>)}
      <h2 className="cours-h"><Library size={18}/> Sources</h2>
      <SourceList ids={o.sources}/>
    </article>
    <footer className="series-foot">
      {oid > 1 && <button type="button" className="btn-secondary" onClick={() => go(`/cours/${oid - 1}`)}><ArrowLeft size={17}/> Cours {oid - 1}</button>}
      {oid < objectives.length && <button type="button" className="btn-secondary" onClick={() => go(`/cours/${oid + 1}`)}>Cours {oid + 1} <ChevronRight size={17}/></button>}
      <button type="button" className="btn-primary" onClick={() => go(`/o/${oid}/1`)}>S’entraîner : niveau 1 <ChevronRight size={18}/></button>
    </footer>
  </main>;
}
