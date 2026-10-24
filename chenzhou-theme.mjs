export function previewTheme(saved, patch, allowed) {
  const result = { ...saved };
  for (const [key, value] of Object.entries(patch)) {
    if (!Object.hasOwn(allowed, key) || !allowed[key].includes(value))
      throw new TypeError('Unknown theme option');
    result[key] = value;
  }
  return result;
}
