import Head from "next/head";
import { useState } from "react";
import Container from "../components/container";
import projectData from "../components/projectData";
import { ChevronLeft, ChevronRight } from "react-feather";

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
            {/* <h1 className="desktop:text-4xl text-2xl font-semibold mt-16">
                My Skills
            </h1>
            <div className="flex flex-row flex-wrap">

            </div> */}
            <h1 className="desktop:text-4xl text-2xl font-semibold mt-16">
                My Projects
            </h1>
            <input
                type="search"
                spellCheck="false"
                className="bg-neutral-800 p-1 text-neutral-400 focus:outline-none rounded mt-4"
                placeholder={
                    "Search through " +
                    maxID +
                    (maxID == 1 ? " project" : " projects")
                }
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            ></input>
            <div className="flex flex-row flex-wrap justify-around items-center mt-4 border-t-2">
                {" "}
                {projectData.map((item) => {
                    if (
                        !item.title.toLowerCase().includes(search.toLowerCase())
                    ) {
                        return;
                    }
                    const [slide, setSlide] = useState<number>(0);
                    return (
                        <div
                            key={item.id}
                            className="flex desktop:flex-row flex-col items-start gap-2 border-b-2 w-full py-4"
                        >
                            <div className="relative">
                                {/* Left carousel button */}

                                <button
                                    className={
                                        "absolute bottom-[45%] left-0 p-1 " +
                                        (Object.keys(item.images).length !== 1
                                            ? ""
                                            : "hidden")
                                    }
                                    onClick={() => {
                                        setSlide(
                                            (slide -
                                                1 +
                                                Object.keys(item.images)
                                                    .length) %
                                                Object.keys(item.images).length
                                        );
                                    }}
                                >
                                    <ChevronLeft />
                                </button>

                                {/* Images */}

                                <img
                                    src={item.images[slide]}
                                    className={
                                        "desktop:max-w-[34rem] w-[34rem] rounded "
                                    }
                                />

                                {/* Right carousel button */}

                                <button
                                    className={
                                        "absolute bottom-[45%] right-0 p-1 " +
                                        (Object.keys(item.images).length !== 1
                                            ? ""
                                            : "hidden")
                                    }
                                    onClick={() => {
                                        setSlide(
                                            (slide + 1) %
                                                Object.keys(item.images).length
                                        );
                                    }}
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                            <div className="flex flex-col h-full">
                                <div className="flex flex-col">
                                    <h1 className="desktop:text-3xl text-xl underline">
                                        {item.title}
                                    </h1>
                                    <p>{item.text}</p>
                                </div>
                                <div className="flex flex-col">
                                    <a
                                        href={item.gitLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={item.siteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500"
                                    >
                                        Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

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
