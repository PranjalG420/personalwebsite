"use client";

import { useMix } from "@pranjalg420/usemix";
import { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";
import SocialLinks from "../../components/socialLinks";
import Projects from "../../components/projects";

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
            <div className="h-[92vh] w-full gap-6 flex flex-col justify-center">
                <div className="flex sm:flex-row flex-col gap-4 desktop:items-center items-start justify-center">
                    <img
                        src="https://avatars.githubusercontent.com/u/95481637?v=4"
                        className="rounded-full desktop:h-50 h-28"
                    />
                    <div className="flex flex-col sm:gap-2">
                        <p className="desktop:text-6xl text-2xl font-semibold">
                            Pranjal Gupta
                        </p>
                        <p
                            className={
                                "desktop:text-2xl text-lg italic text-neutral-500 " +
                                roboto_mono.className
                            }
                        >
                            {rolesMix}
                        </p>
                        <p className="desktop:text-xl text-base">
                            An aspiring web developer from India who loves
                            everything about programming. Proficient in
                            JavaScript, TypeScript, React, Next.js, Node.js,
                            Express.js. I also have experience in UI/UX design
                            and graphic design.
                        </p>
                    </div>
                </div>
                <SocialLinks />
            </div>
            <div className="h-[100vh] flex flex-col justify-center" id="about">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium earum, nihil a obcaecati incidunt, neque quae
                possimus facilis maxime ut fugit quidem doloribus impedit
                commodi assumenda qui dicta optio aperiam. Repellat earum error
                ipsa, autem iusto ut quis veniam doloribus, ipsum quidem
                voluptas voluptatibus culpa rerum, similique accusantium maxime
                odio nostrum blanditiis ipsam. Et esse nulla dignissimos minus
                ad placeat.
            </div>
            <div
                className="h-[200vh] flex flex-col justify-start py-[8vh]"
                id="projects"
            >
                <Projects />
            </div>
        </main>
    );
}
