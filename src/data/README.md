# Data layer — the single source of truth

Every page on the site is generated from the JSON files in this folder. Never hand-edit HTML to change a fact — change the data file.

## Interconnection model

- Every entity has a stable `id` (slug): bank `ameriabank`, product `ameriabank-mortgage-standard`, etc.
- Products reference their bank via `bankId`. All cross-links (bank profile ↔ products ↔ comparison tables ↔ calculators) are generated from these references.
- `i18n` fields are objects keyed by locale: `{ "hy": "…", "en": "…", "ru": "…" }`. `hy` is required; `en`/`ru` fall back to `hy` when missing.

## Folders

- `banks/<id>.json` — one file per bank (~18 expected)
- `products/<id>.json` — one file per product; `id` convention: `<bankId>-<type>-<variant>`

## Bank file — extended profile fields (all optional, render only when present)

- `founded` (year, number), `licenseNo` (string), `email`
- `about` (i18n) — 3-6 factual sentences: history, ownership, market position, specialization
- `ceo` (i18n) — current CEO/chairman of the management board name
- `shareholders` — array of `{ "name": {i18n}, "sharePct": number|null }`, only if published
- `branchesCount`, `atmsCount` (numbers)
- `branches` — array of `{ "name": {i18n}, "address": {i18n}, "city": {i18n}, "phone": optional }`
- `workingHours` (i18n) — typical branch hours
- Facts must come from the bank's official site, CBA registry, or the bank's published annual report. Never guess numbers; omit the field instead.

## Data hygiene

- `verified: false` means the value came from a draft/AI and MUST be checked against the bank's official site before go-live (data-collector agent's job).
- `updatedAt` (ISO date) is bumped on every change; pages surface it as "last updated".
