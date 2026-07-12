# Data layer — the single source of truth

Every page on the site is generated from the JSON files in this folder. Never hand-edit HTML to change a fact — change the data file.

## Interconnection model

- Every entity has a stable `id` (slug): bank `ameriabank`, product `ameriabank-mortgage-standard`, etc.
- Products reference their bank via `bankId`. All cross-links (bank profile ↔ products ↔ comparison tables ↔ calculators) are generated from these references.
- `i18n` fields are objects keyed by locale: `{ "hy": "…", "en": "…", "ru": "…" }`. `hy` is required; `en`/`ru` fall back to `hy` when missing.

## Folders

- `banks/<id>.json` — one file per bank (~18 expected)
- `products/<id>.json` — one file per product; `id` convention: `<bankId>-<type>-<variant>`

## Data hygiene

- `verified: false` means the value came from a draft/AI and MUST be checked against the bank's official site before go-live (data-collector agent's job).
- `updatedAt` (ISO date) is bumped on every change; pages surface it as "last updated".
