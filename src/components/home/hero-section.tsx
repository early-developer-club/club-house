"use client"

import { motion } from "framer-motion"
import { forwardRef } from "react"

export const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <div>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-6"
      >
        <div className="text-8xl lg:text-9xl xl:text-[12rem] font-extrabold tracking-tight text-foreground font-weight-animation font-bitcount">
          Early<br/>
          Developer<br/>
          Club
        </div>
      </motion.section>
      <motion.section>
        <div className="my-20 text-center">
          AI는 삶에 어떤 변화를 가져올까요?<br/>
          새로운 기술을 함께 즐겁게 경험하고 삶에 적용하고 있습니다.
        </div>
      </motion.section>
    </div>
  )
})
