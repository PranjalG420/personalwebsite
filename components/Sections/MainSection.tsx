import SectionContainer from "@/components/SectionContainer";
import { roboto } from "@/lib/font";
import Link from "next/link";
import {
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import { variants } from "@/components/Button";

export default function MainSection() {
  return (
    <SectionContainer>
      <h1
        className={
          roboto.className +
          " text-sky-300 md:text-base text-sm animate-fade300"
        }
      >
        Hello, my name is
      </h1>
      <div className="flex flex-col md:gap-4 gap-2 w-full animate-fade500">
        <h1 className="font-semibold md:text-6xl text-4xl">Pranjal Gupta.</h1>
        <h1 className="text-sky-300 font-semibold md:text-6xl text-4xl">
          I craft digital experiences.
        </h1>
      </div>
      <p className="w-full max-w-xl md:text-base text-sm text-justify text-sky-200 text-opacity-75 animate-fade700">
        I'm a full-stack web developer and software engineer who loves creating
        accessible, user-focused web apps that truly shine{" "}
        <span className="text-opacity-100 text-white"></span>. Passionate about
        exploring cutting-edge tech and crafting experiences that leave a
        lasting impression!
      </p>
      <Link
        href="/resume.pdf"
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-row items-center gap-2 md:text-base text-sm hover:text-sky-300 animate-fade900"
      >
        View Resumé <FiExternalLink />
      </Link>
      <div className="flex flex-row items-center gap-6 animate-fade900">
        <Link
          href="https://github.com/pranjalg1122"
          className={variants({ variant: "icon" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/pranjalg1122/"
          className={variants({ variant: "icon" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiLinkedin />
        </Link>
        <Link
          href="https://x.com/pranjalg1122"
          className={variants({ variant: "icon" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiTwitter />
        </Link>
        <Link
          href="mailto:pranjalg1122@gmail.com"
          className={variants({ variant: "icon" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiMail />
        </Link>
      </div>
    </SectionContainer>
  );
}
