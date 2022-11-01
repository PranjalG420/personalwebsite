import React, { PropsWithChildren, useState } from "react";
import type { GetServerSidePropsContext, NextPage } from "next";
import { GitHub, Linkedin, Code, Twitter, Link } from "react-feather";
import Container from "../components/container";
import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
import Head from "next/head";

export function Indexcard({ children }) {
    return (
        <main className="flex flex-grow flex-col items-center rounded-xl mt-6 tablet:mt-0">
            {children}
        </main>
    );
}

export function LinkBlock({ link, Icon }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white aspect-square flex items-center justify-around w-full bg-gradient-to-r from-blue-500 to-blue-800 p-4 md:p-12 tablet:p-16 rounded-xl tablet:hover:translate-x-2 transition-all"
        >
            <Icon strokeWidth={2} size={300} className="w-full h-full " />
        </a>
    );
}

export function PostBlock({ children, link }) {
    return (
        <div className="w-full mb-4 bg-gradient-to-r from-blue-500 to-blue-800 rounded-xl p-[5px] tablet:w-[275px]">
            <div className="flex flex-col bg-white dark:bg-zinc-900 rounded-xl text-base px-4 py-2 tablet:h-[150px] font-semibold justify-between">
                <p>{children}</p>
                <a
                    href="/#"
                    className="flex flex-row items-center text-zinc-500 tablet:hover:text-black dark:tablet:hover:text-white tablet:hover:underline transition-all"
                >
                    Read More{" "}
                    <Link
                        strokeWidth={2}
                        size={300}
                        className="ml-1 tablet:w-4 tablet:h-4 w-2 h-2"
                    ></Link>
                </a>
            </div>
        </div>
    );
}

export default function Home({ data: guestbook }) {
    const [guestbookentry, setGuestbookentry] = useState("");
    return (
        <Container top="flex-1">
            <Head>
                <title>Pranjal Gupta</title>
            </Head>
            {/* Intro to me */}

            <div className="flex flex-col-reverse tablet:flex-row items-start mt-2">
                <div className="flex flex-col tablet:mr-10 min-h-[200px]">
                    <p className="default-title">Pranjal Gupta</p>
                    <p className="text-base tablet:text-lg italic mb-2">
                        Aspiring Web Developer
                    </p>
                    <p className="default-text">
                        Hey! Thanks for checking out my website! I have a keen
                        interest in learning about everything related to web
                        develpment. I specialize in web and app development
                        mainly, but I'm willing to branch out to other
                        technologies as well. I hope to build as many full stack
                        applications as possible.
                    </p>
                </div>
                <img
                    src="https://github.com/PranjalG420.png"
                    alt="image"
                    className="rounded-[50%] max-h-[100px] tablet:max-h-[200px] mb-2 mb:mb-0"
                />
            </div>

            {/* Posts */}

            <Indexcard>
                <p className="default-title">Posts</p>
                <p className="text-base text-zinc-500">
                    I write about my experiences and what I learn in the
                    development world. I also write about my opinions on
                    different topics. I hope you enjoy reading my posts!
                </p>
                <div className="flex flex-grow flex-col tablet:flex-row items-start mx-1 tablet:items-start justify-between mt-4 min-w-full">
                    <PostBlock link="/#">What is the MERN stack?</PostBlock>
                    <PostBlock link="/#">
                        What is the JAMstack and why is it so popular?
                    </PostBlock>
                    <PostBlock link="/#">Why is Rust so popular?</PostBlock>
                </div>
            </Indexcard>

            {/* Guestbook */}

            <Indexcard>
                <p className="default-title">Guestbook</p>
                <p className="default-text">
                    The Guestbook is a place where you can leave a message for
                    me. This could be anything, some feedback, a helpful
                    comment, appreciation or some wisdom for me and other
                    people.
                </p>
                <div className="border-zinc-500 w-full rounded-xl py-4">
                    <p className="default-subtitle">The latest comment:</p>
                    <div className="bg-zinc-200 dark:bg-zinc-800 rounded-xl mt-4">
                        {JSON.parse(guestbook).map((entry) => (
                            <div
                                key={entry.id}
                                className="flex items-start flex-col tablet:w-[900px] bg-zinc-200 dark:bg-zinc-800 p-4 rounded-xl"
                            >
                                <p className="default-subtitle">
                                    {entry.guestbookentry}
                                </p>
                                <div className="flex flex-row items-center default-text">
                                    <p>{entry.name}</p>
                                    <p className="mx-2">{"/"}</p>
                                    <span>
                                        {format(
                                            new Date(entry.date),
                                            "dd MMMM yyyy"
                                        )}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Indexcard>

            {/* Links */}

            <Indexcard>
                <p className="default-title">Links</p>
                <p className="default-text">
                    I post any updates on projects on my repository. Conenct
                    with me on LinkedIn! Check out my Leetcode account to see
                    what programs I've solved! Follow me on Twitter to see what
                    I'm up to!
                </p>
                <div className="mt-4 tablet:mt-5 flex items-center tablet:flex-row tablet:space-x-10 space-x-5 justify-between min-w-full">
                    <LinkBlock
                        link="https://github.com/pranjalG420"
                        Icon={GitHub}
                    ></LinkBlock>
                    <LinkBlock
                        link="https://www.linkedin.com/in/pranjal-gupta-10a595224/"
                        Icon={Linkedin}
                    ></LinkBlock>
                    <LinkBlock
                        link="https://leetcode.com/pranjal_gupta1122/"
                        Icon={Code}
                    ></LinkBlock>
                    <LinkBlock
                        link="https://twitter.com/PranjalG420"
                        Icon={Twitter}
                    ></LinkBlock>
                </div>
            </Indexcard>

            {/* Get in Touch */}
        </Container>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const prisma = new PrismaClient();
    const guestbook = await prisma.guestbook.findMany({
        orderBy: {
            id: "desc",
        },
        take: 1,
    });
    return {
        props: { data: JSON.stringify(guestbook) },
    };
}
