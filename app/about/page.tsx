import { AboutView } from '@/src/presentation/components/about/AboutView';
import { MainLayout } from '@/src/presentation/components/layout/MainLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา | Lending Quote Builder',
  description: 'รู้จัก Lending Quote — ระบบจัดการสินเชื่อครบวงจร จัดทำใบเสนอราคา ใบแจ้งหนี้ และใบเสร็จ',
};

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutView />
    </MainLayout>
  );
}
