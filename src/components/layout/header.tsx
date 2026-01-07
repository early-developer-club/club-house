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

  useEffect(() => {
    setMounted(true)
  }, [])

  const isActive = (href: string) => mounted && pathname === href

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-background border-b border-border"
    >
      <div className="flex px-4 items-center justify-between h-16">
        <Link href="/" className="hover:text-muted-foreground transition-colors">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {mainNav.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                item.title === "Join" 
                  ? "px-4 py-2 rounded-lg shadow-sm text-[#0f172a] transition-colors"
                  : cn(
                      "hover:text-brand-primary",
                      isActive(item.href) 
                        ? "text-brand-primary font-semibold" 
                        : "text-muted-foreground font-medium"
                    )
              )}
              style={item.title === "Join" ? {
                backgroundColor: "var(--brand-primary)",
                "--hover-bg": "var(--brand-primary-dark)"
              } as React.CSSProperties : undefined}
              onMouseEnter={(e) => {
                if (item.title === "Join") {
                  e.currentTarget.style.backgroundColor = "var(--brand-primary-dark)";
                }
              }}
              onMouseLeave={(e) => {
                if (item.title === "Join") {
                  e.currentTarget.style.backgroundColor = "var(--brand-primary)";
                }
              }}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button className="text-muted-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  )
}
