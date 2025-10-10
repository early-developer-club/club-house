"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-border/40"
    >
      <div className="container py-6 md:py-0">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 {siteConfig.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href={siteConfig.links.twitter}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Twitter
            </Link>
            <Link
              href={siteConfig.links.github}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
