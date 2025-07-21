import { personalInfo } from "@/lib/data"
import { Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const socialLinks = [
    {
      label: "Contact",
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      external: false
    },
    {
      label: "Github",
      href: personalInfo.github,
      icon: ExternalLink,
      external: true
    },
    {
      label: "Linkedin",
      href: personalInfo.linkedin,
      icon: ExternalLink,
      external: true
    }
  ]

  return (
    <header>
      <ul className="flex flex-wrap gap-4">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <li key={link.label}>
              <Button asChild variant="outline" size={"sm"}>
                <a 
                  href={link.href}
                  {...(link.external && {
                    target: "_blank",
                    rel: "noopener noreferrer"
                  })}
                >
                  {link.label}
                  <Icon className="w-4 h-4" />
                </a>
              </Button>
            </li>
          )
        })}
      </ul>
    </header>
  )
}