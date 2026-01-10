"use client"

import { motion } from "framer-motion"
import { Header } from "./header"
import { Footer } from "./footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {

  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      {/* Background grid pattern */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(white 1px, transparent 1px),
            linear-gradient(90deg, white 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Gradient orbs for depth */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: "cyan",
            opacity: 0.2,
          }}
        />
        <motion.div
          animate={{
            x: [0, -200, 0],
            y: [0, 200, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{
            backgroundColor: "white",
            opacity: 0.15,
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
