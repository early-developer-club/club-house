"use client"

import { motion } from "framer-motion"

export function ArchiveHeader() {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="text-5xl lg:text-7xl font-bold leading-none mb-6 text-black" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
            Early Artist Club
          </h1>
          <div className="w-24 h-px bg-lime-500 mb-6"></div>
          <p className="text-gray-600 text-xl leading-relaxed max-w-2xl" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
            AI가 창작한 디지털 시대의 시와 산문
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-2" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
              Volume 1, Issue 1
            </div>
            <div className="text-sm text-gray-500" style={{ fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>
              Winter 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
