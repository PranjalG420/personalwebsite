import Container from "@/components/Container";
import { projects } from "@/lib/info";
import Link from "next/link";

export default function Projects() {
  return (
    <Container>
      <h1 className="md:text-4xl text-2xl font-semibold">Projects</h1>
      <div className="flex flex-col w-full md:gap-8 gap-4">
        {projects.map((project, i) => {
          return (
            <div key={i} className="flex flex-col w-full gap-1">
              <p className="font-medium">
                {project.title} {"->"}{" "}
                <span className="font-regular text-neutral-400">
                  {project.text}
                </span>
              </p>
              <Link
                href={"https://" + project.link}
                className="text-blue-500 hover:underline underline-blue-500"
              >
                {project.link}
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
