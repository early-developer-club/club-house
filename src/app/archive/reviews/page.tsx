"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ReviewsArchivePage() {
  const reviews = [
    {
      id: 1,
      title: "VDD 스터디 3주차 활동 기록 - 간단한 바이브 코딩 실습",
      author: "dain",
      excerpt: "AI와 함께 코딩하는 새로운 경험을 해보았습니다. 생각보다 훨씬 자연스럽고 재미있었어요!",
      date: "2024-12-15",
      readTime: "5분",
      url: "https://da-in.github.io/posts/early-developer-club-vdd-3/",
      category: "VDD 스터디"
    },
    {
      id: 2,
      title: "Early Developer Club과 VDD(Vibe Driven Development) 스터디",
      author: "dain",
      excerpt: "Early Developer Club에 가입하게 된 계기와 VDD 스터디에 대한 소개를 담았습니다.",
      date: "2024-12-01",
      readTime: "8분",
      url: "https://da-in.github.io/posts/early-developer-club-vdd/",
      category: "소개"
    },
    {
      id: 3,
      title: "AI 도구를 활용한 개발 경험기",
      author: "참여자 B",
      excerpt: "ChatGPT와 GitHub Copilot을 함께 사용하면서 느낀 점들을 정리했습니다.",
      date: "2024-12-20",
      readTime: "6분",
      url: "https://example.com/ai-dev-experience",
      category: "개발 경험"
    },
    {
      id: 4,
      title: "바이브 코딩으로 만든 첫 프로젝트",
      author: "참여자 C",
      excerpt: "음악에 맞춰 코딩하는 새로운 방식으로 만든 프로젝트 후기입니다.",
      date: "2024-12-25",
      readTime: "7분",
      url: "https://example.com/vibe-coding-project",
      category: "프로젝트"
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
            Reviews
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            참여자들의 생생한 후기와 경험담을 읽어보세요
          </p>
        </motion.div>

        {/* 후기 목록 */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <motion.article
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs rounded-full font-medium">
                        {review.category}
                      </span>
                      <span className="text-xs text-gray-500">{review.readTime} 읽기</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2 hover:text-orange-600 transition-colors">
                      <a href={review.url} target="_blank" rel="noopener noreferrer">
                        {review.title}
                      </a>
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                      {review.excerpt}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>작성자: {review.author}</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                  >
                    전체 글 보기
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
