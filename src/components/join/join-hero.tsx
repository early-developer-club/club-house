"use client"

import { motion } from "framer-motion"

export function JoinHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center space-y-8"
    >
      <div className="space-y-6">
        <h1 
          className="text-4xl lg:text-6xl tracking-tight text-black font-bitcount mb-6"
          style={{ fontFamily: 'Bitcount Grid Single, monospace' }}
        >
          Join Early AI Club!
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            AI를 삶에 적용해보세요
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong className="text-black">Early AI Club</strong>에 가입하여 AI 기술을 활용한 다양한 활동에 참여해보세요.
            <br />
            스터디, 해커톤, 테크톡 등 다양한 프로그램을 통해 함께 배우고 성장할 수 있습니다.
            <br />
            지금 바로 참여 신청하고 새로운 기술의 세계로 함께 떠나요!
          </p>
        </div>
      </div>
    </motion.section>
  )
}