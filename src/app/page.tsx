"use client"

import { HeroSection } from "@/components/home/hero-section"
import { JoinHero } from "@/components/join/join-hero"
import { ActivitySchedule } from "@/components/join/activity-schedule"
import { DiscordCommunity } from "@/components/join/discord-community"
import { ContactSection } from "@/components/join/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground">
      <div className="w-full px-4 py-4">
        <HeroSection />
        <JoinHero />
        <ActivitySchedule />
        <DiscordCommunity />
        <ContactSection />
      </div>
    </div>
  )
}