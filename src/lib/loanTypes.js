// Loan-type registry. A page at /loans/<type>/ is generated for every type
// that has at least one product data file. Add a row here when a new loan
// type gets data; the display name/order come from this single source.

export const loanTypes = [
  { type: 'mortgage', name: { hy: 'Հիփոթեքային վարկ', en: 'Mortgage', ru: 'Ипотечный кредит' } },
  { type: 'consumer', name: { hy: 'Սպառողական վարկ', en: 'Consumer loan', ru: 'Потребительский кредит' } },
  { type: 'car', name: { hy: 'Ավտովարկ', en: 'Car loan', ru: 'Автокредит' } },
  { type: 'gold', name: { hy: 'Ոսկու գրավով վարկ', en: 'Gold-pledge loan', ru: 'Кредит под залог золота' } },
  { type: 'refinancing', name: { hy: 'Վերաֆինանսավորում', en: 'Refinancing', ru: 'Рефинансирование' } },
  { type: 'student', name: { hy: 'Ուսանողական վարկ', en: 'Student loan', ru: 'Студенческий кредит' } },
  { type: 'business', name: { hy: 'Բիզնես վարկ', en: 'Business loan', ru: 'Бизнес-кредит' } },
];

const byType = Object.fromEntries(loanTypes.map((l) => [l.type, l]));

export function loanTypeName(type) {
  return byType[type]?.name ?? { hy: type };
}

export function isLoanType(type) {
  return type in byType;
}
