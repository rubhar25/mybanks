# Ապրանքային տաքսոնոմիա (Product Taxonomy) — Հայաստանի բանկերի ամբողջական ապրանքացանկ

*Կազմված՝ 2026-07-13։ Աղբյուրներ՝ fininfo.am (ԿԲԱ պաշտոնական համեմատիչ), ameriabank.am, acba.am, unibank.am, evoca.am, ընդհանուր որոնում լիզինգ/ֆակտորինգի շուրջ։ Խաչաձև ստուգված CLAUDE.md-ի բաժին 1-10-ի հետ և `docs/site-mindmap.html`-ի հետ։*

Legend: **Availability** — most banks (14-18) / some banks (6-13) / few (1-5). **Priority** — P1 (build first: high search value + data-fillable now) / P2 (medium) / P3 (nice-to-have, later phase).

---

## 1. Վարկեր (Loans)

| Product (hy / en) | Description | Availability | Priority |
|---|---|---|---|
| Հիփոթեքային վարկ (Mortgage) | Home purchase/construction loan, primary & secondary market | most banks | **P1** — data exists |
| Սպառողական վարկ / Ապառիկ (Consumer / cash / installment) | Unsecured personal loan, general purpose | most banks | **P1** |
| Գրավով ապահովված սպառողական վարկ (Secured consumer loan) | Consumer loan collateralized by property/car | some banks | P2 |
| Ավտովարկ (Car loan) | New/used car purchase financing | most banks | **P1** |
| Ոսկու գրավով վարկ (Gold-pledge loan) | Fast cash loan secured by gold items | most banks | **P1** — high search volume, underserved by competitors |
| Ուսանողական վարկ (Student loan) | Tuition financing, often gov-subsidized | some banks | P2 |
| Գյուղատնտեսական վարկ (Agricultural loan) | Farm equipment/inputs financing (ACBA leads this niche) | some banks | P2 |
| Վարկի վերաֆինանսավորում (Loan refinancing) | Replace existing loan with better-rate one | most banks | **P1** — strong intent keyword |
| Վարկային գիծ (Credit line) | Revolving credit facility, personal or business | most banks | P2 |
| Օվերդրաֆթ (Overdraft) | Short-term negative balance allowance, often tied to salary card | most banks | P2 |
| ONLINE վարկ (Online/instant loan) | App/web-issued small loan, minutes-fast | some banks | P2 |
| Բիզնես/ՓՄՁ վարկ (Business/SME loan) | Working capital & investment loans for companies | most banks | P2 |
| Վարկային գիծ՝ բիզնեսի համար (Business credit line) | Revolving facility for companies | most banks | P3 |
| Ագրովարկային գիծ (Agro credit line) | Revolving facility for farmers | few banks | P3 |
| Ավանդով ապահովված վարկ (Deposit-secured loan) | Loan collateralized by own bank deposit, low rate | some banks | P2 |
| Երկարաժամկետ ներդրումային վարկ բիզնեսի համար (Business investment loan) | Capex financing for companies | some banks | P3 |

**Cross-cutting note:** almost every loan type above should surface, per offer, the effective rate (ԷՏ), embedded payment calculator, document checklist, and gov-program eligibility flag — this is already an MVP requirement in CLAUDE.md §2.

## 2. Ավանդներ և խնայողություններ (Deposits & Savings)

| Product | Description | Availability | Priority |
|---|---|---|---|
| Ժամկետային ավանդ (Term deposit) | AMD/USD/EUR/RUB, fixed term, fixed/floating rate | all banks | **P1** — data exists |
| Ցպահանջ ավանդ (Demand deposit) | Withdraw anytime, lower rate | most banks | P2 |
| Խնայողական հաշիվ (Savings account) | Flexible, interest-bearing, top-up/withdraw allowed | most banks | P2 |
| Երեխայի ավանդ / կուտակային ավանդ (Child/accumulation deposit) | Long-horizon savings product (e.g. "Ապահով ապագա") | some banks | P3 |
| Ավանդների երաշխավորման հիմնադրամի ապահովում (Deposit Guarantee Fund coverage) | Not a product but a mandatory disclosure per deposit | all banks (regulatory) | **P1** — trust content, already planned §4 |

## 3. Հաշիվներ (Accounts)

| Product | Description | Availability | Priority |
|---|---|---|---|
| Ընթացիկ հաշիվ (Current/checking account) | Base transactional account | all banks | P2 |
| Սոցիալական փաթեթի հաշիվ (Social package account) | State social-package disbursement account | most banks | P3 |
| Սոցիալական ապահովության հաշիվ (Social insurance / pension account) | Pension/benefit disbursement account | some banks | P3 |
| Էսքրոու հաշիվ (Escrow account) | Third-party held funds, real-estate/business deals | some banks | P3 |
| Աշխատավարձային նախագիծ (Salary project / payroll account) | Employer-linked salary card+account bundle | most banks | P2 |

## 4. Քարտեր (Cards)

| Product | Description | Availability | Priority |
|---|---|---|---|
| Դեբետային քարտ (Debit card) | Visa/Mastercard/ArCa, linked to current account | all banks | **P1** |
| Վարկային քարտ (Credit card) | Revolving credit limit, grace period | most banks | **P1** |
| Պրեմիում/մետաղական քարտ (Premium/metal card) | Gold/Platinum/World tier, higher perks & fees | some banks | P2 |
| Ճանապարհորդական քարտ (Travel card) | Miles/travel-insurance bundled card | some banks | P2 |
| Թվային/վիրտուալ քարտ (Digital/virtual card) | App-issued, Apple/Google Pay ready | most banks | P2 |
| Co-branded / թեմատիկ քարտ | Marketing/affinity cards | few banks | P3 |
| Business/Corporate քարտ (Visa/ArCa/UnionPay Business) | Company expense cards | most banks | P3 |
| Ագրո քարտ (Farmer/agro card) | Sector-specific disbursement card (ACBA "Farmer") | few banks | P3 |
| Youth/student քարտ | Lower fees, youth-targeted debit card | some banks | P3 |
| Pension/social card | Pension disbursement card | some banks | P3 |
| Նվեր քարտ (Gift/prepaid card) | Non-personalized prepaid card | some banks | P3 |

Cards should be organized by **type** (debit/credit/premium/virtual) AND filterable by **network** (Visa, Mastercard, ArCa, UnionPay) per CLAUDE.md §3 and the banki.ru-style quick-filter chips noted in competitor-analysis.md.

## 5. Փոխանցումներ և վճարումներ (Transfers & Payments)

| Product | Description | Availability | Priority |
|---|---|---|---|
| Դրամական փոխանցում՝ միջազգային (SWIFT wire transfer) | Cross-border bank transfer | all banks | P2 |
| Արագ փոխանցումների համակարգեր (Unistream, Western Union…) | Cash-pickup remittance networks | most banks | P2 |
| Ներբանկային/ներպորտալային փոխանցումներ (In-app peer transfers) | Mobile-to-mobile instant transfer | most banks | P3 |
| Անհպում վճարումներ (Contactless payments) | NFC / Apple Pay / Google Pay | most banks | P3 |

*(Overlaps CLAUDE.md §8 "Beyond banks" — keep transfers as one taxonomy leaf feeding both a bank-product page and the "Beyond banks" money-transfer comparison.)*

## 6. Թվային բանկինգ (Digital Banking)

| Product | Description | Availability | Priority |
|---|---|---|---|
| Մոբայլ հավելված (Mobile app) | Full self-service banking app | all banks | P2 (feature on bank profile, §1) |
| Ինտերնետ բանկինգ (Internet/online banking) | Web-based self-service | all banks | P2 |
| Apple Pay / Google Pay ինտեգրում | Wallet support | most banks | P3 |

## 7. Ապահովագրություն և ներդրումներ (Insurance-linked & Investment)

| Product | Description | Availability | Priority |
|---|---|---|---|
| Ճանապարհորդության ապահովագրություն (Travel insurance) | Sold bundled at bank branches/portals | most banks | P3 |
| Կյանքի/գույքի ապահովագրություն կապված վարկի հետ (Life/property insurance tied to loan) | Mandatory for mortgage/car loan collateral | most banks | P2 (w/ loan required-docs) |
| Պարտատոմսեր (Bonds) | Bank/corporate bonds sold to retail clients | some banks | P3 |
| Բրոքերային ծառայություններ (Brokerage services) | Retail investment/trading account | few banks | P3 |
| Դեպոզիտար արկղեր / Պահատուփեր (Safe deposit boxes) | Physical safe-box rental | most banks | P3 |

## 8. Բիզնես/ՓՄՁ և ագրո հատուկ ծառայություններ (Business/SME & Agro)

| Product | Description | Availability | Priority |
|---|---|---|---|
| Լիզինգ / Ֆինանսական վարձակալություն (Leasing) | Equipment/vehicle financing via lease | some banks (Converse, Armbusinessbank) | P3 |
| Ֆակտորինգ (Factoring) | Invoice/receivables financing | some banks (Converse) | P3 |
| Բանկային երաշխիք (Bank guarantee) | Performance/payment guarantee instrument | some banks | P3 |
| ՓՄՁ ծրագրերի ֆինանսավորում (EU4Business & similar) | Donor-backed concessional SME loans | some banks | P3 |

## 9. Այլ ֆինանսական կազմակերպություններ (Beyond banks — cross-ref CLAUDE.md §8)

Credit organizations (UCOs, incl. pawn-style lenders), insurance companies, Idram/Telcell/EasyPay payment apps, pension funds. Not "bank products" per se but must interconnect via the same ID/slug model.

---

## Product types we already have data for

Per `src/data/products/` (checked 2026-07-13): only **2 product types** currently have JSON data files:
- `mortgage-standard` (9 banks: ameriabank, ardshinbank, acba, converse, araratbank, evocabank, idbank, unibank, amio)
- `deposit-standard` (17 files — broadest bank coverage)

Everything else in the taxonomy above has **zero data files yet** and needs collection via the `data-collector` subagent before any page can be built.

---

## Recommended build order (next product-type pages)

Ranked by (a) search intent volume, (b) MVP-readiness, (c) competitive gap (`docs/competitor-analysis.md`):

1. **Հիփոթեք (Mortgage)** — ✅ page already built (data exists, 9 banks)
2. **Ավանդներ (Deposits)** — ✅ page already built (17 banks)
3. **Սպառողական վարկ (Consumer/cash loan)** — highest generic loan search volume; no data yet, needs collection across ~18 banks
4. **Ոսկու գրավով վարկ (Gold-pledge loan)** — high demand, uncovered by competitors; CLAUDE.md flags it as a "key" chip. Strong differentiation
5. **Դեբետային/Վարկային քարտեր (Debit & credit cards)** — banki.ru card-comparison UX (filter chips, side-by-side) directly transferable; unlocks Visa/MC/ArCa filtering
6. **Ավտովարկ (Car loan)** — third-most-searched loan type; reuses the annuity calculator

Vehicle for all: data-collector fetches structured JSON per bank/product (matching the existing `mortgage-standard`/`deposit-standard` schema), then comparison + calculator + gov-program-flag pages generate automatically per the interconnection model.

## Key sources
- fininfo.am (CBA official comparator): https://www.fininfo.am
- ACBA full nav: https://www.acba.am/hy
- Unibank nav: https://www.unibank.am/hy
- Leasing/factoring: conversebank.am/hy/factoring/, armbusinessbank.am
