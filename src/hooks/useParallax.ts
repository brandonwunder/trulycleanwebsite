/**
 * useParallax Hook
 * Creates parallax scroll effect on elements
 */

import { useScroll, useTransform, MotionValue, useMotionValueEvent } from 'framer-motion'
import { RefObject, useRef, useState, useEffect } from 'react'

interface UseParallaxOptions {
  distance?: number
  direction?: 'vertical' | 'horizontal'
  offset?: any[]
}

interface UseParallaxResult {
  value: MotionValue<number>
  isInView: boolean
}

/**
 * Hook that creates a parallax scroll effect
 * @param ref - Reference to the element to parallax
 * @param distance - How far to move (in pixels). Default: 100
 * @param direction - Direction of parallax (vertical or horizontal). Default: 'vertical'
 * @param offset - Custom scroll offset ['start', 'end']. Default: ['start end', 'end start']
 */
export function useParallax(
  ref: RefObject<HTMLElement>,
  {
    distance = 100,
    direction = 'vertical',
    offset = ['start end', 'end start'],
  }: UseParallaxOptions = {}
): UseParallaxResult {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  const [isInView, setIsInView] = useState(false)

  // Transform scroll progress to parallax distance
  const value = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'vertical' ? [-distance, distance] : [-distance, distance]
  )

  // Track when element is in view
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    setIsInView(progress > 0 && progress < 1)
  })

  return { value, isInView }
}

/**
 * Alternative hook that returns x or y directly for convenience
 */
export function useParallaxValue(
  ref: RefObject<HTMLElement>,
  distance: number = 100,
  direction: 'vertical' | 'horizontal' = 'vertical'
): MotionValue<number> {
  const { value } = useParallax(ref, { distance, direction })
  return direction === 'vertical' ? value : value
}
