"use client";

import { useMix } from "@pranjalg420/usemix";
import { useEffect, useState } from "react";
import { GitHub, Linkedin, Twitter, Mail } from "react-feather";
import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "600", "700"],
});

export default function Home() {
    const names = [
        "Web Developer",
        "Problem-Solver",
        "Quick Learner",
        "UI/UX Designer",
    ];
    const [rolesIndex, setRolesIndex] = useState<number>(0);

    const [rolesMix] = useMix({
        entry: names[rolesIndex],
        tick: 2,
        delay: 50,
        upper: true,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setRolesIndex((rolesIndex + 1) % names.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [rolesMix]);

    return (
        <main>
            <title>Pranjal Gupta | Web Developer</title>
            <div className="h-[95vh] w-full gap-6 flex flex-col justify-center">
                <div className="flex desktop:flex-row flex-col gap-6 desktop:items-center items-start justify-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/95481637?v=4"
                        className="rounded-full desktop:h-40 h-20"
                    />
                    <div className="flex flex-col gap-2">
                        <p className="desktop:text-4xl text-2xl font-semibold">
                            Pranjal Gupta
                        </p>
                        <p className={"desktop:text-2xl text-lg italic text-neutral-400 " + roboto_mono.className}>
                            {rolesMix}
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Impedit ex expedita temporibus dolore sapiente
                            provident aliquam molestias eum aliquid repudiandae,
                            sit exercitationem ullam explicabo quos nam. Sint et
                            eaque doloribus.
                        </p>
                    </div>
                </div>
                <div className="w-full items-center justify-center flex flex-row gap-6 flex-wrap">
                    <a
                        href="https://github.com/pranjalg420"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-0 bg-stone-800 rounded hover:translate-x-1 transition-all"
                    >
                        <span className="px-4 py-2">
                            <GitHub />
                        </span>
                        <p className="bg-stone-700 w-full px-6 py-4 rounded-r desktop:text-lg text-base">
                            GitHub
                        </p>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pranjal-gupta-10a595224/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-0 bg-blue-900 rounded hover:translate-x-1 transition-all"
                    >
                        <span className="px-4 py-2">
                            <Linkedin />
                        </span>
                        <p className="bg-blue-800 w-full px-6 py-4 rounded-r desktop:text-lg text-base">
                            LinkedIn
                        </p>
                    </a>
                    <a
                        href="mailto:pranjalg1122@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-0 bg-red-900 rounded hover:translate-x-1 transition-all"
                    >
                        <span className="px-4 py-2">
                            <Mail />
                        </span>
                        <p className="bg-red-800 w-full px-6 py-4 rounded-r desktop:text-lg text-base">
                            E-Mail
                        </p>
                    </a>
                    <a
                        href="https://twitter.com/PranjalG420"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-0 bg-sky-900 rounded hover:translate-x-1 transition-all"
                    >
                        <span className="px-4 py-2">
                            <Twitter />
                        </span>
                        <p className="bg-sky-800 w-full px-6 py-4 rounded-r desktop:text-lg text-base">
                            Twitter
                        </p>
                    </a>
                </div>
            </div>
            <div className="h-[100vh] border-2 w-full" id="about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium earum, nihil a obcaecati incidunt, neque quae
                possimus facilis maxime ut fugit quidem doloribus impedit
                commodi assumenda qui dicta optio aperiam. Repellat earum error
                ipsa, autem iusto ut quis veniam doloribus, ipsum quidem
                voluptas voluptatibus culpa rerum, similique accusantium maxime
                odio nostrum blanditiis ipsam. Et esse nulla dignissimos minus
                ad placeat.
            </div>
            {/* <div className="h-[100vh] bg-gradient-to-b from-emerald-900 via-emerald-700 to-emerald-600 flex flex-col desktop:justify-center items-center desktop:text-4xl text-2xl text-neutral-100 leading-none gap-6">
                <img
                    src="https://avatars.githubusercontent.com/u/95481637?v=4"
                    className="rounded-full desktop:h-40 h-20"
                />
                <div className="flex flex-col items-start">
                    <span className="font-bold desktop:text-5xl">
                        Pranjal Gupta
                    </span>
                    <p>{rolesMix}</p>
                </div>
                <div className="flex flex-row items-center gap-8 justify-center w-full flex-wrap">
                    <a
                        href="https://github.com/PranjalG420"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold "
                        onMouseOver={playGithub}
                    >
                        {github}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pranjal-gupta-10a595224/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold"
                        onMouseOver={playLinkedin}
                    >
                        {linkedin}
                    </a>
                    <a
                        href="mailto:pranjalg1122@gmail.com"
                        className="font-semibold"
                        onMouseOver={playMail}
                    >
                        {mail}
                    </a>
                    <a
                        href="https://twitter.com/PranjalG420"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold"
                        onMouseOver={playTwitter}
                    >
                        {twitter}
                    </a>
                    <a
                        href="https://pranjalg420blog.vercel.app"
                        className="text-blue-600"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        blog
                    </a>
                </div>
            </div>
            <div
                className="desktop:h-[100vh] flex flex-col justify-center px-24 gap-4 w-full"
                id="about"
            >
                <p className="desktop:text-6xl">About Me</p>
                <p className="desktop:text-lg">
                    My name is Pranjal Gupta. I'm an aspiring web developer who
                    is constantly looking for new challenges and opportunities
                    to test and expand my skillset. I am passionate about
                    creating high-quality, user-friendly websites and
                    applications that are highly functional. If you are looking
                    for a dedicated and reliable developer, look no further! I
                    love to learn everything about the web and new interest I
                    find, I make sure to write about it on my blog.
                </p>
            </div>
            <div className="desktop:h-[100vh]  w-full" id="projects">
                <p className="h-full flex flex-col justify-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt perspiciatis neque excepturi et exercitationem sunt
                    iste corrupti sit amet dolore provident voluptas laudantium
                    hic, sapiente corporis, vero quos, optio consectetur!
                    Voluptates veritatis id corporis? Deleniti aliquam
                    exercitationem quae numquam praesentium maxime blanditiis
                    illum eveniet debitis non a alias facilis ducimus
                    necessitatibus iure harum dolorem cum, quis laudantium
                    provident temporibus? Earum. Ducimus ratione natus, nulla
                    facere architecto ad! Nisi, reprehenderit modi cum vitae
                    odit culpa facilis non quas rem veniam magni, recusandae
                    libero repellat, optio amet quisquam velit quod iure?
                    Tempora. Suscipit, natus nostrum eaque facilis sapiente,
                    laboriosam, praesentium eos possimus quidem non nam? Et,
                    atque error eos eum pariatur enim beatae! Laudantium,
                    voluptate ex! Temporibus modi nam quaerat sapiente animi.
                    Voluptatibus nesciunt incidunt at dignissimos officia,
                    doloremque eligendi. Soluta asperiores repellat ipsa
                    exercitationem nam, velit eos totam facilis atque
                    repellendus error consequuntur modi maxime quod voluptas
                    excepturi qui iste! Quibusdam?
                </p>
            </div> */}
        </main>
    );
}
