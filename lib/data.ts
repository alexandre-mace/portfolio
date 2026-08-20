export interface PersonalInfo {
  name: string
  title: string
  description: string
  email: string
  github: string
  linkedin: string
}

export const personalInfo: PersonalInfo = {
  name: "Alexandre Macé",
  title: "Full stack developer",
  description: "currently working with symfony, next.js and react. <br/> Taking part in projects tied to climate or biodiversity.",
  email: "helloalexandremace@protonmail.com",
  github: "https://github.com/alexandre-mace",
  linkedin: "https://www.linkedin.com/in/alexandre-mac%C3%A9/"
}

export interface Project {
  title: string
  description: string
  tech: string
  tags: string[]
  links: {
    online?: string
    github?: string
  }
  fullDescription: string
  isClimateLab?: boolean
}

export const projects: Project[] = [
  {
    title: "Footprint",
    description: "Individual GHG/CO2 data visualization",
    tech: "React",
    tags: ["climate", "dataviz"],
    links: {
      online: "https://footprint.climatelab.fr",
      github: "https://github.com/alexandre-mace/footprint"
    },
    fullDescription: "Dynamic data visualization project, using Ademe base carbone's data.",
    isClimateLab: true
  },
  {
    title: "Villes Futures",
    description: "Elections meet climate projections",
    tech: "React",
    tags: ["climate", "dataviz"],
    links: {
      online: "https://citymap-three.vercel.app"
    },
    fullDescription: "Interactive map crossing the 2026 French municipal elections (50,000+ candidates across 34,000 communes) with climate projections from Météo France and the IPCC."
  },
  {
    title: "BonPote",
    description: "Environmental media website",
    tech: "Wordpress",
    tags: ["climate", "media"],
    links: {
      online: "https://bonpote.com/"
    },
    fullDescription: "Independent, open-access and rigorous media on the climate emergency."
  },
  {
    title: "Culture",
    description: "Interactive historical timelines",
    tech: "Next.js",
    tags: ["culture"],
    links: {
      online: "https://culture.alexandremace.fr",
      github: "https://github.com/alexandre-mace/culture"
    },
    fullDescription: "Interactive chronological timelines to explore history, arts, sciences and society: 30 subjects with guided paths and quizzes."
  },
  {
    title: "Graphothèque",
    description: "Bon Pote's climate charts library",
    tech: "Next.js",
    tags: ["climate", "dataviz"],
    links: {
      online: "https://data.bonpote.com/"
    },
    fullDescription: "Bon Pote's library of climate charts and data visualizations."
  },
  {
    title: "Plume",
    description: "Simplified interactive carbon footprint simulator",
    tech: "React",
    tags: ["climate", "dataviz"],
    links: {
      online: "https://plume.climatelab.fr/",
      github: "https://github.com/alexandre-mace/plume"
    },
    fullDescription: "Understand which metrics have the most impact on your footprint.",
    isClimateLab: true
  },
  {
    title: "Transitions",
    description: "Fight solutions disinformation",
    tech: "React",
    tags: ["climate"],
    links: {
      online: "https://transitions.climatelab.fr/",
      github: "https://github.com/alexandre-mace/transition"
    },
    fullDescription: "Exploring preconceived ideas about the transition to carbon neutrality",
    isClimateLab: true
  },
  {
    title: "Dev standards",
    description: "Coding guidelines and Claude Code skills",
    tech: "Claude Code",
    tags: ["tooling"],
    links: {
      github: "https://github.com/alexandre-mace/dev-standards"
    },
    fullDescription: "Coding guidelines for Symfony and React projects, plus a set of Claude Code skills that enforce them."
  },
  {
    title: "Thermomètre",
    description: "IPCC AR6 data explorer",
    tech: "Next.js",
    tags: ["climate", "dataviz"],
    links: {
      online: "https://thermometre.climatelab.fr",
      github: "https://github.com/alexandre-mace/thermometre"
    },
    fullDescription: "Causes, consequences and solutions of climate change: searchable figures and projections, sourced from the IPCC AR6 report.",
    isClimateLab: true
  },
  {
    title: "Le diner du siècle",
    description: "Refute climate inaction arguments",
    tech: "React",
    tags: ["climate"],
    links: {
      online: "https://ledinerdusiecle.bonpote.com/",
      github: "https://github.com/alexandre-mace/bonpote-diner-ecolo"
    },
    fullDescription: "An educational tool that teaches you to refute with sources the classic climate inaction arguments."
  },
  {
    title: "Le climat en 10 minutes",
    description: "Climate change essentials",
    tech: "React",
    tags: ["climate"],
    links: {
      online: "https://leclimaten10minutes.climatelab.fr",
      github: "https://github.com/alexandre-mace/leclimat"
    },
    fullDescription: "Understand human responsibility, the consequences and the solutions of climate change in 10 minutes.",
    isClimateLab: true
  },
  {
    title: "State manager",
    description: "French public finances dashboard",
    tech: "Next.js",
    tags: ["culture", "dataviz"],
    links: {
      online: "https://state.alexandremace.fr",
      github: "https://github.com/alexandre-mace/state-manager"
    },
    fullDescription: "Educational dashboard about French public finances: revenues, spending, debt, and a net salary breakdown simulator."
  },
  {
    title: "ClimateLab",
    description: "Digital tools for the climate",
    tech: "Next.js",
    tags: ["climate"],
    links: {
      online: "https://climatelab.fr",
      github: "https://github.com/alexandre-mace/climatelab"
    },
    fullDescription: "A collection of digital tools for the climate, to grasp the orders of magnitude behind carbon neutrality."
  },
  {
    title: "Explorateur",
    description: "Collective GHG/CO2 data visualization",
    tech: "React",
    tags: ["climate", "dataviz"],
    links: {
      online: "https://explorateur.climatelab.fr/",
      github: "https://github.com/alexandre-mace/explorateur"
    },
    fullDescription: "Dynamic data visualization project, using OWID and climatewatch's data.",
    isClimateLab: true
  },
  {
    title: "Wealth repartition simulator",
    description: "What would happen if wealth was shared ?",
    tech: "React",
    tags: ["dataviz"],
    links: {
      online: "https://alexandre-mace.github.io/wealth-repartition-simulator",
      github: "https://github.com/alexandre-mace/wealth-repartition-simulator"
    },
    fullDescription: "Dynamic data visualization project about wealth/poverty. The map, data bindings and color system are done from scratch."
  },
  {
    title: "Taste",
    description: "A personal museum of taste",
    tech: "Next.js",
    tags: ["culture", "design"],
    links: {
      online: "https://taste.alexandremace.fr",
      github: "https://github.com/alexandre-mace/taste"
    },
    fullDescription: "A personal museum of taste: iconic pieces of design (watches, chairs, cars, interiors) explored chronologically and ranked through duels."
  }
]
