"use client"

import { motion } from "framer-motion"
import { members } from "@/data/members"
import { Logo } from "@/components/ui/logo"

export function MembersGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid gap-1 grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
    >
      {members.map((member) => (
        <div
          key={member.id}
          className="group relative aspect-square overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          {/* 프로필 이미지 */}
          <div className="w-full h-full relative">
            {member.profileImage ? (
              <div 
                className="w-full h-full bg-gradient-to-br from-lime-100 to-green-200"
                style={{
                  backgroundImage: `url('/images/members/${member.profileImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            ) : (
              <div 
                className="w-full h-full bg-gradient-to-br from-lime-100 to-green-200 flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}&backgroundColor=b6f3d4,84cc16,65a30d,4d7c0f&hairColor=0e0e0e,2c1b18,724133,a55728,b58143&skinColor=edb98a,fd9841,f8d25c,ffdbac')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            )}
            
            {/* 기본 아바타 (이미지 로드 실패 시) - profileImage가 없을 때만 표시 */}
            {!member.profileImage && (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center absolute inset-0">
                <Logo />
              </div>
            )}
          </div>

          {/* Hover 시 오버레이 정보 */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="text-center text-white p-4">
              <h4 className="font-semibold text-sm mb-2">
                {member.name}
              </h4>
              <p className="text-xs text-gray-200 mb-2">
                {member.role}
              </p>
              {member.bio && (
                <p className="text-xs text-gray-300 mb-3 line-clamp-2">
                  {member.bio}
                </p>
              )}

              {/* 링크 */}
              {member.links && (
                <div className="flex space-x-2 justify-center">
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {member.links.blog && (
                    <a
                      href={member.links.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16H8v-6h2v6zm-1-6.5c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm6.5 6.5h-2v-2.5c0-1.5-1.5-1.5-1.5-1.5s-1.5 0-1.5 1.5V16h-2v-6h2v1c.5-1 1.5-1.5 2.5-1.5s2.5.5 2.5 2.5V16z"/>
                      </svg>
                    </a>
                  )}
                  {member.links.email && (
                    <a
                      href={`mailto:${member.links.email}`}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  )
}
