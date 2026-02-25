import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "How to delete your HARULines account and all associated data.",
};

export default function DeleteAccountPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-heading text-3xl font-bold text-text sm:text-4xl">
        Delete Your Account
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        Last updated: February 23, 2026
      </p>

      <div className="mt-8 space-y-8 text-text leading-relaxed">
        <h2 className="font-heading text-2xl font-semibold">
          How to Delete Your HARULines Account
        </h2>

        {/* Option 1 */}
        <section className="rounded-xl bg-surface p-6 shadow-sm border border-gray-100">
          <h3 className="font-heading text-lg font-semibold text-primary">
            Option 1: Delete from the App
          </h3>
          <ol className="mt-4 list-none space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                1
              </span>
              <span className="text-text-secondary">Open HARULines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                2
              </span>
              <span className="text-text-secondary">
                Go to Settings (bottom tab)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                3
              </span>
              <span className="text-text-secondary">Scroll to the bottom</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                4
              </span>
              <span className="text-text-secondary">
                Tap &ldquo;Delete Account&rdquo;
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                5
              </span>
              <span className="text-text-secondary">Confirm deletion</span>
            </li>
          </ol>
        </section>

        {/* Option 2 */}
        <section className="rounded-xl bg-surface p-6 shadow-sm border border-gray-100">
          <h3 className="font-heading text-lg font-semibold text-primary">
            Option 2: Request via Email
          </h3>
          <p className="mt-3 text-text-secondary">
            If you cannot access the app, send a deletion request to:
          </p>
          <p className="mt-2">
            <a
              href="mailto:harulines.app@gmail.com"
              className="text-primary font-semibold hover:underline"
            >
              harulines.app@gmail.com
            </a>
          </p>
          <p className="mt-2 text-text-secondary">
            Include the email address associated with your account.
          </p>
        </section>

        {/* What Gets Deleted */}
        <section>
          <h3 className="font-heading text-lg font-semibold">
            What Gets Deleted:
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
            <li>Your account information (name, email)</li>
            <li>All journal entries (questions, answers)</li>
            <li>
              All emotion analysis results (mood scores, labels, keywords)
            </li>
            <li>All weekly insight reports</li>
            <li>Notification settings and preferences</li>
          </ul>
        </section>

        {/* Processing Time */}
        <section>
          <h3 className="font-heading text-lg font-semibold">
            Processing Time:
          </h3>
          <p className="mt-3 text-text-secondary">
            Your data will be permanently deleted within 30 days of your
            request.
          </p>
        </section>

        {/* Warning */}
        <div className="rounded-lg border-l-4 border-red-400 bg-red-50 p-4">
          <p className="font-semibold text-red-700">Warning:</p>
          <p className="mt-1 text-sm text-red-600">
            This action is irreversible. Once deleted, your data cannot be
            recovered.
          </p>
        </div>
      </div>
    </article>
  );
}
