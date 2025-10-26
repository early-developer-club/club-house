"use client"

import { motion } from "framer-motion"

export function VddSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="mt-20 space-y-8"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-black drop-shadow-[0_0_8px_rgba(0,0,0,0.1)]">
          VDD (Vibe Driven Development) 스터디
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Early AI Club의 첫 활동입니다.
          <br />
          6주간 AI 코딩 에이전트를 활용한 바이브 코딩 챌린지를 진행합니다.
          <br />
          개발자들이 AI와 함께 새로운 방식으로 코딩을 경험하고 배워가는 혁신적인 스터디입니다.
        </p>
      </div>

      {/* 참여자 섹션 요약 */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-black mb-4">
          현재 참여자
        </h3>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="text-3xl font-bold text-lime-600">11</div>
          <div className="text-gray-600">명이 함께하고 있습니다</div>
        </div>
        <a
          href="/member"
          className="inline-block px-6 py-3 bg-lime-500/20 text-lime-600 border border-lime-500 rounded-lg hover:bg-lime-500/30 transition-colors"
        >
          참여자 목록 보기
        </a>
      </div>

    </motion.section>
  )
}
