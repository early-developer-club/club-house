"use client"

import { motion } from "framer-motion"

export default function DeveloperPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-lime-300 drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]">
          Early Developer Club
        </h1>
        <p className="text-muted-foreground">
          픽셀 게임 감성의 인터랙션과 레트로한 비주얼을 실험합니다.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="rounded-md border border-lime-500/30 bg-[#0b1020] text-lime-300 p-6 shadow-[0_0_0_1px_rgba(163,230,53,0.15)]"
            >
              <div className="font-mono text-sm"># {i + 1}</div>
              <div className="mt-2 font-bold">Retro Pixel Card</div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}


