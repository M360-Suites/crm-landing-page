import type { Metadata } from "next";
import { LegalLayout, TOCItem } from "@/components/LegalLayout";
import {
  Scale,
  UserCheck,
  Ban,
  Database,
  Plug,
  CreditCard,
  Server,
  Lock,
  Sparkles,
  EyeOff,
  AlertTriangle,
  FileCheck,
  ShieldAlert,
  Gavel,
  RefreshCw,
  Landmark,
  Mail,
  Building2,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | crm360",
  description:
    "Read the Terms of Service governing your access to and use of crm360's application, website, APIs, and related business workflow services.",
};

const tocItems: TOCItem[] = [
  { id: "use-of-service", title: "Use of the Service", number: "1" },
  { id: "accounts-access", title: "Accounts and Access", number: "2" },
  { id: "acceptable-use", title: "Acceptable Use", number: "3" },
  { id: "organization-data", title: "Organization Data & User Content", number: "4" },
  { id: "email-integrations", title: "Email & Third-Party Integrations", number: "5" },
  { id: "fees-payment", title: "Fees and Payment", number: "6" },
  { id: "service-availability", title: "Service Availability", number: "7" },
  { id: "security", title: "Security", number: "8" },
  { id: "intellectual-property", title: "Intellectual Property", number: "9" },
  { id: "confidentiality", title: "Confidentiality", number: "10" },
  { id: "termination", title: "Termination", number: "11" },
  { id: "disclaimers", title: "Disclaimers", number: "12" },
  { id: "limitation-of-liability", title: "Limitation of Liability", number: "13" },
  { id: "indemnification", title: "Indemnification", number: "14" },
  { id: "changes-to-terms", title: "Changes to These Terms", number: "15" },
  { id: "governing-law", title: "Governing Law", number: "16" },
  { id: "contact-us", title: "Contact Us", number: "17" },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="These Terms set out the legal terms for using CRM360, your rights, user obligations, and platform usage policies."
      effectiveDate="August 21, 2026"
      readTime="7 min"
      activeDoc="terms"
      tocItems={tocItems}
    >
      {/* Preamble */}
      <div className="p-6 rounded-2xl bg-[var(--color-crm-peach)]/30 dark:bg-[#2d1a13]/40 border border-[var(--color-crm-rust)]/20 mb-10">
        <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of <strong>CRM360</strong>, including our website, application, APIs, and related services. By creating an account, accepting an invitation, or otherwise using CRM360, you agree to be bound by these Terms.
        </p>
        <p className="text-sm mt-3 text-gray-600 dark:text-gray-400">
          If you use CRM360 on behalf of a company or other organization, you represent and warrant that you have authority to bind that organization to these Terms.
        </p>
      </div>

      <div className="space-y-12">
        {/* 1. Use of the Service */}
        <section id="use-of-service" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              01
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Use of the Service
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                CRM360 is a customer relationship management platform that enables organizations to manage users, contacts, companies, deals, pipelines, tasks, documents, emails, reports, and related business workflows.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                You may use CRM360 only in accordance with these Terms, applicable law, and any documentation, policies, or guidelines we make available from time to time.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Accounts and Access */}
        <section id="accounts-access" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              02
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Accounts and Access
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { letter: "a", title: "Accurate Credentials", text: "You must provide accurate, current, and complete account information and keep your login credentials secure." },
              { letter: "b", title: "Account Activity Responsibility", text: "You are responsible for all activity that occurs through your account, except to the extent caused by our negligence or unauthorized access not attributable to you." },
              { letter: "c", title: "Security Incident Notification", text: "You must notify us promptly if you suspect unauthorized access to your account or any security incident." },
              { letter: "d", title: "Organization Administration", text: "Organizations are responsible for managing user roles, permissions, invitations, and access to organization data." },
            ].map((item) => (
              <div
                key={item.letter}
                className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white text-base mb-2 flex items-center gap-2">
                  <span className="font-mono text-[var(--color-crm-rust)]">{item.letter})</span>
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Acceptable Use */}
        <section id="acceptable-use" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              03
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Ban className="w-5 h-5 text-red-500" />
              Acceptable Use
            </h2>
          </div>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            You agree <strong>not</strong> to:
          </p>

          <ul className="space-y-3">
            {[
              { letter: "a", text: "use CRM360 for unlawful, fraudulent, harmful, or abusive purposes;" },
              { letter: "b", text: "upload, transmit, or share content that violates any law or third party rights;" },
              { letter: "c", text: "attempt to gain unauthorized access to CRM360, another user account, or related systems;" },
              { letter: "d", text: "interfere with, disrupt, overload, or damage the service or any related network;" },
              { letter: "e", text: "reverse engineer, decompile, copy, resell, or exploit CRM360 except to the extent permitted by law or authorized in writing by us;" },
              { letter: "f", text: "use CRM360 to send spam, phishing messages, malware, or unauthorized communications; or" },
              { letter: "g", text: "misrepresent your identity or affiliation with any person or organization." },
            ].map((item) => (
              <li
                key={item.letter}
                className="flex items-start gap-3 p-4 rounded-2xl bg-red-500/5 border border-red-500/10 text-sm"
              >
                <span className="font-mono font-bold text-red-500 shrink-0 mt-0.5">{item.letter})</span>
                <span className="text-gray-800 dark:text-gray-200">{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Organization Data and User Content */}
        <section id="organization-data" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              04
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Organization Data and User Content
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                You retain ownership of the data and content you submit to CRM360, including contacts, companies, deals, documents, emails, notes, and related CRM records.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                You grant us a non-exclusive, worldwide, royalty free license to process, store, transmit, display, reproduce, and otherwise use such data solely to the extent necessary to provide, secure, support, maintain, and improve CRM360, and to comply with applicable law.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">c)</span>
              <p className="text-sm leading-relaxed">
                You are responsible for ensuring that you have all necessary rights, consents, and permissions to upload, process, and use any data entered into CRM360.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Email and Third-Party Integrations */}
        <section id="email-integrations" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              05
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Plug className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Email and Third-Party Integrations
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                CRM360 may allow users to connect email accounts or third party services. By connecting an integration, you authorize CRM360 to access and process the information required to provide the relevant integration features.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                You are responsible for complying with the terms and policies of any connected third party service.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">c)</span>
              <p className="text-sm leading-relaxed">
                We may suspend, limit, or disable integrations where reasonably necessary for security, compliance, provider requirements, legal obligations, or service reliability.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Fees and Payment */}
        <section id="fees-payment" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              06
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Fees and Payment
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                If CRM360 offers paid plans, you agree to pay all applicable fees in accordance with the selected plan, billing terms, and payment method.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                Unless otherwise required by law or expressly stated in writing, fees are non refundable.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">c)</span>
              <p className="text-sm leading-relaxed">
                We may modify pricing or plan features by giving reasonable prior notice where required by law or contract.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Service Availability */}
        <section id="service-availability" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              07
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Service Availability
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                We aim to keep CRM360 available and reliable, but we do not guarantee uninterrupted, timely, secure, or error free service.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                We may modify, suspend, or discontinue all or part of the service for maintenance, updates, security, legal, or business reasons.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Security */}
        <section id="security" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              08
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Security
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                We use reasonable measures to protect CRM360 and user data. However, no system can be guaranteed to be completely secure.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                You are responsible for using strong passwords, protecting credentials, managing user access, and ensuring that your organization follows appropriate security practices.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Intellectual Property */}
        <section id="intellectual-property" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              09
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Intellectual Property
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                CRM360, including its software, design, features, branding, documentation, and technology, is owned by us or our licensors and is protected by applicable intellectual property laws.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                These Terms do not grant you ownership of CRM360 or any related intellectual property rights.
              </p>
            </div>
          </div>
        </section>

        {/* 10. Confidentiality */}
        <section id="confidentiality" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              10
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Confidentiality
            </h2>
          </div>
          <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              Users and organizations may access confidential business information through CRM360. You agree to use such information only for authorized business purposes and to protect it from unauthorized access, disclosure, or misuse.
            </p>
          </div>
        </section>

        {/* 11. Termination */}
        <section id="termination" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              11
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Termination
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                You may stop using CRM360 at any time.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                We may suspend or terminate your access if you violate these Terms, create security or legal risk, fail to pay applicable fees, or use the service in a harmful or unlawful manner.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">c)</span>
              <p className="text-sm leading-relaxed">
                Upon termination, access to CRM360 may be disabled. We may retain or delete data in accordance with our Privacy Policy, legal obligations, backup practices, and any applicable agreement.
              </p>
            </div>
          </div>
        </section>

        {/* 12. Disclaimers */}
        <section id="disclaimers" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              12
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Disclaimers
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                CRM360 is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, whether express, implied, or statutory.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                To the maximum extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, non-infringement, and quiet enjoyment.
              </p>
            </div>
          </div>
        </section>

        {/* 13. Limitation of Liability */}
        <section id="limitation-of-liability" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              13
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Limitation of Liability
            </h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">a)</span>
              <p className="text-sm leading-relaxed">
                To the maximum extent permitted by law, CRM360 and its operators will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, including loss of profits, revenue, data, goodwill, or business opportunities.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700 flex items-start gap-3">
              <span className="font-mono font-bold text-[var(--color-crm-rust)] mt-0.5">b)</span>
              <p className="text-sm leading-relaxed">
                To the maximum extent permitted by law, our total liability for any claim arising out of or relating to CRM360 will not exceed the amount paid by you for the service during the three months preceding the event giving rise to the claim, or no fees at all if no fees were paid.
              </p>
            </div>
          </div>
        </section>

        {/* 14. Indemnification */}
        <section id="indemnification" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              14
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Gavel className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Indemnification
            </h2>
          </div>
          <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              You agree to defend, indemnify, and hold harmless CRM360 and its operators from and against claims, damages, liabilities, losses, and expenses arising out of or relating to your use of CRM360, your data, your violation of these Terms, or your violation of any law or third-party rights.
            </p>
          </div>
        </section>

        {/* 15. Changes to These Terms */}
        <section id="changes-to-terms" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              15
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Changes to These Terms
            </h2>
          </div>
          <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-700/40 border border-gray-100 dark:border-gray-700">
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              We may update these Terms from time to time. When changes are made, we will update the effective date above and may provide additional notice where required by law. Your continued use of CRM360 after the revised Terms become effective constitutes your acceptance of the updated Terms.
            </p>
          </div>
        </section>

        {/* 16. Governing Law */}
        <section id="governing-law" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              16
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Landmark className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Governing Law
            </h2>
          </div>
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[var(--color-crm-peach)]/40 to-transparent dark:from-[#3a251c]/40 dark:to-transparent border border-[var(--color-crm-rust)]/20">
            <p className="text-sm font-medium leading-relaxed text-gray-800 dark:text-gray-200">
              These Terms are governed by the laws of <strong>Federal Republic of Nigeria</strong> without regard to conflict of law rules.
            </p>
          </div>
        </section>

        {/* 17. Contact Us */}
        <section id="contact-us" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100 dark:border-gray-700/80">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[var(--color-crm-rust)]/10 text-[var(--color-crm-rust)] font-mono font-bold text-sm">
              17
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-[var(--color-crm-rust)]" />
              Contact Us
            </h2>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            If you have questions about these Terms, contact us at:
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
