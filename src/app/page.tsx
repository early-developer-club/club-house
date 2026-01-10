"use client"

import { HeroSection } from "@/components/home/hero-section"
import { JoinHero } from "@/components/join/join-hero"
import { RecentNotices } from "@/components/join/recent-notices"
import { DiscordCommunity } from "@/components/join/discord-community"
import { ContactSection } from "@/components/join/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="w-full px-4 py-4">
        <HeroSection />
        <JoinHero />
        <RecentNotices />
        <DiscordCommunity />
        <ContactSection />
      </div>
    </div>
  )
}