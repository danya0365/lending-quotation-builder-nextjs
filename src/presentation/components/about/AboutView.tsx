'use client';

import { cn } from '../../utils/cn';

/**
 * AboutView Component
 * Company and team information page for Lending Quote
 * Following Clean Architecture - UI only, no business logic
 */
export function AboutView() {
  return (
    <div className="about-page">
      {/* Hero Section with Header Support */}
      <section 
        className={cn(
          "about-hero relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        )}
        style={{
          background: 'linear-gradient(to bottom, var(--header-bg), var(--color-background))',
        }}
      >
        <h1 className="about-hero-title">
          เราคือ <span className="text-gradient">Lending Quote</span>
        </h1>
        <p className="about-hero-subtitle">
          ผู้เชี่ยวชาญระบบจัดการสินเชื่อครบวงจร ด้วยประสบการณ์กว่า 10 ปี
          ในการพัฒนาโซลูชัน Loan Management SaaS สำหรับธุรกิจทุกขนาด
        </p>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="about-stat">
          <span className="about-stat-value">500+</span>
          <span className="about-stat-label">ลูกค้าที่ไว้วางใจ</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-value">10+</span>
          <span className="about-stat-label">ปีประสบการณ์</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-value">99.9%</span>
          <span className="about-stat-label">Uptime</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-value">24/7</span>
          <span className="about-stat-label">Support</span>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section">
        <div className="about-grid">
          <div className="about-card">
            <span className="about-card-icon">🎯</span>
            <h3 className="about-card-title">พันธกิจ</h3>
            <p className="about-card-text">
              พัฒนาระบบจัดการสินเชื่อที่ใช้งานง่าย ราคาเข้าถึงได้
              เพื่อช่วยให้ธุรกิจปล่อยกู้ทุกขนาดสามารถบริหารสินเชื่อได้อย่างมีประสิทธิภาพ
            </p>
          </div>
          <div className="about-card">
            <span className="about-card-icon">🔭</span>
            <h3 className="about-card-title">วิสัยทัศน์</h3>
            <p className="about-card-text">
              เป็นผู้นำด้านระบบจัดการสินเชื่ออันดับ 1 ของประเทศไทย
              ด้วยเทคโนโลยี AI และ Automation ที่ล้ำสมัย
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <h2 className="about-section-title">ทำไมต้องเลือกเรา?</h2>
        <div className="about-features-grid">
          {ABOUT_FEATURES.map((feature) => (
            <div key={feature.title} className="about-feature">
              <span className="about-feature-icon">{feature.icon}</span>
              <h4 className="about-feature-title">{feature.title}</h4>
              <p className="about-feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="about-section">
        <h2 className="about-section-title">ทีมงานของเรา</h2>
        <div className="about-team-grid">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name + member.role} className="about-team-member">
              <div className="about-team-avatar">{member.avatar}</div>
              <h4 className="about-team-name">{member.name}</h4>
              <p className="about-team-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-cta">
        <h2 className="about-cta-title">พร้อมเริ่มต้นแล้วหรือยัง?</h2>
        <p className="about-cta-subtitle">
          ติดต่อเราวันนี้ รับส่วนลดพิเศษสำหรับลูกค้าใหม่
        </p>
        <div className="about-cta-buttons">
          <a href="/builder" className="about-cta-btn primary">
            สร้างใบเสนอราคา
          </a>
          <a href="tel:0894847773" className="about-cta-btn secondary">
            📞 089-484-7773
          </a>
        </div>
      </section>
    </div>
  );
}

// ============================================
// Content Data
// ============================================

const ABOUT_FEATURES = [
  { icon: '⚡', title: 'ติดตั้งเร็ว', text: 'พร้อมใช้งานภายใน 24 ชั่วโมง' },
  { icon: '🛡️', title: 'ปลอดภัย', text: 'ข้อมูลสินเชื่อปลอดภัย 100%' },
  { icon: '📱', title: 'ใช้ง่าย', text: 'ไม่ต้องมีความรู้ IT ก็ใช้ได้' },
  { icon: '💰', title: 'คุ้มค่า', text: 'จ่ายแค่ฟีเจอร์ที่ใช้จริง' },
  { icon: '🔧', title: 'ซัพพอร์ต', text: 'ทีมสนับสนุนตลอด 24 ชม.' },
  { icon: '📈', title: 'อัพเดทฟรี', text: 'รับฟีเจอร์ใหม่โดยไม่มีค่าใช้จ่าย' },
];

const TEAM_MEMBERS = [
  { avatar: '👨‍💼', name: 'คุณมะรอสดี อุมา', role: 'CEO & Founder' },
  { avatar: '👩‍💻', name: 'คุณฟูซาน่า มะเซ็ง', role: 'CTO' },
  { avatar: '👨‍🎨', name: 'คุณฟูซาน่า มะเซ็ง', role: 'Lead Designer' },
  { avatar: '👩‍🔧', name: 'คุณมะรอสดี อุมา', role: 'Support Lead' },
];
