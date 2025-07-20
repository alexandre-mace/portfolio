import { Button } from "@/components/ui/button"
import {Smile} from "lucide-react";

export function Introduction() {
  return (
    <section id="introduction">
      <div className="text-lg md:text-xl mb-2 md:mb-4 leading-tighter tracking-tight">
        Hello, I&apos;m <h1 className="inline font-semibold">Alexandre Macé <Smile className={"inline -mt-0.5 h-4 w-4"}/></h1>
      </div>
      <div className="text-base">
        <h2 className="inline font-semibold">Full stack developer</h2>, currently working with{" "}
        <Button asChild variant="link" className="p-0 h-fit text-base font-semibold text-primary">
          <a href="https://symfony.com/" target="_blank" rel="noopener noreferrer">
            symfony
          </a>
        </Button>
        , {" "}
        <Button asChild variant="link" className="p-0 h-fit text-base font-semibold text-primary">
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            next.js
          </a>
        </Button>
        {" "}and{" "}
        <Button asChild variant="link" className="p-0 h-fit text-base font-semibold text-primary">
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            react
          </a>
        </Button>
        . <br/>Taking part in projects tied to{" "}
        <span className="font-semibold">climate</span> or{" "}
        <span className="font-semibold">biodiversity</span>.
      </div>
    </section>
  )
}