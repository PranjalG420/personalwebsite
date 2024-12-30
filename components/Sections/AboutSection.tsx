import SectionContainer from "@/components/SectionContainer";
import { roboto } from "@/lib/font";
import { latestShowsAndMovies, tech } from "@/lib/info";
import Link from "next/link";

export default function AboutSection() {
  return (
    <SectionContainer id="about">
      <h1 className={roboto.className + " text-sky-300 md:text-base text-sm"}>
        Who am I?
      </h1>
      <h1 className="md:text-4xl text-xl font-semibold">About</h1>
      <div className="w-full flex flex-col items-start gap-4 text-sky-200 md:text-base text-sm text-opacity-75 ">
        <p className="w-full text-justify">
          Heyo! I'm Pranjal Gupta, and I love crafting interactive,
          user-friendly experiences on the web. My journey into web development
          began when I discovered the magic of coding while experimenting with
          personal projects, little tweaks soon turned into big passions for
          creating seamless digital experiences. Would you believe me if my
          first project was a website to generate{" "}
          <a
            href="https://random-excuses.netlify.app/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-50 font-medium hover:text-sky-300 transition-colors"
          >
            random excuses
          </a>
          ?
        </p>
        <p className="w-full text-justify">
          Fast forward to today, and I've worked on a variety of projects, from
          building adaptive learning platforms to crafting secure password
          managers. My current focus is on designing and developing efficient,
          accessible web solutions that make a real impact. I'm also diving into{" "}
          {tech.map((tech, i) => (
            <Link
              key={i}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-50 font-medium hover:text-sky-300 transition-colors"
            >
              {tech.text},{" "}
            </Link>
          ))}
          {" and more "}
          for my future projects, exploring new possibilities in full-stack
          development.
        </p>
        <p className="w-full text-justify">
          I love working collaboratively with a team, combining our strengths to
          create projects that not only meet user needs but are ones I
          personally enjoy and use. The process of brainstorming,
          problem-solving, and refining ideas with others is something I truly
          value. I'm also passionate about researching and writing about
          technology, whether it's diving deep into new trends, experimenting
          with different tools, or sharing my insights in blog posts.
        </p>
        <p className="w-full text-justify">
          My hobbies include reading, travelling and watching interesting
          thriller{" "}
          <Link
            href={latestShowsAndMovies.show}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-50 font-medium hover:text-sky-300 transition-colors"
          >
            shows
          </Link>{" "}
          and{" "}
          <Link
            href={latestShowsAndMovies.movie}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-50 font-medium hover:text-sky-300 transition-colors"
          >
            movies
          </Link>
          . I'm always up for a good conversation and love connecting with
          people from all walks of life.
        </p>
      </div>
    </SectionContainer>
  );
}
