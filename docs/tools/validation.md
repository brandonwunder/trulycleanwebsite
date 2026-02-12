# ✅ Zod - Form Validation

**Purpose:** Type-safe schema validation for forms

**Install:** Already in package.json (`zod`)

**Documentation:** [Zod](https://zod.dev/)

---

## Quote Form Validation Schema

### Complete Schema Example

```tsx
import { z } from 'zod'

export const QuoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' }),

  email: z
    .string()
    .email({ message: 'Please enter a valid email address' }),

  phone: z
    .string()
    .regex(/^[\d\-\+\(\)\s]+$/, { message: 'Please enter a valid phone number' })
    .min(10, { message: 'Phone must be at least 10 digits' }),

  serviceType: z
    .enum(['residential', 'commercial'], {
      errorMap: () => ({ message: 'Please select a service type' })
    }),

  notes: z
    .string()
    .max(500, { message: 'Notes must be less than 500 characters' })
    .optional()
})

// TypeScript type from schema
export type QuoteFormData = z.infer<typeof QuoteFormSchema>
```

---

## Using with React Hook Form

### Form Component with Validation

```tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { QuoteFormSchema, type QuoteFormData } from '@/lib/validation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<QuoteFormData>({
    resolver: zodResolver(QuoteFormSchema)
  })

  async function onSubmit(data: QuoteFormData) {
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        alert('Quote request submitted! We will contact you soon.')
      }
    } catch (error) {
      alert('Error submitting form. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name */}
      <div>
        <Label htmlFor="fullName">Full Name *</Label>
        <Input
          id="fullName"
          placeholder="John Doe"
          {...register('fullName')}
          className={errors.fullName ? 'border-red-500' : ''}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          placeholder="(555) 123-4567"
          {...register('phone')}
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Service Type */}
      <div>
        <Label>Service Type *</Label>
        <div className="space-y-2 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="residential"
              {...register('serviceType')}
              className="mr-2"
            />
            Residential Cleaning
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="commercial"
              {...register('serviceType')}
              className="mr-2"
            />
            Commercial Cleaning
          </label>
        </div>
        {errors.serviceType && (
          <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
        )}
      </div>

      {/* Notes */}
      <div>
        <Label htmlFor="notes">Additional Notes (Optional)</Label>
        <Textarea
          id="notes"
          placeholder="Tell us about your cleaning needs..."
          {...register('notes')}
          className={errors.notes ? 'border-red-500' : ''}
        />
        {errors.notes && (
          <p className="text-red-500 text-sm mt-1">{errors.notes.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
      </Button>
    </form>
  )
}
```

---

## Zod Validation Types

### String Validations
```tsx
z.string()
  .min(2)                              // Minimum length
  .max(100)                            // Maximum length
  .email()                             // Email format
  .url()                               // URL format
  .regex(/^[A-Z]/,'Must start with capital')
  .trim()                              // Trim whitespace
  .toLowerCase()                       // Convert to lowercase
```

### Number Validations
```tsx
z.number()
  .min(0)                              // Minimum value
  .max(100)                            // Maximum value
  .positive()                          // Must be positive
  .int()                               // Must be integer
```

### Enum Validations
```tsx
z.enum(['residential', 'commercial'])
z.enum(['pending', 'completed', 'cancelled'])
```

### Optional Fields
```tsx
z.string().optional()                 // Optional field
z.string().nullable()                 // Can be null
z.string().default('value')           // Default value
```

---

## Error Handling

### Display Errors with React Hook Form

```tsx
{errors.fieldName && (
  <p className="text-red-500 text-sm">{errors.fieldName.message}</p>
)}
```

### Custom Error Messages

```tsx
z.string()
  .min(2, { message: 'At least 2 characters required' })
  .email({ message: 'Invalid email format' })
```

### Field-Level Error Styling

```tsx
<Input
  {...register('email')}
  className={errors.email ? 'border-red-500 border-2' : ''}
/>
```

---

## Complete Validation Flow

1. **Define Schema** (Zod)
   - ✓ What fields are required
   - ✓ What format they should be
   - ✓ Error messages

2. **Connect to Form** (React Hook Form + Zod Resolver)
   - ✓ Use `zodResolver(QuoteFormSchema)`
   - ✓ Register fields with `...register('fieldName')`

3. **Display Errors**
   - ✓ Show error messages below fields
   - ✓ Style error states
   - ✓ Clear errors when fixed

4. **Handle Submission**
   - ✓ Validation happens automatically
   - ✓ Only submit if valid
   - ✓ Send to API endpoint

---

## API Endpoint Validation

### Server-Side Validation (Safety-Critical!)

```tsx
// app/api/quote/route.ts
import { QuoteFormSchema } from '@/lib/validation'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate on server too!
    const validatedData = QuoteFormSchema.parse(body)

    // Process valid data...
    console.log('Quote received:', validatedData)

    return Response.json({ success: true }, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ errors: error.errors }, { status: 400 })
    }
    return Response.json({ error: 'Server error' }, { status: 500 })
  }
}
```

---

**Important:** Always validate on BOTH client and server. Client validation is for UX, server validation is for security!

---

**Last Updated:** February 11, 2026
