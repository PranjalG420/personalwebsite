import Image from "next/image";
import { IconBlock } from "./iconblock";
import { Link } from "react-feather";

const projects = [
    {
        key: 0,
        title: "Xeol",
        description:
            "An intuative and responsive microblogging platform which uses user location to display posts from their area. Useful for finding local events, news, and more.",
        link: "https://xeol.vercel.app",
        tags: [
            "React",
            "Tailwind CSS",
            "Typescript",
            "Express",
            "NodeJs",
            "PostgreSQL",
            "Prisma",
        ],
        imgSource: "/xeol.png",
    },
    {
        key: 1,
        title: "appNote",
        description:
            "A note-taking app with custom-built user authentication and multi-platform support (using PWA).",
        link: "https://appnote.vercel.app",
        tags: [
            "React",
            "Tailwind CSS",
            "TypeScript",
            "Express",
            "NodeJs",
            "PostgreSQL",
            "Prisma",
        ],
        imgSource: "/appnote.png",
    },
    {
        key: 2,
        title: "SummarizeGPT",
        description:
            "A web-based chat/conversation summarizer using OpenAI's GPT-3.5 Turbo API.",
        link: "https://summarizegpt.vercel.app",
        tags: ["Nextjs", "React", "Tailwind CSS", "Typescript"],
        imgSource: "/summarizegpt.png",
    },
    {
        key: 3,
        title: "SwiftSongs",
        description:
            "A custom-built music player for the web, with features such as looping, shuffling, and more.",
        link: "https://swiftsongs.vercel.app",
        tags: ["React", "Tailwind CSS", "Javascript"],
        imgSource: "/swiftsongs.png",
    },
    {
        key: 4,
        title: "useMix",
        description:
            "A custom React hook for creating a cool letter mixing effect.",
        link: "https://www.npmjs.com/package/@pranjalg1122/usemix",
        tags: ["React", "Typescript", "npm"],
        imgSource: "/usemix.png",
    },
];

export default function Projects() {
    return (
        <>
            <p className="desktop:text-6xl text-3xl mb-4 font-medium">
                Projects
            </p>
            <div className="w-full h-full flex flex-col gap-16">
                {projects.map(
                    ({ key, title, description, link, imgSource, tags }) => {
                        return (
                            <div
                                key={key}
                                className="flex flex-col items-start gap-3"
                            >
                                <div className="flex flex-row items-center gap-2">
                                    <p className="desktop:text-2xl font-medium text-xl">
                                        {title}
                                    </p>
                                    <a
                                        href={link}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-neutral-500 hover:text-neutral-300 transition-all"
                                    >
                                        <IconBlock Icon={Link} />
                                    </a>
                                </div>
                                <p className="desktop:text-lg text-base">
                                    {description}
                                </p>
                                <div className="flex flex-row items-center gap-2 flex-wrap">
                                    {tags.map((tag, i) => {
                                        return (
                                            <span
                                                key={i}
                                                className="px-2 py-1 desktop:text-base text-sm border border-neutral-700 rounded-sm"
                                            >
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>
                                <Image
                                    src={imgSource}
                                    alt="image not found"
                                    priority={true}
                                    width={1600}
                                    height={900}
                                    className="object-cover desktop:max-w-[64rem] rounded-sm"
                                />
                            </div>
                        );
                    }
                )}
            </div>
        </>
    );
}
