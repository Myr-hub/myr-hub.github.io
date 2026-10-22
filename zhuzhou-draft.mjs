export function validateDraft(d) {
  if (!d || typeof d !== 'object' || Array.isArray(d)) return false;
  const fields = ['rounds', 'players', 'speed', 'cut'];
  if (Object.keys(d).some(k => !fields.includes(k))) return false;
  return [8, 12, 16].includes(d.rounds)
    && [2, 3].includes(d.players)
    && ['fast', 'normal', 'slow'].includes(d.speed)
    && ['system', 'manual'].includes(d.cut);
}
