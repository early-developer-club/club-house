"use client"

import { motion } from "framer-motion"

export default function DeveloperPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <div className="text-center space-y-6">
          <div className="text-2xl text-lime-400 mb-4">🚀</div>
          <h1 className="text-4xl font-extrabold tracking-tight text-lime-300 drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]">
            Early Developer Club
          </h1>
          <blockquote className="text-lg text-lime-200/90 italic border-l-4 border-lime-500/50 pl-6 py-2 bg-lime-500/5 rounded-r-lg">
            "새로운 기술이 쏟아지는데, 나 뒤쳐졌나?"
          </blockquote>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-base leading-relaxed">
              AI가 이미 우리 삶에 깊이 자리 잡았지만, 혼자서 빠르게 변화하는 기술을 따라가기란 쉽지 않습니다.
              <br />
              <strong className="text-lime-300">Early Developer Club</strong>은 새로운 기술을 함께 즐겁게 경험하고 삶에 적용하고 싶은 모임이에요.
              <br />
              개발자뿐만 아니라 자신의 분야에 기술을 도입하고 싶은 모든 분을 환영해요.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md border border-lime-500/30 bg-[#0b1020] text-lime-300 p-6 shadow-[0_0_0_1px_rgba(163,230,53,0.15)] hover:shadow-[0_0_0_1px_rgba(163,230,53,0.3)] transition-all duration-300">
            <div className="font-mono text-sm text-lime-400"># 01</div>
            <div className="mt-2 font-bold text-lg">VDD 스터디</div>
            <div className="mt-2 text-sm text-lime-300/80">AI 코딩 에이전트를 활용한 바이브 코딩 챌린지</div>
            <div className="mt-2 text-xs text-lime-400/70 font-mono">2025-09-20 ~ 2025-11-01</div>
          </div>
          
          <div className="rounded-md border border-lime-500/30 bg-[#0b1020] text-lime-300 p-6 shadow-[0_0_0_1px_rgba(163,230,53,0.15)] hover:shadow-[0_0_0_1px_rgba(163,230,53,0.3)] transition-all duration-300">
            <div className="font-mono text-sm text-lime-400"># 02</div>
            <div className="mt-2 font-bold text-lg">Fast Hackathon</div>
            <div className="mt-2 text-sm text-lime-300/80">이제 개발은 ai가! 아이디어로 승부하는 해커톤</div>
            <div className="mt-2 text-xs text-lime-400/70 font-mono">오픈 예정</div>
          </div>
          
          <div className="rounded-md border border-lime-500/30 bg-[#0b1020] text-lime-300 p-6 shadow-[0_0_0_1px_rgba(163,230,53,0.15)] hover:shadow-[0_0_0_1px_rgba(163,230,53,0.3)] transition-all duration-300">
            <div className="font-mono text-sm text-lime-400"># 03</div>
            <div className="mt-2 font-bold text-lg">Tech Talk</div>
            <div className="mt-2 text-sm text-lime-300/80">최신 기술 트렌드와 인사이트 공유</div>
            <div className="mt-2 text-xs text-lime-400/70 font-mono">오픈 예정</div>
          </div>
          
          <div className="rounded-md border border-lime-500/30 bg-[#0b1020] text-lime-300 p-6 shadow-[0_0_0_1px_rgba(163,230,53,0.15)] hover:shadow-[0_0_0_1px_rgba(163,230,53,0.3)] transition-all duration-300">
            <div className="font-mono text-sm text-lime-400"># 04</div>
            <div className="mt-2 font-bold text-lg">AI 워크샵</div>
            <div className="mt-2 text-sm text-lime-300/80">실무에 바로 적용할 수 있는 AI 도구 체험</div>
            <div className="mt-2 text-xs text-lime-400/70 font-mono">오픈 예정</div>
          </div>
          
          <div className="rounded-md border border-lime-500/30 bg-[#0b1020] text-lime-300 p-6 shadow-[0_0_0_1px_rgba(163,230,53,0.15)] hover:shadow-[0_0_0_1px_rgba(163,230,53,0.3)] transition-all duration-300">
            <div className="font-mono text-sm text-lime-400"># 05</div>
            <div className="mt-2 font-bold text-lg">스터디 그룹</div>
            <div className="mt-2 text-sm text-lime-300/80">함께 배우고 성장하는 기술 스터디</div>
            <div className="mt-2 text-xs text-lime-400/70 font-mono">오픈 예정</div>
          </div>
          
          <div className="rounded-md border border-lime-500/30 bg-[#0b1020] text-lime-300 p-6 shadow-[0_0_0_1px_rgba(163,230,53,0.15)] hover:shadow-[0_0_0_1px_rgba(163,230,53,0.3)] transition-all duration-300">
            <div className="font-mono text-sm text-lime-400"># 06</div>
            <div className="mt-2 font-bold text-lg">Coming Soon</div>
            <div className="mt-2 text-sm text-lime-300/80">원하는 활동이 있다면 언제든 제안해주세요!</div>
            <div className="mt-2 text-xs text-lime-400/70 font-mono">오픈 예정</div>
          </div>
        </div>
      </motion.section>

      {/* VDD 스터디 섹션 */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-20 space-y-8"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-lime-300 drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]">
            VDD (Vibe Driven Development) 스터디
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Early Developer Club의 첫 활동입니다.
            <br />
            6주간 AI 코딩 에이전트를 활용한 바이브 코딩 챌린지를 진행합니다.
            <br />
            개발자들이 AI와 함께 새로운 방식으로 코딩을 경험하고 배워가는 혁신적인 스터디입니다.
          </p>
        </div>

        {/* 참여자 프로필 그리드 */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-lime-300 mb-4 text-center">
            스터디 참여자
          </h3>
          <p className="text-sm text-lime-400/80 text-center mb-8 max-w-2xl mx-auto">
            🎨 참여자들이 AI(nano-banana)를 사용하여 생성한 프로필 이미지입니다
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(11)].map((_, i) => (
              <div
                key={i}
                className="rounded-lg border border-lime-500/30 bg-[#0b1020] p-4 shadow-[0_0_0_1px_rgba(163,230,53,0.15)] hover:shadow-[0_0_0_1px_rgba(163,230,53,0.3)] transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  {/* 프로필 사진 */}
                  <div className="w-16 h-16 rounded-full bg-lime-500/20 border-2 border-lime-500/30 flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-lime-300 font-bold text-lg">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                  
                  {/* 참여자 정보 */}
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-lime-300 text-sm truncate">
                      참여자 {i + 1}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">
                      Frontend Developer
                    </p>
                    <p className="text-xs text-lime-400/70 font-mono truncate">
                      participant{i + 1}@example.com
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 참여자 후기 섹션 */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-lime-300 mb-6 text-center">
            참여자 후기
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a 
              href="https://da-in.github.io/posts/early-developer-club-vdd-3/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block rounded-lg border border-lime-500/30 bg-[#0b1020] p-4 shadow-[0_0_0_1px_rgba(163,230,53,0.15)] hover:shadow-[0_0_0_1px_rgba(163,230,53,0.3)] transition-all duration-300 hover:bg-lime-500/5"
            >
              <div className="text-sm text-lime-400 font-mono mb-2">3주차</div>
              <div className="text-lime-300 font-medium text-sm">Early Developer Club VDD 스터디 3주차 활동 기록 - 간단한 바이브 코딩 실습</div>
            </a>
            
            <a 
              href="https://da-in.github.io/posts/early-developer-club-vdd-2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block rounded-lg border border-lime-500/30 bg-[#0b1020] p-4 shadow-[0_0_0_1px_rgba(163,230,53,0.15)] hover:shadow-[0_0_0_1px_rgba(163,230,53,0.3)] transition-all duration-300 hover:bg-lime-500/5"
            >
              <div className="text-sm text-lime-400 font-mono mb-2">2주차</div>
              <div className="text-lime-300 font-medium text-sm">Early Developer Club VDD 스터디 2주차 활동 기록 - 환경 세팅</div>
            </a>
            
            <a 
              href="https://da-in.github.io/posts/early-developer-club-vdd-1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block rounded-lg border border-lime-500/30 bg-[#0b1020] p-4 shadow-[0_0_0_1px_rgba(163,230,53,0.15)] hover:shadow-[0_0_0_1px_rgba(163,230,53,0.3)] transition-all duration-300 hover:bg-lime-500/5"
            >
              <div className="text-sm text-lime-400 font-mono mb-2">1주차</div>
              <div className="text-lime-300 font-medium text-sm">Early Developer Club VDD 스터디 1주차 활동 기록 - Onboarding</div>
            </a>
            
            <a 
              href="https://da-in.github.io/posts/early-developer-club-vdd/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block rounded-lg border border-lime-500/30 bg-[#0b1020] p-4 shadow-[0_0_0_1px_rgba(163,230,53,0.15)] hover:shadow-[0_0_0_1px_rgba(163,230,53,0.3)] transition-all duration-300 hover:bg-lime-500/5"
            >
              <div className="text-sm text-lime-400 font-mono mb-2">소개</div>
              <div className="text-lime-300 font-medium text-sm">Early Developer Club과 VDD(Vibe Driven Development) 스터디</div>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}


