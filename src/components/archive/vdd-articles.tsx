"use client"

import { motion } from "framer-motion"

export function VddArticles() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="mb-20"
    >
      <div className="mb-12">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-4" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
          VDD Study Activity
        </div>
        <h2 className="text-4xl font-bold leading-none mb-6 text-black" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
          VDD 스터디 활동 산문
        </h2>
        <div className="w-24 h-px bg-lime-500 mb-6"></div>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
          2025-01-11에 진행된 VDD 스터디 활동에서 참여자들이 AI와 함께 창작한 산문들
        </p>
      </div>

      {/* 참여자 후기 섹션 */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-black mb-8 text-center" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
          참여자 후기
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <motion.a
            href="https://da-in.github.io/posts/early-developer-club-vdd-3/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50"
          >
            <div className="text-sm text-lime-600 font-mono mb-3">3주차</div>
            <div className="text-black font-medium text-sm leading-relaxed">Early Developer Club VDD 스터디 3주차 활동 기록 - 간단한 바이브 코딩 실습</div>
          </motion.a>

          <motion.a
            href="https://da-in.github.io/posts/early-developer-club-vdd-2/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50"
          >
            <div className="text-sm text-lime-600 font-mono mb-3">2주차</div>
            <div className="text-black font-medium text-sm leading-relaxed">Early Developer Club VDD 스터디 2주차 활동 기록 - 환경 세팅</div>
          </motion.a>

          <motion.a
            href="https://da-in.github.io/posts/early-developer-club-vdd-1/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50"
          >
            <div className="text-sm text-lime-600 font-mono mb-3">1주차</div>
            <div className="text-black font-medium text-sm leading-relaxed">Early Developer Club VDD 스터디 1주차 활동 기록 - Onboarding</div>
          </motion.a>

          <motion.a
            href="https://da-in.github.io/posts/early-developer-club-vdd/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-gray-50"
          >
            <div className="text-sm text-lime-600 font-mono mb-3">소개</div>
            <div className="text-black font-medium text-sm leading-relaxed">Early Developer Club과 VDD(Vibe Driven Development) 스터디</div>
          </motion.a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {[...Array(11)].map((_, i) => (
          <motion.article
            key={`vdd-${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-6">
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-1" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                Vibe Poet 참여자{i + 1}
              </div>
              <h3 className="text-lg font-bold text-black mb-4" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                산문 제목 {i + 1}
              </h3>
            </div>

            <div className="prose max-w-none">
              <div className="text-gray-600 leading-relaxed whitespace-pre-line text-sm" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                {`여기에 참여자 ${i + 1}의 산문 내용이 들어갑니다.

AI와 함께 창작한 바이브 코딩의 경험을 담은 산문으로,
개발자로서의 새로운 시각과 인사이트를 공유합니다.

이 공간은 VDD 스터디 활동에서 생성된
실제 산문으로 교체될 예정입니다.`}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
