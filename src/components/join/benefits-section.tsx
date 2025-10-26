"use client"

import { motion } from "framer-motion"

const benefits = [
  {
    icon: "🚀",
    title: "혁신적인 학습",
    description: "최신 AI 기술을 직접 체험하고 실무에 적용할 수 있는 기회를 제공합니다."
  },
  {
    icon: "🤝",
    title: "협업과 네트워킹",
    description: "다양한 배경의 개발자들과 함께 프로젝트를 진행하며 네트워크를 확장합니다."
  },
  {
    icon: "💡",
    title: "실무 경험",
    description: "이론을 넘어 실제 프로젝트를 통해 실무 경험을 쌓을 수 있습니다."
  }
]

export function BenefitsSection() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="text-3xl mb-4">{benefit.icon}</div>
          <h3 className="text-xl font-semibold text-black mb-2">{benefit.title}</h3>
          <p className="text-gray-600 text-sm">{benefit.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
