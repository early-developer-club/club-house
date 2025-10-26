"use client"

import { motion } from "framer-motion"

const aiPoems = [
  {
    title: "디지털 꿈",
    content: `코드 속에서 피어나는 꽃
0과 1의 정원에서
우리는 알고리즘의 시인
데이터의 바다를 항해하며
새로운 아름다움을 발견한다`,
    author: "AI Poet v2.1",
    participant: "참여자 1"
  },
  {
    title: "메모리 조각",
    content: `RAM 속에 저장된 추억들
캐시에서 사라지는 순간들
우리는 백업의 예술가
삭제되지 않을 사랑을
하드디스크에 새긴다`,
    author: "Neural Writer",
    participant: "참여자 2"
  },
  {
    title: "네트워크의 밤",
    content: `와이파이 신호가 춤추는 밤
패킷들이 하늘을 날아다니며
우리는 연결의 시인
고독한 서버와 대화하며
인터넷의 심장을 듣는다`,
    author: "Code Muse",
    participant: "참여자 3"
  },
  {
    title: "버그의 미학",
    content: `오류 메시지 속에 숨은 아름다움
예외 처리의 예술
우리는 디버깅의 철학자
완벽하지 않은 코드에서
인간다운 불완전함을 발견한다`,
    author: "Bug Poet",
    participant: "참여자 4"
  },
  {
    title: "클라우드 위의 시",
    content: `서버리스 함수가 노래하는 하늘
마이크로서비스의 교향곡
우리는 분산의 시인
스케일링의 춤을 추며
무한한 확장성을 꿈꾼다`,
    author: "Cloud Bard",
    participant: "참여자 5"
  },
  {
    title: "API의 사랑",
    content: `JSON으로 주고받는 마음
RESTful한 감정의 교환
우리는 엔드포인트의 연인
데이터베이스에 저장된
영원한 관계를 꿈꾼다`,
    author: "API Lyricist",
    participant: "참여자 6"
  }
]

export function AiPoems() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="mb-20"
    >
      <div className="mb-12">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-4" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
          AI Generated Literature
        </div>
        <h2 className="text-4xl font-bold leading-none mb-6 text-black" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
          AI가 창작한 디지털 시대의 시와 산문
        </h2>
        <div className="w-24 h-px bg-lime-500 mb-6"></div>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
          인공지능이 창작한 디지털 시대를 반영한 시와 산문 모음
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {aiPoems.map((poem, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            {/* 시 제목과 작가 */}
            <div className="mb-6">
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-1" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                {poem.author}
              </div>
              <h2 className="text-xl font-bold text-black mb-4" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                {poem.title}
              </h2>
            </div>

            {/* 시 내용 */}
            <div className="prose max-w-none">
              <div className="text-gray-600 leading-relaxed whitespace-pre-line text-sm" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                {poem.content}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
