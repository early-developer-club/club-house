import { notices } from "@/data/notices"

export function RecentNotices() {
  // 진행중이거나 오픈 예정인 공지 중 최근 2개
  const recentNotices = notices
    .filter(notice => notice.status === "ongoing" || notice.status === "upcoming")
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
    .slice(0, 2)

  return (
    <section className="mt-20">
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-black mb-6 text-center">참여 가능한 활동</h3>
        {recentNotices.map((notice) => (
        <div key={notice.id} className="p-3 border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-sm">{notice.title}</h4>
            <span className={`px-2 py-1 text-xs rounded ${
              notice.status === "ongoing" 
                ? "bg-green-100 text-green-600" 
                : "bg-blue-100 text-blue-600"
            }`}>
              {notice.status === "ongoing" ? "진행중" : "예정"}
            </span>
          </div>
          <p className="text-gray-600 text-sm">{notice.content}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-gray-500">
              {notice.startDate} {notice.endDate && `~ ${notice.endDate}`}
            </span>
            <span className="text-xs text-gray-500">{notice.category}</span>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}
