import { BuilderView } from '@/src/presentation/components/builder/BuilderView';
import { MainLayout } from '@/src/presentation/components/layout/MainLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'สร้างใบเสนอราคา | Lending Quote Builder',
  description: 'เลือกโมดูลและฟีเจอร์สำหรับระบบจัดการสินเชื่อ Loan Management SaaS เพื่อกำหนดขอบเขตและงบประมาณ',
  openGraph: {
    title: 'สร้างใบเสนอราคา | Lending Quote Builder',
    description: 'เลือกโมดูลและฟีเจอร์สำหรับระบบจัดการสินเชื่อ Loan Management SaaS',
  },
};

export default function BuilderPage() {
  return (
    <MainLayout showBubbles={false}>
      <BuilderView />
    </MainLayout>
  );
}
