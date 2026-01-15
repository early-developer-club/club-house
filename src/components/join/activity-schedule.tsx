'use client'

import { motion } from 'framer-motion'
import planData from '@/data/2026-plan.json'

export function ActivitySchedule() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-lg font-bold text-foreground mb-6 text-center">활동 계획</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground border-r border-border">
                  Week
                </th>
                <th className="text-left py-3 px-4 font-semibold text-foreground border-r border-border">
                  Creative
                </th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Develop</th>
              </tr>
            </thead>
            <tbody>
              {planData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-muted/50 transition-colors border-b border-border"
                >
                  <td className="py-3 px-4 text-foreground border-r border-border">{item.week}</td>
                  {item.type === 'merged' ? (
                    <td colSpan={2} className="py-3 px-4 text-foreground">
                      {item.content}
                    </td>
                  ) : (
                    <>
                      <td className="py-3 px-4 text-foreground border-r border-border">
                        {item.creative}
                      </td>
                      <td className="py-3 px-4 text-foreground">{item.develop}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  )
}
