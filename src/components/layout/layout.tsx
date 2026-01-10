"use client"

import { Header } from "./header"
import { Footer } from "./footer"
import { GradientWave } from "./gradient-wave"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {

  return (
    <div className="relative flex min-h-screen flex-col text-foreground overflow-x-hidden">
      {/* Gradient wave effect (monopo.london style) - 배경 */}
      <GradientWave />

      {/* 컨텐츠 */}
      <div className="relative z-10">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
