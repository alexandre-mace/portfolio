import { Header } from "@/components/Header"
import { Introduction } from "@/components/Introduction"
import { ProjectList } from "@/components/ProjectList"
import { projects } from "@/lib/data"

export default function Home() {
  return (
    <div className="font-sans p-4 md:p-10 pb-20 md:pb-40 container mx-auto max-w-3xl space-y-10 md:space-y-20">
      <Header />
      <main className="space-y-10 md:space-y-20">
        <Introduction />

        <ProjectList projects={projects} />
      </main>
    </div>
  );
}
