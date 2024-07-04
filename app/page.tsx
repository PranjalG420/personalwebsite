import { variants } from "@/components/Button";
import Container from "@/components/Container";
import { homePageSocials } from "@/lib/info";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <div className="flex md:flex-row flex-col gap-4">
        <Image
          src="https://avatars.githubusercontent.com/u/95481637?s=400&u=aad1c66019e33b82661f9aaa29291ed25b0e3e79&v=4"
          alt="logo"
          width={150}
          height={150}
          className="rounded-lg w-full md:max-w-40 max-w-24 md:h-40 h-24"
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
    </Container>
  );
}
