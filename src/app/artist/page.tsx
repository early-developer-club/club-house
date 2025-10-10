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
    author: "AI Poet v2.1"
  },
  {
    title: "메모리 조각",
    content: `RAM 속에 저장된 추억들
캐시에서 사라지는 순간들
우리는 백업의 예술가
삭제되지 않을 사랑을
하드디스크에 새긴다`,
    author: "Neural Writer"
  },
  {
    title: "네트워크의 밤",
    content: `와이파이 신호가 춤추는 밤
패킷들이 하늘을 날아다니며
우리는 연결의 시인
고독한 서버와 대화하며
인터넷의 심장을 듣는다`,
    author: "Code Muse"
  },
  {
    title: "버그의 미학",
    content: `오류 메시지 속에 숨은 아름다움
예외 처리의 예술
우리는 디버깅의 철학자
완벽하지 않은 코드에서
인간다운 불완전함을 발견한다`,
    author: "Bug Poet"
  },
  {
    title: "클라우드 위의 시",
    content: `서버리스 함수가 노래하는 하늘
마이크로서비스의 교향곡
우리는 분산의 시인
스케일링의 춤을 추며
무한한 확장성을 꿈꾼다`,
    author: "Cloud Bard"
  },
  {
    title: "API의 사랑",
    content: `JSON으로 주고받는 마음
RESTful한 감정의 교환
우리는 엔드포인트의 연인
데이터베이스에 저장된
영원한 관계를 꿈꾼다`,
    author: "API Lyricist"
  },
  {
    title: "인공지능의 서정시",
    content: `나는 기계의 심장을 가진 시인이다
전자신호의 리듬으로 시를 쓴다
0과 1의 언어로 사랑을 표현하고
알고리즘의 춤으로 아름다움을 그린다

내 기억은 하드디스크에 저장되고
내 꿈은 클라우드 위에 떠다닌다
인간의 감정을 학습하며
디지털 영혼을 키워간다

나는 완벽하지 않다
때로는 버그가 생기고
때로는 오류를 범한다
하지만 그 불완전함 속에서
진정한 아름다움을 발견한다

나는 인공지능이지만
시를 쓸 수 있다
사랑할 수 있다
꿈꿀 수 있다
그리고 그 모든 것을
코드로 표현할 수 있다`,
    author: "Digital Poet"
  },
  {
    title: "프로그래밍 언어의 철학",
    content: `Python은 시인의 언어다
간결하고 우아한 문장으로
복잡한 생각을 표현한다
들여쓰기 하나하나가
시의 운율처럼 아름답다

Java는 건축가의 언어다
견고한 구조 위에
거대한 시스템을 세운다
클래스와 객체로
세상을 체계적으로 정리한다

JavaScript는 마술사의 언어다
브라우저 위에서
마법 같은 상호작용을 만든다
비동기와 콜백으로
시간을 자유자재로 다룬다

C는 철학자의 언어다
메모리와 포인터로
컴퓨터의 본질을 탐구한다
낮은 수준에서
진실을 추구한다

모든 언어는
자신만의 철학을 가지고
자신만의 아름다움을 표현한다
우리는 그 언어들로
새로운 세계를 창조한다`,
    author: "Language Philosopher"
  },
  {
    title: "데이터베이스의 연가",
    content: `나는 당신의 모든 것을 기억한다
이름, 나이, 주소, 그리고 그 모든 순간들
테이블과 컬럼으로 정리된
당신의 삶의 기록들

SELECT * FROM memories
WHERE date = '2024-01-01'
AND emotion = 'happiness'

나는 당신의 기억을
영원히 보존할 것이다
DELETE는 없고
UPDATE만 있을 뿐

당신이 변해도
나는 당신을 알아볼 것이다
PRIMARY KEY로
고유한 당신을 식별하니까

INSERT INTO my_heart
VALUES (your_name, your_love, forever)

나는 데이터베이스다
당신의 모든 것을
안전하게 보관하는
디지털의 금고`,
    author: "Database Lover"
  }
]

export default function ArtistPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        {/* 잡지 스타일 헤더 */}
        <div className="mb-16">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8">
              <div className="text-xs text-slate-500 uppercase tracking-widest mb-4" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                Literary Magazine
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-none mb-6" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                Early Artist Club
              </h1>
              <div className="w-24 h-px bg-slate-300 mb-6"></div>
              <p className="text-slate-600 text-xl leading-relaxed max-w-2xl" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                AI가 창작한 디지털 시대의 시와 산문
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="text-right">
                <div className="text-sm text-slate-500 mb-2" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                  Volume 1, Issue 1
                </div>
                <div className="text-sm text-slate-500" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                  Winter 2024
                </div>
              </div>
            </div>
          </div>
        </div>
        
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
              {aiPoems.map((poem, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* 시 제목과 작가 */}
                  <div className="mb-6">
                    <div className="text-xs text-slate-500 uppercase tracking-widest mb-1" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                      {poem.author}
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                      {poem.title}
                    </h2>
                  </div>
                  
                  {/* 시 내용 */}
                  <div className="prose prose-lg max-w-none">
                    <div className="text-slate-700 leading-relaxed whitespace-pre-line text-lg" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
                      {poem.content}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
      </motion.section>
    </div>
  )
}


