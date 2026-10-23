export function sessionLabel(config) {
  if (config?.mode === 'fixed' && Number.isInteger(config.rounds)
      && config.rounds > 0) return `${config.rounds}局`;
  if (config?.mode === 'condition' && typeof config.label === 'string'
      && config.label.trim()) return config.label.trim();
  throw new TypeError('Invalid session configuration');
}
