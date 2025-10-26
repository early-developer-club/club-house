"use client"

import { motion } from "framer-motion"
import { forwardRef } from "react"

export const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div className="text-8xl lg:text-9xl xl:text-[12rem] font-extrabold tracking-tight text-black font-weight-animation font-bitcount">
        Early<br/>
        Developer<br/>
        Club
      </div>
    </motion.section>
  )
})
