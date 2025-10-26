"use client"

import { motion } from "framer-motion"

const currentActivities = [
  {
    id: "01",
    title: "VDD (Vibe Driven Development) 스터디",
    description: "AI 코딩 에이전트를 활용한 바이브 코딩 챌린지",
    status: "진행중",
    date: "2025-09-20 ~ 2025-11-01",
    participants: "11명",
    details: "6주간 AI 코딩 에이전트를 활용한 바이브 코딩 챌린지를 진행합니다. 개발자들이 AI와 함께 새로운 방식으로 코딩을 경험하고 배워가는 혁신적인 스터디입니다."
  },
  {
    id: "02",
    title: "Fast Hackathon",
    description: "이제 개발은 AI가! 아이디어로 승부하는 해커톤",
    status: "오픈 예정",
    date: "TBD",
    participants: "0명",
    details: "AI 도구를 활용한 빠른 프로토타이핑 해커톤. 기술보다는 아이디어와 창의성으로 승부하는 새로운 형태의 해커톤입니다."
  },
]

export function CurrentActivities() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="mt-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-xl font-bold text-black mb-6">
          현재 진행 중인 활동
        </h2>
        <p className="text-gray-600">
          Early Developer Club에서 진행하고 있는 다양한 활동들을 확인해보세요
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentActivities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="font-mono text-sm text-lime-600">#{activity.id}</div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                activity.status === "진행중" 
                  ? "bg-lime-100 text-lime-600 border border-lime-200"
                  : "bg-gray-100 text-gray-600 border border-gray-200"
              }`}>
                {activity.status}
              </span>
            </div>

            <h3 className="text-xl font-bold text-black mb-3">
              {activity.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              {activity.description}
            </p>

            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              {activity.details}
            </p>

            <div className="space-y-2 text-xs text-gray-500 font-mono border-t border-gray-100 pt-4">
              <div>기간: {activity.date}</div>
              <div>참여자: {activity.participants}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
