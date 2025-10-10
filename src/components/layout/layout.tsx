"use client"

import { usePathname } from "next/navigation"
import { Header } from "./header"
import { Footer } from "./footer"
import { cn } from "@/lib/utils"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname()
  const isDeveloperPage = pathname === "/developer"
  const isDesignerPage = pathname === "/designer"

  return (
    <div 
      className={cn(
        "relative flex min-h-screen flex-col",
        isDeveloperPage && "bg-[#0b1020] text-lime-300",
        isDesignerPage && "bg-orange-500 text-yellow-300"
      )}
      style={{
        ...(isDeveloperPage && {
          '--border': 'rgba(132, 204, 22, 0.4)', // lime-500/40
        }),
        ...(isDesignerPage && {
          '--border': 'rgba(253, 224, 71, 0.4)', // yellow-300/40
        }),
      } as React.CSSProperties}
    >
      <Header />
      <main className="flex-1 flex">{children}</main>
      <Footer />
    </div>
  )
}
