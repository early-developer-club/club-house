"use client"

import { motion } from "framer-motion"

export function MemberCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="mt-16 text-center"
    >
      <h2 className="text-2xl font-bold text-black mb-4">
        함께 참여해보세요
      </h2>
      <p className="text-gray-600 mb-6">
        Early AI Club의 멤버가 되어 새로운 기술을 함께 배워보세요!
      </p>
      <button className="px-6 py-3 bg-lime-500 text-white border border-lime-500 rounded-lg hover:bg-lime-600 transition-colors">
        참여 신청하기
      </button>
    </motion.div>
  )
}
