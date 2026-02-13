import Image from 'next/image'

interface TrulyCleanLogoProps {
  variant?: 'icon' | 'full'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function TrulyCleanLogo({
  variant = 'icon',
  size = 'md',
  className = ''
}: TrulyCleanLogoProps) {
  const configs = {
    icon: {
      sm: { src: '/images/logo/logo-icon-40.png', w: 40, h: 40 },
      md: { src: '/images/logo/logo-icon-48.png', w: 48, h: 48 },
      lg: { src: '/images/logo/logo-icon-256.png', w: 256, h: 256 },
    },
    full: {
      sm: { src: '/images/logo/logo-full-200x60.png', w: 200, h: 60 },
      md: { src: '/images/logo/logo-full-300x90.png', w: 300, h: 90 },
      lg: { src: '/images/logo/logo-full-400x120.png', w: 400, h: 120 },
    }
  }

  const config = configs[variant][size]

  return (
    <div className={`relative ${className}`} style={{ width: config.w, height: config.h }}>
      <Image
        src={config.src}
        alt="Truly Clean Logo"
        width={config.w}
        height={config.h}
        className="object-contain"
        priority={size === 'sm' && variant === 'icon'}
      />
    </div>
  )
}
