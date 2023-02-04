import Head from "next/head";
import React, { useState } from "react";
import Container from "../components/container";
import projectData from "../components/projectData";

export default function Projects() {
    const [search, setSearch] = useState<string>("");
    const maxID = projectData
        .map((item) => item.id)
        .reduce((acc) => acc + 1, 0);

    return (
        <Container>
            <Head>
                <title>Projects</title>
            </Head>
            <h1 className="desktop:text-4xl text-2xl font-semibold mb-2">
                Who am I?
            </h1>
            <p className="desktop:text-xl text-base">
                My name is Pranjal Gupta. I'm an aspiring web developer who is
                constantly looking for new challenges and opportunities to test
                and expand my skillset. I am passionate about creating
                high-quality, user-friendly websites and applications that are
                highly functional. If you are looking for a dedicated and
                reliable developer, look no further!
            </p>
            <h1 className="desktop:text-4xl text-2xl font-semibold mt-16w">
                My projects
            </h1>
            <input
                type="search"
                spellCheck="false"
                className="bg-black py-1 text-neutral-400 focus:outline-none border-b-2 mt-2 mb-6"
                placeholder={
                    "Search through " +
                    maxID +
                    (maxID == 1 ? " project" : " projects")
                }
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            ></input>
            {projectData.map((item) => {
                if (!item.title.toLowerCase().includes(search.toLowerCase())) {
                    return;
                }

                return (
                    <div className="flex flex-col items-start">
                        <h1 className="desktop:text-2xl">{item.title}</h1>
                        <p>{item.text}</p>
                    </div>
                );
            })}

            {/* {projectData.map((item) => {
        return (
            <ProjectBlock
                key={item.id}
                title={item.title}
                gitLink={item.gitLink}
                siteLink={item.siteLink}
                searched={
                    item.title.toLowerCase().includes(search.toLowerCase())
                        ? "visible"
                        : "hidden"
                }
            >
                {item.text}
            </ProjectBlock>
        );} */}
        </Container>
    );
}
