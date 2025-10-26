"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function DesignerArchivePage() {
  const designs = [
    {
      id: 1,
      title: "AI 아트 컬렉션",
      description: "Midjourney와 DALL-E를 활용한 디지털 아트 작품들",
      type: "디지털 아트",
      tools: ["Midjourney", "DALL-E", "Photoshop"],
      image: "/images/designs/ai-art.jpg"
    },
    {
      id: 2,
      title: "UI/UX 디자인 시스템",
      description: "AI 도구를 활용한 모던한 디자인 시스템 구축",
      type: "UI/UX",
      tools: ["Figma", "ChatGPT", "Adobe XD"],
      image: "/images/designs/ui-system.jpg"
    },
    {
      id: 3,
      title: "브랜드 아이덴티티",
      description: "AI와 함께 만든 창의적인 브랜딩 프로젝트",
      type: "브랜딩",
      tools: ["Canva AI", "Adobe Illustrator", "ChatGPT"],
      image: "/images/designs/branding.jpg"
    },
    {
      id: 4,
      title: "인포그래픽 디자인",
      description: "복잡한 데이터를 시각적으로 표현한 인포그래픽",
      type: "인포그래픽",
      tools: ["ChatGPT", "Adobe InDesign", "Canva"],
      image: "/images/designs/infographic.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="w-full px-4 py-4">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Link href="/archive" className="inline-flex items-center text-gray-600 hover:text-black mb-6 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Archive로 돌아가기
          </Link>
          <h1 className="text-4xl lg:text-6xl font-bold text-black font-bitcount mb-6">
            Early Designer Club
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            AI 도구를 활용한 창의적인 디자인 작품들을 만나보세요
          </p>
        </motion.div>

        {/* 디자인 작품들 */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {designs.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl overflow-hidden border border-green-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-20 h-20 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <p className="text-sm opacity-80">디자인 이미지</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">
                      {design.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{design.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{design.description}</p>
                  
                  {/* 사용 도구 */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">사용 도구:</p>
                    <div className="flex flex-wrap gap-2">
                      {design.tools.map((tool, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white text-gray-700 text-xs rounded border">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                    작품 보기
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
