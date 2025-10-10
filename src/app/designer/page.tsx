"use client"

import { motion } from "framer-motion"

export default function DesignerPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h1 className="text-5xl font-extrabold tracking-tight text-orange-600">
          Early Designer Club
        </h1>
        <p className="text-orange-700/90 dark:text-orange-300/90">
          볼드한 타이포와 쨍한 오렌지 포인트로 강렬한 인상을 남깁니다.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-md border border-orange-300 bg-orange-50 p-6">
              <div className="text-sm text-orange-600">case {i + 1}</div>
              <div className="mt-2 text-xl font-black">Bold Composition</div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}


