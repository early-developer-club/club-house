import { useState, useEffect, useRef } from 'react'

export function useThrottle<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState<T>(value)
  const lastExecuted = useRef<number>(Date.now())

  useEffect(() => {
    const now = Date.now()
    
    if (now >= lastExecuted.current + delay) {
      lastExecuted.current = now
      setThrottledValue(value)
    } else {
      const timeoutId = setTimeout(() => {
        lastExecuted.current = Date.now()
        setThrottledValue(value)
      }, delay - (now - lastExecuted.current))

      return () => clearTimeout(timeoutId)
    }
  }, [value, delay])

  return throttledValue
}
