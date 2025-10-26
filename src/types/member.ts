export interface Member {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  profileImage?: string // 프로필 이미지 파일명 (예: "1.webp")
  links: {
    github?: string
    linkedin?: string
    blog?: string
    email?: string
  }
  activities: string[]
  joinDate: string
}
