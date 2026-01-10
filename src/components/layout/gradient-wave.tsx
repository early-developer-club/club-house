"use client"

import { useEffect, useRef } from 'react'

export function GradientWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const timeRef = useRef(0)
  const mousePosRef = useRef({ x: 0, y: 0 })
  const currentPosRef = useRef({ x: 0, y: 0 }) 
  const sourceImageRef = useRef<ImageData | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    const sourceCanvas = document.createElement('canvas')
    const sourceCtx = sourceCanvas.getContext('2d')
    if (!sourceCtx) return

    let width = window.innerWidth
    let height = window.innerHeight
    
    // 초기 위치를 화면 중앙으로 설정하는 함수 (모바일 대응)
    const setCenterPosition = () => {
      const centerX = width / 2
      const centerY = height / 2
      mousePosRef.current = { x: centerX, y: centerY }
      currentPosRef.current = { x: centerX, y: centerY }
    }
    
    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      sourceCanvas.width = width
      sourceCanvas.height = height
      setCenterPosition() // 리사이즈 시에도 중앙 위치 유지
      generateSourceGradient()
    }
    
    // 초기 위치 설정
    setCenterPosition()

    const generateSourceGradient = () => {
      sourceCtx.fillStyle = '#000000'
      sourceCtx.fillRect(0, 0, width, height)

      const gradient = sourceCtx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0.3, '#0000FE') 
      gradient.addColorStop(0.4, '#F226BB') 
      gradient.addColorStop(0.5, '#FFD0F2') 
      gradient.addColorStop(0.6, '#F226BB') 
      gradient.addColorStop(0.7, '#0000FE') 

      sourceCtx.fillStyle = gradient
      sourceCtx.fillRect(0, 0, width, height)
      sourceImageRef.current = sourceCtx.getImageData(0, 0, width, height)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      // 속도 조절 (0.01: 천천히)
      timeRef.current += 0.005
      const t = timeRef.current

      currentPosRef.current.x += (mousePosRef.current.x - currentPosRef.current.x) * 0.1
      currentPosRef.current.y += (mousePosRef.current.y - currentPosRef.current.y) * 0.1
      
      const mx = currentPosRef.current.x
      const my = currentPosRef.current.y

      if (!sourceImageRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      const sourceData = sourceImageRef.current.data
      const outputData = ctx.createImageData(width, height)
      const output = outputData.data

      const step = 2 

      for (let y = 0; y < height; y += step) {
        const dy = y - my
        const dy2 = dy * dy

        for (let x = 0; x < width; x += step) {
          const dx = x - mx
          const distSq = dx * dx + dy2
          const dist = Math.sqrt(distSq)

          const maxRadius = 700 
          let influence = Math.max(0, 1 - dist / maxRadius)
          influence = Math.pow(influence, 2) 

          if (influence > 0.01) {
            const waveWidth = 0.015; 
            const ripple = Math.sin(dist * waveWidth - t * 1.5) 
            
            const noiseFrequency = 0.008;
            const noise = Math.sin(x * noiseFrequency + t) * Math.cos(y * noiseFrequency + t)

            const strength = 450 * influence
            
            const offsetX = (Math.cos(dist * 0.02) + noise) * strength * ripple
            const offsetY = (Math.sin(dist * 0.02) + noise) * strength * ripple

            var sourceX = x + offsetX
            var sourceY = y + offsetY
          } else {
            var sourceX = x
            var sourceY = y
          }

          sourceX = Math.min(width - 1, Math.max(0, sourceX))
          sourceY = Math.min(height - 1, Math.max(0, sourceY))
          
          const sourceIdx = (Math.floor(sourceY) * width + Math.floor(sourceX)) * 4
          
          // 원본 색상 가져오기 (let으로 변경하여 수정 가능하게 함)
          let r = sourceData[sourceIdx]
          let g = sourceData[sourceIdx + 1]
          let b = sourceData[sourceIdx + 2]
          const a = sourceData[sourceIdx + 3]

          // ▼▼▼ [추가된 부분] ▼▼▼
          // 6. 전체적인 노이즈(Grain) 추가
          // Math.random()은 0~1 사이 난수 생성. 0.5를 빼서 -0.5 ~ 0.5 범위로 만듦.
          const random = Math.random() - 0.5
          
          // 노이즈 강도 설정 (숫자가 클수록 더 거친 노이즈)
          // 30~50 정도가 적당합니다.
          const noiseIntensity = 30 
          const noiseValue = random * noiseIntensity

          // RGB 각 채널에 노이즈 값을 더함
          // (캔버스 데이터 배렬은 자동으로 0~255 범위를 벗어나지 않게 잘라줍니다)
          r += noiseValue
          g += noiseValue
          b += noiseValue
          // ▲▲▲ [추가된 부분 끝] ▲▲▲

          for (let sy = 0; sy < step; sy++) {
            if (y + sy >= height) break;
            const rowOffset = (y + sy) * width;
            for (let sx = 0; sx < step; sx++) {
              if (x + sx >= width) break;
              const destIdx = (rowOffset + (x + sx)) * 4;
              output[destIdx] = r
              output[destIdx + 1] = g
              output[destIdx + 2] = b
              output[destIdx + 3] = a
            }
          }
        }
      }

      ctx.putImageData(outputData, 0, 0)
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'black' }}
    />
  )
}