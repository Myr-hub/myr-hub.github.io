export function describeRules(snapshot, fields) {
  return fields.flatMap(({ key, label, choices }) => {
    if (!Object.hasOwn(snapshot, key)) return [];
    const value = snapshot[key];
    if (!['string', 'number', 'boolean'].includes(typeof value))
      throw new TypeError('Invalid rule value');
    const text = choices[String(value)];
    if (!Object.hasOwn(choices, String(value)) || typeof text !== 'string')
      throw new TypeError('Unknown rule option');
    return [`${label}：${text}`];
  });
}
