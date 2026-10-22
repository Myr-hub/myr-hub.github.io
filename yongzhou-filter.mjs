export function filterTables(tables, {game = null, offlineOnly = false} = {}) {
  return tables.filter(t =>
    (game === null || t.game === game) &&
    (!offlineOnly || t.online === 0));
}
