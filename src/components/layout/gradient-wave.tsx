'use client'

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

    const setCenterPosition = () => {
      mousePosRef.current = { x: width / 2, y: height / 2 }
      currentPosRef.current = { x: width / 2, y: height / 2 }
    }

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      sourceCanvas.width = width
      sourceCanvas.height = height
      generateSourceGradient()
    }

    const generateSourceGradient = () => {
      sourceCtx.fillStyle = '#000000'
      sourceCtx.fillRect(0, 0, width, height)
      const gradient = sourceCtx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0.2, '#0000FE')
      gradient.addColorStop(0.4, '#F226BB')
      gradient.addColorStop(0.5, '#FFD0F2')
      gradient.addColorStop(0.6, '#F226BB')
      gradient.addColorStop(0.8, '#0000FE')
      sourceCtx.fillStyle = gradient
      sourceCtx.fillRect(0, 0, width, height)
      sourceImageRef.current = sourceCtx.getImageData(0, 0, width, height)
    }

    setCenterPosition()
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // ... (기타 코드는 동일하며 animate 함수 내부 로직을 집중 수정합니다)

    const animate = () => {
      timeRef.current += 0.003 // 전체적인 흐름 속도
      const t = timeRef.current

      // 부드러운 값 추적
      currentPosRef.current.x += (mousePosRef.current.x - currentPosRef.current.x) * 0.05
      currentPosRef.current.y += (mousePosRef.current.y - currentPosRef.current.y) * 0.05

      // 마우스 위치에 따른 변수화 (0~1 사이)
      const mx = currentPosRef.current.x / width
      const my = currentPosRef.current.y / height

      if (!sourceImageRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      const sourceData = sourceImageRef.current.data
      const outputData = ctx.createImageData(width, height)
      const output = outputData.data
      const step = 2

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          // ▼▼▼ [핵심 로직: 복합 왜곡(Complex Distortion)] ▼▼▼

          // 1. 기본 노이즈 주파수 (마우스 X좌표에 따라 꼬임 횟수 변경)
          const freq = 0.003 + mx * 0.005

          // 2. 여러 층의 사인파를 중첩하여 '갈라지는' 느낌 생성 (Domain Warping 기초)
          const noise1 = Math.sin(x * freq + y * freq + t)
          const noise2 = Math.cos(x * freq * 1.5 - y * freq * 0.8 + t * 1.2)
          const noise3 = Math.sin(y * 0.01 + t * 0.5) // 수직으로 흐르는 큰 물결

          // 3. 마우스 Y좌표에 따라 뒤틀림의 세기 결정
          const twistStrength = 80 + my * 300

          // 4. 좌표를 비선형적으로 왜곡 (이 부분이 선을 꼬이게 만듭니다)
          // 단순한 sin이 아니라 sin 안에 다른 cos를 넣어 계산을 복잡하게 꼬았습니다.
          const offsetX = Math.sin(y * freq + noise2 + t) * twistStrength
          const offsetY = Math.cos(x * freq + noise1 + t) * twistStrength

          // 5. 샘플링 위치 계산 (경계값 처리 포함)
          let sourceX = x + offsetX + noise3 * 20
          let sourceY = y + offsetY

          sourceX = Math.min(width - 1, Math.max(0, sourceX))
          sourceY = Math.min(height - 1, Math.max(0, sourceY))

          const sourceIdx = (Math.floor(sourceY) * width + Math.floor(sourceX)) * 4

          let r = sourceData[sourceIdx]
          let g = sourceData[sourceIdx + 1]
          let b = sourceData[sourceIdx + 2]
          const a = sourceData[sourceIdx + 3]

          // Grain(노이즈)은 유지하여 질감 표현
          const noiseVal = (Math.random() - 0.5) * 25
          r += noiseVal
          g += noiseVal
          b += noiseVal

          for (let sy = 0; sy < step; sy++) {
            if (y + sy >= height) break
            const rowOffset = (y + sy) * width
            for (let sx = 0; sx < step; sx++) {
              if (x + sx >= width) break
              const destIdx = (rowOffset + (x + sx)) * 4
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
    // ...

    animate()
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
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
