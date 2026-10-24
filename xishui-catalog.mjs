export function compareCatalog(listed, visible) {
  for (const items of [listed, visible])
    if (!Array.isArray(items) || items.some(x => typeof x !== 'string' || !x.trim()))
      throw new TypeError('Expected names');
  const a = new Set(listed.map(x => x.trim()));
  const b = new Set(visible.map(x => x.trim()));
  return {
    onlyListed: [...a].filter(x => !b.has(x)),
    onlyVisible: [...b].filter(x => !a.has(x)),
    unionCount: new Set([...a, ...b]).size
  };
}
