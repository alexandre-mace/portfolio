import { Project } from "@/lib/data"
import { LinkButton } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Globe } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";

interface ProjectCardProps {
  project: Project
}

interface ProjectLinkProps {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

function ProjectLink({ href, label, icon: Icon }: ProjectLinkProps) {
  return (
    <LinkButton
      variant="link"
      className="relative p-0 h-auto text-primary font-medium text-base underline decoration-primary/40 hover:decoration-primary transition-colors"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label} <Icon className="h-4 w-4" />
    </LinkButton>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  const mainLink = project.links.online ?? project.links.github

  return (
    <li className="group relative rounded-lg border border-border bg-card p-4 md:p-6 transition-colors hover:border-primary/40">
        <ArrowUpRight
          aria-hidden
          className="absolute top-4 right-4 md:top-5 md:right-5 h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
        {mainLink && (
          <a
            href={mainLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.title}
            className="absolute inset-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        )}
        <div className="flex items-center gap-2 mb-1 pr-8">
          <h3 className="md:text-lg font-semibold tracking-tight leading-tight transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          {project.isClimateLab && (
            <a
              href="https://climatelab.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative no-underline hover:no-underline"
            >
              <Badge className="bg-primary hover:bg-primary/90 text-white text-xs -rotate-3 -translate-y-1 transform transition-colors">
                <span><Image height={12} width={12} src={"/climatelab-alembic.png"} alt={"Climate lab icône"}/></span>️ ClimateLab
              </Badge>
            </a>
          )}
        </div>
        <p className="mb-4 text-base text-foreground/75">{project.fullDescription}</p>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <div className="flex gap-4">
            {project.links.online && (
              <ProjectLink href={project.links.online} label="Online" icon={Globe} />
            )}
            {project.links.github && (
              <ProjectLink href={project.links.github} label="Github" icon={GithubIcon} />
            )}
          </div>
          <span className="flex flex-wrap items-center gap-1.5">
            <Badge variant="outline" className="font-mono font-normal text-muted-foreground">
              {project.tech}
            </Badge>
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono font-normal text-muted-foreground">
                {tag}
              </Badge>
            ))}
          </span>
        </div>
    </li>
  )
}
