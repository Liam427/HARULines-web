"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-surface border-b border-gray-100">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-xl font-bold text-primary">
          HARULines
        </Link>

        {/* 모바일 햄버거 */}
        <button
          className="sm:hidden text-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden gap-6 text-sm font-body sm:flex">
          <Link
            href="/privacy"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/support"
            className="text-text-secondary hover:text-primary transition-colors"
          >
            Support
          </Link>
        </nav>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <nav className="border-t border-gray-100 bg-surface px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-3 text-sm font-body">
            <Link
              href="/privacy"
              className="text-text-secondary hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-text-secondary hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Terms
            </Link>
            <Link
              href="/support"
              className="text-text-secondary hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Support
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
