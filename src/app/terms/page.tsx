import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "HARULines Terms of Service — Read the terms and conditions for using the HARULines app.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-heading text-3xl font-bold text-text sm:text-4xl">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        Last updated: February 23, 2026
      </p>

      <div className="mt-8 space-y-8 text-text leading-relaxed">
        <p>By using HARULines, you agree to these terms.</p>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            1. Service Description
          </h2>
          <p className="mt-3 text-text-secondary">
            HARULines is an AI-powered morning journal app. AI generates
            questions, analyzes emotions, and provides weekly insights based on
            your entries.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            2. Not a Medical Service
          </h2>
          <p className="mt-3 text-text-secondary">
            HARULines is a journal companion and self-reflection tool. It is NOT
            a medical, therapeutic, or clinical service. It does not provide
            diagnoses, treatment recommendations, or professional mental health
            advice. If you are experiencing a mental health crisis, please
            contact a licensed professional or emergency services.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            3. Eligibility
          </h2>
          <p className="mt-3 text-text-secondary">
            You must be at least 13 years old to use HARULines.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            4. Your Content
          </h2>
          <p className="mt-3 text-text-secondary">
            You retain ownership of all journal entries you create. By using the
            app, you grant us permission to process your entries through AI
            services (Google Gemini) solely to provide app features.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">5. Account</h2>
          <p className="mt-3 text-text-secondary">
            You are responsible for maintaining the security of your account. One
            account per person.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            6. Acceptable Use
          </h2>
          <p className="mt-3 text-text-secondary">You agree not to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
            <li>Use the app for any unlawful purpose</li>
            <li>Attempt to access other users&apos; data</li>
            <li>Reverse engineer or tamper with the app</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            7. Subscriptions and Payments
          </h2>
          <p className="mt-3 text-text-secondary">
            Free features are available without payment. Premium features may be
            offered via in-app subscription in the future. Subscription terms
            will be presented before purchase.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            8. Advertisements
          </h2>
          <p className="mt-3 text-text-secondary">
            The free version of HARULines displays advertisements via Google
            AdMob. You may watch rewarded ads to unlock additional features.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            9. AI-Generated Content Disclaimer
          </h2>
          <p className="mt-3 text-text-secondary">
            AI-generated content including questions, emotion analysis, and
            weekly reports is provided for self-reflection purposes only. This
            content may not always be accurate and should not be relied upon for
            important decisions, medical advice, or professional guidance.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            10. Disclaimer
          </h2>
          <p className="mt-3 text-text-secondary">
            The app is provided &ldquo;as is&rdquo; without warranties of any
            kind. We do not guarantee the accuracy, completeness, or usefulness
            of any AI-generated content.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            11. Limitation of Liability
          </h2>
          <p className="mt-3 text-text-secondary">
            To the maximum extent permitted by law, HARULines shall not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of the app.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            12. Termination
          </h2>
          <p className="mt-3 text-text-secondary">
            We may suspend or terminate your access if you violate these terms.
            You may delete your account at any time from Settings.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">13. Changes</h2>
          <p className="mt-3 text-text-secondary">
            We may update these terms. Continued use of the app after changes
            constitutes acceptance.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">14. Contact</h2>
          <p className="mt-2">
            <a
              href="mailto:harulines.app@gmail.com"
              className="text-primary hover:underline"
            >
              harulines.app@gmail.com
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
