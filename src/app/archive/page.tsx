"use client"

import { ArchiveHeader } from "@/components/archive/archive-header"
import { VddArticles } from "@/components/archive/vdd-articles"
import { AiPoems } from "@/components/archive/ai-poems"

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="w-full px-4 py-16">
        <ArchiveHeader />
        <VddArticles />
        <AiPoems />
      </div>
    </div>
  )
}