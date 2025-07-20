import { Project } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {Github, Globe} from "lucide-react";

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold tracking-tight leading-tighter">
            {project.title}
          </h3>
          {project.isClimateLab && (
            <a 
              href="https://climatelab.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-underline hover:no-underline"
            >
              <Badge className="bg-primary hover:bg-primary/90 text-white text-sm -rotate-3 -translate-y-1 transform transition-colors">
                ⚗️ ClimateLab
              </Badge>
            </a>
          )}
        </div>
        <p className="mb-2 md:mb-4 text-base">{project.description}</p>
        <Badge variant="outline" className="text-sm mb-2">
          {project.tech}
        </Badge>
        <div className="flex gap-1">
          {project.links.online && (
            <Button asChild variant="link" className="!p-0 h-auto text-primary font-semibold text-sm">
              <a 
                href={project.links.online}
                target="_blank"
                rel="noopener noreferrer"
              >
                Online <Globe className={"h-4 w-4"}></Globe>
              </a>
            </Button>
          )}
          {project.links.github && (
            <Button asChild variant="link" className="p-0 h-auto text-primary font-semibold text-sm">
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github <Github className={"h-4 w-4"}/>
              </a>
            </Button>
          )}
        </div>
        <p className="text-base mt-2 md:mt-4">{project.fullDescription}</p>
    </li>
  )
}