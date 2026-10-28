import type { Metadata } from "next";
import { LegalLayout, TOCItem } from "@/components/LegalLayout";
import {
  ShieldCheck,
  Database,
  Share2,
  Lock,
  Clock,
  UserCheck,
  ExternalLink,
  Baby,
  Globe,
  RefreshCw,
  Mail,
  Building2,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | crm360",
  description:
    "Learn how crm360 collects, uses, discloses, stores, and protects your personal data when using our CRM platform and services.",
};

const tocItems: TOCItem[] = [
  { id: "information-collected", title: "Information We Collect", number: "1" },
  { id: "how-we-use", title: "How We Use Information", number: "2" },
  { id: "how-we-share", title: "How We Share Information", number: "3" },
  { id: "storage-security", title: "Data Storage & Security", number: "4" },
  { id: "data-retention", title: "Data Retention", number: "5" },
  { id: "rights-choices", title: "Your Rights & Choices", number: "6" },
  { id: "third-party", title: "Third Party Services", number: "7" },
  { id: "childrens-privacy", title: "Children's Privacy", number: "8" },
  { id: "international-transfers", title: "International Transfers", number: "9" },
  { id: "policy-changes", title: "Changes to This Policy", number: "10" },
  { id: "contact-us", title: "Contact Us", number: "11" },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Transparency matters. Here is how crm360 collects, protects, processes, and respects your personal data across our services."
      effectiveDate="August 21, 2026"
      readTime="5 min"
      activeDoc="privacy"
      tocItems={tocItems}
    >
      {/* Preamble */}
      <div className="p-6 rounded-2xl bg-[var(--color-crm-peach)]/30 dark:bg-[#2d1a13]/40 border border-[var(--color-crm-rust)]/20 mb-10">
        <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
          <strong>crm360</strong> is operated by <strong>M360 Group</strong> (&quot;M360 Group&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We respect your privacy. This Privacy Policy explains how we collect, use, disclose, store, and protect personal data when you access or use our website, application, and related services.
        </p>
        <p className="text-sm mt-3 text-gray-600 dark:text-gray-400">
          By accessing or using crm360, you acknowledge that you have read and understood this Privacy Policy. Where required by applicable law, we will obtain your consent or rely on another lawful basis before processing your personal data.
        </p>
      </div>

      <div className="space-y-12">
        {/* 1. Information We Collect */}
        <section id="information-collected" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              01
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Information We Collect
            </h2>
          </div>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            We may collect the following categories of information:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white text-base mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-crm-rust)]"></span>
                a) Account Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                When you create an account, are invited to use crm360, or otherwise register to use the service, we may collect your name, email address, password, organization name, role, and profile information.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white text-base mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-crm-rust)]"></span>
                b) Customer Relationship Data
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                crm360 enables users to manage contacts, companies, deals, tasks, documents, emails, notes, and related business records. Such information is typically provided by users and is controlled by the organization using the service.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white text-base mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-crm-rust)]"></span>
                c) Email and Integration Data
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                If you connect an email account or third party service, we may process email metadata, messages, recipients, attachments, and related information necessary to provide synchronization, sending, workflow, and CRM features.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white text-base mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-crm-rust)]"></span>
                d) Usage Information
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                We may collect information about your use of crm360, including pages visited, features used, actions taken, device type, browser type, IP address, log data, and similar technical information.
              </p>
            </div>
          </div>

          <div className="mt-4 p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white text-base mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-crm-rust)]"></span>
              e) Cookies and Similar Technologies
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              We may use cookies or similar technologies to keep users signed in, improve security, remember preferences, and analyze service usage.
            </p>
          </div>
        </section>

        {/* 2. How We Use Information */}
        <section id="how-we-use" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              02
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[var(--color-crm-rust)]" />
              How We Use Information
            </h2>
          </div>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            We may use personal data to:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { letter: "a", text: "provide, operate, maintain, and improve crm360;" },
              { letter: "b", text: "create and manage user accounts;" },
              { letter: "c", text: "manage CRM records such as contacts, companies, deals, tasks, documents, and emails;" },
              { letter: "d", text: "authenticate users and protect accounts;" },
              { letter: "e", text: "send verification emails, invitations, reminders, and service related notifications;" },
              { letter: "f", text: "provide customer support;" },
              { letter: "g", text: "monitor usage, diagnose errors, and improve performance;" },
              { letter: "h", text: "comply with legal obligations and enforce our terms; and" },
              { letter: "i", text: "carry out any other purpose disclosed to you at the time of collection or otherwise permitted by law." },
            ].map((item) => (
              <li
                key={item.letter}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-gray-700/30 border border-gray-100 dark:border-gray-700/60 shadow-2xs text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--color-crm-rust)] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-gray-900 dark:text-white mr-1.5">{item.letter})</strong>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 3. How We Share Information */}
        <section id="how-we-share" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              03
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Share2 className="w-5 h-5 text-[var(--color-crm-rust)]" />
              How We Share Information
            </h2>
          </div>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-sm font-semibold mb-5">
            We do not sell personal data. We disclose information only under strict operational and legal circumstances:
          </div>

          <div className="space-y-3">
            {[
              { letter: "a", title: "Authorized Organization Users", text: "to authorized users within the same organization account;" },
              { letter: "b", title: "Vetted Service Providers", text: "to service providers that assist us in operating crm360, including hosting, email delivery, cloud storage, analytics, and security services;" },
              { letter: "c", title: "Third-Party Integrations", text: "to third party integrations when a user authorizes such connection;" },
              { letter: "d", title: "Legal Requirements", text: "if required by law, regulation, court order, or other legal process;" },
              { letter: "e", title: "Protection & Corporate Transactions", text: "to protect the rights, safety, security, and property of crm360, our users, or others; and in connection with a merger, acquisition, financing, restructuring, or sale of assets." },
            ].map((item) => (
              <div
                key={item.letter}
                className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  <span className="font-mono text-[var(--color-crm-rust)]">{item.letter})</span>
                  <span>{item.title}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 pl-5">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">
            Where required by law, we will take appropriate measures to ensure that any disclosure is limited to the relevant and necessary information.
          </p>
        </section>

        {/* 4. Data Storage and Security */}
        <section id="storage-security" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              04
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Data Storage and Security
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                We implement reasonable technical and organizational measures designed to protect personal data against unauthorized access, loss, misuse, alteration, or disclosure.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                However, no internet based service can be guaranteed to be completely secure.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">c)</span>
              <p className="text-sm leading-relaxed">
                Users are responsible for maintaining the confidentiality of their login credentials and for controlling access to their organization account.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Data Retention */}
        <section id="data-retention" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              05
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Data Retention
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                We retain personal data for as long as necessary to provide crm360, comply with legal and regulatory obligations, resolve disputes, enforce agreements, maintain business records, and for other legitimate business purposes permitted by law.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                Where an organization requests deletion of account or business data, we may retain certain information to the extent necessary for legal, security, backup, audit, and operational purposes.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Your Rights and Choices */}
        <section id="rights-choices" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              06
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Your Rights and Choices
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                Depending on your location and applicable law, you may have rights to access, correct, update, export, restrict, object to, or delete certain personal data.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                You may update certain account information within crm360. For other requests, contact us using the details below. Where required, we may ask you to verify your identity before responding to your request.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Third Party Services */}
        <section id="third-party" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              07
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Third Party Services
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                crm360 may integrate with third party services such as email providers, cloud storage providers, or communication tools. Your use of those third party services is governed by their own privacy policies and terms.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                We are not responsible for the privacy practices or content of third party services.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Children's Privacy */}
        <section id="childrens-privacy" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              08
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Baby className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Children&apos;s Privacy
            </h2>
          </div>
          <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              crm360 is intended for business use and is not directed to children. We do not knowingly collect personal data from children. If we become aware that we have collected personal data from a child in a manner not permitted by law, we will take appropriate steps to delete or secure such data as required.
            </p>
          </div>
        </section>

        {/* 9. International Transfers */}
        <section id="international-transfers" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              09
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-[var(--color-crm-rust)]" />
              International Transfers
            </h2>
          </div>
          <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              If you access crm360 from outside the country where our systems or service providers are located, your information may be transferred to and processed in other countries. Where required, we will take steps to ensure that such transfers are carried out in accordance with applicable law.
            </p>
          </div>
        </section>

        {/* 10. Changes to This Policy */}
        <section id="policy-changes" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              10
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Changes to This Policy
            </h2>
          </div>
          <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              We may update this Privacy Policy from time to time. If we make material changes, we will update the effective date above and may provide additional notice where required by law. Your continued use of crm360 after the updated policy becomes effective constitutes your acknowledgement of the revised policy.
            </p>
          </div>
        </section>

        {/* 11. Contact Us */}
        <section id="contact-us" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              11
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Contact Us
            </h2>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            If you have questions about this Privacy Policy or our data practices, contact us at:
          </p>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--color-crm-peach)]/50 via-white to-white dark:from-[#3a251c]/60 dark:via-gray-800 dark:to-gray-800 border border-[var(--color-crm-rust)]/30 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[var(--color-crm-rust)]/15 text-[var(--color-crm-rust)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">
                    Email Support
                  </h4>
                  <a
                    href="mailto:support@crm360online.com"
                    className="text-sm font-semibold text-[var(--color-crm-rust)] hover:underline"
                  >
                    support@crm360online.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[var(--color-crm-rust)]/15 text-[var(--color-crm-rust)]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">
                    Company / Operator
                  </h4>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    M360 Group
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[var(--color-crm-rust)]/15 text-[var(--color-crm-rust)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">
                    Headquarters
                  </h4>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    426A Fasade, Omole Estate Phase 1, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LegalLayout>
  );
}
