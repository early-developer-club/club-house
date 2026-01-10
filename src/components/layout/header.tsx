"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { mainNav } from "@/config/navigation"
import { Logo } from "@/components/ui/logo"

export function Header() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    setMounted(true)
    // KST 기준 2026년 1월 13일 23:59:59까지 활성화
    const deadline = new Date("2026-01-13T23:59:59+09:00")
    const now = new Date()
    setIsDisabled(now > deadline)
  }, [])

  const isActive = (href: string) => mounted && pathname === href

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-black/50 border-b border-border backdrop-blur-sm"
    >
      <div className="flex px-4 items-center justify-between h-16">
        <Link href="/" className="hover:text-muted-foreground transition-colors">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {mainNav
            .filter((item) => item.title !== "Join")
            .map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  "hover:text-brand-primary",
                  isActive(item.href) 
                    ? "text-brand-primary font-semibold" 
                    : "text-white/80 font-medium"
                )}
              >
                {item.title}
              </Link>
            ))}
          <a
            href={isDisabled ? "#" : "https://forms.gle/3VfUQhWy9LrHyMPA6"}
            target={isDisabled ? undefined : "_blank"}
            rel={isDisabled ? undefined : "noopener noreferrer"}
            onClick={(e) => {
              if (isDisabled) {
                e.preventDefault()
              }
            }}
            className={cn(
              "px-4 py-2 rounded-lg shadow-sm text-[#0f172a] transition-colors",
              isDisabled && "opacity-50 cursor-not-allowed"
            )}
            style={{
              backgroundColor: isDisabled ? "var(--muted-foreground)" : "var(--brand-primary)",
            }}
            onMouseEnter={(e) => {
              if (!isDisabled) {
                e.currentTarget.style.backgroundColor = "var(--brand-primary-dark)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isDisabled) {
                e.currentTarget.style.backgroundColor = "var(--brand-primary)";
              }
            }}
          >
            참여하기(~1/13)
          </a>
        </nav>
        <div className="md:hidden">
          <button className="text-white/80">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}
