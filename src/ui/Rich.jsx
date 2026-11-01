import React from 'react';

// Typographie française : espace insécable avant ? ! : ; » et après «
export const fr = s => String(s).replace(/ ([?!:;»])/g, '\u00a0$1').replace(/« /g, '«\u00a0');

// Texte simple avec **gras** et retours à la ligne.
function inline(text, keyBase = '') {
  const parts = fr(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => (p.startsWith('**') && p.endsWith('**') ? <strong key={keyBase + i}>{p.slice(2, -2)}</strong> : <React.Fragment key={keyBase + i}>{p}</React.Fragment>));
}

export default function Rich({text, as: Tag = 'span', className}) {
  if (text == null) return null;
  const blocks = String(text).split(/\n\n/);
  if (blocks.length > 1) {
    return <div className={className}>{blocks.map((b, i) => <p key={i}>{b.split('\n').map((l, j) => <React.Fragment key={j}>{j > 0 && <br/>}{inline(l, `${i}.${j}.`)}</React.Fragment>)}</p>)}</div>;
  }
  const lines = String(text).split('\n');
  return <Tag className={className}>{lines.map((l, j) => <React.Fragment key={j}>{j > 0 && <br/>}{inline(l, `${j}.`)}</React.Fragment>)}</Tag>;
}
