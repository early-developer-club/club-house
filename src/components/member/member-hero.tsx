"use client"

import { motion } from "framer-motion"

export function MemberHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl lg:text-6xl tracking-tight text-black font-bitcount mb-6">
          Member
        </h1>
        <p className="text-gray-600 text-sm">
          멤버들이 AI를 활용하여 생성한 프로필 이미지입니다.
        </p>
      </div>
    </motion.section>
  )
}
