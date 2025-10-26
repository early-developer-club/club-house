import { useState, useEffect } from 'react'
import { useThrottle } from './useThrottle'

interface MousePosition {
  x: number
  y: number
}

export function useMousePosition(throttleDelay: number = 16) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // 16ms (60fps)로 스로틀링 적용
  const throttledMousePosition = useThrottle(mousePosition, throttleDelay)

  return throttledMousePosition
}
