'use client'

import { HeroSection } from '@/components/home/hero-section'
import { JoinHero } from '@/components/home/join-hero'
import { ActivitySchedule } from '@/components/home/activity-schedule'
import { DiscordCommunity } from '@/components/home/discord-community'
import { ContactSection } from '@/components/home/contact-section'

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground">
      <div className="flex flex-col gap-20 w-full px-4 py-4">
        <HeroSection />
        <JoinHero />
        <ActivitySchedule />
        <DiscordCommunity />
        <ContactSection />
      </div>
    </div>
  )
}
