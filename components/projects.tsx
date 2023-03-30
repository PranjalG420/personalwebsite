import Image from "next/image";
import { IconBlock } from "./iconblock";
import { Link, GitBranch } from "react-feather";

const projects = [
    {
        key: 1,
        title: "appNote",
        description:
            "A note-taking app with custom-built user authentication and multi-platform support (using PWA).",
        link: "https://appnote.vercel.app",
        gitLink: "https://github.com/pranjalg420/appnote",
        tags: [
            "React",
            "Tailwind CSS",
            "TypeScript",
            "Express",
            "NodeJs",
            "PostGRESQL",
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
        gitLink: "https://github.com/pranjalg420/summarizegpt",
        tags: ["Nextjs", "React", "Tailwind CSS", "Typescript"],
        imgSource: "/summarizegpt.png",
    },
    {
        key: 3,
        title: "SwiftSongs",
        description:
            "A custom-built music player for the web, with features such as looping, shuffling, and more.",
        link: "https://swiftsongs.vercel.app",
        gitLink: "https://github.com/pranjalg420/swiftsongs",
        tags: ["React", "Tailwind CSS", "Javascript"],
        imgSource: "/swiftsongs.png",
    },
];

export default function Projects() {
    return (
        <>
            <p className="desktop:text-6xl text-3xl mb-4 font-semibold">
                Projects
            </p>
            <div className="w-full h-full flex flex-col gap-16">
                {projects.map(
                    ({
                        key,
                        title,
                        description,
                        link,
                        gitLink,
                        imgSource,
                        tags,
                    }) => {
                        return (
                            <div
                                key={key}
                                className="flex flex-col items-start gap-3"
                            >
                                <p className="desktop:text-2xl font-semibold text-xl">
                                    {title}
                                </p>
                                <p className="desktop:text-lg text-base">
                                    {description}
                                </p>
                                <div className="flex flex-row items-center gap-2 flex-wrap">
                                    {tags.map((tag, i) => {
                                        return (
                                            <span
                                                key={i}
                                                className="px-2 py-1 desktop:text-base text-sm bg-neutral-700"
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
                                    className="object-cover desktop:max-w-[64rem] border-2 border-neutral-500 rounded"
                                />

                                <div className="flex flex-row items-center gap-2">
                                    <a
                                        href={link}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="flex flex-row items-center w-auto rounded hover:translate-x-1 transition-all min-w-[6rem] text-center bg-indigo-800"
                                    >
                                        <IconBlock Icon={Link} />
                                        <p className="w-full px-4 py-3 rounded-r text-sm bg-indigo-700">
                                            Site Link
                                        </p>
                                    </a>
                                    <a
                                        href={gitLink}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="flex flex-row items-center w-auto rounded hover:translate-x-1 transition-all min-w-[6rem] text-center bg-slate-800"
                                    >
                                        <IconBlock Icon={GitBranch} />
                                        <p className="w-full px-4 py-3 rounded-r text-sm bg-slate-700">
                                            GitHub
                                        </p>
                                    </a>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </>
    );
}
