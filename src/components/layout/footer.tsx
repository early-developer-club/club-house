"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Footer() {
  const pathname = usePathname()
  const isDeveloperPage = pathname === "/developer"
  const isDesignerPage = pathname === "/designer"

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-border/40"
    >
      <div className="container mx-auto px-4 py-6 md:py-0">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <p className={cn(
              "text-center text-sm leading-loose text-muted-foreground md:text-left",
              isDeveloperPage && "text-lime-300/80",
              isDesignerPage && "text-yellow-300/80"
            )}>
              © 2025 {siteConfig.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href={siteConfig.links.github}
              className={cn(
                "text-sm text-muted-foreground hover:text-foreground",
                isDeveloperPage && "text-lime-300/80 hover:text-lime-300",
                isDesignerPage && "text-yellow-300/80 hover:text-yellow-300"
              )}
            >
              GitHub
            </Link>
            <span
              className={cn(
                "text-sm text-muted-foreground/40 cursor-not-allowed",
                isDeveloperPage && "text-lime-300/40",
                isDesignerPage && "text-yellow-300/40"
              )}
            >
              Instagram
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
