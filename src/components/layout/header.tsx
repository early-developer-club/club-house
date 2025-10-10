"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href
  const isDeveloperPage = pathname === "/developer"
  const isArtistPage = pathname === "/artist"
  const isDesignerPage = pathname === "/designer"

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40",
        isDeveloperPage && "bg-[#0b1020]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0b1020]/60",
        isArtistPage && "bg-slate-50/95 backdrop-blur supports-[backdrop-filter]:bg-slate-50/60",
        isDesignerPage && "bg-orange-500/95 backdrop-blur supports-[backdrop-filter]:bg-orange-500/60",
        !isDeveloperPage && !isArtistPage && !isDesignerPage && "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="container flex max-w-screen-2xl items-center py-8 pb-4">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex gap-4 relative">
            {/* Early - 절대 위치로 고정, y축만 이동 */}
            <div className="relative w-24 md:w-32">
              <motion.span
                className={cn(
                  "text-3xl md:text-4xl font-bold absolute right-0 h-12 flex items-center",
                  isDeveloperPage && "text-lime-300",
                  isArtistPage && "text-slate-900",
                  isDesignerPage && "text-yellow-300"
                )}
                animate={{
                  y: isActive("/developer") ? 0 : isActive("/artist") ? 56 : isActive("/designer") ? 112 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Early
              </motion.span>
            </div>
            
            {/* 세로 정렬된 버튼들 */}
            <nav className="flex flex-col gap-2">
              <Link href="/developer">
                <span
                  className={cn(
                    "text-2xl md:text-3xl font-bold cursor-pointer transition-all duration-200 hover:opacity-80 px-2 block h-12 flex items-center",
                    "font-mono tracking-tight",
                    isActive("/developer") 
                      ? "text-lime-300 drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]" 
                      : isDeveloperPage
                        ? "text-lime-300/60 hover:text-lime-300"
                        : isArtistPage
                          ? "text-slate-900/60 hover:text-slate-900"
                        : isDesignerPage
                          ? "text-yellow-300/60 hover:text-lime-300"
                          : "text-muted-foreground/60 hover:text-lime-300"
                  )}
                >
                  Developer
                </span>
              </Link>
              
              <Link href="/artist">
                <span
                  className={cn(
                    "text-3xl md:text-4xl cursor-pointer transition-all duration-200 hover:opacity-80 px-2 block h-12 flex items-center",
                    "font-serif italic",
                    isActive("/artist") 
                      ? "text-slate-900" 
                      : isDeveloperPage
                        ? "text-lime-300/60 hover:text-slate-900 dark:hover:text-slate-100"
                        : isArtistPage
                          ? "text-slate-900/60 hover:text-slate-900"
                        : isDesignerPage
                          ? "text-yellow-300/60 hover:text-slate-900 dark:hover:text-slate-100"
                          : "text-muted-foreground/60 hover:text-slate-900 dark:hover:text-slate-100"
                  )}
                >
                  Artist
                </span>
              </Link>
              
              <Link href="/designer">
                <span
                  className={cn(
                    "text-3xl md:text-4xl font-black cursor-pointer transition-all duration-200 hover:opacity-80 px-2 block h-12 flex items-center",
                    isActive("/designer") 
                      ? "text-yellow-300" 
                      : isDeveloperPage
                        ? "text-lime-300/60 hover:text-orange-600"
                        : isArtistPage
                          ? "text-slate-900/60 hover:text-orange-600"
                        : isDesignerPage
                          ? "text-yellow-300/60 hover:text-yellow-300"
                          : "text-muted-foreground/60 hover:text-orange-600"
                  )}
                >
                  Designer
                </span>
              </Link>
            </nav>
            
            {/* Club - 절대 위치로 고정, y축만 이동 */}
            <div className="relative w-24 md:w-32">
              <motion.span
                className={cn(
                  "text-3xl md:text-4xl font-bold absolute left-0 h-12 flex items-center",
                  isDeveloperPage && "text-lime-300",
                  isArtistPage && "text-slate-900",
                  isDesignerPage && "text-yellow-300"
                )}
                animate={{
                  y: isActive("/developer") ? 0 : isActive("/artist") ? 56 : isActive("/designer") ? 112 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                Club
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
