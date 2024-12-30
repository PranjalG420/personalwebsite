import SectionContainer from "@/components/SectionContainer";
import { roboto } from "@/lib/font";
import { projects } from "@/lib/info";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <SectionContainer id="projects">
      <h1 className={roboto.className + " text-sky-300 md:text-base text-sm"}>
        Things I've hand crafted
      </h1>
      <h1 className="md:text-4xl text-xl font-semibold">Projects</h1>
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full md:gap-4 gap-2 md:flex-nowrap flex-wrap">
        {projects.map((project, i) => (
          <li key={i}>
            <Link
              href={project.link}
              className="flex flex-col items-start justify-between gap-4 w-full md:aspect-square p-6 bg-gray-800 shadow-lg rounded hover:-translate-y-1 transition-all"
            >
              <div className="w-full flex flex-col gap-4">
                <h2
                  className={
                    roboto.className + " text-sky-300 md:text-4xl text-2xl"
                  }
                >
                  0{i + 1}
                </h2>
                <h1 className="md:text-xl text-base font-semibold">
                  {project.title}
                </h1>
                <p className="text-sky-200 text-opacity-75 lg:text-sm text-sm">
                  {project.text}
                </p>
              </div>
              <ul className="flex flex-row items-center gap-4 flex-wrap w-full">
                {project.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="md:text-sm text-xs text-sky-200 text-opacity-55"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
