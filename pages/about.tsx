import Head from "next/head";
import { useState } from "react";
import Container from "../components/container";
import projectData from "../components/projectData";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from "next/image";

export default function Projects() {
    return (
        <Container>
            <Head>
                <title>About</title>
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
            <h1 className="desktop:text-4xl text-2xl font-semibold desktop:mt-16 mt-8">
                My Projects
            </h1>
            <div className="flex flex-row flex-wrap justify-around items-center mt-4 border-t-2">
                {projectData.map((item) => {
                    const [slide, setSlide] = useState<number>(0);
                    return (
                        <div
                            key={item.id}
                            className="flex desktop:flex-row flex-col items-start gap-2 border-b-2 py-6"
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
                                {/* <Image
                                    src={item.images[slide]}
                                    alt="image not found"
                                    fill={true}
                                /> */}

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
                                <div className="flex flex-col items-start">
                                    <a
                                        href={item.gitLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={item.siteLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
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
