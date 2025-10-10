"use client"

import { motion } from "framer-motion"

export default function ArtistPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
          Early Artist Club
        </h1>
        <p className="text-slate-700 dark:text-slate-200" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
          흰 여백과 서체의 결을 살린 문학적인 감성의 페이지입니다.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-md border bg-white p-6">
              <div className="text-sm text-slate-500" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>chapter {i + 1}</div>
              <div className="mt-2 text-xl" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>A quiet moment</div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}


