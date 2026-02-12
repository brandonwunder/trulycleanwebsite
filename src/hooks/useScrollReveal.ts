/**
 * useScrollReveal Hook
 * Trigger animations when elements enter viewport
 */

import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'

interface UseScrollRevealOptions {
  threshold?: number | number[]
  triggerOnce?: boolean
  margin?: string
}

/**
 * Hook that triggers Framer Motion animations when element scrolls into view
 * @param threshold - Intersection observer threshold (0-1). Default: 0.1
 * @param triggerOnce - Only trigger animation once (true) or repeat (false). Default: true
 * @param margin - Intersection observer root margin (e.g. "-50px"). Default: "0px"
 */
export function useScrollReveal({
  threshold = 0.1,
  triggerOnce = true,
  margin = '0px',
}: UseScrollRevealOptions = {}) {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin: margin,
  } as any)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else if (!triggerOnce) {
      controls.start('hidden')
    }
  }, [inView, controls, triggerOnce])

  return { ref, controls, isInView: inView }
}
