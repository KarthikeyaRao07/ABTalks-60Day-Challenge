'use client'

import { cn } from '@/lib/utils'
import { useRef, type ReactNode, type MouseEvent } from 'react'

type MagneticButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  className?: string
  ariaLabel?: string
}

export function MagneticButton({
  children,
  href = '#',
  variant = 'primary',
  className,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null)

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.3}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
  }

  const handleRipple = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const circle = document.createElement('span')
    const diameter = Math.max(el.clientWidth, el.clientHeight)
    const rect = el.getBoundingClientRect()
    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`
    circle.style.position = 'absolute'
    circle.style.borderRadius = '9999px'
    circle.style.background = 'rgba(255,255,255,0.35)'
    circle.style.transform = 'scale(0)'
    circle.style.pointerEvents = 'none'
    circle.style.animation = 'ripple 600ms ease-out'
    el.appendChild(circle)
    setTimeout(() => circle.remove(), 600)
  }

  return (
    <a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleRipple}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-[transform,box-shadow,filter] duration-300 ease-out',
        variant === 'primary'
          ? 'bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:brightness-110'
          : 'glass text-foreground hover:bg-white/5',
        className,
      )}
    >
      {children}
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(3.2);
            opacity: 0;
          }
        }
      `}</style>
    </a>
  )
}
