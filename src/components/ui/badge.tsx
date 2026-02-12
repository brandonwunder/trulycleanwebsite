/**
 * Badge Component
 * Lightweight, reusable badge for tags, labels, and status indicators
 */

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const badgeVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-200 whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: 'bg-vibrant-teal text-white hover:bg-vibrant-teal/90',
        secondary: 'bg-vibrant-green text-white hover:bg-vibrant-green/90',
        accent: 'bg-vibrant-orange text-white hover:bg-vibrant-orange/90',
        outline:
          'border-2 border-vibrant-teal text-vibrant-teal hover:bg-vibrant-teal/5',
        ghost: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        success: 'bg-green-100 text-green-700 hover:bg-green-200',
        warning: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
        error: 'bg-red-100 text-red-700 hover:bg-red-200',
        info: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      },
      size: {
        sm: 'px-2.5 py-1 text-xs rounded',
        md: 'px-3 py-1.5 text-sm rounded-md',
        lg: 'px-4 py-2 text-base rounded-lg',
      },
      shape: {
        rounded: 'rounded',
        pill: 'rounded-full',
        square: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      shape: 'pill',
    },
  }
)

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'variant'>,
    VariantProps<typeof badgeVariants> {
  icon?: ReactNode
  onClose?: () => void
}

export function Badge({
  className,
  variant,
  size,
  shape,
  icon,
  onClose,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant, size, shape }),
        'gap-2',
        className
      )}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="flex-shrink-0">{children}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-1 flex-shrink-0 hover:opacity-70 transition-opacity"
          aria-label="Remove badge"
        >
          ×
        </button>
      )}
    </div>
  )
}

// Predefined badge variants for quick use
export function BadgePrimary(props: Omit<BadgeProps, 'variant'>) {
  return <Badge variant="primary" {...props} />
}

export function BadgeSecondary(props: Omit<BadgeProps, 'variant'>) {
  return <Badge variant="secondary" {...props} />
}

export function BadgeAccent(props: Omit<BadgeProps, 'variant'>) {
  return <Badge variant="accent" {...props} />
}

export function BadgeSuccess(props: Omit<BadgeProps, 'variant'>) {
  return <Badge variant="success" {...props} />
}

export function BadgeWarning(props: Omit<BadgeProps, 'variant'>) {
  return <Badge variant="warning" {...props} />
}

export function BadgeError(props: Omit<BadgeProps, 'variant'>) {
  return <Badge variant="error" {...props} />
}
