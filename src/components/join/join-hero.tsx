"use client"

import { motion } from "framer-motion"

export function JoinHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-black">
          Join Early AI Club
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            Early AI Club에 참여하여 새로운 기술을 함께 배우고 성장해보세요.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
