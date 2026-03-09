'use client';

import { COMPANY_INFO } from '@/src/config/company.config';
import { QUOTE_TERMS, VAT_CONFIG } from '@/src/config/quotation.config';
import { getCategoryById } from '@/src/data/mock/mockFeatures';
import { useQuotePresenter } from '@/src/presentation/hooks/useQuotePresenter';
import { Fragment } from 'react';

/**
 * QuoteView Component
 * Print-friendly quotation view for Lending system
 */
export function QuoteView() {
  const {
    printRef, hasContent,
    quoteNumber, quoteDate, validUntil,
    projectTypeData, selectedFeaturesData,
    subtotal, discount, discountPercent, total, vat, grandTotal, vatOption,
    customerName, customerPhone, customerEmail, notes,
    handlePrint, updateCustomerName, updateCustomerPhone, updateCustomerEmail, updateNotes,
    formatPrice,
  } = useQuotePresenter();

  const groupedFeatures = selectedFeaturesData.reduce((acc, feature) => {
    const category = getCategoryById(feature.categoryId);
    const categoryName = category?.name ?? 'อื่นๆ';
    if (!acc[categoryName]) acc[categoryName] = [];
    acc[categoryName].push(feature);
    return acc;
  }, {} as Record<string, typeof selectedFeaturesData>);

  if (!hasContent) {
    return (
      <div className="doc-empty">
        <div className="doc-empty-content">
          <span>📋</span>
          <h2>ยังไม่มีรายการ</h2>
          <p>กรุณาเลือกประเภทธุรกิจและฟีเจอร์ใน Builder ก่อน</p>
          <a href="/builder" className="main-btn main-btn-primary">ไปที่ Builder</a>
        </div>
      </div>
    );
  }

  return (
    <div className="doc-page">
      {/* Action Bar */}
      <div className="doc-actions print-hidden">
        <a href="/builder" className="main-btn main-btn-ghost">← กลับไป Builder</a>
        <div className="doc-actions-right">
          <a href="/invoice" className="main-btn main-btn-secondary">📝 ใบแจ้งหนี้</a>
          <a href="/receipt" className="main-btn main-btn-secondary">🧾 ใบเสร็จ</a>
          <button onClick={() => handlePrint()} className="main-btn main-btn-primary">🖨️ พิมพ์ใบเสนอราคา</button>
        </div>
      </div>

      {/* Document */}
      <div ref={printRef} className="doc-document">
        {/* Header */}
        <header className="doc-header">
          <div>
            <h1 className="doc-company-name">
              <span style={{ color: 'var(--color-primary)' }}>Lending</span>
              <span> Quote</span>
            </h1>
            <p className="doc-company-sub">ระบบจัดการสินเชื่อครบวงจร</p>
            <div className="doc-badge doc-badge-quote">📋 ใบเสนอราคา</div>
          </div>
          <div className="doc-meta">
            <div className="doc-meta-item">
              <span className="doc-meta-label">เลขที่</span>
              <span className="doc-meta-value">{quoteNumber}</span>
            </div>
            <div className="doc-meta-item">
              <span className="doc-meta-label">วันที่</span>
              <span className="doc-meta-value">{quoteDate}</span>
            </div>
            <div className="doc-meta-item">
              <span className="doc-meta-label">ใช้ได้ถึง</span>
              <span className="doc-meta-value" style={{ color: '#dc2626', fontWeight: 600 }}>{validUntil}</span>
            </div>
          </div>
        </header>

        {/* Customer Info (editable) */}
        <section className="doc-customer print-hidden">
          <h3 className="doc-section-title">ข้อมูลลูกค้า</h3>
          <div className="doc-customer-form">
            <input type="text" placeholder="ชื่อบริษัท/ร้านค้า" value={customerName} onChange={e => updateCustomerName(e.target.value)} className="doc-input" />
            <input type="tel" placeholder="เบอร์โทรศัพท์" value={customerPhone} onChange={e => updateCustomerPhone(e.target.value)} className="doc-input" />
            <input type="email" placeholder="อีเมล" value={customerEmail} onChange={e => updateCustomerEmail(e.target.value)} className="doc-input" />
          </div>
        </section>

        {/* Customer Info (print) */}
        {(customerName || customerPhone || customerEmail) && (
          <section className="print-show" style={{ marginBottom: '1.5rem' }}>
            <h3 className="doc-section-title">เรียน</h3>
            {customerName && <p style={{ fontWeight: 600 }}>{customerName}</p>}
            {customerPhone && <p>โทร: {customerPhone}</p>}
            {customerEmail && <p>อีเมล: {customerEmail}</p>}
          </section>
        )}

        {/* Project Type */}
        {projectTypeData && (
          <section className="doc-section">
            <h3 className="doc-section-title">ประเภทธุรกิจ</h3>
            <div className="doc-project-type">
              <span className="icon">{projectTypeData.icon}</span>
              <span className="name">{projectTypeData.name}</span>
              <span className="name-en">({projectTypeData.nameEn})</span>
            </div>
          </section>
        )}

        {/* Features Table */}
        <section className="doc-section">
          <h3 className="doc-section-title">รายการฟีเจอร์</h3>
          <FeaturesTable projectTypeData={projectTypeData} groupedFeatures={groupedFeatures} formatPrice={formatPrice} />
        </section>

        {/* Summary */}
        <div className="doc-summary">
          <div className="doc-summary-row">
            <span>รวมเป็นเงิน</span>
            <span className="font-mono">{formatPrice(subtotal)}</span>
          </div>
          {discount > 0 && (
            <div className="doc-summary-row discount">
              <span>ส่วนลด {discountPercent > 0 ? `(${discountPercent}%)` : ''}</span>
              <span className="font-mono">-{formatPrice(discount)}</span>
            </div>
          )}
          <div className="doc-summary-row total">
            <span>ราคาสุทธิ {vatOption === 'include' ? '(ก่อน VAT)' : ''}</span>
            <span className="font-mono">{formatPrice(total)}</span>
          </div>
          {vatOption === 'include' && (
            <div className="doc-summary-row">
              <span>VAT {VAT_CONFIG.ratePercent}%</span>
              <span className="font-mono">{formatPrice(vat)}</span>
            </div>
          )}
          <div className="doc-summary-row grand-total">
            <span>
              {vatOption === 'include' && 'ยอดรวมทั้งสิ้น'}
              {vatOption === 'exclude' && 'ราคาสุทธิ (ไม่รวม VAT)'}
              {vatOption === 'exempt' && 'ราคาสุทธิ (ไม่คิด VAT)'}
            </span>
            <span className="font-mono amount-quote">{formatPrice(grandTotal)}</span>
          </div>
        </div>

        {/* Notes */}
        <section className="doc-notes">
          <h3 className="doc-section-title">หมายเหตุ</h3>
          <textarea
            placeholder="เพิ่มหมายเหตุหรือเงื่อนไขพิเศษ..."
            value={notes} onChange={e => updateNotes(e.target.value)}
            className="doc-input print-hidden" rows={3}
          />
          {notes && <p className="print-show" style={{ whiteSpace: 'pre-wrap', marginBottom: '1rem' }}>{notes}</p>}
          <ul className="doc-terms">
            {QUOTE_TERMS.map((term, idx) => <li key={idx}>{term}</li>)}
          </ul>
        </section>

        {/* Footer */}
        <footer className="doc-footer">
          <div className="doc-signature">
            <div className="doc-signature-box">
              <div className="doc-signature-line" />
              <p>ผู้เสนอราคา</p>
              <p className="sub">{COMPANY_INFO.name}</p>
            </div>
            <div className="doc-signature-box">
              <div className="doc-signature-line" />
              <p>ผู้อนุมัติ</p>
              <p className="sub">ลูกค้า</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ── Features Table Sub-component ── */
interface FeaturesTableProps {
  projectTypeData: { icon: string; name: string; basePrice: number } | null | undefined;
  groupedFeatures: Record<string, { id: string; name: string; description: string; level: string; price: number }[]>;
  formatPrice: (price: number) => string;
}

function FeaturesTable({ projectTypeData, groupedFeatures, formatPrice }: FeaturesTableProps) {
  let rowIndex = 0;
  return (
    <table className="doc-table">
      <thead>
        <tr>
          <th className="text-center" style={{ width: '2.5rem' }}>#</th>
          <th>รายการ</th>
          <th className="text-center" style={{ width: '5rem' }}>Level</th>
          <th className="text-right" style={{ width: '7rem' }}>ราคา (บาท)</th>
        </tr>
      </thead>
      <tbody>
        {projectTypeData && (
          <tr>
            <td className="text-center">{++rowIndex}</td>
            <td>
              <div className="font-semibold">ค่าติดตั้งระบบ ({projectTypeData.name})</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>รวมการ Setup, Training, และ Support 3 เดือน</div>
            </td>
            <td className="text-center">-</td>
            <td className="text-right font-mono">฿{projectTypeData.basePrice.toLocaleString()}</td>
          </tr>
        )}
        {Object.entries(groupedFeatures).map(([categoryName, features]) => (
          <Fragment key={categoryName}>
            <tr className="category-row">
              <td colSpan={4} className="font-semibold">{categoryName}</td>
            </tr>
            {features.map(feature => (
              <tr key={feature.id}>
                <td className="text-center">{++rowIndex}</td>
                <td>
                  <div className="font-medium">{feature.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>{feature.description}</div>
                </td>
                <td className="text-center">
                  <span className={`doc-level level-${feature.level}`}>
                    {feature.level.charAt(0).toUpperCase() + feature.level.slice(1)}
                  </span>
                </td>
                <td className="text-right font-mono">{feature.price === 0 ? 'รวมในแพ็กเกจ' : formatPrice(feature.price)}</td>
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
