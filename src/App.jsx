import React, {useEffect, useState} from 'react';
import {loadStore, saveStore} from './ui/store.js';
import {Home, SeriesPage, MasterPage, SourcesPage} from './ui/Pages.jsx';
import CoursePage from './ui/CoursePage.jsx';

const readRoute = () => (window.location.hash.replace(/^#/, '') || '/');

export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [store, setStore] = useState(loadStore);
  const [storageOk, setStorageOk] = useState(true);

  useEffect(() => { setStorageOk(saveStore(store)); }, [store]);
  useEffect(() => {
    const onHash = () => { setRoute(readRoute()); window.scrollTo({top: 0}); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const go = path => { window.location.hash = path; };

  let page;
  const s = route.match(/^\/o\/(10|[1-9])\/([1-3])$/);
  const c = route.match(/^\/cours\/(10|[1-9])$/);
  if (s) page = <SeriesPage key={route} oid={+s[1]} level={+s[2]} store={store} setStore={setStore} go={go}/>;
  else if (c) page = <CoursePage key={route} oid={+c[1]} go={go}/>;
  else if (route === '/master') page = <MasterPage store={store} setStore={setStore} go={go}/>;
  else if (route === '/sources') page = <SourcesPage go={go}/>;
  else page = <Home store={store} go={go}/>;

  return <>
    {!storageOk && <p className="storage-warning">Ce navigateur ne garde pas les réponses : tu peux travailler, mais rien ne sera sauvegardé.</p>}
    {page}
  </>;
}
