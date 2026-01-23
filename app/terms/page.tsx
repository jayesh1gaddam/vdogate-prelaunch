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
            Last Updated: 21st January 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">
            These Terms of Service (&quot;Terms&quot;) govern access to and use of the VDOgate platform (&quot;VDOgate&quot;, &quot;Platform&quot;), a live events technology platform operated by <strong>TalentGlow LLP</strong>, which provides technical infrastructure for creating, hosting, ticketing, and live streaming of digital events.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By registering on, accessing, or using the Platform in any manner, you acknowledge that you have read, understood, and agreed to be bound by these Terms and the Privacy Policy.
          </p>

          {/* Section 1 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Platform Role &amp; Neutrality</h2>

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
              <li><strong>Registered Users</strong> – Any individual who creates an account on the Platform.</li>
              <li><strong>Creators</strong> – Registered Users who create and host live events.</li>
              <li><strong>Attendees</strong> – Registered Users who purchase tickets for live events.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Registration &amp; Acceptance</h2>
            <p className="text-gray-700 leading-relaxed">
              Registration and acceptance of these Terms are mandatory to access the Platform.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Authentication may include email verification, third-party login, or OTP-based verification.
            </p>
          </section>

          {/* Section 3A */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3A. Minors &amp; Guardian Responsibility</h2>
            <p className="text-gray-700 leading-relaxed">
              VDOgate does not permit individuals under 18 years of age to create accounts, host events, or make payments on the Platform.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Live events may be accessed by minors only where such access is arranged, supervised, and consented to by a parent or legal guardian acting through an adult account.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Creators hosting events intended for minors are solely responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>obtaining parental or guardian consent.</li>
              <li>ensuring suitability of content; and</li>
              <li>complying with applicable child protection, education, and local laws.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <strong>Note:</strong> VDOgate does not verify parental consent and shall not be responsible for participation of minors in events hosted on the Platform.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Event Creation &amp; Pricing</h2>

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

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.3 Event Access Models</h3>
            <p className="text-gray-700 leading-relaxed">
              VDOgate supports two event access models for Creators:
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">a. Paid Ticket Events</h4>
            <p className="text-gray-700 leading-relaxed">
              Creators may host paid events by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>paying the non-refundable event creation fee (currently ₹299), and</li>
              <li>setting a ticket price for Attendees, subject to the minimum ticket price notified by the Platform.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              Ticket revenue, platform service fees, statutory deductions, and settlement shall apply as per these Terms.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">b. Free-Invite Events (Creator-Funded Access)</h4>
            <p className="text-gray-700 leading-relaxed">
              Creators may choose to host events with free access for Attendees, subject to the following:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>The Creator shall pay:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>the non-refundable event creation fee (currently ₹299); and</li>
                  <li>a per-invite access enablement fee, currently <strong>₹25 per invite</strong>, payable in advance.</li>
                </ul>
              </li>
              <li>Upon payment, VDOgate shall issue the Creator an equivalent number of event access links or invitations, which the Creator may distribute at their discretion.</li>
              <li>Attendees joining via such invitations:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>shall not be charged any ticket fee; and</li>
                  <li>shall not be treated as paying customers of the Platform.</li>
                </ul>
              </li>
              <li>The per-invite access enablement fee:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>covers platform infrastructure, streaming delivery, and access provisioning.</li>
                  <li>is non-refundable, irrespective of attendance or engagement.</li>
                  <li>does not constitute ticket revenue.</li>
                </ul>
              </li>
              <li>Platform service fees on ticket revenue do not apply to free-invite events, as no ticket revenue is collected.</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.4 Nature of Free Access</h3>
            <p className="text-gray-700 leading-relaxed">For avoidance of doubt:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>&quot;Free&quot; access refers only to the absence of a ticket price charged to Attendees.</li>
              <li>the Creator remains solely responsible for all event-related costs and obligations.</li>
              <li>Attendees accessing events via free invitations shall not have any payment-related claims against VDOgate.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Platform Service Fee (Tiered Pricing)</h2>
            <p className="text-gray-700 leading-relaxed">
              In consideration for providing live-streaming infrastructure, ticketing, payment collection, and settlement services, VDOgate shall charge a platform service fee based on the ticket price set by the Creator, as follows:
            </p>

            <div className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                <div>
                  <p className="font-semibold text-gray-800">Ticket price ₹199 or above</p>
                  <p className="text-sm text-gray-600">Creator keeps 90%</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600">10%</p>
                  <p className="text-sm text-gray-500">platform fee</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                <div>
                  <p className="font-semibold text-gray-800">Ticket price below ₹199</p>
                  <p className="text-sm text-gray-600">Creator keeps 85%</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600">15%</p>
                  <p className="text-sm text-gray-500">platform fee</p>
                </div>
              </div>
            </div>

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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payments, Taxes &amp; Settlement</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7.1 Statutory Deductions</h3>
            <p className="text-gray-700 leading-relaxed">From ticket collections, VDOgate shall deduct:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>TDS at 1%, and</li>
              <li>TCS at 1%,</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              or such other rates as mandated by applicable law.
            </p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Attendee Responsibility &amp; No Satisfaction / Knowledge Guarantee</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9A. Nature of Live Events &amp; Limited Interaction</h2>
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

          {/* Section 9B */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9B. Creator Representations &amp; Warranties</h2>
            <p className="text-gray-700 leading-relaxed p-4 bg-amber-50 rounded-xl border border-amber-200 mb-4">
              <strong>IMPORTANT:</strong> Each Creator represents, warrants, and undertakes that:
            </p>
            <ol className="list-[lower-alpha] pl-6 text-gray-700 space-y-3">
              <li>all event descriptions, titles, claims, and representations are true, accurate, and not misleading;</li>
              <li>the event will be conducted at the scheduled date and time, except where prevented by force majeure;</li>
              <li>the Creator holds all permissions, licences, consents, and approvals required for:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>content used,</li>
                  <li>guest participation,</li>
                  <li>music, visuals, recordings, or performances;</li>
                </ul>
              </li>
              <li>the event complies with all applicable laws, regulations, and professional standards;</li>
              <li>no event shall involve fraud, deception, prohibited services, or unlawful conduct.</li>
            </ol>
          </section>

          {/* Section 9C */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9C. Creator as Principal; Platform as Facilitator Only</h2>
            <p className="text-gray-700 leading-relaxed">
              For all live events hosted on the Platform:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>the Creator acts as the sole principal and service provider to Attendees.</li>
              <li>VDOgate acts only as:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>a technology provider,</li>
                  <li>payment collection facilitator, and</li>
                  <li>access enablement platform.</li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
              <strong>Nothing in these Terms shall be construed as creating:</strong> a partnership, agency, joint venture, or joint service provider relationship.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Independent Transactions &amp; Limited Attendee Claims</h2>
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
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Ticket amounts shall be refunded to affected Attendees (excluding non-recoverable payment gateway charges, if applicable).</li>
              <li>No platform service fee shall be charged.</li>
              <li>The event creation fee shall remain non-refundable to the Creator.</li>
              <li>VDOgate shall not be liable for the Creator&apos;s failure.</li>
              <li>All liability shall rest solely with the Creator.</li>
            </ol>
          </section>

          {/* Section 12 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Platform Technical Failure &amp; Remedies</h2>
            <p className="text-gray-700 leading-relaxed">
              If a paid event does not occur or is materially disrupted solely due to a verified technical failure attributable to VDOgate, then:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Attendees shall receive full refunds of ticket amounts paid.</li>
              <li>No platform service fee shall be charged.</li>
              <li>The Creator shall be granted one complimentary event creation credit or equivalent platform credit, in lieu of cash refund.</li>
              <li>VDOgate&apos;s liability shall be strictly limited to the remedies stated above.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              Failures caused by Creator devices, internet connectivity, software, or third-party tools are excluded.
            </p>
          </section>

          {/* Section 13 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Chargebacks, Post-Settlement Disputes &amp; Recovery</h2>
            <p className="text-gray-700 leading-relaxed">
              If any chargeback, reversal, or payment dispute is raised after settlement to the Creator:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
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
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              This obligation survives settlement, suspension, and termination.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              VDOgate&apos;s records shall be conclusive evidence.
            </p>
          </section>

          {/* Section 14 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Content Rights &amp; Indemnity</h2>
            <p className="text-gray-700 leading-relaxed">
              The Creator shall fully indemnify, defend, and hold harmless VDOgate, its directors, officers, employees, and partners from any claims, losses, liabilities, penalties, costs, or expenses arising from:
            </p>
            <ol className="list-[lower-alpha] pl-6 text-gray-700 space-y-2">
              <li>intellectual property infringement;</li>
              <li>unauthorised content or third-party rights violations;</li>
              <li>misrepresentation, false promises, or misleading event descriptions;</li>
              <li>failure to conduct or complete the event as described;</li>
              <li>violation of applicable laws or regulations;</li>
              <li>chargebacks, refunds, penalties, or regulatory actions attributable to the Creator.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              This indemnity applies regardless of whether a claim is raised by an Attendee, authority, or third party.
            </p>
          </section>

          {/* Section 15 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Limitation &amp; Cap of Liability</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Survival of Creator Obligations</h2>
            <p className="text-gray-700 leading-relaxed">
              The following obligations shall survive termination, suspension, or account deletion:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>indemnity obligations.</li>
              <li>chargeback and recovery obligations.</li>
              <li>IP-related claims.</li>
              <li>regulatory or legal claims arising from past events.</li>
              <li>governing law and jurisdiction.</li>
            </ul>
          </section>

          {/* Section 19 */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Governing Law &amp; Jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of India.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              All disputes are subject exclusively to the jurisdiction of courts in Mumbai, Maharashtra.
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
            <p className="text-gray-700 mb-2">
              <strong>VDOgate is operated by TalentGlow LLP</strong>
            </p>
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
              &copy; {new Date().getFullYear()} VDOgate (TalentGlow LLP). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-purple-600 font-medium"
              >
                Privacy Policy
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
