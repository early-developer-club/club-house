"use client"

import { Header } from "./header"
import { Footer } from "./footer"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {

  return (
    <div className="relative flex min-h-screen flex-col bg-white text-black">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
