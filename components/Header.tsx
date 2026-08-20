import { personalInfo } from "@/lib/data"
import { Mail, ExternalLink } from "lucide-react"
import { LinkButton } from "@/components/ui/button"

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
      <div className="flex items-center gap-4">
        <ul className="flex flex-wrap gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <li key={link.label}>
                <LinkButton
                  variant="link"
                  size={"sm"}
                  className="px-0 has-[>svg]:px-0 p-0 h-auto underline decoration-primary/40 hover:decoration-primary transition-colors text-base font-medium"
                  href={link.href}
                  {...(link.external && {
                    target: "_blank",
                    rel: "noopener noreferrer"
                  })}
                >
                  {link.label}
                  <Icon className="w-4 h-4" />
                </LinkButton>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}