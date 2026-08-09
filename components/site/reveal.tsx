'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** delay in ms */
  delay?: number
  /** translate direction */
  from?: 'up' | 'down' | 'left' | 'right' | 'none'
  as?: 'div' | 'li' | 'section' | 'span'
}

export function Reveal({
  children,
  className,
  delay = 0,
  from = 'up',
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const translate =
    from === 'up'
      ? 'translate-y-8'
      : from === 'down'
        ? '-translate-y-8'
        : from === 'left'
          ? 'translate-x-8'
          : from === 'right'
            ? '-translate-x-8'
            : ''

  const Comp = as as any

  return (
    <Comp
      ref={ref as any}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform',
        visible ? 'translate-x-0 translate-y-0 opacity-100' : `${translate} opacity-0`,
        className,
      )}
    >
      {children}
    </Comp>
  )
}
