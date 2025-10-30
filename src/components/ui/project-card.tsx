import { Project } from "@/data/projects"
import Link from "next/link"

interface ProjectCardProps {
  project: Project
  showCategory?: boolean
}

export function ProjectCard({ project, showCategory = true }: ProjectCardProps) {
  const primaryLink = project.links?.find((l) => l.type === "primary")

  return (
    <div className="relative border overflow-hidden group">
      {primaryLink && (
        <Link
          href={primaryLink.href}
          className="absolute inset-0 z-10"
          aria-label={`${project.title} 열기`}
          target={primaryLink.href.startsWith("http") ? "_blank" : undefined}
          rel={primaryLink.href.startsWith("http") ? "noreferrer" : undefined}
        />
      )}
      {project.thumbnail && (
        <div className="relative overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform"
          />
          {project.vibeTime && (
            <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium">
              {project.vibeTime}
            </div>
          )}
        </div>
      )}
      <div className="relative z-20 p-2.5">
        <h3 className="text-base font-bold text-foreground mb-0.5">
          {primaryLink ? (
            <Link
              href={primaryLink.href}
              className="hover:underline"
              target={primaryLink.href.startsWith("http") ? "_blank" : undefined}
              rel={primaryLink.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="text-muted-foreground mb-1.5 text-[12px]">{project.description}</p>

        {project.tech && (
          <div className="flex flex-wrap gap-1 mb-1.5">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="px-1.5 py-0.5 bg-info/10 text-info text-[11px] rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.tools && (
          <div className="flex flex-wrap gap-1 mb-1.5">
            {project.tools.map((tool, idx) => (
              <span key={idx} className="px-1.5 py-0.5 bg-green-100 text-green-600 text-[11px] rounded-full">
                {tool}
              </span>
            ))}
          </div>
        )}

        {showCategory && (
          <span className="inline-block px-1.5 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">
            {project.category}
          </span>
        )}

        {project.links && project.links.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.links.map((link, idx) => {
              const label = link.label ?? (link.type === "github" ? "GitHub" : link.type === "docs" ? "Docs" : link.type === "post" ? "Post" : "Visit")
              const isPrimary = link.type === "primary"
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={
                    isPrimary
                      ? "px-2.5 py-1 bg-brand-primary text-white rounded-md text-[13px] hover:bg-brand-primary-dark transition-colors"
                      : "px-2.5 py-1 bg-muted text-foreground rounded-md text-[13px] hover:bg-muted/70 transition-colors"
                  }
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}


