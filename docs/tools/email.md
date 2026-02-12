# 📧 Email Service Integration

This guide covers options for sending quote request emails to your team.

---

## Option 1: Resend ⭐ (Recommended for Startups)

**Website:** https://resend.com/

**Pros:**
- ✅ Simple, modern API
- ✅ Great documentation
- ✅ React email templates
- ✅ Generous free tier (100 emails/day)
- ✅ No credit card required for free tier

**Cons:**
- ❌ Lower volume than alternatives
- ❌ Limited features compared to SendGrid

### Setup

1. Create account at [resend.com](https://resend.com/)
2. Get your API key
3. Add to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

### Implementation

```tsx
// lib/email.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendQuoteEmail(formData: QuoteFormData) {
  try {
    const result = await resend.emails.send({
      from: 'quotes@trulyclean.com',
      to: process.env.RESEND_TO_EMAIL || 'quotes@trulyclean.com',
      subject: `New Quote Request from ${formData.fullName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service Type:</strong> ${formData.serviceType}</p>
        <p><strong>Notes:</strong> ${formData.notes || 'None'}</p>
      `
    })

    return result
  } catch (error) {
    console.error('Email error:', error)
    throw error
  }
}
```

---

## Option 2: SendGrid (Enterprise-Grade)

**Website:** https://sendgrid.com/

**Pros:**
- ✅ Reliable, industry standard
- ✅ Great documentation
- ✅ Many features and integrations
- ✅ Free tier available
- ✅ Handles high volume

**Cons:**
- ❌ More complex setup
- ❌ Older UI

### Setup

1. Create account at [sendgrid.com](https://sendgrid.com/)
2. Create API key
3. Add to `.env.local`:
```
SENDGRID_API_KEY=your_api_key_here
```

### Implementation

```tsx
// lib/email.ts
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function sendQuoteEmail(formData: QuoteFormData) {
  try {
    const msg = {
      to: process.env.SENDGRID_TO_EMAIL || 'quotes@trulyclean.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@trulyclean.com',
      subject: `New Quote Request from ${formData.fullName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service Type:</strong> ${formData.serviceType}</p>
        <p><strong>Notes:</strong> ${formData.notes || 'None'}</p>
      `
    }

    await sgMail.send(msg)
  } catch (error) {
    console.error('Email error:', error)
    throw error
  }
}
```

---

## Option 3: Nodemailer (Self-Hosted)

**Website:** https://nodemailer.com/

**Pros:**
- ✅ Free, no API needed
- ✅ Use your own email account
- ✅ Gmail, Outlook, custom SMTP

**Cons:**
- ❌ Requires SMTP setup
- ❌ Can trigger spam filters
- ❌ Gmail requires app passwords

### Setup with Gmail

1. Enable 2-factor authentication on Gmail
2. Create app password: https://myaccount.google.com/apppasswords
3. Add to `.env.local`:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-email@gmail.com
```

### Implementation

```tsx
// lib/email.ts
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_PORT === '465',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

export async function sendQuoteEmail(formData: QuoteFormData) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@trulyclean.com',
      to: process.env.EMAIL_TO || 'quotes@trulyclean.com',
      subject: `New Quote Request from ${formData.fullName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service Type:</strong> ${formData.serviceType}</p>
        <p><strong>Notes:</strong> ${formData.notes || 'None'}</p>
      `
    }

    const info = await transporter.sendMail(mailOptions)
    return info
  } catch (error) {
    console.error('Email error:', error)
    throw error
  }
}
```

---

## Using in API Endpoint

```tsx
// app/api/quote/route.ts
import { QuoteFormSchema } from '@/lib/validation'
import { sendQuoteEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = QuoteFormSchema.parse(body)

    // Send email
    await sendQuoteEmail(validatedData)

    // Also send confirmation to user
    // (Optional: send thank you email to user's email)

    return Response.json(
      { success: true, message: 'Quote request received!' },
      { status: 200 }
    )
  } catch (error) {
    return Response.json(
      { error: 'Failed to submit quote' },
      { status: 500 }
    )
  }
}
```

---

## Comparison

| Feature | Resend | SendGrid | Nodemailer |
|---------|--------|----------|-----------|
| Free Tier | 100/day | Yes | Unlimited |
| Setup Complexity | Easy | Medium | Medium |
| Cost | $20/month+ | Free-$30/month | Free |
| API Quality | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Support | Great | Good | Community |
| Reliability | High | Very High | Medium |
| Deliverability | Good | Excellent | Variable |

---

## Recommendation

- **Starting Out:** Resend (simplest, modern)
- **Growing Business:** SendGrid (reliable, scalable)
- **Quick MVP:** Nodemailer + Gmail (free, quick)

---

**Last Updated:** February 11, 2026
