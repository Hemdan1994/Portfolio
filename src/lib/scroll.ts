import type Lenis from 'lenis'

let lenis: Lenis | null = null

export function setLenis(instance: Lenis | null) {
  lenis = instance
}

export function getLenis() {
  return lenis
}

export function scrollToTarget(target: string | number) {
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.6 })
    return
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
    return
  }
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
}

let lockedY = 0

function canScroll(el: Element, deltaY: number) {
  const style = getComputedStyle(el)
  const overflowY = style.overflowY
  if (overflowY !== 'auto' && overflowY !== 'scroll' && overflowY !== 'overlay') return false
  if (el.scrollHeight <= el.clientHeight + 1) return false
  if (deltaY < 0 && el.scrollTop <= 0) return false
  if (deltaY > 0 && el.scrollTop + el.clientHeight >= el.scrollHeight - 1) return false
  return true
}

function eventAllowedInModal(e: Event, deltaY: number) {
  let node = e.target instanceof Element ? e.target : null
  while (node && node !== document.body && node !== document.documentElement) {
    if (canScroll(node, deltaY)) return true
    node = node.parentElement
  }
  return false
}

function onWheelGuard(e: WheelEvent) {
  if (!eventAllowedInModal(e, e.deltaY)) e.preventDefault()
}

let touchStartY = 0
function onTouchStartGuard(e: TouchEvent) {
  touchStartY = e.touches[0]?.clientY ?? 0
}
function onTouchMoveGuard(e: TouchEvent) {
  const y = e.touches[0]?.clientY ?? 0
  if (!eventAllowedInModal(e, touchStartY - y)) e.preventDefault()
}

/** Freeze the page behind a modal. The modal itself can still scroll. */
export function lockPageScroll() {
  if (document.documentElement.classList.contains('modal-open')) return
  lockedY = Math.round(lenis ? lenis.scroll : window.scrollY)
  document.documentElement.classList.add('modal-open')
  document.body.style.top = `-${lockedY}px`
  lenis?.stop()
  window.addEventListener('wheel', onWheelGuard, { passive: false })
  window.addEventListener('touchstart', onTouchStartGuard, { passive: true })
  window.addEventListener('touchmove', onTouchMoveGuard, { passive: false })
}

export function unlockPageScroll() {
  if (!document.documentElement.classList.contains('modal-open')) return
  window.removeEventListener('wheel', onWheelGuard)
  window.removeEventListener('touchstart', onTouchStartGuard)
  window.removeEventListener('touchmove', onTouchMoveGuard)
  document.documentElement.classList.remove('modal-open')
  document.body.style.top = ''
  const y = lockedY
  window.scrollTo(0, y)
  requestAnimationFrame(() => {
    window.scrollTo(0, y)
    if (lenis) {
      lenis.start()
      lenis.scrollTo(y, { immediate: true })
    }
  })
}
