'use client'

import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vibrant-teal focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-vibrant-teal text-white hover:bg-vibrant-teal/90 hover:shadow-lg hover:scale-105 active:scale-95',
        secondary:
          'border-2 border-vibrant-teal text-vibrant-teal hover:bg-vibrant-teal hover:text-white active:scale-95',
        outline:
          'border-2 border-gray-300 text-gray-700 hover:border-vibrant-teal hover:text-vibrant-teal hover:bg-vibrant-teal/5 active:scale-95',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    if (asChild) {
      return (
        <button
          className={cn(buttonVariants({ variant, size }), className)}
          ref={ref}
          {...props}
        />
      )
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
