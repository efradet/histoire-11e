import React, {useEffect, useMemo, useState} from 'react';
import {ArrowLeft, RefreshCw, RotateCcw, ChevronRight, ChevronDown, Timer, ClipboardCheck, BookMarked, GraduationCap, BookOpenText, Library} from 'lucide-react';
import {objectives, objectiveById, LEVELS, buildSeries, buildMaster} from '../content/index.js';
import {SOURCES} from '../content/sources.js';
import {Item, Doc} from './Items.jsx';
import Rich from './Rich.jsx';
import {isSolved, isAnswered, itemPoints, swissGrade} from './grading.js';
import {newSeed} from './store.js';

const seriesKey = (o, l) => `${o}.${l}`;
const fmt = n => String(n).replace('.', ',');

function Exercise({exo, states, setItemState, exam, revealed, title}) {
  return <section className="exercise">
    <header className="ex-head">
      <span className="ex-num">{exo.number}</span>
      <h3>{title || exo.title}</h3>
    </header>
    {exo.intro && <Rich text={exo.intro} as="p" className="ex-intro"/>}
    {exo.doc && <Doc doc={exo.doc}/>}
    <ol className="items">
      {exo.items.map(it => <Item key={it.id} item={it} state={states[it.id]} setState={s => setItemState(it.id, s)} exam={exam} revealed={revealed}/>)}
    </ol>
  </section>;
}

function Rappel({o, open, onToggle, go}) {
  return <aside className={`rappel${open ? ' open' : ''}`}>
    <button type="button" className="rappel-toggle" onClick={onToggle} aria-expanded={open}>
      <BookMarked size={17}/> L’essentiel {open ? <ChevronDown size={17}/> : <ChevronRight size={17}/>}
    </button>
    {open && <ul>{o.rappel.map((r, i) => <li key={i}><Rich text={r}/></li>)}</ul>}
    {open && <button type="button" className="rappel-cours" onClick={() => go(`/cours/${o.id}`)}><BookOpenText size={16}/> Je ne suis pas sûr : lire le cours</button>}
  </aside>;
}

// ---------- Sommaire ----------
export function Home({store, go}) {
  const progressOf = (o, l) => {
    const s = store.series[seriesKey(o, l)];
    if (!s) return null;
    const items = buildSeries(o, l, s.seed).flatMap(e => e.items);
    const done = items.filter(it => isSolved(it, s.answers?.[it.id])).length;
    return {done, total: items.length};
  };
  return <main className="page home">
    <header className="home-head">
      <p className="kicker">Histoire 11e · Objectifs TS n°1</p>
      <h1>La Première Guerre mondiale</h1>
      <p className="lead">Les dix objectifs de ta fiche, chacun avec un cours et trois niveaux de quiz, puis un test blanc. Chaque réponse est corrigée tout de suite, avec une explication.</p>
    </header>
    <ol className="toc">
      {objectives.map(o => <li key={o.id} className={`toc-ch c${o.id}`}>
        <div className="toc-title">
          <span className="ch-num">{o.id}</span>
          <div><h2>{o.title}</h2><p>{o.subtitle}</p></div>
          <button type="button" className="cours-btn" onClick={() => go(`/cours/${o.id}`)}><BookOpenText size={16}/> Cours</button>
        </div>
        <div className="toc-levels">
          {LEVELS.map(l => {
            const p = progressOf(o.id, l.n);
            return <button key={l.n} type="button" className="level-btn" onClick={() => go(`/o/${o.id}/${l.n}`)}>
              <strong>{l.name}</strong>
              <span>{p ? `${p.done} / ${p.total}` : l.sub}</span>
              {p && <i className="level-bar" style={{'--p': `${Math.round((p.done / p.total) * 100)}%`}}/>}
            </button>;
          })}
        </div>
      </li>)}
    </ol>
    <button type="button" className="master-card" onClick={() => go('/master')}>
      <GraduationCap size={30}/>
      <div><strong>Mode Master : test blanc</strong><span>Deux questions par objectif, sans explication pendant le test. Correction et note indicative à la fin.</span></div>
      <ChevronRight size={22}/>
    </button>
    <button type="button" className="aide-link" onClick={() => go('/sources')}><Library size={17}/> Sources des questions et des cours</button>
  </main>;
}

// ---------- Série ----------
export function SeriesPage({oid, level, store, setStore, go}) {
  const o = objectiveById(oid);
  const key = seriesKey(oid, level);
  const saved = store.series[key];
  const seed = saved?.seed;
  useEffect(() => {
    if (!seed) setStore(s => ({...s, series: {...s.series, [key]: {seed: newSeed(), answers: {}}}}));
  }, [key, seed]);
  const exercises = useMemo(() => (seed ? buildSeries(oid, level, seed) : []), [oid, level, seed]);
  const [rappelOpen, setRappelOpen] = useState(level === 1);
  useEffect(() => setRappelOpen(level === 1), [oid, level]);
  if (!seed) return null;
  const answers = saved.answers || {};
  const setItemState = (id, st) => setStore(s => ({...s, series: {...s.series, [key]: {...s.series[key], answers: {...s.series[key].answers, [id]: st}}}}));
  const all = exercises.flatMap(e => e.items);
  const done = all.filter(it => isSolved(it, answers[it.id])).length;
  const renew = () => { setStore(s => ({...s, series: {...s.series, [key]: {seed: newSeed(), answers: {}}}})); window.scrollTo({top: 0}); };
  const restart = () => { setStore(s => ({...s, series: {...s.series, [key]: {...s.series[key], answers: {}}}})); window.scrollTo({top: 0}); };
  const next = level < 3 ? `/o/${oid}/${level + 1}` : oid < objectives.length ? `/o/${oid + 1}/1` : '/master';
  return <main className={`page series c${oid}`}>
    <header className="page-head">
      <button type="button" className="back" onClick={() => go('/')}><ArrowLeft size={18}/> Sommaire</button>
      <p className="kicker">Objectif {oid} · {o.ref}</p>
      <div className="title-row"><h1>{o.title}</h1><button type="button" className="cours-btn" onClick={() => go(`/cours/${oid}`)}><BookOpenText size={16}/> Cours</button></div>
      <nav className="level-tabs" aria-label="Niveaux">
        {LEVELS.map(l => <button key={l.n} type="button" className={l.n === level ? 'active' : ''} aria-current={l.n === level ? 'page' : undefined} onClick={() => go(`/o/${oid}/${l.n}`)}>{l.name}</button>)}
      </nav>
      <div className="progress-line"><span>{done} / {all.length} justes</span><i style={{'--p': `${Math.round((done / all.length) * 100)}%`}}/></div>
    </header>
    <Rappel o={o} open={rappelOpen} onToggle={() => setRappelOpen(v => !v)} go={go}/>
    {exercises.map(exo => <Exercise key={exo.number} exo={exo} states={answers} setItemState={setItemState}/>)}
    <footer className="series-foot">
      <button type="button" className="btn-secondary" onClick={renew}><RefreshCw size={17}/> Nouvelle série</button>
      <button type="button" className="btn-secondary" onClick={restart}><RotateCcw size={17}/> Effacer mes réponses</button>
      <button type="button" className="btn-primary" onClick={() => go(next)}>{level < 3 ? `Niveau ${level + 1}` : oid < objectives.length ? `Objectif ${oid + 1}` : 'Mode Master'} <ChevronRight size={18}/></button>
    </footer>
  </main>;
}

// ---------- Mode Master ----------
function useClock(start, stopAt) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => { if (stopAt) return; const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, [stopAt]);
  const ms = Math.max(0, (stopAt || now) - start);
  const m = Math.floor(ms / 60000), s = Math.floor((ms % 60000) / 1000);
  return `${m}:${String(s).padStart(2, '0')}`;
}

export function MasterPage({store, setStore, go}) {
  const m = store.master;
  useEffect(() => { if (!m) setStore(s => ({...s, master: {seed: newSeed(), answers: {}, startedAt: Date.now(), submittedAt: null}})); }, [m]);
  const exercises = useMemo(() => (m ? buildMaster(m.seed) : []), [m?.seed]);
  const clock = useClock(m?.startedAt || Date.now(), m?.submittedAt);
  const [confirm, setConfirm] = useState(false);
  if (!m) return null;
  const revealed = !!m.submittedAt;
  const all = exercises.flatMap(e => e.items);
  const setItemState = (id, st) => setStore(s => ({...s, master: {...s.master, answers: {...s.master.answers, [id]: st}}}));
  const points = all.reduce((p, it) => p + itemPoints(it, m.answers[it.id]), 0);
  const answered = all.filter(it => isAnswered(it, m.answers[it.id])).length;
  const submit = () => { setStore(s => ({...s, master: {...s.master, submittedAt: Date.now()}})); setConfirm(false); window.scrollTo({top: 0, behavior: 'smooth'}); };
  const fresh = () => { setStore(s => ({...s, master: {seed: newSeed(), answers: {}, startedAt: Date.now(), submittedAt: null}})); window.scrollTo({top: 0}); };
  const weak = revealed ? exercises.filter(e => e.items.some(it => itemPoints(it, m.answers[it.id]) < 1)) : [];
  return <main className="page series master">
    <header className="page-head">
      <button type="button" className="back" onClick={() => go('/')}><ArrowLeft size={18}/> Sommaire</button>
      <p className="kicker">Mode Master</p>
      <h1>Test blanc</h1>
      <p className="lead">{revealed ? 'Le test est corrigé : chaque question montre maintenant la bonne réponse et l’explication.' : 'Deux questions par objectif, comme pendant le TS. Pas d’explication avant la fin. Quand tu as fini, touche « Corriger le test ».'}</p>
      <div className="master-bar"><span><Timer size={16}/> {clock}</span><span>{answered} / {all.length} répondues</span></div>
      {revealed && <div className="result-box">
        <p><strong>{fmt(points)} / {all.length} points</strong></p>
        <p>Note indicative : <strong>{fmt(swissGrade(points, all.length))}</strong></p>
        <p className="small">Les questions à plusieurs parties (classements, cartes, ordre) peuvent rapporter des demi-points.</p>
        {weak.length > 0 && <div className="weak">
          <p className="small">À revoir :</p>
          <div className="weak-links">{weak.map(e => <button key={e.objective} type="button" className="chip-btn" onClick={() => go(`/cours/${e.objective}`)}>{e.objective}. {e.title}</button>)}</div>
        </div>}
      </div>}
    </header>
    {exercises.map(exo => <Exercise key={exo.number} exo={exo} title={`Question ${exo.number} · Objectif ${exo.objective} : ${exo.title}`} states={m.answers} setItemState={setItemState} exam revealed={revealed}/>)}
    <footer className="series-foot">
      {!revealed && !confirm && <button type="button" className="btn-primary" onClick={() => setConfirm(true)}><ClipboardCheck size={18}/> Corriger le test</button>}
      {!revealed && confirm && <div className="confirm">
        <p>{answered < all.length ? `Il reste ${all.length - answered} question(s) sans réponse. ` : ''}Corriger maintenant ? Tu ne pourras plus changer tes réponses.</p>
        <button type="button" className="btn-secondary" onClick={() => setConfirm(false)}>Continuer le test</button>
        <button type="button" className="btn-primary" onClick={submit}>Oui, corriger</button>
      </div>}
      {revealed && <button type="button" className="btn-primary" onClick={fresh}><RefreshCw size={17}/> Nouveau test</button>}
    </footer>
  </main>;
}

// ---------- Sources ----------
export function SourceList({ids}) {
  return <ul className="source-list">{ids.map(id => {
    const s = SOURCES[id];
    return <li key={id}>{s.url ? <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a> : <span>{s.title}</span>} <span className="small">· {s.site}</span></li>;
  })}</ul>;
}

export function SourcesPage({go}) {
  return <main className="page sources">
    <header className="page-head">
      <button type="button" className="back" onClick={() => go('/')}><ArrowLeft size={18}/> Sommaire</button>
      <p className="kicker">D’où viennent les informations</p>
      <h1>Sources</h1>
      <p className="lead">Les questions suivent les objectifs et les fiches de Daniel. Les faits, les chiffres et les explications ont été vérifiés dans ces sources.</p>
    </header>
    <SourceList ids={Object.keys(SOURCES)}/>
  </main>;
}
