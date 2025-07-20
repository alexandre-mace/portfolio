import { personalInfo } from "@/lib/data"
import { Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header>
      <ul className="flex flex-wrap gap-4">
        <li>
          <Button asChild variant="outline" size={"sm"}>
            <a href={`mailto:${personalInfo.email}`}>
              Contact
              <Mail className="w-4 h-4" />
            </a>
          </Button>
        </li>
        <li>
          <Button asChild variant="outline" size={"sm"}>
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github 
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </li>
        <li>
          <Button asChild variant="outline" size={"sm"}>
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin 
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </li>
      </ul>
    </header>
  )
}