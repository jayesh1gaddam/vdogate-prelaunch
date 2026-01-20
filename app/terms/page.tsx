import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | VDOgate Live Events',
  description: 'Terms of Service for VDOgate Live Events Platform. Read our terms and conditions for hosting and attending live events.',
}

export default function TermsOfService() {
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
            Terms of Service
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
            These Terms of Service (&quot;Terms&quot;) govern access to and use of the VDOgate platform (&quot;VDOgate&quot;, &quot;Platform&quot;), which provides technical infrastructure for creating, hosting, ticketing, and live streaming of digital events.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By registering on, accessing, or using the Platform in any manner, you acknowledge that you have read, understood, and agreed to be bound by these Terms and the Privacy Policy.
          </p>

          {/* Section 1 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Platform Role & Neutrality</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.1 Platform as Infrastructure Only</h3>
            <p className="text-gray-700 leading-relaxed">
              VDOgate operates solely as a technology infrastructure provider enabling:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>live streaming,</li>
              <li>ticketing,</li>
              <li>payment collection, and</li>
              <li>settlement facilitation.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              VDOgate does not organise, curate, promote, supervise, certify, or guarantee any event.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1.2 What VDOgate Is Not</h3>
            <p className="text-gray-700 leading-relaxed">VDOgate is not:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>an event organiser or promoter.</li>
              <li>a joint service provider with any Creator.</li>
              <li>an agent, broker, or representative of any Creator or Attendee.</li>
              <li>a guarantor of attendance, satisfaction, learning, or outcomes.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              All events are independently created and conducted by Creators.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Categories</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Registered Users</strong> - Any individual who creates an account on the Platform.</li>
              <li><strong>Creators</strong> - Registered Users who create and host live events.</li>
              <li><strong>Attendees</strong> - Registered Users who purchase tickets for live events.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Registration & Acceptance</h2>
            <p className="text-gray-700 leading-relaxed">
              Registration and acceptance of these Terms are mandatory to access the Platform. Authentication may include email verification, third-party login, or OTP-based verification.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. No Discovery or Promotion Obligation</h2>
            <p className="text-gray-700 leading-relaxed">
              VDOgate does not provide discovery, marketing, or promotion of events at its own cost.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">Creators are solely responsible for:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>promoting their events,</li>
              <li>inviting their audience or community,</li>
              <li>driving ticket sales.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Listing an event on the Platform does not imply endorsement, recommendation, or guaranteed visibility.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Event Creation & Pricing</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1 Event Creation Fee</h3>
            <p className="text-gray-700 leading-relaxed">
              Creators must pay a non-refundable event creation fee, currently <strong>₹299</strong> (exclusive of applicable taxes), or such other amount as notified from time to time.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This fee covers platform activation, infrastructure reservation, and administrative processing.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2 Ticket Pricing</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Creators independently set ticket prices.</li>
              <li>Minimum ticket price: ₹99 per hour (or such minimum as notified).</li>
              <li>VDOgate has no role in pricing decisions or commercial viability.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Platform Service Fee (Tiered Pricing)</h2>
            <p className="text-gray-700 leading-relaxed">
              In consideration for providing live-streaming infrastructure, ticketing, payment collection, and settlement services, VDOgate shall charge a platform service fee based on the ticket price set by the Creator, as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-4">
              <li><strong>a.</strong> Where the ticket price for an event is ₹199 or above, the platform service fee shall be <strong>ten percent (10%)</strong> of gross ticket revenue.</li>
              <li><strong>b.</strong> Where the ticket price for an event is below ₹199, the platform service fee shall be <strong>fifteen percent (15%)</strong> of gross ticket revenue.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-6">For avoidance of doubt:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>the applicable fee slab is determined per event based on ticket price at the time of event creation.</li>
              <li>the platform service fee is automatically deducted prior to settlement.</li>
              <li>the platform service fee is a usage fee, not a commission or brokerage.</li>
              <li>the platform service fee applies only to successfully completed events where ticket revenue is realised and not refunded.</li>
              <li>where all ticket amounts are refunded, no platform service fee shall be charged or retained.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payments, Taxes & Settlement</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7.1 Statutory Deductions</h3>
            <p className="text-gray-700 leading-relaxed">From ticket collections, VDOgate shall deduct:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>TDS at 1%, and</li>
              <li>TCS at 1%, or such other rates as mandated by applicable law.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Creators are solely responsible for their tax compliance.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7.2 Settlement Timeline</h3>
            <p className="text-gray-700 leading-relaxed">
              Net proceeds shall be settled to the Creator within <strong>seven (7) working days</strong> after successful completion of the event, subject to no valid complaints or disputes.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Attendee Responsibility & No Satisfaction / Knowledge Guarantee</h2>
            <p className="text-gray-700 leading-relaxed">
              VDOgate makes no representation or warranty that any event will:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>meet expectations,</li>
              <li>provide knowledge, learning, or outcomes,</li>
              <li>serve any professional, educational, or commercial purpose.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Each Attendee independently decides whether to purchase a ticket and attend an event.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Dissatisfaction with content, delivery style, usefulness, or knowledge gained shall not constitute service deficiency and shall not give rise to claims against VDOgate.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Event Conduct Responsibility</h2>
            <p className="text-gray-700 leading-relaxed">Creators are solely responsible for:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>accuracy, legality, and quality of event content.</li>
              <li>execution and delivery of the event.</li>
              <li>compliance with applicable laws.</li>
              <li>Attendee experience.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              VDOgate does not monitor or validate live content in real time.
            </p>
          </section>

          {/* Section 9A */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9A. Nature of Live Events & Limited Interaction</h2>
            <p className="text-gray-700 leading-relaxed">
              Live events on VDOgate are conducted as one-to-many live streams.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Attendees may be provided limited interaction features, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>text-based chat or messages; and</li>
              <li>non-verbal reactions (likes, emojis, or similar).</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">For avoidance of doubt:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>VDOgate does not provide or guarantee two-way audio or video interaction.</li>
              <li>events are not webinars, meetings, or classrooms like Zoom or Google Meet.</li>
              <li>Creators are not obligated to read, respond to, or acknowledge messages or reactions.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Absence of interaction or engagement shall not constitute a defect or grounds for refund or complaint.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Independent Transactions & Limited Attendee Claims</h2>
            <p className="text-gray-700 leading-relaxed">
              Each ticket purchase constitutes an independent transaction between the Attendee and the Creator.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">If an Attendee raises a complaint or claim:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>such claim shall be strictly limited to that Attendee&apos;s individual ticket purchase.</li>
              <li>no claim by one Attendee shall expose VDOgate or the Creator to liability for the entire ticket collection of an event.</li>
              <li>transactions of other Attendees remain unaffected.</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Event Non-Execution by Creator</h2>
            <p className="text-gray-700 leading-relaxed">
              If a paid event does not occur due to Creator absence, cancellation, or failure to conduct the event, and such failure is not attributable to the Platform, then:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Ticket amounts shall be refunded to affected Attendees (excluding non-recoverable payment gateway charges, if applicable).</li>
              <li>No platform service fee shall be charged.</li>
              <li>The event creation fee shall remain non-refundable to the Creator.</li>
              <li>VDOgate shall not be liable for the Creator&apos;s failure.</li>
              <li>All liability shall rest solely with the Creator.</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Platform Technical Failure & Remedies</h2>
            <p className="text-gray-700 leading-relaxed">
              If a paid event does not occur or is materially disrupted solely due to a verified technical failure attributable to VDOgate, then:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Attendees shall receive full refunds of ticket amounts paid.</li>
              <li>No platform service fee shall be charged.</li>
              <li>The Creator shall be granted one complimentary event creation credit or equivalent platform credit, in lieu of cash refund.</li>
              <li>VDOgate&apos;s liability shall be strictly limited to the remedies stated above.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Failures caused by Creator devices, internet connectivity, software, or third-party tools are excluded.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Chargebacks, Post-Settlement Disputes & Recovery</h2>
            <p className="text-gray-700 leading-relaxed">
              If any chargeback, reversal, or payment dispute is raised after settlement to the Creator:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>The Creator remains fully liable for the disputed amount and any penalties or fees imposed.</li>
              <li>VDOgate may recover such amounts by:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>set off against future payouts,</li>
                  <li>debiting balances,</li>
                  <li>account suspension, or</li>
                  <li>recovery as a debt due.</li>
                </ul>
              </li>
              <li>The Creator shall reimburse VDOgate within seven (7) days of demand.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This obligation survives settlement, suspension, and termination. VDOgate&apos;s records shall be conclusive evidence.
            </p>
          </section>

          {/* Section 14 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Content Rights & Indemnity</h2>
            <p className="text-gray-700 leading-relaxed">
              Creators represent and warrant that they own or lawfully control all rights required for event content.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Creators shall indemnify, defend, and hold harmless VDOgate from any claims, losses, liabilities, penalties, or expenses arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>intellectual property infringement.</li>
              <li>unauthorised or unlawful content.</li>
              <li>misleading representations.</li>
              <li>breach of these Terms.</li>
            </ul>
          </section>

          {/* Section 15 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Limitation & Cap of Liability</h2>
            <p className="text-gray-700 leading-relaxed">To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>VDOgate&apos;s aggregate liability shall not exceed the platform service fee actually received for the relevant event.</li>
              <li>where no platform service fee is earned, VDOgate&apos;s liability shall be nil.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              VDOgate shall not be liable for indirect, incidental, consequential, reputational, or economic losses.
            </p>
          </section>

          {/* Section 16 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed">
              VDOgate shall not be liable for failures caused by events beyond reasonable control, including internet outages, power failures, telecom disruptions, governmental actions, natural disasters, or cyber incidents.
            </p>
          </section>

          {/* Section 17 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. No Class or Representative Actions</h2>
            <p className="text-gray-700 leading-relaxed">
              All claims must be brought only in an individual capacity, and not as part of any class, consolidated, or representative action.
            </p>
          </section>

          {/* Section 18 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Survival</h2>
            <p className="text-gray-700 leading-relaxed">
              Clauses relating to indemnity, limitation of liability, chargebacks, governing law, jurisdiction, and platform role shall survive termination.
            </p>
          </section>

          {/* Section 19 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Governing Law & Jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of India. All disputes are subject exclusively to the jurisdiction of courts in Mumbai, Maharashtra.
            </p>
          </section>

          {/* Section 20 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">20. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms constitute the entire agreement between the parties and supersede all prior discussions, representations, or communications.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mt-16 p-8 bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:support@vdogate.com" className="text-purple-600 hover:text-purple-700 font-medium">
                support@vdogate.com
              </a>
            </p>
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
            <Link
              href="/"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium"
            >
              Back to VDOgate
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
