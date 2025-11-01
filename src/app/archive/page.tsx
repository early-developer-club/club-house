"use client"

import { motion } from "framer-motion"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { projects } from "@/data/projects"
import { blogs } from "@/data/blogs"
import { notices } from "@/data/notices"
import { BlogItem } from "@/components/ui/blog-item"
import { ProjectCard } from "@/components/ui/project-card"

type FilterType = "all" | "developer" | "artist" | "designer"

function ArchiveContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")

  useEffect(() => {
    const filter = searchParams.get('filter') as FilterType
    if (filter && ['all', 'developer', 'artist', 'designer'].includes(filter)) {
      setActiveFilter(filter)
    }
  }, [searchParams])

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter)
    const params = new URLSearchParams(searchParams.toString())
    if (filter === 'all') {
      params.delete('filter')
    } else {
      params.set('filter', filter)
    }
    router.push(`/archive?${params.toString()}`)
  }

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "All" },
    { key: "developer", label: "Developer" },
    { key: "artist", label: "Artist" },
    { key: "designer", label: "Designer" }
  ]

  const filteredNotices = activeFilter === "all" ? notices : notices.filter(notice => notice.category === activeFilter)
  const filteredProjects = activeFilter === "all" ? projects : projects.filter(project => project.category === activeFilter)
  const filteredBlogs = activeFilter === "all" ? blogs : blogs.filter(blog => blog.category === activeFilter)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="w-full px-4 py-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-6xl text-foreground font-bitcount mb-6">
            Archive
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Early AI Club의 모든 활동과 결과물을 확인해보세요
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => handleFilterChange(filter.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === filter.key
                    ? "bg-white text-brand-primary shadow-md font-bold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Notice Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-black font-bitcount mb-8">Notice</h2>
          <div className="space-y-4">
            {filteredNotices.map((notice) => (
              <div key={notice.id} className="p-4 border rounded-lg hover:bg-muted transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{notice.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {notice.startDate} {notice.endDate && `~ ${notice.endDate}`}
                  </span>
                </div>
                <p className="text-muted-foreground">{notice.content}</p>
                <span className="inline-block mt-2 px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                  {notice.category}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-black font-bitcount mb-8">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} showCategory={true} />
            ))}
          </div>
        </motion.section>

        {/* Blogs Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-black font-bitcount mb-8">Blogs</h2>
          <div className="space-y-2">
            {filteredBlogs.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default function ArchivePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArchiveContent />
    </Suspense>
  )
}