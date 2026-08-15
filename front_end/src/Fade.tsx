import { useEffect, useState } from 'react'

type FadeProps = {
  show: boolean
  children: React.ReactNode
  duration?: number
  className?: string
}

export default function Fade({ show, children, duration = 300, className = '' }: FadeProps) {
  const [mounted, setMounted] = useState(show)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (show) {
      setMounted(true)
      // allow mount before triggering visible to enable transition
      requestAnimationFrame(() => setVisible(true))
    } else {
      setVisible(false)
      timeout = setTimeout(() => setMounted(false), duration)
    }
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [show, duration])

  if (!mounted) return null

  return (
    <div
      className={`fade ${visible ? 'show' : ''} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}
