"use client"

import { useState } from "react"
import { Project } from "@/lib/data"
import { ProjectCard } from "@/components/ProjectCard"
import { TagFilterGroup, TagFilterItem } from "@/components/tag-filter"

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const tags = Array.from(new Set(projects.flatMap((project) => project.tags)))
  const visibleProjects = activeTag
    ? projects.filter((project) => project.tags.includes(activeTag))
    : projects

  return (
    <section className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="font-mono text-base text-muted-foreground">Projects</h2>
        <TagFilterGroup
          aria-label="Filter projects by topic"
          value={[activeTag ?? "all"]}
          onValueChange={(value) => {
            const key = value[0]
            setActiveTag(!key || key === "all" ? null : String(key))
          }}
        >
          <TagFilterItem value="all">all</TagFilterItem>
          {tags.map((tag) => (
            <TagFilterItem key={tag} value={tag}>
              {tag}
            </TagFilterItem>
          ))}
        </TagFilterGroup>
      </div>
      <ul className="flex flex-col gap-4 md:gap-6">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </section>
  )
}
