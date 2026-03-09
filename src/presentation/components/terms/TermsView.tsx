import Link from 'next/link';

/**
 * TermsView Component
 * Terms of service content for Lending Quote
 * Following Clean Architecture - UI only
 */
export function TermsView() {
  return (
    <div className="legal-page">
      <h1 className="legal-title">ข้อกำหนดการใช้งาน</h1>
      <p className="legal-updated">อัปเดตล่าสุด: 1 มกราคม 2026</p>

      {TERMS_SECTIONS.map((section, index) => (
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
        </section>
      ))}

      <div className="legal-back">
        <Link href="/" className="main-btn main-btn-ghost">
          ← กลับหน้าแรก
        </Link>
      </div>
    </div>
  );
}

// ============================================
// Content Data
// ============================================

const TERMS_SECTIONS = [
  {
    title: '1. การยอมรับข้อกำหนด',
    content: 'โดยการใช้งาน Lending Quote คุณยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดเหล่านี้ หากไม่เห็นด้วย กรุณาหยุดใช้งานบริการของเรา',
  },
  {
    title: '2. ขอบเขตการให้บริการ',
    content: 'Lending Quote ให้บริการ:',
    items: [
      'ระบบจัดการสินเชื่อครบวงจร (Loan Management SaaS)',
      'การสร้างใบเสนอราคาอัตโนมัติ',
      'ระบบจัดการลูกหนี้และตารางผ่อนชำระ',
      'บริการติดตั้งและฝึกอบรม',
      'การสนับสนุนทางเทคนิค',
    ],
  },
  {
    title: '3. การชำระเงิน',
    items: [
      'ชำระ 50% เมื่อตกลงสั่งซื้อ',
      'ชำระ 50% เมื่อส่งมอบงาน',
      'ราคาไม่รวม VAT 7%',
      'ใบเสนอราคามีผล 30 วัน',
    ],
  },
  {
    title: '4. การรับประกัน',
    content: 'เรารับประกันระบบเป็นระยะเวลา 1 ปี นับจากวันส่งมอบ โดยครอบคลุม:',
    items: [
      'การแก้ไขข้อผิดพลาดของระบบ',
      'การอัปเดตซอฟต์แวร์',
      'การสนับสนุนทางเทคนิคผ่านทางโทรศัพท์และอีเมล',
    ],
  },
  {
    title: '5. ข้อมูลสินเชื่อ',
    content: 'ข้อมูลสินเชื่อและลูกหนี้ทั้งหมดเป็นทรัพย์สินของลูกค้า ทางบริษัทไม่มีสิทธิ์เข้าถึงหรือเปิดเผยข้อมูลดังกล่าว ยกเว้นกรณีที่ได้รับอนุญาตจากลูกค้าเป็นลายลักษณ์อักษร',
  },
  {
    title: '6. ข้อจำกัดความรับผิด',
    content: 'Lending Quote ไม่รับผิดชอบต่อความเสียหายทางอ้อม การสูญเสียรายได้ หรือความเสียหายที่เกิดจากการใช้งานระบบในทางที่ผิด รวมถึงความเสียหายจากการตัดสินใจอนุมัติสินเชื่อ',
  },
];
