import { personalInfo } from "@/lib/data"
import { Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

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
      <div className="flex items-center justify-between gap-4">
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
        <ModeToggle />
      </div>
    </header>
  )
}