import Head from "next/head";
import React, { useState } from "react";
import Container from "../components/container";
import projectData from "../components/projectData";
import { ProjectBlock } from "../components/smallcomponents";

export default function Projects() {
    const [search, setSearch] = useState("");
    const maxID = projectData
        .map((item) => item.id)
        .reduce((acc) => acc + 1, 0);
    const projects = projectData.map((item) => {
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
        );
    });
    return (
        <Container top="flex-0">
            <Head>
                <title>Projects</title>
            </Head>
            <input
                type="search"
                className="p-2 font-semibold dark:bg-zinc-800 bg-zinc-200 rounded w-full my-2"
                placeholder={
                    "Search through " +
                    maxID +
                    (maxID == 1 ? " project" : " projects")
                }
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            ></input>
            {projects}
        </Container>
    );
}
