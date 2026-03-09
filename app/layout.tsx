import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "../public/styles/index.css";
import { ThemeProvider } from "../src/presentation/components/providers/ThemeProvider";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lending Quote - ระบบสร้างใบเสนอราคา Loan Management",
  description:
    "สร้างใบเสนอราคาระบบจัดการสินเชื่อ (Loan Management System) ง่ายๆ คุณเลือกฟีเจอร์ เราคำนวณราคาให้",
  keywords: [
    "Loan Management",
    "ใบเสนอราคา",
    "Quotation Builder",
    "ระบบจัดการสินเชื่อ",
    "ปล่อยกู้",
  ],
  authors: [{ name: "Lending Quote Team" }],
  openGraph: {
    title: "Lending Quote - ระบบสร้างใบเสนอราคา Loan Management",
    description:
      "สร้างใบเสนอราคาระบบจัดการสินเชื่อ (Loan Management System) ง่ายๆ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${notoSansThai.variable} font-[family-name:var(--font-noto-sans-thai)] antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
