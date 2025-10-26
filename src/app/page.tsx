"use client"

import { HeroSection } from "@/components/home/hero-section"
import { ActivitiesGrid } from "@/components/home/activities-grid"
import { VddSection } from "@/components/home/vdd-section"
import { FollowingRocket } from "@/components/home/following-rocket"
import { useRef } from "react"

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="w-full px-4 py-4">
        <HeroSection ref={heroRef} />
        <ActivitiesGrid />
        <VddSection />
      </div>
      <FollowingRocket heroRef={heroRef as React.RefObject<HTMLElement>} />
    </div>
  )}