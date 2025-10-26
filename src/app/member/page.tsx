"use client"

import { MemberHero } from "@/components/member/member-hero"
import { MembersGrid } from "@/components/member/members-grid"
import { MemberCta } from "@/components/member/member-cta"

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="w-full px-4 py-16">
        <MemberHero />
        <MembersGrid />
        <MemberCta />
      </div>
    </div>
  )
}