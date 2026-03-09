'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from '../common/ThemeToggle';

/**
 * MainHeader Component
 * Mobile-friendly header with hamburger menu
 */
export function MainHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper to check active link
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="app-header">
      <div className="app-header-container">
        {/* Logo */}
        <Link href="/" className="app-logo">
          <span className="app-logo-icon">💰</span>
          <span className="app-logo-text">Lending Quote</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="app-nav hidden lg:flex">
          <Link
            href="/"
            className={`app-nav-link ${isActive('/') ? 'app-nav-link-active' : ''}`}
          >
            <span className="app-nav-icon">🏠</span>
            <span>หน้าแรก</span>
          </Link>
          <Link
            href="/builder"
            className={`app-nav-link ${isActive('/builder') ? 'app-nav-link-active' : ''}`}
          >
            <span className="app-nav-icon">🛠️</span>
            <span>สร้างใบเสนอราคา</span>
          </Link>
          <Link
            href="/about"
            className={`app-nav-link ${isActive('/about') ? 'app-nav-link-active' : ''}`}
          >
            <span className="app-nav-icon">ℹ️</span>
            <span>เกี่ยวกับเรา</span>
          </Link>
        </nav>

        {/* Actions */}
        <div className="app-header-actions">
          <ThemeToggle />
          <Link href="/builder" className="app-button-primary hidden lg:flex">
            เริ่มต้นใช้งาน
          </Link>
          {/* Mobile Menu Button - hidden on lg and up */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden app-icon-button"
            aria-label="Menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="app-mobile-menu lg:hidden">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`app-mobile-link ${isActive('/') ? 'active' : ''}`}
          >
            🏠 หน้าแรก
          </Link>
          <Link
            href="/builder"
            onClick={() => setMobileMenuOpen(false)}
            className={`app-mobile-link ${isActive('/builder') ? 'active' : ''}`}
          >
            🛠️ สร้างใบเสนอราคา
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`app-mobile-link ${isActive('/about') ? 'active' : ''}`}
          >
            ℹ️ เกี่ยวกับเรา
          </Link>
        </div>
      )}
    </header>
  );
}
