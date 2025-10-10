"use client"

import { motion } from "framer-motion"

export default function DesignerPage() {
  return (
    <div className="flex items-center justify-center w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black">
          Coming Soon
        </h1>
      </motion.div>
    </div>
  )
}


