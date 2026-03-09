/**
 * Mock Features Data
 * Master data สำหรับ Lending Management System features
 * อ้างอิงจาก FEATURE.md — 8 Modules พร้อม dependency mapping
 */

// ============================================
// Types
// ============================================

export type FeatureLevel = 'basic' | 'standard' | 'premium';

export interface ProjectType {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  basePrice: number;
}

export interface FeatureCategory {
  id: string;
  name: string;
  icon: string;
  order: number;
}

export interface Feature {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  level: FeatureLevel;
  dependencies: string[]; // Feature IDs that must be selected first
  recommendedFor: string[]; // Project Type IDs
  isPopular?: boolean;
}

// ============================================
// Project Types (ประเภทธุรกิจปล่อยกู้)
// ============================================
export const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'personal-loan',
    name: 'สินเชื่อส่วนบุคคล',
    nameEn: 'Personal Loan',
    icon: '👤',
    description: 'ปล่อยกู้รายบุคคล เงินสด เงินด่วน',
    basePrice: 30000,
  },
  {
    id: 'housing-loan',
    name: 'สินเชื่อที่อยู่อาศัย',
    nameEn: 'Housing Loan',
    icon: '🏠',
    description: 'สินเชื่อบ้าน เช่า-ซื้อ ผ่อนบ้าน',
    basePrice: 45000,
  },
  {
    id: 'pawn-loan',
    name: 'สินเชื่อขายฝาก',
    nameEn: 'Pawn/Collateral Loan',
    icon: '📜',
    description: 'ขายฝากที่ดิน รถ บ้าน',
    basePrice: 40000,
  },
  {
    id: 'mixed-loan',
    name: 'หลายประเภทรวม',
    nameEn: 'Mixed Lending',
    icon: '🏦',
    description: 'รวมหลายประเภทสินเชื่อในระบบเดียว',
    basePrice: 55000,
  },
];

// ============================================
// Feature Categories (8 Modules)
// ============================================
export const FEATURE_CATEGORIES: FeatureCategory[] = [
  { id: 'customer', name: 'จัดการลูกค้า', icon: '👥', order: 1 },
  { id: 'loan-type', name: 'ประเภทสินเชื่อ', icon: '💳', order: 2 },
  { id: 'broker', name: 'นายหน้า & Commission', icon: '🤝', order: 3 },
  { id: 'import', name: 'Google Sheet Import', icon: '📥', order: 4 },
  { id: 'dashboard', name: 'Dashboard & รายงาน', icon: '📊', order: 5 },
  { id: 'portal', name: 'Customer Portal', icon: '🌐', order: 6 },
  { id: 'notification', name: 'แจ้งเตือนอัตโนมัติ', icon: '🔔', order: 7 },
  { id: 'document', name: 'Document Generation', icon: '📄', order: 8 },
];

// ============================================
// Features (ตาม FEATURE.md)
// ============================================
export const FEATURES: Feature[] = [
  // ── Module 1: Customer Management ──
  {
    id: 'customer-data',
    categoryId: 'customer',
    name: 'ข้อมูลลูกค้า',
    description: 'ระบบจัดการข้อมูลลูกค้าครบวงจร ครอบครัว ที่อยู่ เอกสาร',
    price: 0, // Core — included in base
    level: 'basic',
    dependencies: [],
    recommendedFor: ['personal-loan', 'housing-loan', 'pawn-loan', 'mixed-loan'],
    isPopular: true,
  },
  {
    id: 'customer-history',
    categoryId: 'customer',
    name: 'ประวัติสินเชื่อรายลูกค้า',
    description: 'ดูประวัติสินเชื่อ ยอดคงค้าง สถานะการชำระ',
    price: 0, // Core — included in base
    level: 'basic',
    dependencies: ['customer-data'],
    recommendedFor: ['personal-loan', 'housing-loan', 'pawn-loan', 'mixed-loan'],
  },
  {
    id: 'customer-login',
    categoryId: 'customer',
    name: 'สร้าง Login ให้ลูกค้า',
    description: 'ลูกค้าสมัครสมาชิกและ login เข้าดูข้อมูลตัวเองได้',
    price: 15000,
    level: 'premium',
    dependencies: ['customer-data'],
    recommendedFor: ['housing-loan', 'mixed-loan'],
  },

  // ── Module 2: Loan Types ──
  {
    id: 'personal-loan-type',
    categoryId: 'loan-type',
    name: 'สินเชื่อกู้ยืมเงิน / Personal Loan',
    description: 'สร้างสัญญากู้ยืม คำนวณดอกเบี้ย กำหนดเงื่อนไขผ่อน',
    price: 15000,
    level: 'standard',
    dependencies: ['customer-data'],
    recommendedFor: ['personal-loan', 'mixed-loan'],
    isPopular: true,
  },
  {
    id: 'housing-loan-type',
    categoryId: 'loan-type',
    name: 'สินเชื่อที่อยู่อาศัย (เช่า + ซื้อ)',
    description: 'สัญญาสินเชื่อบ้าน ผ่อนบ้าน เช่าซื้อ',
    price: 20000,
    level: 'standard',
    dependencies: ['customer-data'],
    recommendedFor: ['housing-loan', 'mixed-loan'],
  },
  {
    id: 'pawn-loan-type',
    categoryId: 'loan-type',
    name: 'สินเชื่อขายฝาก (ที่ดิน / รถ / บ้าน)',
    description: 'สัญญาขายฝาก หลักประกัน ระยะเวลาไถ่ถอน',
    price: 18000,
    level: 'standard',
    dependencies: ['customer-data'],
    recommendedFor: ['pawn-loan', 'mixed-loan'],
  },
  {
    id: 'amortization',
    categoryId: 'loan-type',
    name: 'ตารางผ่อนชำระอัตโนมัติ (Amortization)',
    description: 'คำนวณตารางผ่อนชำระ เงินต้น ดอกเบี้ย ยอดคงเหลือ',
    price: 12000,
    level: 'standard',
    dependencies: ['personal-loan-type'],
    recommendedFor: ['personal-loan', 'housing-loan', 'mixed-loan'],
    isPopular: true,
  },

  // ── Module 3: Broker & Commission ──
  {
    id: 'broker-data',
    categoryId: 'broker',
    name: 'ข้อมูลนายหน้า',
    description: 'บันทึกข้อมูลนายหน้า สัดส่วน commission ประวัติ',
    price: 10000,
    level: 'standard',
    dependencies: [],
    recommendedFor: ['personal-loan', 'housing-loan', 'pawn-loan', 'mixed-loan'],
  },
  {
    id: 'broker-loan-link',
    categoryId: 'broker',
    name: 'ผูกนายหน้ากับสินเชื่อ',
    description: 'เชื่อมนายหน้ากับสัญญาสินเชื่อแต่ละรายการ',
    price: 8000,
    level: 'standard',
    dependencies: ['broker-data', 'personal-loan-type'],
    recommendedFor: ['personal-loan', 'mixed-loan'],
  },
  {
    id: 'broker-commission',
    categoryId: 'broker',
    name: 'คำนวณและสรุป Commission รายเดือน',
    description: 'สรุป commission จ่ายนายหน้ารายเดือน พร้อม export',
    price: 12000,
    level: 'premium',
    dependencies: ['broker-data'],
    recommendedFor: ['personal-loan', 'mixed-loan'],
    isPopular: true,
  },

  // ── Module 4: Google Sheet Import ──
  {
    id: 'import-once',
    categoryId: 'import',
    name: 'Import ครั้งเดียว (Migration)',
    description: 'นำเข้าข้อมูลจาก Google Sheet ครั้งเดียว เพื่อย้ายข้อมูลเก่า',
    price: 8000,
    level: 'basic',
    dependencies: ['customer-data'],
    recommendedFor: ['personal-loan', 'housing-loan', 'pawn-loan', 'mixed-loan'],
  },
  {
    id: 'import-multi',
    categoryId: 'import',
    name: 'Import หลายครั้ง + Duplicate Handling',
    description: 'นำเข้าซ้ำได้ ตรวจจับข้อมูลซ้ำอัตโนมัติ',
    price: 15000,
    level: 'premium',
    dependencies: ['import-once'],
    recommendedFor: ['mixed-loan'],
  },
  {
    id: 'import-log',
    categoryId: 'import',
    name: 'Import Log และ Error Report',
    description: 'บันทึกประวัติการ import รายงาน error ที่เกิดขึ้น',
    price: 8000,
    level: 'premium',
    dependencies: ['import-multi'],
    recommendedFor: ['mixed-loan'],
  },

  // ── Module 5: Dashboard & Reports ──
  {
    id: 'kpi-cards',
    categoryId: 'dashboard',
    name: 'KPI Cards',
    description: 'แสดงตัวเลขสำคัญ: ยอดปล่อยกู้ สัญญาคงค้าง อัตราการผ่อนชำระ',
    price: 0, // Core
    level: 'basic',
    dependencies: ['customer-data'],
    recommendedFor: ['personal-loan', 'housing-loan', 'pawn-loan', 'mixed-loan'],
    isPopular: true,
  },
  {
    id: 'charts',
    categoryId: 'dashboard',
    name: 'กราฟรายวัน/เดือน/ปี',
    description: 'กราฟวิเคราะห์ยอดปล่อยกู้ ยอดชำระ แนวโน้ม',
    price: 12000,
    level: 'standard',
    dependencies: ['kpi-cards'],
    recommendedFor: ['personal-loan', 'housing-loan', 'pawn-loan', 'mixed-loan'],
  },
  {
    id: 'export-pdf-excel',
    categoryId: 'dashboard',
    name: 'Export PDF / Excel',
    description: 'ส่งออกรายงาน สรุปข้อมูลเป็น PDF หรือ Excel',
    price: 8000,
    level: 'standard',
    dependencies: ['kpi-cards'],
    recommendedFor: ['personal-loan', 'housing-loan', 'pawn-loan', 'mixed-loan'],
  },
  {
    id: 'broker-report',
    categoryId: 'dashboard',
    name: 'รายงาน Commission นายหน้า',
    description: 'รายงานสรุป commission ตามนายหน้า ตามเดือน',
    price: 10000,
    level: 'premium',
    dependencies: ['broker-data', 'kpi-cards'],
    recommendedFor: ['personal-loan', 'mixed-loan'],
  },

  // ── Module 6: Customer Portal ──
  {
    id: 'portal-login',
    categoryId: 'portal',
    name: 'หน้า Login + ดูข้อมูลสินเชื่อ',
    description: 'ลูกค้า login เข้ามาดูสถานะสินเชื่อตัวเอง',
    price: 20000,
    level: 'premium',
    dependencies: ['customer-login'],
    recommendedFor: ['housing-loan', 'mixed-loan'],
  },
  {
    id: 'portal-amortization',
    categoryId: 'portal',
    name: 'ดูตารางผ่อนชำระ',
    description: 'ลูกค้าดูตารางผ่อนชำระของตัวเอง ยอดคงเหลือ',
    price: 10000,
    level: 'premium',
    dependencies: ['amortization', 'portal-login'],
    recommendedFor: ['housing-loan', 'mixed-loan'],
  },

  // ── Module 7: Notifications (Add-on) ──
  {
    id: 'notify-email',
    categoryId: 'notification',
    name: 'แจ้งเตือน Email',
    description: 'ส่ง Email เมื่อสินเชื่อใกล้ครบกำหนด หรือค้างชำระ',
    price: 8000,
    level: 'standard',
    dependencies: ['customer-data'],
    recommendedFor: ['personal-loan', 'housing-loan', 'pawn-loan', 'mixed-loan'],
    isPopular: true,
  },
  {
    id: 'notify-line',
    categoryId: 'notification',
    name: 'แจ้งเตือน LINE Notify',
    description: 'ส่งแจ้งเตือนผ่าน LINE เมื่อถึงกำหนดชำระ',
    price: 10000,
    level: 'standard',
    dependencies: ['notify-email'],
    recommendedFor: ['personal-loan', 'housing-loan', 'mixed-loan'],
  },

  // ── Module 8: Document Generation (Add-on) ──
  {
    id: 'doc-contract',
    categoryId: 'document',
    name: 'พิมพ์ใบสัญญา PDF',
    description: 'สร้างสัญญาสินเชื่อ PDF อัตโนมัติจากข้อมูลในระบบ',
    price: 12000,
    level: 'standard',
    dependencies: ['customer-data'],
    recommendedFor: ['personal-loan', 'housing-loan', 'pawn-loan', 'mixed-loan'],
    isPopular: true,
  },
  {
    id: 'doc-receipt',
    categoryId: 'document',
    name: 'พิมพ์ใบเสร็จ / ใบแจ้งยอด',
    description: 'สร้างใบเสร็จรับเงิน ใบแจ้งยอด PDF',
    price: 10000,
    level: 'standard',
    dependencies: ['doc-contract'],
    recommendedFor: ['personal-loan', 'housing-loan', 'pawn-loan', 'mixed-loan'],
  },
];

// ============================================
// Feature Packages (Templates)
// ============================================

export interface FeaturePackage {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  projectTypes: string[]; // Which project types this package is for
  features: string[]; // Feature IDs included
  discountPercent: number; // Package discount
}

export const FEATURE_PACKAGES: FeaturePackage[] = [
  // === Personal Loan Packages ===
  {
    id: 'personal-basic',
    name: 'แพ็กเกจเริ่มต้น',
    nameEn: 'Starter',
    icon: '🎯',
    description: 'จัดการลูกค้า + สัญญากู้ยืมพื้นฐาน',
    projectTypes: ['personal-loan'],
    features: ['customer-data', 'customer-history', 'personal-loan-type', 'kpi-cards'],
    discountPercent: 0,
  },
  {
    id: 'personal-standard',
    name: 'แพ็กเกจมาตรฐาน',
    nameEn: 'Standard',
    icon: '⭐',
    description: 'ตารางผ่อน + นายหน้า + รายงาน + แจ้งเตือน',
    projectTypes: ['personal-loan'],
    features: [
      'customer-data', 'customer-history', 'personal-loan-type', 'amortization',
      'broker-data', 'broker-loan-link', 'kpi-cards', 'charts', 'export-pdf-excel',
      'notify-email', 'doc-contract',
    ],
    discountPercent: 5,
  },
  {
    id: 'personal-premium',
    name: 'แพ็กเกจพรีเมียม',
    nameEn: 'Premium',
    icon: '👑',
    description: 'ครบทุกฟีเจอร์ Commission + Import + เอกสาร',
    projectTypes: ['personal-loan'],
    features: [
      'customer-data', 'customer-history', 'customer-login',
      'personal-loan-type', 'amortization',
      'broker-data', 'broker-loan-link', 'broker-commission',
      'import-once', 'import-multi',
      'kpi-cards', 'charts', 'export-pdf-excel', 'broker-report',
      'portal-login', 'portal-amortization',
      'notify-email', 'notify-line',
      'doc-contract', 'doc-receipt',
    ],
    discountPercent: 10,
  },

  // === Housing Loan Packages ===
  {
    id: 'housing-basic',
    name: 'แพ็กเกจเริ่มต้น',
    nameEn: 'Starter',
    icon: '🎯',
    description: 'จัดการลูกค้า + สินเชื่อที่อยู่อาศัยพื้นฐาน',
    projectTypes: ['housing-loan'],
    features: ['customer-data', 'customer-history', 'housing-loan-type', 'kpi-cards'],
    discountPercent: 0,
  },
  {
    id: 'housing-standard',
    name: 'แพ็กเกจมาตรฐาน',
    nameEn: 'Standard',
    icon: '⭐',
    description: 'ตารางผ่อน + รายงาน + เอกสาร',
    projectTypes: ['housing-loan'],
    features: [
      'customer-data', 'customer-history', 'housing-loan-type', 'amortization',
      'kpi-cards', 'charts', 'export-pdf-excel',
      'notify-email', 'doc-contract', 'doc-receipt',
    ],
    discountPercent: 5,
  },
  {
    id: 'housing-premium',
    name: 'แพ็กเกจพรีเมียม',
    nameEn: 'Premium',
    icon: '👑',
    description: 'ครบจบ Customer Portal + Import + แจ้งเตือน',
    projectTypes: ['housing-loan'],
    features: [
      'customer-data', 'customer-history', 'customer-login',
      'housing-loan-type', 'amortization',
      'import-once',
      'kpi-cards', 'charts', 'export-pdf-excel',
      'portal-login', 'portal-amortization',
      'notify-email', 'notify-line',
      'doc-contract', 'doc-receipt',
    ],
    discountPercent: 10,
  },

  // === Pawn/Collateral Loan Packages ===
  {
    id: 'pawn-basic',
    name: 'แพ็กเกจเริ่มต้น',
    nameEn: 'Starter',
    icon: '🎯',
    description: 'จัดการลูกค้า + สัญญาขายฝากพื้นฐาน',
    projectTypes: ['pawn-loan'],
    features: ['customer-data', 'customer-history', 'pawn-loan-type', 'kpi-cards'],
    discountPercent: 0,
  },
  {
    id: 'pawn-standard',
    name: 'แพ็กเกจมาตรฐาน',
    nameEn: 'Standard',
    icon: '⭐',
    description: 'รายงาน + เอกสาร + แจ้งเตือน',
    projectTypes: ['pawn-loan'],
    features: [
      'customer-data', 'customer-history', 'pawn-loan-type',
      'kpi-cards', 'charts', 'export-pdf-excel',
      'notify-email', 'doc-contract', 'doc-receipt',
    ],
    discountPercent: 5,
  },
  {
    id: 'pawn-premium',
    name: 'แพ็กเกจพรีเมียม',
    nameEn: 'Premium',
    icon: '👑',
    description: 'ครบทุกฟีเจอร์ Import + นายหน้า + เอกสาร',
    projectTypes: ['pawn-loan'],
    features: [
      'customer-data', 'customer-history',
      'pawn-loan-type',
      'broker-data', 'broker-commission',
      'import-once', 'import-multi',
      'kpi-cards', 'charts', 'export-pdf-excel',
      'notify-email', 'notify-line',
      'doc-contract', 'doc-receipt',
    ],
    discountPercent: 10,
  },

  // === Mixed Lending Packages ===
  {
    id: 'mixed-basic',
    name: 'แพ็กเกจเริ่มต้น',
    nameEn: 'Starter',
    icon: '🎯',
    description: 'สินเชื่อ 2 ประเภท + จัดการลูกค้า',
    projectTypes: ['mixed-loan'],
    features: [
      'customer-data', 'customer-history',
      'personal-loan-type', 'housing-loan-type',
      'kpi-cards',
    ],
    discountPercent: 0,
  },
  {
    id: 'mixed-standard',
    name: 'แพ็กเกจมาตรฐาน',
    nameEn: 'Standard',
    icon: '⭐',
    description: 'สินเชื่อ 3 ประเภท + นายหน้า + รายงาน',
    projectTypes: ['mixed-loan'],
    features: [
      'customer-data', 'customer-history',
      'personal-loan-type', 'housing-loan-type', 'pawn-loan-type', 'amortization',
      'broker-data', 'broker-loan-link',
      'kpi-cards', 'charts', 'export-pdf-excel',
      'notify-email', 'doc-contract',
    ],
    discountPercent: 5,
  },
  {
    id: 'mixed-premium',
    name: 'แพ็กเกจพรีเมียม',
    nameEn: 'Premium',
    icon: '👑',
    description: 'ครบทุกฟีเจอร์ ทุกโมดูล ทุกประเภทสินเชื่อ',
    projectTypes: ['mixed-loan'],
    features: [
      'customer-data', 'customer-history', 'customer-login',
      'personal-loan-type', 'housing-loan-type', 'pawn-loan-type', 'amortization',
      'broker-data', 'broker-loan-link', 'broker-commission',
      'import-once', 'import-multi', 'import-log',
      'kpi-cards', 'charts', 'export-pdf-excel', 'broker-report',
      'portal-login', 'portal-amortization',
      'notify-email', 'notify-line',
      'doc-contract', 'doc-receipt',
    ],
    discountPercent: 15,
  },
];

// ============================================
// Platforms
// ============================================

export interface Platform {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  description: string;
  basePrice: number;
  priceMultiplier: number;
}

export const PLATFORMS: Platform[] = [
  {
    id: 'web',
    name: 'Web App',
    nameEn: 'Web Application',
    icon: '💻',
    description: 'ระบบ Web-based เข้าถึงผ่าน Browser ทุกอุปกรณ์',
    basePrice: 0,
    priceMultiplier: 1.0,
  },
  {
    id: 'mobile',
    name: 'Mobile App',
    nameEn: 'Mobile Application',
    icon: '📱',
    description: 'แอปพลิเคชันสำหรับ iOS และ Android',
    basePrice: 25000,
    priceMultiplier: 1.3,
  },
];

// ============================================
// Helper Functions
// ============================================

export function getPlatformById(id: string): Platform | undefined {
  return PLATFORMS.find((p) => p.id === id);
}

export function calculatePlatformPrice(selectedPlatforms: string[]): number {
  return selectedPlatforms.reduce((total, platformId) => {
    const platform = getPlatformById(platformId);
    return total + (platform?.basePrice ?? 0);
  }, 0);
}

export function getHighestPriceMultiplier(selectedPlatforms: string[]): number {
  if (selectedPlatforms.length === 0) return 1.0;
  
  return selectedPlatforms.reduce((highest, platformId) => {
    const platform = getPlatformById(platformId);
    return Math.max(highest, platform?.priceMultiplier ?? 1.0);
  }, 1.0);
}

export function getFeaturesByCategory(categoryId: string): Feature[] {
  return FEATURES.filter((f) => f.categoryId === categoryId);
}

export function getFeatureById(id: string): Feature | undefined {
  return FEATURES.find((f) => f.id === id);
}

export function getProjectTypeById(id: string): ProjectType | undefined {
  return PROJECT_TYPES.find((p) => p.id === id);
}

export function getCategoryById(id: string): FeatureCategory | undefined {
  return FEATURE_CATEGORIES.find((c) => c.id === id);
}

export function getPackagesForProjectType(projectTypeId: string): FeaturePackage[] {
  return FEATURE_PACKAGES.filter((p) => p.projectTypes.includes(projectTypeId));
}

export function getPackageById(id: string): FeaturePackage | undefined {
  return FEATURE_PACKAGES.find((p) => p.id === id);
}

export function calculatePackagePrice(pkg: FeaturePackage, projectTypeId: string): number {
  const projectType = getProjectTypeById(projectTypeId);
  const basePrice = projectType?.basePrice ?? 0;
  
  const featuresPrice = pkg.features.reduce((total, featureId) => {
    const feature = getFeatureById(featureId);
    return total + (feature?.price ?? 0);
  }, 0);
  
  const subtotal = basePrice + featuresPrice;
  const discount = Math.round(subtotal * (pkg.discountPercent / 100));
  return subtotal - discount;
}

export function checkDependencies(featureId: string, selectedFeatures: string[]): boolean {
  const feature = getFeatureById(featureId);
  if (!feature) return false;
  
  return feature.dependencies.every((depId) => selectedFeatures.includes(depId));
}

export function getMissingDependencies(featureId: string, selectedFeatures: string[]): Feature[] {
  const feature = getFeatureById(featureId);
  if (!feature) return [];
  
  return feature.dependencies
    .filter((depId) => !selectedFeatures.includes(depId))
    .map((depId) => getFeatureById(depId))
    .filter((f): f is Feature => f !== undefined);
}

export function getDependentFeatures(featureId: string): Feature[] {
  return FEATURES.filter((f) => f.dependencies.includes(featureId));
}

export function calculateTotalPrice(
  projectTypeId: string | null,
  selectedFeatures: string[]
): number {
  const projectType = projectTypeId ? getProjectTypeById(projectTypeId) : null;
  const basePrice = projectType?.basePrice ?? 0;
  
  const featuresPrice = selectedFeatures.reduce((total, featureId) => {
    const feature = getFeatureById(featureId);
    return total + (feature?.price ?? 0);
  }, 0);
  
  return basePrice + featuresPrice;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
