"use client"

import { motion } from "framer-motion"

const activities = [
  {
    id: "01",
    title: "VDD 스터디",
    description: "AI 코딩 에이전트를 활용한 바이브 코딩 챌린지",
    date: "2025-09-20 ~ 2025-11-01"
  },
  {
    id: "02",
    title: "Fast Hackathon",
    description: "이제 개발은 ai가! 아이디어로 승부하는 해커톤",
    date: "오픈 예정"
  },
  {
    id: "03",
    title: "Tech Talk",
    description: "최신 기술 트렌드와 인사이트 공유",
    date: "오픈 예정"
  },
  {
    id: "04",
    title: "AI 워크샵",
    description: "실무에 바로 적용할 수 있는 AI 도구 체험",
    date: "오픈 예정"
  },
  {
    id: "05",
    title: "스터디 그룹",
    description: "함께 배우고 성장하는 기술 스터디",
    date: "오픈 예정"
  },
  {
    id: "06",
    title: "Coming Soon",
    description: "원하는 활동이 있다면 언제든 제안해주세요!",
    date: "오픈 예정"
  }
]

export function ActivitiesGrid() {
  return (
    <div>

      <div className="text-center space-y-6">
      <div className="text-2xl text-brand-primary mb-4">🚀</div>
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
        Early Developer Club
      </h1>
      <blockquote className="text-lg text-muted-foreground italic border-l-4 border-brand-primary pl-6 py-2 bg-brand-primary/5 rounded-r-lg">
        &ldquo;새로운 기술이 쏟아지는데, 나 뒤쳐졌나?&rdquo;
      </blockquote>
      <div className="max-w-3xl mx-auto">
        <p className="text-muted-foreground text-base leading-relaxed">
          AI가 이미 우리 삶에 깊이 자리 잡았지만, 혼자서 빠르게 변화하는 기술을 따라가기란 쉽지 않습니다.
          <br />
          <strong className="text-foreground">Early Developer Club</strong>은 새로운 기술을 함께 즐겁게 경험하고 삶에 적용하고 싶은 모임이에요.
          <br />
          개발자뿐만 아니라 자신의 분야에 기술을 도입하고 싶은 모든 분을 환영해요.
        </p>
      </div>
    </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-md border border-border bg-background text-foreground p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="font-mono text-sm text-lime-500"># {activity.id}</div>
            <div className="mt-2 font-bold text-lg">{activity.title}</div>
            <div className="mt-2 text-sm text-gray-600">{activity.description}</div>
            <div className="mt-2 text-xs text-gray-500 font-mono">{activity.date}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
