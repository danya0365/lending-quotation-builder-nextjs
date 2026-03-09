import { InvoiceView } from '@/src/presentation/components/invoice/InvoiceView';
import { MainLayout } from '@/src/presentation/components/layout/MainLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ใบแจ้งหนี้ | Lending Quote Builder',
  description: 'ใบแจ้งหนี้ระบบจัดการสินเชื่อ Loan Management SaaS — ช่องทางชำระเงินพร้อม',
};

export default function InvoicePage() {
  return (
    <MainLayout showBubbles={false}>
      <InvoiceView />
    </MainLayout>
  );
}
