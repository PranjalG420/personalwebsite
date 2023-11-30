"use client";

import { useMix } from "@pranjalg420/usemix";
import { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";
import SocialLinks from "../../components/socialLinks";
import Projects from "../../components/projects";
import About from "../../components/about";

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
        "Tech Guru",
        "Hacker"
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
        }, 2500);

        return () => clearInterval(interval);
    }, [rolesMix]);

    return (
        <main>
            <title>Pranjal Gupta | Web Developer</title>
            <div className="min-h-[92vh] w-full gap-6 flex flex-col justify-center">
                <div className="flex sm:flex-row flex-col gap-4 sm:items-center items-start justify-center">
                    <img
                        src="https://github.com/pranjalg1122.png"
                        className="rounded-full desktop:h-40 h-28"
                    />
                    <div className="flex flex-col sm:gap-1">
                        <p className="desktop:text-4xl text-2xl font-medium">
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
                            A web developer from India who loves everything
                            about programming. Proficient in TypeScript, React, Next.js, Node.js, Express.js. I
                            also have experience in UI/UX design and graphic design.
                        </p>
                    </div>
                </div>
                <SocialLinks />
            </div>
            <div
                className="min-h-[100vh] flex flex-col justify-start pt-[8vh]"
                id="about"
            >
                <About />
            </div>
            <div
                className="min-h-[100vh] flex flex-col justify-start pt-[8vh]"
                id="projects"
            >
                <Projects />
            </div>
        </main>
    );
}
