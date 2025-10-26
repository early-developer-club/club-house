"use client"

import { JoinHero } from "@/components/join/join-hero"
import { BenefitsSection } from "@/components/join/benefits-section"
import { ActivitiesSection } from "@/components/join/activities-section"
import { CtaSection } from "@/components/join/cta-section"

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="w-full px-4 py-16">
        <JoinHero />
        <BenefitsSection />
        <ActivitiesSection />
        <CtaSection />
      </div>
    </div>
  )
}