"use client"

import { motion } from "framer-motion"

const activities = [
  {
    id: "01",
    title: "VDD 스터디",
    description: "AI 코딩 에이전트를 활용한 바이브 코딩 챌린지",
    status: "진행중",
    date: "2025-09-20 ~ 2025-11-01",
    participants: "11명"
  },
  {
    id: "02",
    title: "Fast Hackathon",
    description: "이제 개발은 ai가! 아이디어로 승부하는 해커톤",
    status: "오픈 예정",
    date: "TBD",
    participants: "0명"
  },
  {
    id: "03",
    title: "Tech Talk",
    description: "최신 기술 트렌드와 인사이트 공유",
    status: "오픈 예정",
    date: "TBD",
    participants: "0명"
  }
]

export function ActivitiesSection() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-black mb-6 text-center">
        현재 진행 중인 활동
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="font-mono text-sm text-lime-600">#{activity.id}</div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                activity.status === "진행중" 
                  ? "bg-lime-100 text-lime-600 border border-lime-200"
                  : "bg-gray-100 text-gray-600 border border-gray-200"
              }`}>
                {activity.status}
              </span>
            </div>

            <h3 className="text-xl font-bold text-black mb-2">
              {activity.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              {activity.description}
            </p>

            <div className="space-y-2 text-xs text-gray-500 font-mono">
              <div>기간: {activity.date}</div>
              <div>참여자: {activity.participants}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
