import type { Metadata } from "next";
import FaqItem from "@/components/FaqItem";

export const metadata: Metadata = {
  title: "Support & FAQ",
  description:
    "Get help with HARULines — Frequently asked questions and contact information.",
};

const faqs = [
  {
    q: "What is HARULines?",
    a: "HARULines is an AI-powered morning journal app. Every morning, you receive 3 personalized questions. Answer in a few lines, and AI analyzes your emotional patterns, providing weekly insights you might not notice on your own.",
  },
  {
    q: "How does the AI analysis work?",
    a: "After you answer all 3 questions, our AI (powered by Google Gemini) analyzes your responses to identify your emotional tone, assign a mood score (1–100), extract key themes, and generate a mood label. Over time, it discovers patterns in your emotional journey.",
  },
  {
    q: "Is my journal data private?",
    a: "Yes. Your journal entries are stored securely in Google Firebase and are only accessible by you. We do not share your personal journal content with other users. Your entries are processed by Google Gemini API solely to provide emotion analysis and personalized questions.",
  },
  {
    q: "Is HARULines a therapy or medical app?",
    a: "No. HARULines is a journal companion and self-reflection tool. It is NOT a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a mental health crisis, please contact a licensed professional or call your local emergency services.",
  },
  {
    q: "How do I change my notification time?",
    a: "Open the app → Settings → Reminder section → Toggle notifications on → Tap the time to adjust.",
  },
  {
    q: "How do I delete my account?",
    a: 'Open the app → Settings → Scroll to bottom → Tap "Delete Account". Alternatively, email harulines.app@gmail.com with your account email.',
  },
  {
    q: "I found a bug. How do I report it?",
    a: "Please email us at harulines.app@gmail.com with a description of the issue and your device information (phone model, OS version). Screenshots are helpful!",
  },
  {
    q: "What languages does HARULines support?",
    a: "Currently, HARULines is available in English. Additional language support is planned for future updates.",
  },
];

export default function SupportPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-heading text-3xl font-bold text-text sm:text-4xl">
        Support & FAQ
      </h1>

      <div className="mt-8">
        {faqs.map((faq) => (
          <FaqItem key={faq.q} q={faq.q} a={faq.a} />
        ))}
      </div>

      <section className="mt-12 rounded-xl bg-surface p-6 text-center shadow-sm border border-gray-100">
        <h2 className="font-heading text-xl font-semibold text-text">
          Contact Us
        </h2>
        <p className="mt-3 text-text-secondary">
          Have a question that isn&apos;t answered above?
        </p>
        <a
          href="mailto:harulines.app@gmail.com"
          className="mt-4 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          harulines.app@gmail.com
        </a>
      </section>
    </article>
  );
}
