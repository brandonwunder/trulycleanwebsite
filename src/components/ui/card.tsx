/**
 * Card Component
 * Flexible, reusable card with multiple variants for premium design
 */

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const cardVariants = cva(
  'rounded-lg border transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white border-gray-200 shadow-md hover:shadow-lg',
        elevated:
          'bg-white border-gray-100 shadow-lg hover:shadow-xl hover:border-vibrant-teal/30',
        glass:
          'bg-white/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl hover:bg-white/90',
        gradient:
          'bg-gradient-to-br from-vibrant-teal/10 to-vibrant-green/10 border-vibrant-teal/20 shadow-md hover:shadow-lg hover:border-vibrant-teal/40',
        dark: 'bg-navy-dark/80 border-gray-700 text-white shadow-lg hover:shadow-xl',
        hollow: 'bg-transparent border-2 border-vibrant-teal hover:bg-vibrant-teal/5',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-1',
        scale: 'hover:scale-105',
        glow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]',
        glowGreen: 'hover:shadow-[0_0_30px_rgba(132,204,22,0.4)]',
      },
      interactive: {
        true: 'cursor-pointer',
        false: 'cursor-default',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      hover: 'lift',
      interactive: false,
    },
  }
)

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

export function Card({
  className,
  variant,
  size,
  hover,
  interactive,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({ variant, size, hover, interactive }),
        className
      )}
      {...props}
    />
  )
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div className={cn('flex flex-col space-y-1.5 mb-4', className)} {...props} />
  )
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn(
        'font-heading font-bold text-2xl text-navy-dark',
        className
      )}
      {...props}
    />
  )
}

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p className={cn('text-sm text-gray-600', className)} {...props} />
  )
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn('', className)} {...props} />
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn('flex items-center justify-between pt-4 border-t', className)}
      {...props}
    />
  )
}

// Icon card variant for feature/service cards
export interface IconCardProps
  extends Omit<CardProps, 'children'> {
  icon?: ReactNode
  title: string
  description: string
  children?: ReactNode
}

export function IconCard({
  icon,
  title,
  description,
  className,
  ...props
}: IconCardProps) {
  return (
    <Card
      className={cn('flex flex-col items-start', className)}
      {...props}
    >
      {icon && (
        <div className="mb-4 p-3 bg-vibrant-teal/10 rounded-lg">
          {icon}
        </div>
      )}
      <h3 className="font-heading font-bold text-lg text-navy-dark mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm flex-1">
        {description}
      </p>
    </Card>
  )
}
