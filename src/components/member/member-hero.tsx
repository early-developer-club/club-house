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
        <h1 className="text-4xl font-extrabold tracking-tight text-black">
          Member
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            Early AI Club에 참여하고 있는 멤버들을 만나보세요.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
