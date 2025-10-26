"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { mainNav } from "@/config/navigation"
import { Logo } from "@/components/ui/logo"

export function Header() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-background"
    >
      <div className="flex px-4 items-center justify-between h-16 max-w-7xl mx-auto">
        <Link href="/" className="hover:text-muted-foreground transition-colors">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {mainNav.map((item) => (
            <Link 
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-primary",
                isActive(item.href) 
                  ? "text-brand-primary" 
                  : "text-muted-foreground"
              )}
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
