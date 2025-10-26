"use client"

import { motion } from "framer-motion"
import { useMousePosition } from "@/hooks/useMousePosition"
import { useElementPosition } from "@/hooks/useElementPosition"
import { useState, useEffect, RefObject } from "react"

interface FollowingRocketProps {
  heroRef: RefObject<HTMLElement>
}

export function FollowingRocket({ heroRef }: FollowingRocketProps) {
  const mousePosition = useMousePosition()
  const heroPosition = useElementPosition(heroRef)
  const [isInHeroSection, setIsInHeroSection] = useState(false)

  useEffect(() => {
    if (heroPosition) {
      // 스크롤 위치와 마우스 위치를 모두 고려
      const scrollY = window.scrollY
      const heroBottomInViewport = heroPosition.bottom - scrollY
      
      // Hero Section이 화면에 보이지 않거나, 마우스가 Hero Section 아래에 있을 때만 마우스를 따라가도록
      const isHeroVisible = heroBottomInViewport > 0
      const isMouseBelowHero = mousePosition.y > heroBottomInViewport
      const shouldFollowMouse = !isHeroVisible || isMouseBelowHero
      
      setIsInHeroSection(!shouldFollowMouse)
    }
  }, [mousePosition, heroPosition])


  return (
    <motion.div
      className="fixed text-6xl pointer-events-none z-50"
      style={{
        left: 0,
        top: 0,
      }}
      animate={{
        x: isInHeroSection ? (heroPosition?.right ?? 0) - 100 : mousePosition.x,
        y: isInHeroSection ? (heroPosition?.bottom ?? 0) - 100 : mousePosition.y,
        scale: isInHeroSection ? 2 : 1,
        opacity: 1,
      }}
      transition={{
        duration: isInHeroSection ? 0.3 : 0.8,
        ease: "easeOut"
      }}
    >
      🚀
    </motion.div>
  )
}
