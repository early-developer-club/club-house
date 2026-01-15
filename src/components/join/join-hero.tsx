'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function JoinHero() {
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    // KST 기준 2026년 1월 13일 23:59:59까지 활성화
    const deadline = new Date('2026-01-13T23:59:59+09:00')
    const now = new Date()
    setIsDisabled(now > deadline)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center space-y-8"
    >
      <div className="space-y-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            2026 상반기 클럽원 모집 (~1/13)
          </p>
          <p className="text-muted-foreground leading-relaxed">
            빠르게 변하는 AI 시대, 혼자보다는 함께일 때 더 멀리, 그리고 즐겁게 나아갈 수 있습니다.
            <br />
            지금 <strong className="text-foreground">Vibe Coding Club</strong>의 새로운 여정에
            합류하세요.
          </p>
        </div>
        <div className="mt-8">
          <Button asChild size="lg" disabled={isDisabled}>
            <a
              href={isDisabled ? '#' : 'https://forms.gle/3VfUQhWy9LrHyMPA6'}
              target={isDisabled ? undefined : '_blank'}
              rel={isDisabled ? undefined : 'noopener noreferrer'}
              onClick={(e) => {
                if (isDisabled) {
                  e.preventDefault()
                }
              }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              26년 멤버 신청하기
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  )
}
