/**
 * Icon Component Wrapper
 * Consistent, reusable icon styling for Lucide React icons
 */

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const iconVariants = cva(
  'inline-flex items-center justify-center transition-all duration-200',
  {
    variants: {
      size: {
        xs: 'w-4 h-4',
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-10 h-10',
        '2xl': 'w-12 h-12',
      },
      color: {
        default: 'text-gray-600',
        primary: 'text-deep-teal',
        secondary: 'text-rich-violet',
        accent: 'text-light-teal',
        white: 'text-white',
        muted: 'text-gray-400',
        error: 'text-red-500',
        success: 'text-green-500',
      },
      weight: {
        normal: 'stroke-[1.5]',
        bold: 'stroke-[2]',
      },
      variant: {
        default: '',
        filled: 'fill-current',
      },
      background: {
        none: '',
        light: 'bg-gray-100 rounded-md p-1',
        primary: 'bg-deep-teal/10 rounded-md p-1',
        secondary: 'bg-rich-violet/10 rounded-md p-1',
        accent: 'bg-light-teal/10 rounded-md p-1',
        circle: 'bg-deep-teal/10 rounded-full p-2',
        circleGreen: 'bg-rich-violet/10 rounded-full p-2',
      },
      hover: {
        none: '',
        scale: 'hover:scale-110',
        colorShift: 'hover:text-deep-teal transition-colors',
        glow: 'hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]',
      },
      animated: {
        true: 'animate-bounce-subtle',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'default',
      weight: 'normal',
      variant: 'default',
      background: 'none',
      hover: 'none',
      animated: false,
    },
  }
)

export interface IconProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof iconVariants> {
  children: ReactNode
}

export function Icon({
  className,
  size,
  color,
  weight,
  variant,
  background,
  hover,
  animated,
  children,
  ...props
}: IconProps) {
  return (
    <span
      className={cn(
        iconVariants({
          size,
          color,
          weight,
          variant,
          background,
          hover,
          animated,
        }),
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
