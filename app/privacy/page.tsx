import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | VDOgate Live Events',
  description: 'Privacy Policy for VDOgate Live Events Platform. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-orange-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            VDOgate Live Events Platform
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: 21st January 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy describes how TalentGlow LLP (&quot;VDOgate&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, uses, stores, discloses, and protects personal information of users (&quot;you&quot;, &quot;your&quot;) who access or use the VDOgate live events platform, including the website and mobile applications (collectively, the &quot;Platform&quot;).
          </p>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using the Platform, you agree to the practices described in this Privacy Policy.
          </p>

          {/* Section 1 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Scope &amp; Applicability</h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy applies to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Creators who create and host live events on the Platform; and</li>
              <li>Attendees who access live events, whether through paid tickets or creator-issued free invitations.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This Privacy Policy should be read together with the VDOgate Terms of Service, which govern platform usage, payments, and liability allocation.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We collect information necessary to operate the Platform, provide services, process payments, ensure security, and comply with legal obligations.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Information You Provide Directly</h3>
            <p className="text-gray-700 leading-relaxed">
              Depending on how you use VDOgate, we may collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Mobile number</li>
              <li>Account authentication credentials</li>
              <li>Event details and configurations (for Creators)</li>
              <li>Communications with customer support</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <strong>Note:</strong> VDOgate does not store full credit card, debit card, UPI, or bank account details.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Information Collected Automatically</h3>
            <p className="text-gray-700 leading-relaxed">
              When you access or use the Platform, VDOgate may automatically collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Device information (device type, operating system, app version)</li>
              <li>Log data (IP address, access timestamps, error logs)</li>
              <li>Usage data (features used, screens accessed, session duration)</li>
              <li>Diagnostic and crash data</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.3 Payment Information</h3>
            <p className="text-gray-700 leading-relaxed">
              Payments on VDOgate are processed through third-party payment service providers, such as Razorpay, Apple In-App Purchase, or Google Play Billing (where applicable).
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              VDOgate does not store sensitive payment credentials and relies on payment service providers for secure processing.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Information</h2>
            <p className="text-gray-700 leading-relaxed">
              VDOgate uses collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Creating and managing user accounts</li>
              <li>Enabling event creation, hosting, ticketing, and access</li>
              <li>Processing payments, refunds, and settlements</li>
              <li>Complying with tax, accounting, and regulatory requirements</li>
              <li>Fraud prevention, security monitoring, and risk management</li>
              <li>Responding to customer support requests and resolving disputes</li>
              <li>Monitoring and improving platform performance and reliability</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
              <strong>Important:</strong> VDOgate does not use personal data for advertising or algorithmic content promotion.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed">
              VDOgate processes personal data based on one or more of the following legal grounds:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>User consent</li>
              <li>Performance of a contract (Terms of Service)</li>
              <li>Compliance with legal obligations</li>
              <li>Legitimate interests such as platform security, fraud prevention, and integrity</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing &amp; Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              VDOgate may share personal information only as necessary with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Payment processors and financial institutions</li>
              <li>Cloud hosting, streaming, and infrastructure providers</li>
              <li>Security, analytics, and customer support service providers</li>
              <li>Government authorities or regulators, where required by law</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
              <strong>We do not sell, rent, or trade personal data to third parties.</strong>
            </p>
          </section>

          {/* Section 6 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User-Generated Content &amp; Live Events</h2>
            <p className="text-gray-700 leading-relaxed">
              Live event content, including video streams, chats, messages, and reactions, is created and controlled by independent Creators.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              VDOgate does not pre-moderate live content and does not assume responsibility for user-generated content.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Content may be reviewed, restricted, or removed if reported and found to violate applicable laws or platform policies.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              VDOgate retains personal information only for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>provide the Platform and related services;</li>
              <li>comply with legal, accounting, and regulatory requirements;</li>
              <li>resolve disputes and enforce agreements.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Data relating to payments, settlements, chargebacks, or disputes may be retained longer where required by law.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User Rights &amp; Account Deletion</h2>
            <p className="text-gray-700 leading-relaxed">
              Users may request:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>access to their personal data;</li>
              <li>correction of inaccurate or incomplete information;</li>
              <li>deletion of their account, subject to legal and contractual obligations.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Account deletion requests may be made through in-app settings or by contacting support.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Certain information may be retained after account deletion for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>legal compliance,</li>
              <li>fraud prevention,</li>
              <li>enforcement of VDOgate&apos;s Terms of Service.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Security Measures</h2>
            <p className="text-gray-700 leading-relaxed">
              VDOgate implements reasonable administrative, technical, and organisational safeguards to protect personal data against unauthorised access, misuse, loss, or alteration.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              However, no electronic system is completely secure, and absolute security cannot be guaranteed.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children &amp; Minor Access</h2>
            <p className="text-gray-700 leading-relaxed">
              VDOgate does not permit individuals under 18 years of age to create accounts, host events, or make payments on the Platform.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Minors may access live events only under the supervision, consent, and responsibility of a parent or legal guardian, acting through an adult account holder.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              VDOgate does not knowingly collect personal information directly from minors.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              If VDOgate becomes aware that personal data of a minor has been collected directly without appropriate consent, reasonable steps will be taken to delete such information.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Responsibility for content suitability and parental consent rests with the Creator and the parent or guardian.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Personal information may be stored or processed on servers located outside your state or country, subject to applicable data protection laws and safeguards.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Third-Party Links &amp; Services</h2>
            <p className="text-gray-700 leading-relaxed">
              The Platform may contain links to third-party websites or services.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              VDOgate is not responsible for the privacy practices or content of such third parties.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              VDOgate may update this Privacy Policy from time to time.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Material changes will be communicated through the Platform or by other appropriate means.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Continued use of the Platform constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Section 14 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For privacy-related questions or requests, please contact:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-xl space-y-2">
              <p className="text-gray-700"><strong>VDOgate is operated by TalentGlow LLP</strong></p>
              <p className="text-gray-700"><strong>Email:</strong>{' '}
                <a href="mailto:support@vdogate.com" className="text-purple-600 hover:text-purple-700">
                  support@vdogate.com
                </a>
              </p>
            </div>
          </section>

          {/* Summary Box */}
          <section className="mt-16 p-8 bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy at a Glance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">What we collect</h4>
                <p className="text-gray-600 text-sm">Name, email, phone, account credentials, event details, device &amp; usage data</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">How we use it</h4>
                <p className="text-gray-600 text-sm">Service delivery, payments, compliance, security, support, platform improvement</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Who we share with</h4>
                <p className="text-gray-600 text-sm">Payment processors, hosting providers, security services, regulators (when required)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Your rights</h4>
                <p className="text-gray-600 text-sm">Access, correction, deletion of personal data (subject to legal requirements)</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} VDOgate (TalentGlow LLP). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-purple-600 font-medium"
              >
                Terms of Service
              </Link>
              <Link
                href="/"
                className="text-sm text-purple-600 hover:text-purple-700 font-medium"
              >
                Back to VDOgate
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
