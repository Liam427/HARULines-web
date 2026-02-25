import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-surface">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-text-secondary">
            &copy; 2026 HARULines. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm font-body">
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
              href="/delete-account"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Delete Account
            </Link>
            <Link
              href="/support"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Support
            </Link>
          </nav>
        </div>
        <div className="mt-4 text-center sm:text-left">
          <a
            href="mailto:harulines.app@gmail.com"
            className="text-sm text-text-secondary hover:text-primary transition-colors"
          >
            harulines.app@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
