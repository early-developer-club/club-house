export interface Member {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  links: {
    github?: string
    linkedin?: string
    blog?: string
    email?: string
  }
  activities: string[]
  joinDate: string
}
