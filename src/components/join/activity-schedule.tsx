"use client"

import { motion } from "framer-motion"

export function ActivitySchedule() {
  const activities = [
    {
      date: "3/28 ~ 29",
      title: "만우절 해커톤",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-bold text-foreground mb-6 text-center">활동 계획</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground border-r border-border">날짜</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">활동</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index} className="hover:bg-muted/50 transition-colors border-b border-border">
                  <td className="py-3 px-4 text-foreground border-r border-border">{activity.date}</td>
                  <td className="py-3 px-4 text-foreground">{activity.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  )
}

