# TODO: Lending Quotation Builder

## Phase 1 — Project Setup & Architecture
- [ ] สร้างโครงสร้างโฟลเดอร์ `src/` 
  - [ ] `src/config/` — company.config.ts, quotation.config.ts
  - [ ] `src/data/mock/` — mockFeatures.ts, mockLandingData.ts
  - [ ] `src/store/` — quotationStore.ts (Zustand + persist)
  - [ ] `src/presentation/components/` — แยกตาม feature
  - [ ] `src/presentation/hooks/` — presenter hooks
- [ ] สร้าง `public/styles/` — CSS design system (แยกไฟล์ตาม concern)

## Phase 2 — Config & Data Layer
- [ ] `company.config.ts` — ข้อมูลบริษัท, ธนาคาร, PromptPay, ช่องทางติดต่อ
- [ ] `quotation.config.ts` — VAT config, document validity, terms & conditions, document prefixes
- [ ] สร้าง TypeScript types (`Feature`, `FeatureCategory`, `FeatureLevel`, `FeaturePackage`, `ProjectType`, `Platform`)
- [ ] `mockFeatures.ts` — 8 Modules ของ Lending ตาม FEATURE.md พร้อม dependency mapping, ราคา, level, recommendedFor
- [ ] `mockLandingData.ts` — ข้อมูล Landing page (features, stats, testimonials, FAQ)
- [ ] Helper functions (calculateTotalPrice, checkDependencies, formatPrice, etc.)

## Phase 3 — State Management (Zustand Store)
- [ ] `quotationStore.ts` — Zustand store + persist (localStorage)
  - [ ] State: projectType, selectedFeatures, selectedPlatforms, discount, VAT option, customer info, notes
  - [ ] Computed: getSubtotal, getDiscount, getTotal, getSelectedFeaturesData
  - [ ] Actions: toggleFeature (auto-uncheck children), canSelectFeature (dependency check), togglePlatform, discount, VAT, customer info, reset

## Phase 4 — Layout & Common Components
- [ ] `ThemeProvider` — Dark/Light mode
- [ ] `MainLayout` — wrapper component (header + content + footer + optional bubbles)
- [ ] `MainHeader` — navigation bar
- [ ] `MainFooter` — footer
- [ ] `ThemeToggle` — สลับ dark/light
- [ ] `CrystalBubble` — decorative background animation
- [ ] `CookieConsent` — cookie consent banner

## Phase 5 — Landing Page (หน้าแรก)
- [ ] `HomeView` component
  - [ ] Hero section + CTA ไปหน้า Builder
  - [ ] Features section (highlight ฟีเจอร์ของระบบ Loan Management)
  - [ ] Stats section (ตัวเลข mock)
  - [ ] Testimonials section
  - [ ] FAQ section
- [ ] `app/page.tsx` — route + metadata + SEO

## Phase 6 — Builder Page (สร้างใบเสนอราคา)
- [ ] `useBuilderPresenter` hook — แยก business logic ออกจาก UI
- [ ] `BuilderView` component
  - [ ] Step 1: เลือก Project Type (ประเภทธุรกิจปล่อยกู้)
  - [ ] Step 2: เลือก Package template (Basic/Standard/Premium) หรือ Customize เอง
  - [ ] Step 3: Feature selection by category (checkbox + dependency + tooltip + level badge)
  - [ ] Platform selection (Web, Mobile, etc.)
- [ ] `SummaryPanel` component — แสดงราคา real-time, breakdown, ส่วนลด, VAT, ข้อมูลลูกค้า
- [ ] `app/builder/page.tsx` — route + metadata

## Phase 7 — Document Views (เอกสาร)
- [ ] `useQuotePresenter` hook + `QuoteView` — ใบเสนอราคา (print-friendly)
- [ ] `useInvoicePresenter` hook + `InvoiceView` — ใบแจ้งหนี้
- [ ] `useReceiptPresenter` hook + `ReceiptView` — ใบเสร็จรับเงิน
- [ ] Routes: `app/quote/`, `app/invoice/`, `app/receipt/`

## Phase 8 — Static Pages
- [ ] `AboutView` + `app/about/` — เกี่ยวกับเรา
- [ ] `ContactView` + `app/contact/` — ติดต่อเรา
- [ ] `PrivacyView` + `app/privacy/` — นโยบายความเป็นส่วนตัว
- [ ] `TermsView` + `app/terms/` — ข้อกำหนดการใช้งาน

## Phase 9 — Polish & UX
- [ ] Responsive design (Desktop + Tablet + Mobile)
- [ ] Animations & transitions (micro-interactions)
- [ ] CSS design system — variables, components, utilities, responsive, print styles
- [ ] SEO metadata ทุกหน้า
- [ ] Final build test (`npm run build`)
