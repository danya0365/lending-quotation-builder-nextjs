import Link from 'next/link';

/**
 * PrivacyView Component
 * Privacy policy content for Lending Quote
 * Following Clean Architecture - UI only
 */
export function PrivacyView() {
  return (
    <div className="legal-page">
      <h1 className="legal-title">นโยบายความเป็นส่วนตัว</h1>
      <p className="legal-updated">อัปเดตล่าสุด: 1 มกราคม 2026</p>

      {PRIVACY_SECTIONS.map((section, index) => (
        <section key={index} className="legal-section">
          <h2>{section.title}</h2>
          {section.content && <p>{section.content}</p>}
          {section.items && (
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.email && (
            <p>
              {section.content}{' '}
              <a href={`mailto:${section.email}`}>
                {section.email}
              </a>
            </p>
          )}
        </section>
      ))}

      <div className="legal-back">
        <Link href="/" className="app-btn app-btn-ghost">
          ← กลับหน้าแรก
        </Link>
      </div>
    </div>
  );
}

// ============================================
// Content Data
// ============================================

interface PrivacySection {
  title: string;
  content?: string;
  items?: string[];
  email?: string;
}

const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    title: '1. ข้อมูลที่เราเก็บรวบรวม',
    content: 'เราเก็บรวบรวมข้อมูลที่คุณให้ไว้โดยตรง เช่น:',
    items: [
      'ชื่อและข้อมูลติดต่อของบริษัท',
      'อีเมลและเบอร์โทรศัพท์',
      'ข้อมูลการใช้งานระบบจัดการสินเชื่อ',
      'ข้อมูลสินเชื่อและลูกหนี้ (เข้ารหัส)',
    ],
  },
  {
    title: '2. การใช้ข้อมูล',
    content: 'เราใช้ข้อมูลของคุณเพื่อ:',
    items: [
      'ให้บริการและปรับปรุงระบบ Loan Management',
      'ติดต่อสื่อสารเกี่ยวกับบริการ',
      'วิเคราะห์และปรับปรุงประสิทธิภาพระบบ',
      'ส่งข้อมูลข่าวสารและโปรโมชั่น (หากได้รับอนุญาต)',
    ],
  },
  {
    title: '3. การปกป้องข้อมูล',
    content: 'เรามีมาตรการรักษาความปลอดภัยที่เข้มงวด รวมถึง:',
    items: [
      'การเข้ารหัสข้อมูลสินเชื่อด้วย AES-256',
      'การเข้ารหัสการเชื่อมต่อ SSL/TLS',
      'การเก็บข้อมูลบนเซิร์ฟเวอร์ที่ปลอดภัยตามมาตรฐาน ISO 27001',
      'การควบคุมการเข้าถึงข้อมูลแบบ Role-Based Access Control',
    ],
  },
  {
    title: '4. การเก็บรักษาข้อมูล',
    content: 'เราเก็บรักษาข้อมูลของคุณตลอดระยะเวลาที่ให้บริการ และหลังยกเลิกบริการจะเก็บไว้ไม่เกิน 90 วัน จากนั้นข้อมูลทั้งหมดจะถูกลบอย่างถาวร',
  },
  {
    title: '5. ติดต่อเรา',
    content: 'หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว กรุณาติดต่อ:',
    email: 'marosdee.fuzana@gmail.com',
  },
];
