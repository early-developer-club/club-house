"use client"

import { motion } from "framer-motion"

export function MailAlarm() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="mt-20"
    >
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-black mb-6">
          메일 알람 신청
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          새로운 활동과 소식을 가장 먼저 받아보세요!
          <br />
          Google Forms를 통해 간편하게 신청할 수 있습니다.
        </p>
        <a
          href="https://forms.gle/MxRLVtBv7QamajZR9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-lime-500 text-white font-semibold rounded-lg hover:bg-lime-600 transition-colors shadow-sm hover:shadow-md"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Google Forms로 신청하기
        </a>
        <p className="text-xs text-gray-500 mt-3">
          * Google Forms로 이동하여 간편하게 신청하실 수 있습니다
        </p>
      </div>
    </motion.section>
  )
}
