import { MainLayout } from '@/src/presentation/components/layout/MainLayout';
import { PrivacyView } from '@/src/presentation/components/privacy/PrivacyView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'นโยบายความเป็นส่วนตัว | Lending Quote Builder',
  description: 'นโยบายความเป็นส่วนตัวของ Lending Quote — การเก็บข้อมูล การปกป้องข้อมูลสินเชื่อ',
};

export default function PrivacyPage() {
  return (
    <MainLayout>
      <PrivacyView />
    </MainLayout>
  );
}
