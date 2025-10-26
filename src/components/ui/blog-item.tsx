interface BlogItemProps {
  title: string
  excerpt: string
  author: string
  date: string
  category?: string
  className?: string
}

export function BlogItem({ title, excerpt, author, date, category, className = "" }: BlogItemProps) {
  return (
    <div className={`p-4 border ${className}`}>
      <h3 className="font-bold">{title}</h3>
      <p className="text-muted-foreground truncate">{excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-muted-foreground">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        {category && (
          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
            {category}
          </span>
        )}
      </div>
    </div>
  )
}
