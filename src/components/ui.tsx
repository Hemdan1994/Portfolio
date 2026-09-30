import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'

export function Roll({ children }: { children: ReactNode }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  )
}

const arrows = {
  'up-right': ArrowUpRight,
  right: ArrowRight,
  down: ArrowDown,
  up: ArrowUp,
}

export function ArrowSwap({
  dir = 'up-right',
  size = 24,
  className,
}: {
  dir?: keyof typeof arrows
  size?: number
  className?: string
}) {
  const Icon = arrows[dir]
  return (
    <span className={`arrow-swap ${className ?? ''}`} data-dir={dir} style={{ width: size, height: size }}>
      <Icon size={size} strokeWidth={1.5} />
      <Icon size={size} strokeWidth={1.5} aria-hidden="true" />
    </span>
  )
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xl uppercase tracking-wide text-(--text-primary)">
      <span className="size-3.5 rounded-full bg-(--text-primary)" />
      {children}
    </div>
  )
}

export function Separator() {
  return <hr className="separator origin-left border-(--border)" />
}

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="currentColor">
      <path d="M50 0c2.4 27.6 22.4 47.6 50 50-27.6 2.4-47.6 22.4-50 50C47.6 72.4 27.6 52.4 0 50 27.6 47.6 47.6 27.6 50 0Z" />
    </svg>
  )
}
