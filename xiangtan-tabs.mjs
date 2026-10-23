export function selectCategory(catalog, category, previousId) {
  const games = catalog[category];
  if (!Array.isArray(games) || games.some(id => typeof id !== 'string' || !id))
    throw new TypeError('Invalid category');
  if (new Set(games).size !== games.length) throw new TypeError('Duplicate game ID');
  return { category, gameId: games.includes(previousId) ? previousId : (games[0] ?? null) };
}
