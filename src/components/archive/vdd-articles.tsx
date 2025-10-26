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
