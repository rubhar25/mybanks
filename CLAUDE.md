# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Armenian Finance Portal** — the "ultimate" website about banking and finance in Armenia, owned by Ruben Harutyunyan. Goal: all ~18 Armenian banks, their products, calculators, comparisons, and currency rates in one place. Promotion via a Facebook page sharing factual bank news; monetization via banner ads once traffic exists.

Status (2026-07-11): planning complete, no code yet. The full site structure is in `docs/site-mindmap.html` (open in a browser) — 10 main sections agreed with Ruben. Reference analyses: `docs/banki-ru-analysis.md` (Ruben's model site) and `docs/competitor-analysis.md` (rate.am, fininfo.am, afm.am, karucapatoxic.am + deeper banki.ru findings).

## Site structure (agreed plan)

1. **Banks** — directory; one consistent profile page per bank (~18): brand, contacts, hotline, branches/ATMs, working hours, SWIFT/BIC, apps. This per-bank page format is the market gap — competitors (afm.am, karucapatoxic.am, fininfo.am) don't have it.
2. **Loans** — mortgage, consumer/cash, car, gold-pledge, business, student, refinancing; cross-bank comparison tables; always show effective rate, not just nominal. Each offer card must answer on the spot (MVP requirement, decided 2026-07-11): monthly payment for the visitor's own numbers (embedded calculator), required-documents checklist, and whether a government program applies. Comparison pages get a market-context header (CBA rate, market average, range) generated from data files.
3. **Cards** — debit / credit / premium; Visa, Mastercard, ArCa; cashback and fee comparisons.
4. **Deposits** — by currency (AMD/USD/EUR/RUB), rate comparison, Deposit Guarantee Fund info.
5. **Currency** — AMD↔USD, AMD↔RUB, EUR, GBP, GEL…; per-bank buy/sell next to the Central Bank (CBA) official rate; converter; history; "best rate today" finder. Only section needing **daily** data updates. Note: rate.am already dominates this niche — our currency page supports the portal, it is not the differentiator.
6. **Calculators** — mortgage payment, loan annuity, deposit yield, converter, mortgage income-tax refund, salary gross↔net. No data maintenance; strong SEO pages.
7. **Government programs** — young family mortgage, income-tax refund on mortgage, IT benefits, agri subsidies; "which program fits me?" eligibility quiz is a planned signature feature.
8. **Beyond banks** — credit organizations (UCOs), insurance, money transfers, payment apps (Idram, Telcell, EasyPay), pension funds.
9. **News & guides** — bank news (feeds the Facebook page), how-to guides, glossary, FAQ.
10. **Platform** — 3 languages (hy primary, en, ru), site search, "last updated" stamp on every data page, banner ad slots.

## Architecture decisions (agreed)

- **Static site generated from data files** — bank/product/rate data lives in data files (JSON/YAML), separate from HTML templates. Updating a phone number or rate must never mean hand-editing HTML.
- **All interactive tools are client-side JS, in MVP** (decided 2026-07-11, banki.ru parity): all six calculators, currency converter, best-rate finder, comparison-page filters/sorting (amount, term, currency, features), rate-history charts, and the gov-program eligibility quiz. They compute in the browser against the same JSON data files the pages are built from — no backend needed. Backend-dependent banki.ru features (user reviews, bank Q&A, lead marketplace) stay in the future phase.
- **Interconnection model (core architecture, decided 2026-07-11):** every entity has a stable ID/slug — bank (`ameriabank`), product (`ameriabank-mortgage-standard`), product type, gov program. Products reference their bank ID; pages are generated with bidirectional links: bank profile ↔ its products ↔ comparison tables ↔ prefilled calculators ↔ related guides/programs. No page is a dead end; every cross-link is generated from data-file references, never hand-written. SEO layer on top: schema.org structured data (BankOrCreditUnion, FinancialProduct, FAQPage), breadcrumbs, hreflang (hy/en/ru), auto-generated sitemap.
- **No heavy backend.** Target hosting: GitHub Pages or Cloudflare Pages (free).
- **Daily currency updates** via a scheduled GitHub Action that fetches CBA official rates + bank rates, updates data files, republishes. Loan/deposit rates refreshed weekly or on demand.
- Git required before going live — **git is not yet installed on this machine** (install via `winget install Git.Git` when needed).
- **Lead generation is a FUTURE phase, not MVP** (decided 2026-07-11, inspired by banki.ru — see `docs/banki-ru-analysis.md`). Vision: visitor picks an offer (e.g. Ameriabank mortgage) and applies without leaving our site; we broker the lead to the bank (form → Cloudflare Pages Function → storage + email; later per-lead agreements with banks). Ruben explicitly does NOT want a "call the bank yourself" experience — we act as the intermediary. Requires privacy policy + consent before collecting any personal data. Do not build in phase 1; MVP substitutes are the on-page instant answers on each offer card (payment, documents, gov-program fit).

## Working style

- Ruben's personal rules (tone, name, push back when he's wrong) live globally in `~/.claude/general/rules.md`, imported via `~/.claude/CLAUDE.md` — they apply to all projects automatically.
- Ruben communicates in simple English or Armenian voice-dictation (expect transcription artifacts, especially on English names — interpret generously).
- Site content language: Armenian first; en/ru later.
- Build order inside each section: the darker "key" chips in the mindmap first (highest search value: SWIFT codes, mortgage comparison, best USD rate today).

## Subagents

`.claude/agents/` defines: `content-writer` (articles, bank descriptions, Facebook posts), `ui-designer` (layout/visual consistency), `data-collector` (fetch and update rates/bank data).
