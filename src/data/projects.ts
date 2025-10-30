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
    title: "쇼핑몰 상세 페이지 에디터 (an-html-editor)",
    category: "developer",
    description: "비개발자도 사용하기 쉬운 시맨틱 HTML 상세 페이지 에디터",
    tech: ["Claude Sonnet 4.5", "Claude Code CLI"],
    vibeTime: "20h",
    thumbnail: "",
    links: [
      { type: "primary", href: "https://early-developer-club/an-html-editor", label: "Demo" },
      { type: "github", href: "https://github.com/early-developer-club/an-html-editor" }
    ]
  },
  {
    id: 2,
    title: "Promptory",
    category: "developer",
    description: "개발자를 위한 AI 대화 아카이빙 및 자산화 서비스",
    tech: ["gemini-2.5-pro", "gemini-cli"],
    vibeTime: "12h",
    thumbnail: "",
    links: [
      { type: "github", href: "https://github.com/early-developer-club/promptory" }
    ]
  },
  {
    id: 3,
    title: "스마트 절세 플래너",
    category: "developer",
    description: "변하는 정책에 맞는 저축 최적화 금액 서포트",
    tech: ["gemini-2.5-pro", "gemini-cli"],
    vibeTime: "12h",
    thumbnail: "",
    links: [
      { type: "github", href: "https://github.com/early-developer-club/JH-LEE" }
    ]
  },
  {
    id: 4,
    title: "Club House",
    category: "developer",
    description: "Early Developer Club 홈페이지 클럽 하우스 웹 제작",
    tech: ["cursor"],
    vibeTime: "6h",
    thumbnail: "/images/projects/4.png",
    links: [
      { type: "primary", href: "https://club-house-sigma.vercel.app/", label: "Demo"  },
      { type: "github", href: "https://github.com/early-developer-club/club-house" }
    ]
  },
  {
    id: 5,
    title: "mood time capsule",
    category: "developer",
    description: "나의 하루 기록지",
    tech: ["claude code", "cursor"],
    vibeTime: "20m",
    thumbnail: "",
    links: [
      { type: "primary", href: "https://mood-time-capsule.vercel.app/", label: "Demo"  },
      { type: "github", href: "https://github.com/early-developer-club/Mood-Time-Capsule" }
    ]
  },
  {
    id: 6,
    title: "LLM Health Monitor",
    category: "developer",
    description: "AI 서비스 헬스 체크 사이트",
    tech: ["claude code(sonnet 4.1)"],
    vibeTime: "30m",
    thumbnail: "",
    links: [
      { type: "primary", href: "https://helthchecker-doha-git-main-dohas-projects-98c7c2ca.vercel.app/", label: "Demo"  },
    ]
  },
  {
    id: 7,
    title: "지능의 파동",
    category: "artist",
    description: "AI가 열어주는 새로운 세상에 대한 시",
    author: "prompter A",
    content: "새벽처럼 맑은 알고리즘의 눈..."
  },
]


