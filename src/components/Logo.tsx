export function TrulyCleanLogo({
  variant = 'full',
  className = ''
}: {
  variant?: 'full' | 'white' | 'icon'
  className?: string
}) {
  if (variant === 'icon') {
    return (
      <svg
        className={className}
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M25,5 L30,20 L45,25 L30,30 L25,45 L20,30 L5,25 L20,20 Z"
          fill="url(#gradient-icon)"
        />
        <defs>
          <linearGradient id="gradient-icon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  if (variant === 'white') {
    return (
      <svg
        className={className}
        viewBox="0 0 200 60"
        fill="none"
      >
        <path
          d="M20,10 L25,25 L40,30 L25,35 L20,50 L15,35 L0,30 L15,25 Z"
          fill="url(#gradient-white)"
        />
        <text
          x="50"
          y="40"
          fontFamily="Outfit, Inter, sans-serif"
          fontWeight="700"
          fontSize="20"
          fill="#FFFFFF"
        >
          TRULY CLEAN
        </text>
        <defs>
          <linearGradient id="gradient-white" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  // Default 'full' variant
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
    >
      <path
        d="M20,10 L25,25 L40,30 L25,35 L20,50 L15,35 L0,30 L15,25 Z"
        fill="url(#gradient-full)"
      />
      <text
        x="50"
        y="40"
        fontFamily="Outfit, Inter, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#0F172A"
      >
        TRULY CLEAN
      </text>
      <defs>
        <linearGradient id="gradient-full" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
      </defs>
    </svg>
  )
}
