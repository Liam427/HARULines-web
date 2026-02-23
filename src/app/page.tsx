import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 text-center">
      <h1 className="font-heading text-4xl font-bold text-text sm:text-5xl">
        HARU<span className="text-primary">Lines</span>
      </h1>
      <p className="mt-4 text-lg text-text-secondary">
        AI-powered morning journal for self-reflection
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/privacy"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
        >
          Terms of Service
        </Link>
        <Link
          href="/support"
          className="rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
        >
          Support
        </Link>
      </div>
    </div>
  );
}
