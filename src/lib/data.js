// Central data access — every page pulls banks/products through these helpers,
// so the interconnection (bank ↔ products) lives in exactly one place.

const bankModules = import.meta.glob('../data/banks/*.json', { eager: true });
const productModules = import.meta.glob('../data/products/*.json', { eager: true });

export const banks = Object.values(bankModules).map((m) => m.default);
export const products = Object.values(productModules).map((m) => m.default);

export function getBank(id) {
  return banks.find((b) => b.id === id);
}

export function getProductsOfBank(bankId) {
  return products.filter((p) => p.bankId === bankId);
}

// i18n field helper: falls back to hy when the locale is missing
export function t(field, locale = 'hy') {
  if (field == null || typeof field !== 'object') return field;
  return field[locale] ?? field.hy;
}
