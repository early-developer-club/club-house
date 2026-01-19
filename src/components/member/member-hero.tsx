"use client"

import { motion } from "framer-motion"

export function MemberHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-[40vh] flex items-center justify-center"
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl lg:text-6xl tracking-tight text-foreground font-bitcount mb-6">
          Member
        </h1>
        <p className="text-muted-foreground text-sm">
          멤버들이 AI를 활용하여 생성한 프로필 이미지입니다.
        </p>
      </div>
    </motion.section>
  )
}
