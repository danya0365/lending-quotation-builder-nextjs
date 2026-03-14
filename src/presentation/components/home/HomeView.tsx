'use client';

import Link from 'next/link';
import { useState } from 'react';

/**
 * Landing page features data
 */
const FEATURES = [
  {
    id: 'feature-1',
    icon: '👥',
    title: 'จัดการข้อมูลลูกค้า',
    description: 'ระบบจัดการข้อมูลลูกค้าครบวงจร พร้อมประวัติสินเชื่อรายบุคคล',
  },
  {
    id: 'feature-2',
    icon: '💳',
    title: 'รองรับหลายประเภทสินเชื่อ',
    description: 'สินเชื่อกู้ยืม, ที่อยู่อาศัย, ขายฝาก พร้อมตารางผ่อนชำระอัตโนมัติ',
  },
  {
    id: 'feature-3',
    icon: '🤝',
    title: 'ระบบนายหน้า & Commission',
    description: 'ผูกนายหน้ากับสินเชื่อ คำนวณและสรุป commission รายเดือนอัตโนมัติ',
  },
  {
    id: 'feature-4',
    icon: '📊',
    title: 'Dashboard & รายงาน',
    description: 'KPI Cards, กราฟวิเคราะห์ และ Export ข้อมูล PDF/Excel ได้ทันที',
  },
  {
    id: 'feature-5',
    icon: '📥',
    title: 'Import จาก Google Sheet',
    description: 'นำเข้าข้อมูลจาก Google Sheet พร้อม duplicate handling และ error report',
  },
  {
    id: 'feature-6',
    icon: '🔔',
    title: 'แจ้งเตือนอัตโนมัติ',
    description: 'แจ้งเตือนผ่าน Email และ LINE เมื่อสินเชื่อใกล้ครบกำหนด',
  },
];

/**
 * Landing page stats
 */
const STATS = [
  { id: 'stat-1', value: '200+', label: 'บริษัทไว้วางใจ' },
  { id: 'stat-2', value: '50K+', label: 'สัญญาสินเชื่อ' },
  { id: 'stat-3', value: '99%', label: 'ความพึงพอใจ' },
  { id: 'stat-4', value: '24/7', label: 'ซัพพอร์ต' },
];

/**
 * Testimonials
 */
const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    name: 'คุณสมชาย',
    role: 'ผู้จัดการ',
    company: 'บริษัท เอ็กซ์ ลิสซิ่ง จำกัด',
    avatar: '👨‍💼',
    content: 'ระบบช่วยลดเวลาจัดการสินเชื่อได้มาก ข้อมูลครบถ้วน ใช้งานง่าย รายงานดูได้ทันที',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'คุณวิมล',
    role: 'เจ้าของกิจการ',
    company: 'ไฟน์แคช เงินด่วน',
    avatar: '👩‍💼',
    content: 'ประหยัดเวลาคำนวณดอกเบี้ยและตารางผ่อน ลูกค้าเห็นข้อมูลชัดเจน ปิดดีลได้เร็วขึ้น',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'คุณพิชัย',
    role: 'ผู้บริหาร',
    company: 'กรีนมันนี่ แคปิตอล',
    avatar: '🧑‍💼',
    content: 'ระบบ commission นายหน้าช่วยให้จัดการค่าแนะนำได้ถูกต้อง ไม่ต้องคำนวณเอง',
    rating: 5,
  },
];

/**
 * FAQ items
 */
const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'ระบบ Loan Management คืออะไร?',
    answer:
      'ระบบจัดการสินเชื่อครบวงจร ช่วยบริหารข้อมูลลูกค้า, สัญญาสินเชื่อ, ตารางผ่อนชำระ, นายหน้า และรายงานต่างๆ ในที่เดียว',
  },
  {
    id: 'faq-2',
    question: 'ใช้เวลาติดตั้งนานเท่าไหร่?',
    answer:
      'หลังจากยืนยันใบเสนอราคา ทีมงานจะติดต่อเก็บ requirements และทำการ setup ภายใน 5-10 วันทำการ ขึ้นอยู่กับความซับซ้อนของฟีเจอร์',
  },
  {
    id: 'faq-3',
    question: 'รองรับธุรกิจแบบไหนบ้าง?',
    answer:
      'รองรับทุกธุรกิจปล่อยสินเชื่อ ไม่ว่าจะเป็น Personal Loan, สินเชื่อที่อยู่อาศัย, ขายฝากที่ดิน/รถ/บ้าน และอื่นๆ',
  },
  {
    id: 'faq-4',
    question: 'สามารถปรับแต่งฟีเจอร์ได้ไหม?',
    answer:
      'ได้ครับ ลูกค้าสามารถเลือกฟีเจอร์ที่ต้องการผ่านหน้า Builder ระบบจะคำนวณราคาให้อัตโนมัติ สามารถปรับเพิ่ม/ลดได้ตลอด',
  },
];

/**
 * HomeView Component
 * Landing page for Lending Quotation Builder
 */
export function HomeView() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      {/* ── Hero Section ── */}
      <section 
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden bg-grid-pattern"
        style={{
          background: 'linear-gradient(to bottom, var(--header-bg), var(--color-background))',
        }}
      >
        {/* Gradient Orbs */}
        <div className="gradient-orb w-72 h-72 bg-primary/20 -top-20 -left-20" />
        <div className="gradient-orb w-96 h-96 bg-accent/15 -bottom-32 -right-20" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in-up">
            <span>💰</span>
            <span>Loan Management SaaS</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            สร้างใบเสนอราคา
            <br />
            <span className="text-gradient">ระบบจัดการสินเชื่อ</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            เลือกโมดูลและฟีเจอร์ที่ต้องการ ระบบคำนวณราคาให้ทันที
            <br className="hidden sm:block" />
            ไม่มีค่าใช้จ่ายในการประเมินราคา
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/builder"
              className="btn-primary text-lg px-8 py-3 rounded-xl inline-flex items-center gap-2"
            >
              <span>🛠️</span>
              <span>สร้างใบเสนอราคา</span>
            </Link>
            <Link
              href="/about"
              className="btn-ghost text-lg px-8 py-3 rounded-xl inline-flex items-center gap-2"
            >
              <span>ℹ️</span>
              <span>เรียนรู้เพิ่มเติม</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ฟีเจอร์ครบ ตอบโจทย์ทุกธุรกิจปล่อยกู้
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              เลือกเฉพาะสิ่งที่ต้องการ ระบบคำนวณราคาและ dependencies ให้อัตโนมัติ
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="glass-panel rounded-xl p-6 card-hover"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="py-20 sm:py-24 bg-surface-alt">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ลูกค้าของเราพูดถึงเรา
            </h2>
            <p className="text-muted text-lg">
              ความคิดเห็นจากผู้ใช้งานจริง
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="glass-panel rounded-xl p-6 card-hover"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400">⭐</span>
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground text-sm leading-relaxed mb-6">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{testimonial.avatar}</span>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-muted text-xs">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              คำถามที่พบบ่อย
            </h2>
            <p className="text-muted text-lg">
              หากมีคำถามเพิ่มเติม สามารถติดต่อเราได้ตลอด
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.id}
                className="glass-panel rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`text-muted transition-transform duration-300 flex-shrink-0 ${
                      openFaqId === faq.id ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openFaqId === faq.id && (
                  <div className="px-6 pb-4 animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
                    <p className="text-muted text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20 sm:py-24 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            พร้อมเริ่มต้นแล้วหรือยัง?
          </h2>
          <p className="text-muted text-lg mb-8">
            สร้างใบเสนอราคาระบบจัดการสินเชื่อของคุณได้ฟรี ไม่มีค่าใช้จ่าย
          </p>
          <Link
            href="/builder"
            className="btn-primary text-lg px-10 py-4 rounded-xl inline-flex items-center gap-2"
          >
            <span>🚀</span>
            <span>เริ่มสร้างใบเสนอราคาเลย</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
