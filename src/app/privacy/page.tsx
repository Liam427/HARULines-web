import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "HARULines Privacy Policy — Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-heading text-3xl font-bold text-text sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        Last updated: February 23, 2026
      </p>

      <div className="mt-8 space-y-8 text-text leading-relaxed">
        <p>
          HARULines (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;)
          operates the HARULines mobile application.
        </p>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            1. Information We Collect
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
            <li>
              <strong className="text-text">Account information:</strong> Name
              and email address via Google or Apple Sign-In
            </li>
            <li>
              <strong className="text-text">Journal entries:</strong> Questions,
              answers, mood scores, keywords, and timestamps
            </li>
            <li>
              <strong className="text-text">Usage data:</strong> App interaction
              analytics via Firebase Analytics
            </li>
            <li>
              <strong className="text-text">Device information:</strong> Device
              type, OS version (for crash reporting)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            2. How We Use Your Information
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
            <li>
              To provide and personalize your journaling experience
            </li>
            <li>
              To generate AI-powered questions and emotion analysis via Google
              Gemini API
            </li>
            <li>
              To create weekly insight reports based on your journal history
            </li>
            <li>
              To send push notifications (only if enabled by you)
            </li>
            <li>To display advertisements via Google AdMob</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            3. AI Processing
          </h2>
          <p className="mt-3 text-text-secondary">
            Your journal entries are sent to Google Gemini API for analysis. This
            processing generates mood scores, emotional labels, keywords, and
            weekly insights. We do not use your data to train AI models.
            Google&apos;s data usage policies apply to API processing.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            4. Data Storage
          </h2>
          <p className="mt-3 text-text-secondary">
            Your data is stored securely in Google Firebase (Cloud Firestore),
            hosted in the Seoul (asia-northeast3) region. All data is associated
            with your user account and is not accessible by other users.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            5. Advertising
          </h2>
          <p className="mt-3 text-text-secondary">
            We use Google AdMob to display advertisements. AdMob may collect
            device identifiers and usage data for ad personalization. You can opt
            out of personalized ads in your device settings.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            6. Data Sharing
          </h2>
          <p className="mt-3 text-text-secondary">
            We do not sell your personal data. We share data only with:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
            <li>Google Firebase (data storage)</li>
            <li>Google Gemini API (journal analysis)</li>
            <li>Google AdMob (advertising)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">7. Your Rights</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-text-secondary">
            <li>
              <strong className="text-text">Access:</strong> View all your
              journal data within the app
            </li>
            <li>
              <strong className="text-text">Delete:</strong> Delete your account
              and all associated data from Settings
            </li>
            <li>
              <strong className="text-text">Notifications:</strong> Enable or
              disable push notifications at any time
            </li>
            <li>
              <strong className="text-text">GDPR/CCPA:</strong> You may request
              access, correction, or deletion of your data by contacting us
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            8. Children&apos;s Privacy
          </h2>
          <p className="mt-3 text-text-secondary">
            HARULines is not intended for children under 13. We do not knowingly
            collect data from children under 13.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            9. Data Retention
          </h2>
          <p className="mt-3 text-text-secondary">
            Your data is retained as long as your account exists. Upon account
            deletion, all associated data is permanently removed within 30 days.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            10. Changes to This Policy
          </h2>
          <p className="mt-3 text-text-secondary">
            We may update this policy from time to time. Changes will be posted
            on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold">
            11. Contact Us
          </h2>
          <p className="mt-3 text-text-secondary">
            If you have questions about this policy, contact us at:
          </p>
          <p className="mt-2">
            <a
              href="mailto:blahblah.ybw@gmail.com"
              className="text-primary hover:underline"
            >
              blahblah.ybw@gmail.com
            </a>
          </p>
        </section>

        <p className="mt-8 rounded-lg bg-warm-cream p-4 text-sm text-text-secondary italic">
          HARULines is a journal companion, not a medical service.
        </p>
      </div>
    </article>
  );
}
