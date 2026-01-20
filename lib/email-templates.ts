// Premium Email Templates - Inspired by BookMyShow, Zomato, District
// Clean, minimal, brand-focused design with excellent mobile responsiveness

interface EmailConfig {
  ticketId: string
  name: string
  email: string
  subject: string
  category: string
  categoryLabel: string
  categoryColor: string
  priority: string
  message: string
  submittedAt: string
}

// Brand colors
const BRAND = {
  primary: '#8B5CF6',      // VDOgate Purple
  secondary: '#F97316',    // VDOgate Orange
  dark: '#0F0F0F',         // Near black (like Zomato/District)
  light: '#FFFFFF',
  gray: '#6B7280',
  lightGray: '#F5F5F7',    // Apple-like light gray
  success: '#22C55E',
  border: '#E5E5E5',
}

// Admin notification email (BookMyShow ticket style)
export function getAdminEmailHtml(config: EmailConfig): string {
  const { ticketId, name, email, subject, category, categoryLabel, categoryColor, priority, message, submittedAt } = config

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Support Ticket ${ticketId}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: ${BRAND.lightGray}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased;">

  <!-- Preheader text (hidden) -->
  <div style="display: none; max-height: 0; overflow: hidden;">
    New support ticket from ${name} - ${categoryLabel}: ${subject}
  </div>

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: ${BRAND.lightGray};">
    <tr>
      <td align="center" style="padding: 32px 16px;">

        <!-- Main Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 480px; background-color: ${BRAND.light}; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header with Logo -->
          <tr>
            <td style="background-color: ${BRAND.dark}; padding: 24px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <img src="https://vdogate.com/vdogate_logo_white.png" alt="VDOgate" height="28" style="display: block; height: 28px; width: auto;" />
                  </td>
                  <td align="right">
                    <span style="color: ${BRAND.gray}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Support</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Ticket Header Strip -->
          <tr>
            <td style="background: linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.secondary} 100%); padding: 20px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <p style="margin: 0 0 4px; color: rgba(255,255,255,0.7); font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Ticket ID</p>
                    <p style="margin: 0; color: ${BRAND.light}; font-size: 18px; font-weight: 700; font-family: 'SF Mono', Monaco, 'Courier New', monospace;">${ticketId}</p>
                  </td>
                  <td align="right" valign="top">
                    <span style="display: inline-block; padding: 6px 12px; background-color: rgba(255,255,255,0.2); color: ${BRAND.light}; font-size: 11px; font-weight: 600; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">
                      ${priority} Priority
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact Card -->
          <tr>
            <td style="padding: 32px;">

              <!-- From Section -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 12px; color: ${BRAND.gray}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">From</p>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle;">
                          <!-- Avatar Circle -->
                          <div style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.secondary} 100%); display: inline-block; text-align: center; line-height: 48px;">
                            <span style="color: ${BRAND.light}; font-size: 18px; font-weight: 600;">${name.charAt(0).toUpperCase()}</span>
                          </div>
                        </td>
                        <td style="padding-left: 16px; vertical-align: middle;">
                          <p style="margin: 0 0 2px; color: ${BRAND.dark}; font-size: 16px; font-weight: 600;">${name}</p>
                          <a href="mailto:${email}" style="color: ${BRAND.primary}; font-size: 14px; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="height: 1px; background-color: ${BRAND.border}; margin: 24px 0;"></div>

              <!-- Category & Time -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td width="50%">
                    <p style="margin: 0 0 8px; color: ${BRAND.gray}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Category</p>
                    <span style="display: inline-block; padding: 8px 14px; background-color: ${categoryColor}; color: ${BRAND.light}; font-size: 12px; font-weight: 600; border-radius: 6px;">
                      ${categoryLabel}
                    </span>
                  </td>
                  <td width="50%" align="right">
                    <p style="margin: 0 0 8px; color: ${BRAND.gray}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Received</p>
                    <p style="margin: 0; color: ${BRAND.dark}; font-size: 13px;">${submittedAt}</p>
                  </td>
                </tr>
              </table>

              <!-- Subject -->
              <div style="margin-bottom: 24px;">
                <p style="margin: 0 0 8px; color: ${BRAND.gray}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Subject</p>
                <p style="margin: 0; color: ${BRAND.dark}; font-size: 16px; font-weight: 600; line-height: 1.4;">${subject}</p>
              </div>

              <!-- Message -->
              <div style="margin-bottom: 32px;">
                <p style="margin: 0 0 12px; color: ${BRAND.gray}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Message</p>
                <div style="padding: 20px; background-color: ${BRAND.lightGray}; border-radius: 12px; border-left: 3px solid ${categoryColor};">
                  <p style="margin: 0; color: ${BRAND.dark}; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- Reply Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)} [${ticketId}]" style="display: inline-block; padding: 16px 48px; background-color: ${BRAND.dark}; color: ${BRAND.light}; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 50px; letter-spacing: 0.3px;">
                      Reply to ${name.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: ${BRAND.lightGray}; padding: 24px 32px; border-top: 1px solid ${BRAND.border};">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <p style="margin: 0; color: ${BRAND.gray}; font-size: 12px;">VDOgate Support System</p>
                  </td>
                  <td align="right">
                    <a href="https://vdogate.com" style="color: ${BRAND.primary}; font-size: 12px; text-decoration: none; font-weight: 500;">vdogate.com</a>
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
}

// Customer confirmation email (Zomato/District style - clean, minimal, friendly)
export function getCustomerEmailHtml(config: EmailConfig): string {
  const { ticketId, name, subject, categoryLabel, categoryColor, message, submittedAt } = config
  const firstName = name.split(' ')[0]

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>We've got your message!</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: ${BRAND.lightGray}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased;">

  <!-- Preheader text (hidden) -->
  <div style="display: none; max-height: 0; overflow: hidden;">
    Thanks for reaching out! Your ticket ${ticketId} has been created.
  </div>

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: ${BRAND.lightGray};">
    <tr>
      <td align="center" style="padding: 32px 16px;">

        <!-- Main Container -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 480px; background-color: ${BRAND.light}; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

          <!-- Logo Header -->
          <tr>
            <td align="center" style="padding: 32px 32px 0;">
              <img src="https://vdogate.com/vdogate_app_logo.png" alt="VDOgate" width="56" height="56" style="display: block; width: 56px; height: 56px; border-radius: 12px;" />
            </td>
          </tr>

          <!-- Success Icon & Title -->
          <tr>
            <td align="center" style="padding: 24px 32px 0;">
              <!-- Checkmark Circle -->
              <div style="width: 64px; height: 64px; border-radius: 50%; background-color: #ECFDF5; display: inline-block; text-align: center; line-height: 64px; margin-bottom: 20px;">
                <span style="color: ${BRAND.success}; font-size: 28px;">&#10003;</span>
              </div>
              <h1 style="margin: 0 0 8px; color: ${BRAND.dark}; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Got it!</h1>
              <p style="margin: 0; color: ${BRAND.gray}; font-size: 15px;">We've received your message</p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 32px;">

              <!-- Greeting -->
              <p style="margin: 0 0 24px; color: ${BRAND.dark}; font-size: 15px; line-height: 1.6;">
                Hey ${firstName},<br><br>
                Thanks for reaching out! Our team will review your request and get back to you within <strong>24 hours</strong>.
              </p>

              <!-- Ticket Card (BookMyShow style) -->
              <div style="background-color: ${BRAND.dark}; border-radius: 16px; overflow: hidden; margin-bottom: 24px;">

                <!-- Card Header -->
                <div style="background: linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.secondary} 100%); padding: 20px 24px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td>
                        <p style="margin: 0 0 4px; color: rgba(255,255,255,0.7); font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 600;">Your Ticket</p>
                        <p style="margin: 0; color: ${BRAND.light}; font-size: 20px; font-weight: 700; font-family: 'SF Mono', Monaco, 'Courier New', monospace; letter-spacing: 1px;">${ticketId}</p>
                      </td>
                      <td align="right" valign="top">
                        <span style="display: inline-block; padding: 6px 12px; background-color: ${categoryColor}; color: ${BRAND.light}; font-size: 10px; font-weight: 600; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">
                          ${categoryLabel}
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- Card Body -->
                <div style="padding: 24px;">

                  <!-- Subject -->
                  <div style="margin-bottom: 20px;">
                    <p style="margin: 0 0 6px; color: ${BRAND.gray}; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Subject</p>
                    <p style="margin: 0; color: ${BRAND.light}; font-size: 14px; font-weight: 500; line-height: 1.4;">${subject}</p>
                  </div>

                  <!-- Submitted -->
                  <div>
                    <p style="margin: 0 0 6px; color: ${BRAND.gray}; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Submitted</p>
                    <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 13px;">${submittedAt}</p>
                  </div>

                </div>

                <!-- Dashed Line -->
                <div style="border-top: 2px dashed rgba(255,255,255,0.1); margin: 0 24px;"></div>

                <!-- Message Preview -->
                <div style="padding: 24px;">
                  <p style="margin: 0 0 10px; color: ${BRAND.gray}; font-size: 10px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Your Message</p>
                  <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${message.length > 200 ? message.substring(0, 200) + '...' : message}</p>
                </div>

              </div>

              <!-- What's Next Section -->
              <div style="background-color: ${BRAND.lightGray}; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <p style="margin: 0 0 12px; color: ${BRAND.dark}; font-size: 13px; font-weight: 600;">What happens next?</p>
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="padding-bottom: 10px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td style="vertical-align: top; padding-right: 12px;">
                            <span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; background-color: ${BRAND.primary}; color: ${BRAND.light}; font-size: 11px; text-align: center; line-height: 20px; font-weight: 600;">1</span>
                          </td>
                          <td>
                            <p style="margin: 0; color: ${BRAND.dark}; font-size: 13px; line-height: 1.4;">Our team reviews your request</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 10px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td style="vertical-align: top; padding-right: 12px;">
                            <span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; background-color: ${BRAND.primary}; color: ${BRAND.light}; font-size: 11px; text-align: center; line-height: 20px; font-weight: 600;">2</span>
                          </td>
                          <td>
                            <p style="margin: 0; color: ${BRAND.dark}; font-size: 13px; line-height: 1.4;">We'll email you a response</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td style="vertical-align: top; padding-right: 12px;">
                            <span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; background-color: ${BRAND.primary}; color: ${BRAND.light}; font-size: 11px; text-align: center; line-height: 20px; font-weight: 600;">3</span>
                          </td>
                          <td>
                            <p style="margin: 0; color: ${BRAND.dark}; font-size: 13px; line-height: 1.4;">Reply anytime to continue the conversation</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Tip Box -->
              <div style="background-color: #FEF3C7; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px;">
                <p style="margin: 0; color: #92400E; font-size: 13px; line-height: 1.5;">
                  <strong>Pro tip:</strong> Save your ticket ID <strong>${ticketId}</strong> for future reference.
                </p>
              </div>

              <!-- CTA Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center">
                    <a href="https://vdogate.com" style="display: inline-block; padding: 16px 48px; background-color: ${BRAND.dark}; color: ${BRAND.light}; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 50px; letter-spacing: 0.3px;">
                      Explore VDOgate
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: ${BRAND.dark}; padding: 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <img src="https://vdogate.com/vdogate_logo_white.png" alt="VDOgate" height="24" style="display: block; height: 24px; width: auto;" />
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-bottom: 16px;">
                    <p style="margin: 0; color: rgba(255,255,255,0.5); font-size: 13px;">Live Events Made Simple</p>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <!-- Social Links -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding: 0 8px;">
                          <a href="https://twitter.com/vdogate" style="color: rgba(255,255,255,0.5); font-size: 12px; text-decoration: none;">Twitter</a>
                        </td>
                        <td style="color: rgba(255,255,255,0.3);">|</td>
                        <td style="padding: 0 8px;">
                          <a href="https://instagram.com/vdogate" style="color: rgba(255,255,255,0.5); font-size: 12px; text-decoration: none;">Instagram</a>
                        </td>
                        <td style="color: rgba(255,255,255,0.3);">|</td>
                        <td style="padding: 0 8px;">
                          <a href="https://linkedin.com/company/vdogate" style="color: rgba(255,255,255,0.5); font-size: 12px; text-decoration: none;">LinkedIn</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Legal Footer -->
          <tr>
            <td style="background-color: ${BRAND.lightGray}; padding: 20px 32px; border-top: 1px solid ${BRAND.border};">
              <p style="margin: 0; color: ${BRAND.gray}; font-size: 11px; line-height: 1.6; text-align: center;">
                You're receiving this email because you contacted VDOgate support.<br>
                <a href="https://vdogate.com/privacy" style="color: ${BRAND.gray}; text-decoration: underline;">Privacy Policy</a> &bull; <a href="https://vdogate.com/terms" style="color: ${BRAND.gray}; text-decoration: underline;">Terms of Service</a>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`
}

// Plain text version for admin
export function getAdminEmailText(config: EmailConfig): string {
  const { ticketId, name, email, subject, categoryLabel, priority, message, submittedAt } = config

  return `
VDOGATE SUPPORT TICKET
━━━━━━━━━━━━━━━━━━━━━━

TICKET: ${ticketId}
PRIORITY: ${priority}
CATEGORY: ${categoryLabel}

━━━━━━━━━━━━━━━━━━━━━━

FROM
${name}
${email}

RECEIVED
${submittedAt}

━━━━━━━━━━━━━━━━━━━━━━

SUBJECT
${subject}

MESSAGE
${message}

━━━━━━━━━━━━━━━━━━━━━━

Reply to this ticket: mailto:${email}?subject=Re: ${subject} [${ticketId}]

—
VDOgate Support System
https://vdogate.com
`
}

// Plain text version for customer
export function getCustomerEmailText(config: EmailConfig): string {
  const { ticketId, name, subject, categoryLabel, message, submittedAt } = config
  const firstName = name.split(' ')[0]

  return `
Hey ${firstName}!

Got it! We've received your message.

━━━━━━━━━━━━━━━━━━━━━━

YOUR TICKET: ${ticketId}
CATEGORY: ${categoryLabel}
SUBMITTED: ${submittedAt}

SUBJECT
${subject}

YOUR MESSAGE
${message}

━━━━━━━━━━━━━━━━━━━━━━

WHAT HAPPENS NEXT?

1. Our team reviews your request
2. We'll email you a response within 24 hours
3. Reply anytime to continue the conversation

Pro tip: Save your ticket ID ${ticketId} for future reference.

━━━━━━━━━━━━━━━━━━━━━━

Thanks for reaching out!

—
VDOgate
Live Events Made Simple
https://vdogate.com

Twitter: @vdogate
Instagram: @vdogate
`
}
