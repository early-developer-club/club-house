export interface ProjectLink {
  type: "primary" | "github" | "docs" | "post"
  href: string
  label?: string
}

export interface Project {
  id: number
  title: string
  category: "developer" | "artist" | "designer"
  description: string
  tech?: string[]
  vibeTime?: string
  thumbnail?: string
  author?: string
  content?: string
  type?: string
  tools?: string[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
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
  },
  {
    id: 3,
    title: "지능의 파동",
    category: "artist",
    description: "AI가 열어주는 새로운 세상에 대한 시",
    author: "prompter A",
    content: "새벽처럼 맑은 알고리즘의 눈..."
  },
  {
    id: 4,
    title: "AI 아트 컬렉션",
    category: "designer",
    description: "Midjourney와 DALL-E를 활용한 디지털 아트 작품들",
    type: "디지털 아트",
    tools: ["Midjourney", "DALL-E", "Photoshop"]
  }
]


