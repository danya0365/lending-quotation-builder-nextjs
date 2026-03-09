คุณคือ Senior Product Designer + Full-stack Developer

เป้าหมาย:
สร้างเว็บใบเสนอราคา (Quotation Builder) สำหรับขายระบบ "Loan Management SaaS"
สำหรับบริษัทปล่อยกู้ ซึ่งลูกค้าสามารถเลือก Module และฟีเจอร์เป็น checkbox
เพื่อกำหนดขอบเขตงานและงบประมาณได้เอง

Tech Stack:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- (Optional) Zustand หรือ React Context สำหรับ state
- ไม่ต้องเชื่อม backend จริง (mock data ได้)

Business Logic:
ระบบแบ่งฟีเจอร์เป็น Module ดังนี้:

Module 1 — Customer Management
- ข้อมูลลูกค้า (Core)
- ประวัติสินเชื่อรายลูกค้า (Core)
- สร้าง login ให้ลูกค้า → Customer Portal (Advanced)

Module 2 — Loan Types (เลือกได้หลายประเภท)
- สินเชื่อกู้ยืมเงิน / Personal Loan
- สินเชื่อที่อยู่อาศัย (เช่า + ซื้อ)
- สินเชื่อขายฝาก (ที่ดิน / รถ / บ้าน)
- ตารางผ่อนชำระอัตโนมัติ (Amortization) → depends on Loan Types

Module 3 — Broker & Commission
- ข้อมูลนายหน้า
- ผูกนายหน้ากับสินเชื่อ → depends on Loan Types
- คำนวณและสรุป commission รายเดือน → depends on ข้อมูลนายหน้า

Module 4 — Google Sheet Import
- Import ครั้งเดียว (one-time migration)
- Import หลายครั้ง + duplicate handling (Advanced)
- Import log และ error report → depends on Import หลายครั้ง

Module 5 — Dashboard & Reports
- KPI Cards (Core)
- กราฟรายวัน/เดือน/ปี → depends on KPI Cards
- Export PDF / Excel → depends on KPI Cards
- รายงาน commission นายหน้า → depends on Broker Module

Module 6 — Customer Portal
- หน้า login + ดูข้อมูลสินเชื่อตัวเอง → depends on Customer Management
- ดูตารางผ่อนชำระ → depends on Amortization

Module 7 — Notifications (Add-on)
- แจ้งเตือน Email เมื่อสินเชื่อใกล้ครบกำหนด
- แจ้งเตือน LINE Notify → depends on Email

Module 8 — Document Generation (Add-on)
- พิมพ์ใบสัญญา PDF
- พิมพ์ใบเสร็จ / ใบแจ้งยอด → depends on พิมพ์ใบสัญญา

กฎ dependency:
- ฟีเจอร์ที่มี dependency จะถูก disable จนกว่า parent จะถูกเลือก
- เมื่อ uncheck parent ระบบต้อง uncheck children อัตโนมัติ
- แสดง tooltip อธิบายว่า "ต้องเลือก X ก่อน"

Output ที่ต้องการ:
- โค้ด Next.js ที่ production-ready
- โครงสร้าง component ชัดเจน แยก data config ออกจาก UI
- แสดงราคารวมแบบ real-time พร้อม breakdown รายโมดูล
- ปุ่ม Export ใบเสนอราคาเป็น PDF (mock ได้)
- UX ใช้งานง่ายสำหรับเจ้าของธุรกิจ ไม่ใช่ dev
- รองรับการปรับราคาแต่ละ item ได้ในอนาคต (data-driven)