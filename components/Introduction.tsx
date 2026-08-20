import { LinkButton } from "@/components/ui/button"
import {Smile} from "lucide-react";

export function Introduction() {
  const technologies = [
    { name: "symfony", url: "https://symfony.com/" },
    { name: "next.js", url: "https://nextjs.org/" },
    { name: "react", url: "https://reactjs.org/" }
  ]

  return (
    <section id="introduction" className={"space-y-2 md:space-y-4"}>
      <div className="text-base md:text-lg leading-none tracking-tight">
        Hi, I&apos;m <h1 className="inline font-semibold">Alexandre Macé <Smile className={"inline -mt-0.5 h-4 w-4"}/></h1>
      </div>
      <div className="text-base text-muted-foreground">
        <h2 className="inline font-medium text-foreground">Full stack developer</h2>, currently working with{" "}
        {technologies.map((tech, index) => (
          <span key={tech.name}>
            <LinkButton
              variant="link"
              className="p-0 h-fit text-base font-medium text-primary underline decoration-primary/40 hover:decoration-primary transition-colors"
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tech.name}
            </LinkButton>
            {index === 0 && ", "}
            {index === 1 && " and "}
          </span>
        ))}
        . <br/>Taking part in projects tied to{" "}
        <span className="font-medium text-foreground">climate</span> or{" "}
        <span className="font-medium text-foreground">biodiversity</span>.
      </div>
    </section>
  )
}