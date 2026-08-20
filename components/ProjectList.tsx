"use client"

import { useState } from "react"
import { Project } from "@/lib/data"
import { ProjectCard } from "@/components/ProjectCard"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface ProjectListProps {
  projects: Project[]
}

const toggleItemClassName =
  "h-6 min-w-0 rounded-full border border-border bg-transparent px-2.5 font-mono text-xs font-normal text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground aria-pressed:bg-primary aria-pressed:text-primary-foreground data-selected:border-primary data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary data-selected:hover:text-primary-foreground"

export function ProjectList({ projects }: ProjectListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const tags = Array.from(new Set(projects.flatMap((project) => project.tags)))
  const visibleProjects = activeTag
    ? projects.filter((project) => project.tags.includes(activeTag))
    : projects

  return (
    <section className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h2 className="font-mono text-base text-muted-foreground">Projects</h2>
        <ToggleGroup
          aria-label="Filter projects by topic"
          selectedKeys={[activeTag ?? "all"]}
          onSelectionChange={(keys) => {
            const key = Array.from(keys)[0]
            setActiveTag(!key || key === "all" ? null : String(key))
          }}
          spacing={3}
          className="flex-wrap"
        >
          <ToggleGroupItem id="all" className={toggleItemClassName}>
            all
          </ToggleGroupItem>
          {tags.map((tag) => (
            <ToggleGroupItem key={tag} id={tag} className={toggleItemClassName}>
              {tag}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <ul className="flex flex-col gap-4 md:gap-6">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </section>
  )
}
