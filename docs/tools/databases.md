# 🗄️ Database & Storage Options

This guide covers options for storing quote submissions.

---

## Option 1: Supabase ⭐ (Recommended)

**Website:** https://supabase.com/

**Type:** PostgreSQL database + Auth

**Pros:**
- ✅ PostgreSQL (powerful, reliable)
- ✅ Built-in authentication
- ✅ Real-time capabilities
- ✅ Generous free tier
- ✅ Great documentation
- ✅ Easy to scale

**Cons:**
- ❌ Slight learning curve
- ❌ More than just storage

### Setup

1. Create account at [supabase.com](https://supabase.com/)
2. Create new project
3. Create table for quotes:
```sql
CREATE TABLE quotes (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  service_type VARCHAR(20) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

4. Add to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Implementation

```tsx
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function saveQuote(formData: QuoteFormData) {
  const { data, error } = await supabase
    .from('quotes')
    .insert({
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      service_type: formData.serviceType,
      notes: formData.notes
    })

  if (error) throw error
  return data
}
```

---

## Option 2: Airtable (Simple Spreadsheet)

**Website:** https://airtable.com/

**Type:** Spreadsheet with API

**Pros:**
- ✅ No server needed
- ✅ Visual management in UI
- ✅ Easy to understand
- ✅ Good for small volume
- ✅ Free tier available

**Cons:**
- ❌ Less powerful than databases
- ❌ Not ideal for large scale
- ❌ Limited query options

### Setup

1. Create account at [airtable.com](https://airtable.com/)
2. Create new base (spreadsheet)
3. Create table with columns: Name, Email, Phone, Service Type, Notes
4. Get API key and base ID
5. Add to `.env.local`:
```
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=Quotes
```

### Implementation

```tsx
// lib/airtable.ts
import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID!
)

export async function saveQuote(formData: QuoteFormData) {
  return new Promise((resolve, reject) => {
    base(process.env.AIRTABLE_TABLE_NAME!).create(
      {
        'Name': formData.fullName,
        'Email': formData.email,
        'Phone': formData.phone,
        'Service Type': formData.serviceType,
        'Notes': formData.notes
      },
      (err, record) => {
        if (err) reject(err)
        else resolve(record)
      }
    )
  })
}
```

---

## Option 3: MongoDB (Document Database)

**Website:** https://mongodb.com/

**Type:** NoSQL document database

**Pros:**
- ✅ Scalable
- ✅ Flexible schema
- ✅ Fast queries
- ✅ Good for complex data

**Cons:**
- ❌ More setup
- ❌ Learning curve
- ❌ Pricing can add up

### Setup

1. Create account at [mongodb.com](https://mongodb.com/)
2. Create cluster
3. Create database and collection
4. Get connection string
5. Add to `.env.local`:
```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/database?retryWrites=true
```

### Implementation

```tsx
// lib/mongodb.ts
import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URI!)

export async function saveQuote(formData: QuoteFormData) {
  try {
    await client.connect()
    const db = client.db('truly-clean')
    const collection = db.collection('quotes')

    const result = await collection.insertOne({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      serviceType: formData.serviceType,
      notes: formData.notes,
      createdAt: new Date()
    })

    return result
  } finally {
    await client.close()
  }
}
```

---

## Using in API Endpoint

```tsx
// app/api/quote/route.ts
import { QuoteFormSchema } from '@/lib/validation'
import { saveQuote } from '@/lib/database'
import { sendQuoteEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = QuoteFormSchema.parse(body)

    // Save to database
    await saveQuote(validatedData)

    // Send email notification
    await sendQuoteEmail(validatedData)

    return Response.json(
      { success: true, message: 'Quote received!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error:', error)
    return Response.json(
      { error: 'Failed to save quote' },
      { status: 500 }
    )
  }
}
```

---

## Comparison

| Feature | Supabase | Airtable | MongoDB |
|---------|----------|----------|---------|
| Free Tier | Generous | Yes | Yes |
| Type | PostgreSQL | Spreadsheet | NoSQL |
| Scalability | High | Low-Medium | High |
| Setup | Medium | Easy | Hard |
| Learning Curve | Medium | Easy | High |
| Best For | Production | Small projects | Complex apps |
| Cost | Free-$25/month | Free-$20/month | Free-Custom |

---

## Recommendation

- **Starting Out:** Airtable (simplest, visual)
- **Production Ready:** Supabase (powerful, scalable)
- **Complex Data:** MongoDB (maximum flexibility)

---

## With Multiple Submissions

If you get many quote requests:

1. **Database** stores all submissions (historical data, analytics)
2. **Email** notifies team immediately
3. **Admin Panel** (future) shows all quotes

Example flow:
```
Form Submission → Validate → Save to DB → Send Email → Return Success
```

---

**Last Updated:** February 11, 2026
