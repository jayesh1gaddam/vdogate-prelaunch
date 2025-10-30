import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import type { FoundingCreator } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as FoundingCreator

    // Validate required fields
    const requiredFields = [
      'full_name',
      'email',
      'phone',
      'location',
      'profession',
      'why_vdogate',
      'current_challenges',
      'monthly_income_goal',
    ]

    for (const field of requiredFields) {
      if (!body[field as keyof FoundingCreator]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate phone format (Indian phone numbers)
    const phoneRegex = /^[6-9]\d{9}$/
    const cleanPhone = body.phone.replace(/[\s\-\(\)]/g, '')
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format. Please enter a valid 10-digit Indian mobile number' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('founding_creators')
      .select('email')
      .eq('email', body.email)
      .single()

    if (existingUser) {
      return NextResponse.json(
        { error: 'This email is already registered. Please use a different email or contact support.' },
        { status: 409 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('founding_creators')
      .insert([
        {
          full_name: body.full_name,
          email: body.email,
          phone: cleanPhone,
          location: body.location,
          profession: body.profession,
          instagram_handle: body.instagram_handle || null,
          youtube_channel: body.youtube_channel || null,
          portfolio_url: body.portfolio_url || null,
          why_vdogate: body.why_vdogate,
          current_challenges: body.current_challenges,
          monthly_income_goal: body.monthly_income_goal,
          agreed_to_terms: body.agreed_to_terms || false,
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)

      // Handle specific Supabase errors
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already registered' },
          { status: 409 }
        )
      }

      return NextResponse.json(
        { error: 'Failed to submit form. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully registered as a founding creator!',
        data,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve founding creators (for admin use)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '50')
    const offset = parseInt(searchParams.get('offset') || '0')

    const { data, error, count } = await supabase
      .from('founding_creators')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch data' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data,
      total: count,
      limit,
      offset,
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
