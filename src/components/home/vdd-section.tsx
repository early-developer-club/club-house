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

      {/* 참여자 후기 섹션 */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold text-black mb-6 text-center">
          참여자 후기
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="https://da-in.github.io/posts/early-developer-club-vdd-3/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50"
          >
            <div className="text-sm text-lime-600 font-mono mb-2">3주차</div>
            <div className="text-black font-medium text-sm">Early Developer Club VDD 스터디 3주차 활동 기록 - 간단한 바이브 코딩 실습</div>
          </a>

          <a
            href="https://da-in.github.io/posts/early-developer-club-vdd-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50"
          >
            <div className="text-sm text-lime-600 font-mono mb-2">2주차</div>
            <div className="text-black font-medium text-sm">Early Developer Club VDD 스터디 2주차 활동 기록 - 환경 세팅</div>
          </a>

          <a
            href="https://da-in.github.io/posts/early-developer-club-vdd-1/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50"
          >
            <div className="text-sm text-lime-600 font-mono mb-2">1주차</div>
            <div className="text-black font-medium text-sm">Early Developer Club VDD 스터디 1주차 활동 기록 - Onboarding</div>
          </a>

          <a
            href="https://da-in.github.io/posts/early-developer-club-vdd/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50"
          >
            <div className="text-sm text-lime-600 font-mono mb-2">소개</div>
            <div className="text-black font-medium text-sm">Early Developer Club과 VDD(Vibe Driven Development) 스터디</div>
          </a>
        </div>
      </div>
    </motion.section>
  )
}
