import { ContactView } from '@/src/presentation/components/contact/ContactView';
import { MainLayout } from '@/src/presentation/components/layout/MainLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ติดต่อเรา | Lending Quote Builder',
  description: 'ติดต่อ Lending Quote — โทร, อีเมล, LINE หรือฟอร์มติดต่อ พร้อมให้บริการ',
};

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactView />
    </MainLayout>
  );
}
