export function resolveName(name, reviewedAliases = new Map()) {
  if (typeof name !== 'string' || !name.trim()) throw new TypeError('Invalid name');
  const raw = name.trim();
  const resolved = reviewedAliases.get(raw);
  if (resolved !== undefined && (typeof resolved !== 'string' || !resolved.trim()))
    throw new TypeError('Invalid reviewed alias');
  return { raw, display: resolved?.trim() ?? raw, reviewed: resolved !== undefined };
}
