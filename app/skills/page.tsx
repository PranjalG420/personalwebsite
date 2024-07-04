import { variants } from "@/components/Button";
import Container from "@/components/Container";
import { skills } from "@/lib/info";
import Link from "next/link";

export default function Skills() {
  return (
    <Container>
      <h1 className="md:text-4xl text-2xl font-semibold">Skills</h1>
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
    </Container>
  );
}
