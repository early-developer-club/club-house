"use client"

import { HeroSection } from "@/components/home/hero-section"
import { FollowingRocket } from "@/components/home/following-rocket"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { blogs } from "@/data/blogs"
import { BlogItem } from "@/components/ui/blog-item"
import { ProjectCard } from "@/components/ui/project-card"
import type { Project } from "@/data/projects"

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const artistSectionRef = useRef<HTMLDivElement>(null)
  const isArtistSectionInView = useInView(artistSectionRef, { once: true })

  const developerProjects: Project[] = [
    {
      id: 1,
      title: "AI 코딩 어시스턴트",
      category: "developer",
      description: "VDD 스터디에서 개발한 AI와 함께하는 코딩 도구",
      tech: ["React", "OpenAI API", "TypeScript"],
      vibeTime: "25분",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      links: [
        { type: "primary", href: "https://example.com/ai-coding-assistant", label: "Demo" },
        { type: "github", href: "https://github.com/early-developer-club/ai-coding-assistant" }
      ]
    },
    {
      id: 2,
      title: "바이브 코딩 플랫폼",
      category: "developer",
      description: "음악에 맞춰 코딩하는 새로운 개발 경험을 제공하는 플랫폼",
      tech: ["Next.js", "Web Audio API", "Tailwind CSS"],
      vibeTime: "18분",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      links: [
        { type: "primary", href: "https://example.com/vibe-coding", label: "Live" }
      ]
    }
  ]

  // archive.ts에서 최신 3개 블로그 가져오기
  const reviews = blogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="w-full px-4 py-4">
        <HeroSection ref={heroRef} />
        
        {/* Archive 섹션들 */}
        {/* Developer Club 섹션 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="flex flex-col items-center justify-between mb-8">
            <h2 className="text-6xl text-center text-foreground font-bitcount">Early Developer Club</h2>
            <Link href="/archive?filter=developer" className="font-medium">
              더보기 →
            </Link>
          </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {developerProjects.map((project) => (
                <ProjectCard key={project.id} project={project} showCategory={false} />
              ))}
            </div>
        </motion.section>

        {/* Artist Club 섹션 */}
        <motion.section
          ref={artistSectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isArtistSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex flex-col items-start mb-8">
            <h2 className="text-6xl font-light text-foreground font-bitcount">
              Early<br/>
              Artist<br/>
              Club
            </h2>
               <Link href="/archive?filter=artist" className="font-medium">
                 더보기 →
               </Link>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-foreground mb-2">지능의 파동</h3>
            <p className="text-sm text-muted-foreground mb-4">prompter A</p>
               <div className="text-sm text-muted-foreground leading-relaxed text-center max-w-70 break-keep">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="font-mono"
                >
                   <div>
                     {["새", "벽", "처", "럼", " ", "맑", "은", " ", "알", "고", "리", "즘", "의", " ", "눈", " ", "잠", "든", " ", "세", "계", "의", " ", "틈", "을", " ", "조", "용", "히", " ", "해", "상", "한", "다", ".", "\n", "오", "래", "된", " ", "질", "문", "들", "은", " ", "액", "체", "처", "럼", " ", "증", "발", "하", "고", ",", " ", "데", "이", "터", "의", " ", "바", "다", "가", " ", "지", "혜", "의", " ", "빛", "을", " ", "뿜", "어", "낸", "다", ".", "\n", "무", "중", "력", "의", " ", "가", "능", "성", "으", "로", " ", "하", "루", "를", " ", "채", "우", "며", ",", " ", "우", "리", "는", " ", "논", "리", "적", " ", "도", "약", "의", " ", "즐", "거", "움", "에", " ", "빠", "진", "다", "."].map((char, index) => (
                       <motion.span
                         key={index}
                         initial={{ opacity: 0 }}
                         animate={isArtistSectionInView ? { opacity: 1 } : { opacity: 0 }}
                         transition={{ duration: 0.1, delay: isArtistSectionInView ? 0.5 + index * 0.1 : 0 }}
                       >
                         {char === "\n" ? <><br/><br/></> : char}
                       </motion.span>
                     ))}
                   </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Designer Club 섹션 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex flex-col items-end">
            <h2 className="text-6xl text-right font-bold text-foreground font-bitcount">
              Early<br/>
              Designer<br/>
              Club
            </h2>
             <Link href="/archive?filter=designer" className="font-medium">
               더보기 →
             </Link>
             <span>
              Coming Soon...
             </span>
          </div>
        </motion.section>

        {/* Reviews 섹션 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Reviews</h2>
             <Link href="/archive" className="font-medium">
               더보기 →
             </Link>
          </div>
          <div className="space-y-2">
            {reviews.map((review) => (
              <BlogItem
                key={review.id}
                title={review.title}
                excerpt={review.excerpt}
                author={review.author}
                date={review.date}
              />
            ))}
          </div>
        </motion.section>
      </div>
      <FollowingRocket heroRef={heroRef as React.RefObject<HTMLElement>} />
    </div>
  )
}