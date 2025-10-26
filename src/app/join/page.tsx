"use client"

import { JoinHero } from "@/components/join/join-hero"
import { MailAlarm } from "@/components/join/mail-alarm"
import { ContactSection } from "@/components/join/contact-section"
import { RecentNotices } from "@/components/join/recent-notices"

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="w-full px-4 py-4">
        <JoinHero />
        <RecentNotices />
        <MailAlarm />
        <ContactSection />
      </div>
    </div>
  )
}