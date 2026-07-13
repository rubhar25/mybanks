// Helpers for the product data model.
//
// Product id convention: `<bankId>-<type>-<variant>`, e.g.
//   ameriabank-mortgage-secondary  → bankId ameriabank, type mortgage, variant "secondary"
// A bank can have several products of the same type (variants); each gets its own page at
//   /banks/<bankId>/<type>/<variant>/
// and they are grouped under the hub /banks/<bankId>/<type>/.

export function variantSlug(product) {
  const prefix = `${product.bankId}-${product.type}-`;
  return product.id.startsWith(prefix) ? product.id.slice(prefix.length) : product.id;
}
