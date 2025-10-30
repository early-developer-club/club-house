export interface Blog {
  id: number
  title: string
  category: "developer" | "artist" | "designer"
  author: string
  excerpt: string
  date: string
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Early Developer Club VDD 스터디 3주차 활동 기록 - 간단한 바이브 코딩 실습",
    category: "developer",
    author: "dain",
    excerpt: "3주차 스터디에서는 '절대색감 게임'을 주제로 간단한 바이브 코딩 실습을 진행했습니다. 각자 게임을 구현하고 배포하여 서로의 결과물을 공유하며 즐겼습니다.",
    date: "2024-12-15"
  },
  {
    id: 2,
    title: "Early Developer Club VDD 스터디 2주차 활동 기록 - 프로젝트 아이디어 브레인스토밍",
    category: "developer",
    author: "dain",
    excerpt: "2주차 스터디에서는 각자 진행할 프로젝트 아이디어를 브레인스토밍하고, 피드백을 주고받는 시간을 가졌습니다. 다양한 분야의 아이디어가 나왔습니다.",
    date: "2024-12-08"
  },
  {
    id: 3,
    title: "Early Developer Club VDD 스터디 1주차 활동 기록 - Onboarding",
    category: "developer",
    author: "dain",
    excerpt: "드디어 Early Developer Club VDD 스터디의 첫 번째 모임이 시작되었습니다! 12명의 스터디원들이 Discord 음성채널에 모여서 첫 만남을 가졌습니다.",
    date: "2024-12-01"
  },
  {
    id: 4,
    title: "Early Developer Club과 VDD(Vibe Driven Development) 스터디",
    category: "developer",
    author: "dain",
    excerpt: "요즘 AI가 정말 빠르게 발전하고 있다. ChatGPT, Claude, Cursor... 매일 새로운 도구들이 나오는데, 정작 나는 제대로 활용하지 못하고 있다는 생각이 들었다.",
    date: "2024-11-25"
  }
]


