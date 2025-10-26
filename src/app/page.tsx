"use client"

import { HeroSection } from "@/components/home/hero-section"
import { FollowingRocket } from "@/components/home/following-rocket"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)

  const developerProjects = [
    {
      id: 1,
      title: "AI 코딩 어시스턴트",
      description: "VDD 스터디에서 개발한 AI와 함께하는 코딩 도구",
      tech: ["React", "OpenAI API", "TypeScript"]
    },
    {
      id: 2,
      title: "바이브 코딩 플랫폼",
      description: "음악에 맞춰 코딩하는 새로운 개발 경험을 제공하는 플랫폼",
      tech: ["Next.js", "Web Audio API", "Tailwind CSS"]
    }
  ]

  const artistPoems = [
    {
      id: 1,
      title: "코드와 꿈",
      author: "참여자 A",
      content: "if (dream == true) {\n  console.log('새로운 세상이 열린다');\n  return hope;\n}"
    }
  ]

  const designerProjects = [
    {
      id: 1,
      title: "AI 아트 컬렉션",
      description: "Midjourney와 DALL-E를 활용한 디지털 아트 작품들",
      type: "디지털 아트",
      tools: ["Midjourney", "DALL-E", "Photoshop"]
    }
  ]

  const reviews = [
    {
      id: 1,
      title: "VDD 스터디 3주차 활동 기록 - 간단한 바이브 코딩 실습",
      author: "dain",
      excerpt: "AI와 함께 코딩하는 새로운 경험을 해보았습니다. 생각보다 훨씬 자연스럽고 재미있었어요!",
      date: "2024-12-15"
    },
    {
      id: 2,
      title: "Early Developer Club과 VDD(Vibe Driven Development) 스터디",
      author: "dain",
      excerpt: "Early Developer Club에 가입하게 된 계기와 VDD 스터디에 대한 소개를 담았습니다.",
      date: "2024-12-01"
    },
    {
      id: 3,
      title: "AI 도구를 활용한 개발 경험기",
      author: "참여자 B",
      excerpt: "ChatGPT와 GitHub Copilot을 함께 사용하면서 느낀 점들을 정리했습니다.",
      date: "2024-12-20"
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="w-full px-4 py-4">
        <HeroSection ref={heroRef} />
        
        {/* Archive 섹션들 */}
        {/* Developer Club 섹션 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black font-bitcount">Early Developer Club</h2>
            <Link href="/archive/developer" className="text-blue-600 hover:text-blue-700 font-medium">
              더보기 →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {developerProjects.map((project, index) => (
              <div key={project.id} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Artist Club 섹션 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black font-bitcount">Early Artist Club</h2>
            <Link href="/archive/artist" className="text-pink-600 hover:text-pink-700 font-medium">
              더보기 →
            </Link>
          </div>
          <div className="max-w-2xl">
            {artistPoems.map((poem) => (
              <div key={poem.id} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                <h3 className="text-lg font-bold text-black mb-2">{poem.title}</h3>
                <p className="text-sm text-gray-600 mb-4">작가: {poem.author}</p>
                <div className="bg-white rounded-lg p-4 border border-pink-200">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                    {poem.content}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Designer Club 섹션 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black font-bitcount">Early Designer Club</h2>
            <Link href="/archive/designer" className="text-green-600 hover:text-green-700 font-medium">
              더보기 →
            </Link>
          </div>
          <div className="max-w-2xl">
            {designerProjects.map((project) => (
              <div key={project.id} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white text-gray-700 text-xs rounded border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Reviews 섹션 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-black font-bitcount">Reviews</h2>
            <Link href="/archive/reviews" className="text-orange-600 hover:text-orange-700 font-medium">
              더보기 →
            </Link>
          </div>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                <h3 className="text-lg font-bold text-black mb-2">{review.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{review.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>작성자: {review.author}</span>
                  <span>•</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
      <FollowingRocket heroRef={heroRef as React.RefObject<HTMLElement>} />
    </div>
  )
}