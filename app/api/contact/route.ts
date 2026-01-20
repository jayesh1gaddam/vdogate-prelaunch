import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  subject: string
  category: string
  message: string
}

// Generate ticket ID
function generateTicketId(): string {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `VDO-${timestamp}-${random}`
}

// Get category label
function getCategoryLabel(category: string): string {
  const categories: Record<string, string> = {
    general: 'General Support',
    billing: 'Billing & Payments',
    technical: 'Technical Issue',
    event: 'Event Help',
    partnership: 'Partnership Inquiry',
    other: 'Other'
  }
  return categories[category] || category
}

// Get category color
function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    general: '#8B5CF6',
    billing: '#F97316',
    technical: '#EF4444',
    event: '#10B981',
    partnership: '#3B82F6',
    other: '#6B7280'
  }
  return colors[category] || '#8B5CF6'
}

// Get priority based on category
function getPriority(category: string): string {
  if (category === 'technical' || category === 'billing') return 'High'
  if (category === 'partnership') return 'Medium'
  return 'Normal'
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, subject, category, message } = body

    // Validation
    if (!name || !email || !subject || !category || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const ticketId = generateTicketId()
    const categoryLabel = getCategoryLabel(category)
    const categoryColor = getCategoryColor(category)
    const priority = getPriority(category)
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short'
    })

    // Professional ticket-style HTML email
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Support Ticket - ${ticketId}</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #8B5CF6 0%, #F97316 100%); padding: 32px 40px; border-radius: 16px 16px 0 0;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700;">
                      🎫 New Support Ticket
                    </h1>
                    <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                      VDOgate Contact Form Submission
                    </p>
                  </td>
                  <td align="right">
                    <div style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 8px;">
                      <span style="color: #ffffff; font-size: 12px; font-weight: 600;">TICKET ID</span>
                      <p style="margin: 4px 0 0; color: #ffffff; font-size: 16px; font-weight: 700;">${ticketId}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Ticket Body -->
          <tr>
            <td style="background-color: #ffffff; padding: 0;">

              <!-- Status Bar -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 20px 40px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td>
                          <span style="display: inline-block; padding: 6px 12px; background-color: ${categoryColor}; color: #ffffff; font-size: 12px; font-weight: 600; border-radius: 6px; text-transform: uppercase;">
                            ${categoryLabel}
                          </span>
                        </td>
                        <td align="right">
                          <span style="display: inline-block; padding: 6px 12px; background-color: ${priority === 'High' ? '#FEE2E2' : priority === 'Medium' ? '#FEF3C7' : '#E5E7EB'}; color: ${priority === 'High' ? '#DC2626' : priority === 'Medium' ? '#D97706' : '#4B5563'}; font-size: 12px; font-weight: 600; border-radius: 6px;">
                            ${priority} Priority
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Contact Info -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 30px 40px;">
                    <h2 style="margin: 0 0 20px; color: #111827; font-size: 18px; font-weight: 600;">
                      Contact Information
                    </h2>

                    <table role="presentation" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 12px 16px; background-color: #f9fafb; border-radius: 8px 8px 0 0; border-bottom: 1px solid #e5e7eb;">
                          <table role="presentation" style="width: 100%;">
                            <tr>
                              <td style="width: 100px;">
                                <span style="color: #6B7280; font-size: 13px; font-weight: 500;">Name</span>
                              </td>
                              <td>
                                <span style="color: #111827; font-size: 14px; font-weight: 600;">${name}</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                          <table role="presentation" style="width: 100%;">
                            <tr>
                              <td style="width: 100px;">
                                <span style="color: #6B7280; font-size: 13px; font-weight: 500;">Email</span>
                              </td>
                              <td>
                                <a href="mailto:${email}" style="color: #8B5CF6; font-size: 14px; font-weight: 600; text-decoration: none;">${email}</a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; background-color: #f9fafb; border-radius: 0 0 8px 8px;">
                          <table role="presentation" style="width: 100%;">
                            <tr>
                              <td style="width: 100px;">
                                <span style="color: #6B7280; font-size: 13px; font-weight: 500;">Submitted</span>
                              </td>
                              <td>
                                <span style="color: #111827; font-size: 14px;">${submittedAt}</span>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Subject & Message -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 0 40px 30px;">
                    <h2 style="margin: 0 0 12px; color: #111827; font-size: 18px; font-weight: 600;">
                      Subject
                    </h2>
                    <p style="margin: 0; padding: 16px; background-color: #f9fafb; border-radius: 8px; color: #374151; font-size: 15px; font-weight: 500;">
                      ${subject}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 0 40px 30px;">
                    <h2 style="margin: 0 0 12px; color: #111827; font-size: 18px; font-weight: 600;">
                      Message
                    </h2>
                    <div style="padding: 20px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid ${categoryColor};">
                      <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Action Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 0 40px 30px;" align="center">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)} [${ticketId}]" style="display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, #8B5CF6 0%, #F97316 100%); color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 8px;">
                      Reply to ${name.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1F2937; padding: 24px 40px; border-radius: 0 0 16px 16px;">
              <table role="presentation" style="width: 100%;">
                <tr>
                  <td>
                    <p style="margin: 0; color: #9CA3AF; font-size: 12px;">
                      This email was sent from the VDOgate contact form.
                    </p>
                    <p style="margin: 8px 0 0; color: #6B7280; font-size: 11px;">
                      Ticket ID: ${ticketId} • ${submittedAt}
                    </p>
                  </td>
                  <td align="right">
                    <a href="https://vdogate.com" style="color: #8B5CF6; font-size: 12px; font-weight: 500; text-decoration: none;">
                      vdogate.com
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

    // Plain text version
    const emailText = `
NEW SUPPORT TICKET - ${ticketId}
================================

Category: ${categoryLabel}
Priority: ${priority}
Submitted: ${submittedAt}

CONTACT INFORMATION
-------------------
Name: ${name}
Email: ${email}

SUBJECT
-------
${subject}

MESSAGE
-------
${message}

---
This email was sent from the VDOgate contact form.
Ticket ID: ${ticketId}
`

    // Send email via Resend
    // Note: Using Resend's default domain until vdogate.com is verified
    const { data, error } = await resend.emails.send({
      from: 'VDOgate Contact <onboarding@resend.dev>',
      to: ['admin@vdogate.com'],
      replyTo: email,
      subject: `[${ticketId}] ${categoryLabel}: ${subject}`,
      html: emailHtml,
      text: emailText,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      ticketId,
      message: 'Your message has been sent successfully!'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
