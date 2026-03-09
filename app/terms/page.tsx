import { MainLayout } from '@/src/presentation/components/layout/MainLayout';
import { TermsView } from '@/src/presentation/components/terms/TermsView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ข้อกำหนดการใช้งาน | Lending Quote Builder',
  description: 'ข้อกำหนดการใช้งาน Lending Quote — ขอบเขตบริการ การชำระเงิน การรับประกัน',
};

export default function TermsPage() {
  return (
    <MainLayout>
      <TermsView />
    </MainLayout>
  );
}
