"use client"

import { JoinHero } from "@/components/join/join-hero"
import { CurrentActivities } from "@/components/join/current-activities"
import { MailAlarm } from "@/components/join/mail-alarm"
import { ContactSection } from "@/components/join/contact-section"

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="w-full px-4 py-4">
        <JoinHero />
        <CurrentActivities />
        <MailAlarm />
        <ContactSection />
      </div>
    </div>
  )
}