"use client";

import Head from "next/head";
import { useState } from "react";
import projectData from "../../../components/projectData";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from "next/image";

export default function Projects() {
    return (
        <main>
            <Head>
                <title>About</title>
            </Head>
            <div className="flex desktop:flex-row flex-col items-center justify-center">
                <div className="flex flex-col">
                    <h1 className="desktop:text-4xl text-2xl font-semibold mb-2">
                        Who am I?
                    </h1>
                    <p className="desktop:text-xl text-base">
                        My name is Pranjal Gupta. I'm an aspiring web developer
                        who is constantly looking for new challenges and
                        opportunities to test and expand my skillset. I am
                        passionate about creating high-quality, user-friendly
                        websites and applications that are highly functional. If
                        you are looking for a dedicated and reliable developer,
                        look no further!
                    </p>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 desktop:mt-0 mt-8">
                    <svg
                        width="209"
                        height="98"
                        viewBox="0 0 209 98"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            id="signature"
                            d="M38 9C33.7673 27.8183 29.3866 46.1857 21.7778 64C18.5444 71.5702 12.3787 87.5711 4.22222 92.5556C-0.792464 95.6201 3.62493 80.6446 5.05555 74.9444C10.7724 52.1662 18.2519 24.9495 35.2778 7.72222C49.3612 -6.52785 65.2546 6.53353 54.3333 21.7778C48.4803 29.9476 39.1744 34.0478 32.2222 41C30.9982 42.224 23.2234 50.5524 29.1111 48.1111C42.9115 42.389 56.6052 40.2222 71.6111 40.2222C89.011 40.2222 106.299 44.6354 123.667 43.7778C132.797 43.3269 136.354 38.9734 141.5 31.9444C144.638 27.6588 147.483 23.145 150.333 18.6667C151.366 17.0443 140.95 17.5546 140 17.8889C128.309 22.0023 118.043 35.8874 111 45.2778C99.9998 59.9447 90.6263 75.3813 76.4444 87.3333C71.9159 91.1498 65.2992 96.9563 58.7222 95.9444C55.3612 95.4274 56.862 83.4653 57.6667 81.6667C63.935 67.6551 95.1566 71.1583 106.667 71.0556C140.109 70.757 173.562 71.5419 207 72"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            </div>

            {/* <h1 className="desktop:text-4xl text-2xl font-semibold mt-16">
                My Skills
            </h1>
            <div className="flex flex-row flex-wrap">

            </div> */}
            <h1 className="desktop:text-4xl text-2xl font-semibold mt-8">
                My Projects
            </h1>
            <div className="flex flex-row flex-wrap justify-around items-center mt-4 border-t-2 border-neutral-600">
                {projectData.map((item) => {
                    const [slide, setSlide] = useState<number>(0);
                    return (
                        <div
                            key={item.id}
                            className="flex desktop:flex-row flex-col items-start gap-2 border-b-2 border-neutral-600 py-6"
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

                                {/* <img
                                    src={item.images[slide]}
                                    className={
                                        "desktop:max-w-[34rem] w-[34rem] rounded "
                                    }
                                /> */}
                                <Image
                                    src={item.images[slide]}
                                    alt="image not found"
                                    width={1600}
                                    height={900}
                                    className="object-cover desktop:max-w-[34rem] max-h-64"
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
        </main>
    );
}
