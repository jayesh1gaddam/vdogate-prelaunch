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
            Last Updated: 20th January 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">
            VDOgate (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or the &quot;Platform&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our live events platform.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using VDOgate, you agree to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use the Platform.
          </p>

          {/* Section 1 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed">
              We collect personal information that you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Register for an account</li>
              <li>Create or host live events</li>
              <li>Purchase tickets for events</li>
              <li>Contact our support team</li>
              <li>Subscribe to our newsletters</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing address</li>
              <li>Payment information (processed securely via payment gateways)</li>
              <li>PAN (for tax compliance, where applicable)</li>
              <li>Bank account details (for creator settlements)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.2 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed">
              When you access our Platform, we automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Device information (type, operating system, browser)</li>
              <li>IP address and approximate location</li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Referral source</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.3 Event-Related Information</h3>
            <p className="text-gray-700 leading-relaxed">
              For Creators, we collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Event details (title, description, schedule)</li>
              <li>Ticket pricing and availability</li>
              <li>Live stream content (during the event)</li>
              <li>Attendance and engagement metrics</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We use the collected information for the following purposes:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.1 Service Delivery</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To create and manage your account</li>
              <li>To enable event creation, ticketing, and live streaming</li>
              <li>To process payments and settlements</li>
              <li>To send event confirmations and reminders</li>
              <li>To provide customer support</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.2 Platform Improvement</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To analyse usage patterns and improve features</li>
              <li>To personalise your experience</li>
              <li>To develop new products and services</li>
              <li>To conduct research and analytics</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.3 Communication</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To send transactional emails (receipts, confirmations)</li>
              <li>To send promotional communications (with your consent)</li>
              <li>To notify you of policy changes</li>
              <li>To respond to inquiries and support requests</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2.4 Legal and Compliance</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>To comply with applicable laws and regulations</li>
              <li>To process tax deductions (TDS/TCS) as required by law</li>
              <li>To prevent fraud and ensure platform security</li>
              <li>To enforce our Terms of Service</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 With Your Consent</h3>
            <p className="text-gray-700 leading-relaxed">
              We may share information when you explicitly consent to such sharing.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Service Providers</h3>
            <p className="text-gray-700 leading-relaxed">
              We engage trusted third-party service providers to perform functions on our behalf:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Payment processors (for secure payment handling)</li>
              <li>Cloud hosting providers (for data storage)</li>
              <li>Email service providers (for communications)</li>
              <li>Analytics providers (for usage insights)</li>
              <li>Customer support tools</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.3 Event Transactions</h3>
            <p className="text-gray-700 leading-relaxed">
              When you purchase a ticket, limited information (name, email) may be shared with the event Creator for event management purposes. Creators are bound by confidentiality obligations.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.4 Legal Requirements</h3>
            <p className="text-gray-700 leading-relaxed">
              We may disclose information if required by law, court order, or government request, or to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Protect our rights, property, or safety</li>
              <li>Prevent fraud or illegal activities</li>
              <li>Comply with legal obligations</li>
              <li>Respond to lawful requests from public authorities</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.5 Business Transfers</h3>
            <p className="text-gray-700 leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, with appropriate notice provided.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Encrypted storage for sensitive data</li>
              <li>Regular security audits and assessments</li>
              <li>Access controls and authentication measures</li>
              <li>Secure payment processing through PCI-DSS compliant gateways</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but are committed to implementing reasonable safeguards.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide our services to you</li>
              <li>Comply with legal obligations (tax records: 7 years)</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain business records</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Upon account deletion request, we will delete or anonymise your personal information within 30 days, except where retention is required by law.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the following rights regarding your personal information:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.1 Access and Portability</h3>
            <p className="text-gray-700 leading-relaxed">
              You can request a copy of your personal data in a structured, machine-readable format.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.2 Correction</h3>
            <p className="text-gray-700 leading-relaxed">
              You can update or correct your account information at any time through your account settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.3 Deletion</h3>
            <p className="text-gray-700 leading-relaxed">
              You can request deletion of your account and associated personal data, subject to legal retention requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.4 Marketing Opt-Out</h3>
            <p className="text-gray-700 leading-relaxed">
              You can unsubscribe from marketing communications at any time by clicking the &quot;unsubscribe&quot; link in emails or contacting us.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6.5 Cookie Preferences</h3>
            <p className="text-gray-700 leading-relaxed">
              You can manage cookie preferences through your browser settings. Note that disabling cookies may affect Platform functionality.
            </p>

            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:privacy@vdogate.com" className="text-purple-600 hover:text-purple-700 font-medium">
                privacy@vdogate.com
              </a>
            </p>
          </section>

          {/* Section 7 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for Platform functionality (authentication, security)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand usage patterns and improve our services</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can control cookies through your browser settings. Most browsers allow you to block or delete cookies.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              VDOgate is not intended for users under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of material changes by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Posting the updated policy on our Platform</li>
              <li>Updating the &quot;Last Updated&quot; date</li>
              <li>Sending email notification for significant changes</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Your continued use of the Platform after changes constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Grievance Officer</h2>
            <p className="text-gray-700 leading-relaxed">
              In accordance with the Information Technology Act, 2000 and applicable rules, the Grievance Officer for privacy-related concerns is:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-700"><strong>Name:</strong> Grievance Officer, VDOgate</p>
              <p className="text-gray-700"><strong>Email:</strong>{' '}
                <a href="mailto:grievance@vdogate.com" className="text-purple-600 hover:text-purple-700">
                  grievance@vdogate.com
                </a>
              </p>
              <p className="text-gray-700"><strong>Response Time:</strong> Within 30 days of receipt</p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-xl space-y-2">
              <p className="text-gray-700"><strong>Email:</strong>{' '}
                <a href="mailto:privacy@vdogate.com" className="text-purple-600 hover:text-purple-700">
                  privacy@vdogate.com
                </a>
              </p>
              <p className="text-gray-700"><strong>General Support:</strong>{' '}
                <a href="mailto:support@vdogate.com" className="text-purple-600 hover:text-purple-700">
                  support@vdogate.com
                </a>
              </p>
              <p className="text-gray-700"><strong>Address:</strong> Mumbai, Maharashtra, India</p>
            </div>
          </section>

          {/* Summary Box */}
          <section className="mt-16 p-8 bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy at a Glance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">What we collect</h4>
                <p className="text-gray-600 text-sm">Account details, event data, payment info, usage analytics</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">How we use it</h4>
                <p className="text-gray-600 text-sm">Service delivery, payments, communications, platform improvement</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Who we share with</h4>
                <p className="text-gray-600 text-sm">Service providers, event creators (limited), legal authorities (when required)</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Your rights</h4>
                <p className="text-gray-600 text-sm">Access, correction, deletion, opt-out of marketing</p>
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
              &copy; {new Date().getFullYear()} VDOgate. All rights reserved.
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
