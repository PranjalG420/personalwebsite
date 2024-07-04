import { variants } from "@/components/Button";
import HomePageContainer from "@/components/HomePageContainer";
import Navbar from "@/components/Navbar";
import { homePageSocials, projects, skills } from "@/lib/info";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen h-full py-4 md:px-0 px-2 gap-16">
      <Navbar />
      <HomePageContainer link={"home"}>
        <div className="flex lg:flex-row flex-col gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/95481637?s=400&u=aad1c66019e33b82661f9aaa29291ed25b0e3e79&v=4"
            alt="logo"
            className="rounded-lg w-full lg:max-w-40 max-w-24 lg:h-40 h-24"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">Pranjal Gupta</h1>
            <p className="md:text-lg text-base text-neutral-400">
              A web developer from India who loves everything about programming.
              Proficient in TypeScript, React, Next.js, Node.js, Express.js. I
              also have experience in UI/UX design and graphic design.
            </p>{" "}
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-1">
          {homePageSocials.map((social, i) => {
            return (
              <Link
                key={i}
                href={social.link}
                className={variants({ variant: "primary" })}
              >
                {social.text}
              </Link>
            );
          })}
        </div>
      </HomePageContainer>

      <HomePageContainer link={"skills"}>
        <h1 className="text-4xl font-semibold">Skills</h1>
        <div className="flex flex-col items-start w-full gap-4">
          {skills.map((category, i) => {
            return (
              <div key={i} className="w-full flex flex-col gap-2">
                <h2 className="text-xl font-medium">{category.title}</h2>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-1 w-full">
                  {category.skills.map((skill, i) => {
                    return (
                      <Link
                        key={i}
                        href={skill.link}
                        className={variants({ variant: "primary" })}
                      >
                        {skill.text}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </HomePageContainer>

      <HomePageContainer link={"projects"}>
        <h1 className="text-4xl font-semibold">Projects</h1>
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
      </HomePageContainer>
    </main>
  );
}
