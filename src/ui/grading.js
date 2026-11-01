// Correction : points (sur 1) d'une question à partir de l'état de la réponse.
const half = x => Math.floor(x * 2 + 1e-9) / 2;

export function rowResults(item, st = {}) {
  const vals = st.vals || [];
  if (item.kind === 'rows') return item.rows.map((r, i) => vals[i] === r.answer);
  if (item.kind === 'gap') return item.blanks.map((b, i) => vals[i] === b.answer);
  if (item.kind === 'order') {
    const seq = st.seq || [];
    return item.items.map((_, pos) => seq[pos] === pos);
  }
  if (item.kind === 'map' && item.mode === 'find') {
    const picks = st.picks || [];
    return item.targets.map((t, i) => picks[i] === t);
  }
  return [];
}

export function itemPoints(item, st = {}) {
  switch (item.kind) {
    case 'qcm':
      return st.choice === item.answer ? 1 : 0;
    case 'multi': {
      const sel = st.sel || [];
      const good = sel.filter(i => item.answers.includes(i)).length;
      const bad = sel.length - good;
      if (good === item.answers.length && bad === 0) return 1;
      return Math.max(0, half((good - bad) / item.answers.length));
    }
    case 'map':
      if (item.mode === 'select') {
        const sel = st.sel || [];
        const good = sel.filter(id => item.answers.includes(id)).length;
        const bad = sel.length - good;
        if (good === item.answers.length && bad === 0) return 1;
        return Math.max(0, half((good - bad) / item.answers.length));
      }
    // falls through (mode find)
    case 'rows':
    case 'gap':
    case 'order': {
      const res = rowResults(item, st);
      const ok = res.filter(Boolean).length;
      return ok === res.length ? 1 : half(ok / res.length);
    }
    default:
      return 0;
  }
}

export const isSolved = (item, st = {}) => !!st && itemPoints(item, st) === 1;

// Une réponse a-t-elle été donnée ? (pour le mode Master)
export function isAnswered(item, st = {}) {
  if (!st) return false;
  switch (item.kind) {
    case 'qcm': return st.choice !== undefined;
    case 'multi': return (st.sel || []).length > 0;
    case 'order': return (st.seq || []).length === item.items.length;
    case 'rows':
    case 'gap': return (st.vals || []).some(v => v);
    case 'map': return item.mode === 'find' ? (st.picks || []).length > 0 : (st.sel || []).length > 0;
    default: return false;
  }
}

// Note suisse indicative (1 à 6, au demi-point)
export const swissGrade = (points, total) => Math.round((1 + (5 * points) / total) * 2) / 2;
