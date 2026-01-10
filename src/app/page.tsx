"use client"

import { HeroSection } from "@/components/home/hero-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="w-full px-4 py-4">
        <HeroSection />
      </div>
    </div>
  )
}