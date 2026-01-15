'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

export const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <div>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="min-h-[50vh] flex items-center justify-center pt-12"
      >
        <div className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-foreground font-bitcount text-center">
          Vibe
          <br />
          Coding
          <br />
          Club
        </div>
      </motion.section>
      <motion.section>
        <div className="my-20 text-center">
          가장 트렌디한 AI 커뮤니티
          <br />
          우리는 함께 학습하고 고민하며, 상상하는 모든 것에 도전합니다
        </div>
      </motion.section>
    </div>
  )
})

HeroSection.displayName = 'HeroSection'
