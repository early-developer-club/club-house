"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

// 렌즈 왜곡 효과를 위한 SVG 필터 함수들
interface LensDistortionOptions {
  width: number
  height: number
  radius: number
  depth: number
  strength?: number
  chromaticAberration?: number
}

/**
 * 렌즈 왜곡을 위한 displacement map 생성
 * 중앙은 확대되고 가장자리는 왜곡되는 렌즈 효과를 시뮬레이션
 */
const createLensDistortionMap = ({
  width,
  height,
  radius,
  depth,
}: Omit<LensDistortionOptions, "strength" | "chromaticAberration">) => {
  const gradientStart = Math.ceil((radius / height) * 15)
  const gradientEnd = Math.floor(100 - (radius / height) * 15)
  const gradientStartX = Math.ceil((radius / width) * 15)
  const gradientEndX = Math.floor(100 - (radius / width) * 15)

  return `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="verticalGradient" x1="0" x2="0" y1="${gradientStart}%" y2="${gradientEnd}%">
          <stop offset="0%" stop-color="#0F0" />
          <stop offset="100%" stop-color="#000" />
        </linearGradient>
        <linearGradient id="horizontalGradient" x1="${gradientStartX}%" x2="${gradientEndX}%" y1="0" y2="0">
          <stop offset="0%" stop-color="#F00" />
          <stop offset="100%" stop-color="#000" />
        </linearGradient>
      </defs>
      
      <rect width="${width}" height="${height}" fill="#808080" />
      <g filter="blur(2px)">
        <rect width="${width}" height="${height}" fill="#000080" />
        <rect width="${width}" height="${height}" fill="url(#verticalGradient)" style="mix-blend-mode: screen" />
        <rect width="${width}" height="${height}" fill="url(#horizontalGradient)" style="mix-blend-mode: screen" />
      </g>
    </svg>
  `)}`
}

/**
 * 렌즈 왜곡 효과를 위한 SVG 필터 생성
 * 색수차 효과와 함께 실제 화면 왜곡을 구현
 */
const createLensDistortionFilter = ({
  width,
  height,
  radius,
  depth,
  strength = 100,
  chromaticAberration = 0,
}: LensDistortionOptions) => {
  const distortionMap = createLensDistortionMap({ width, height, radius, depth })
  
  return `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="lensDistortion" color-interpolation-filters="sRGB">
          <feImage href="${distortionMap}" result="distortionMap" />
          
          <!-- Red channel distortion -->
          <feDisplacementMap
            in="SourceGraphic"
            in2="distortionMap"
            scale="${strength + chromaticAberration * 2}"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            result="redChannel"
          />
          
          <!-- Green channel distortion -->
          <feDisplacementMap
            in="SourceGraphic"
            in2="distortionMap"
            scale="${strength + chromaticAberration}"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
            result="greenChannel"
          />
          
          <!-- Blue channel distortion -->
          <feDisplacementMap
            in="SourceGraphic"
            in2="distortionMap"
            scale="${strength}"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"
            result="blueChannel"
          />
          
          <!-- Combine channels with chromatic aberration -->
          <feBlend in="redChannel" in2="greenChannel" mode="screen" />
          <feBlend in2="blueChannel" mode="screen" />
        </filter>
      </defs>
    </svg>
  `)}#lensDistortion`
}

interface CustomCursorProps {
  children: React.ReactNode
}

export function CustomCursor({ children }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  const isDeveloperPage = pathname === "/"
  const isArtistPage = pathname === "/artist"
  const isDesignerPage = pathname === "/designer"

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])


  const getCursorStyle = () => {
    if (isDeveloperPage) {
      return "bg-lime-300 mix-blend-difference"
    }
    if (isArtistPage) {
      return "bg-transparent"
    }
    if (isDesignerPage) {
      return "bg-transparent"
    }
    return "bg-white/20 backdrop-blur-sm"
  }

  return (
    <>
      {children}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] ${getCursorStyle()}`}
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Artist 페이지 돋보기 효과 */}
      {isArtistPage && (
        <motion.div
          className="fixed top-0 left-0 w-50 h-50 pointer-events-none z-[99999] overflow-hidden rounded-full"
          style={{
            x: mousePosition.x - 100,
            y: mousePosition.y - 100,
          }}
          animate={{
            scale: isVisible ? 1 : 0,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        >
          <div 
            className="w-full h-full"
            style={{
              backdropFilter: `
                url('${createLensDistortionFilter({
                  width: 200,
                  height: 200,
                  radius: 20,
                  depth: 10,
                  strength: 30,
                  chromaticAberration: 4
                })}') 
                contrast(1.1)
                brightness(1.05)
              `,
              clipPath: 'circle(50% at center)',
            }}
          />
        </motion.div>
      )}

      {/* Designer 페이지 커서 */}
      {isDesignerPage && (
        <motion.div
          className="fixed top-0 left-0 w-40 h-40 pointer-events-none z-[9998]"
          style={{
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
          }}
          animate={{
            scale: isVisible ? 1 : 0,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}
        >
          <div className="w-full h-full relative">
            {/* 커서 모양 - 쨍한 파란색 */}
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24">
              <path
                d="M4 0l16 12.279-6.951 1.17 4.325 8.817-3.596 1.734-4.35-8.879-5.428 4.702z"
                fill="#0066ff"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </>
  )
}
