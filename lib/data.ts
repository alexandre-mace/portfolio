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
  links: {
    online?: string
    github?: string
  }
  fullDescription: string
  isClimateLab?: boolean
}

export const projects: Project[] = [
  {
    title: "Transitions",
    description: "Fight solutions disinformation",
    tech: "React",
    links: {
      online: "https://transitions.climatelab.fr/",
      github: "https://github.com/alexandre-mace/transition"
    },
    fullDescription: "Exploring preconceived ideas about the transition to carbon neutrality",
    isClimateLab: true
  },
  {
    title: "BonPote",
    description: "Environmental media website",
    tech: "Wordpress",
    links: {
      online: "https://bonpote.com/"
    },
    fullDescription: "Independent, open-access and rigorous media on the climate emergency"
  },
  {
    title: "Le diner du siècle",
    description: "Refute climate inaction arguments",
    tech: "React",
    links: {
      online: "https://ledinerdusiecle.bonpote.com/",
      github: "https://github.com/alexandre-mace/bonpote-diner-ecolo"
    },
    fullDescription: "An educational tool that teaches you to refute with sources the classic climate inaction arguments."
  },
  {
    title: "Plume",
    description: "Simplified interactive carbon footprint simulator",
    tech: "React",
    links: {
      online: "https://plume.climatelab.fr/",
      github: "https://github.com/alexandre-mace/plume"
    },
    fullDescription: "Understand which metrics have the most impact on your footprint.",
    isClimateLab: true
  },
  {
    title: "Footprint",
    description: "Individual GHG/CO2 data visualization",
    tech: "React",
    links: {
      online: "https://alexandre-mace.github.io/footprint/",
      github: "https://github.com/alexandre-mace/footprint"
    },
    fullDescription: "Dynamic data visualization project, using Ademe base carbone's data.",
    isClimateLab: true
  },
  {
    title: "Explorateur",
    description: "Collective GHG/CO2 data visualization",
    tech: "React",
    links: {
      online: "https://explorateur.climatelab.fr/",
      github: "https://github.com/alexandre-mace/explorateur"
    },
    fullDescription: "Dynamic data visualization project, using OWID and climatewatch's data.",
    isClimateLab: true
  },
  {
    title: "Energy book",
    description: "Interactive book about energy",
    tech: "React",
    links: {
      online: "https://energybook.climatelab.fr/",
      github: "https://github.com/alexandre-mace/energybook"
    },
    fullDescription: "Dynamic data visualization project, using look alike domain driven architecture, chartjs and csv/json sources files. The book has 3 modes : playground, versus and narrative."
  },
  {
    title: "Faucon",
    description: "Information about disinformation",
    tech: "React",
    links: {
      online: "https://faucon-snowy.vercel.app/",
      github: "https://github.com/alexandre-mace/faucon"
    },
    fullDescription: "Website that informs you about the manipulation forms. You can explore definitions in an endless navigation. I scrap wikipedia in the background in pure javascript and extract title, paragraph, and associated topics."
  },
  {
    title: "Wealth repartition simulator",
    description: "What would happen if wealth was shared ?",
    tech: "React",
    links: {
      online: "https://alexandre-mace.github.io/wealth-repartition-simulator",
      github: "https://github.com/alexandre-mace/wealth-repartition-simulator"
    },
    fullDescription: "Dynamic data visualization project about wealth/poverty. The map, data bindings and color system are done from scratch."
  }
]