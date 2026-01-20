import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import {
  getAdminEmailHtml,
  getAdminEmailText,
  getCustomerEmailHtml,
  getCustomerEmailText
} from '@/lib/email-templates'

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

    // Email config for premium templates (BookMyShow/Zomato/District style)
    const emailConfig = {
      ticketId,
      name,
      email,
      subject,
      category,
      categoryLabel,
      categoryColor,
      priority,
      message,
      submittedAt
    }

    // Send email to admin via Resend (Premium ticket-style design)
    const { error: adminError } = await resend.emails.send({
      from: 'VDOgate Support <contact@vdogate.com>',
      to: ['admin@vdogate.com'],
      replyTo: email,
      subject: `[${ticketId}] ${categoryLabel}: ${subject}`,
      html: getAdminEmailHtml(emailConfig),
      text: getAdminEmailText(emailConfig),
    })

    if (adminError) {
      console.error('Resend admin email error:', adminError)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    // Send confirmation email to customer (Premium confirmation design)
    const { error: customerError } = await resend.emails.send({
      from: 'VDOgate <contact@vdogate.com>',
      to: [email],
      subject: `Got it! Your ticket ${ticketId}`,
      html: getCustomerEmailHtml(emailConfig),
      text: getCustomerEmailText(emailConfig),
    })

    if (customerError) {
      console.error('Resend customer email error:', customerError)
      // Don't fail the request if customer email fails, admin already received it
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
