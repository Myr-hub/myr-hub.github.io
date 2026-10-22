export function activePayload(values, schema) {
  return Object.fromEntries(Object.entries(schema)
    .filter(([key, rule]) => rule.enabled === true
      && Object.hasOwn(values, key))
    .map(([key]) => [key, values[key]]));
}
