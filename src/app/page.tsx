"use client"

import { HeroSection } from "@/components/home/hero-section"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { useRef, useEffect, useState, useMemo } from "react"
import { blogs } from "@/data/blogs"
import { BlogItem } from "@/components/ui/blog-item"
import { ProjectCard } from "@/components/ui/project-card"
import { projects as allProjects } from "@/data/projects"

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const artistSectionRef = useRef<HTMLDivElement>(null)
  const isArtistSectionInView = useInView(artistSectionRef, { once: true })

  // data에서 개발 카테고리만 사용 (정적 데이터이므로 메모이제이션)
  const developerProjects = useMemo(
    () => allProjects.filter(p => p.category === "developer"),
    []
  )

  // 최초 1회: 최대 4개를 랜덤 선택하여 고정
  const [selectedProjects, setSelectedProjects] = useState<typeof developerProjects>([])
  const [visibleProjects, setVisibleProjects] = useState<typeof developerProjects>([])

  useEffect(() => {
    const shuffled = [...developerProjects].sort(() => Math.random() - 0.5)
    const picked = shuffled.slice(0, Math.min(4, shuffled.length))
    setSelectedProjects(picked)
    const isWide = window.matchMedia("(min-width: 1024px)").matches
    setVisibleProjects(isWide ? picked : picked.slice(0, 2))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 리사이즈 시: 이미 선택된 4개를 기준으로 2개/4개만 토글, 재랜덤 금지
  useEffect(() => {
    const onResize = () => {
      if (selectedProjects.length === 0) return
      const isWide = window.matchMedia("(min-width: 1024px)").matches
      setVisibleProjects(isWide ? selectedProjects : selectedProjects.slice(0, 2))
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [selectedProjects])

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
            <h2 className="text-6xl text-center text-foreground font-bitcount">Vibe Coding Club</h2>
            <Link href="/archive?filter=developer" className="font-medium">
              더보기 →
            </Link>
          </div>
            <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
              {visibleProjects.map((project) => (
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
            <p className="text-sm text-muted-foreground mb-4">prompter da-in</p>
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
              <BlogItem key={review.id} blog={review} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}