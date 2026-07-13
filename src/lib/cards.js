// Display helpers for payment cards.

export const networkName = {
  visa: 'Visa',
  mastercard: 'Mastercard',
  arca: 'ArCa',
};

export const cardTypeName = {
  debit: { hy: 'Դեբետային', en: 'Debit', ru: 'Дебетовая' },
  credit: { hy: 'Վարկային', en: 'Credit', ru: 'Кредитная' },
  premium: { hy: 'Պրեմիում', en: 'Premium', ru: 'Премиум' },
};

// Sort order used across the cards page: debit → credit → premium
export const cardTypeOrder = { debit: 0, credit: 1, premium: 2 };

export function fmtFee(fee) {
  if (fee == null) return '—';
  if (fee === 0) return 'Անվճար';
  return `${fee.toLocaleString('hy-AM')} ֏`;
}
