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
    .or(z.literal('')),
})

export type QuoteFormData = z.infer<typeof QuoteFormSchema>
