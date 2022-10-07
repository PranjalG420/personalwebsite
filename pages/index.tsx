import React, { PropsWithChildren } from "react";
import type { NextPage } from "next";
import { GitHub, Linkedin, Code, Twitter, Link } from "react-feather";
import Container from "../components/container";

export function Indexcard({ children }) {
    return (
        <main className="flex flex-grow flex-col items-center tablet:p-4 rounded-xl mt-6 tablet:mt-0">
            {children}
        </main>
    );
}

export function LinkBlock({ link, Icon }) {
    return (
        <a
            href={link}
            target="_blank"
            className="aspect-square flex items-center justify-around w-full bg-gradient-to-r from-blue-500 to-blue-800 p-4 md:p-12 tablet:p-16 rounded-xl tablet:hover:translate-x-2 transition-all"
        >
            <Icon strokeWidth={2} size={300} className="w-full h-full " />
        </a>
    );
}

export function PostBlock({ children, link }) {
    return (
        <div className="w-full mb-4 bg-gradient-to-r from-blue-500 to-blue-800 rounded-xl p-[5px] tablet:w-[275px]">
            <div className="flex flex-col bg-zinc-900 rounded-xl text-base px-4 py-2 tablet:h-[150px] font-semibold justify-between">
                <p>{children}</p>
                <a
                    href="/#"
                    className="flex flex-row items-center text-zinc-500 tablet:hover:text-white tablet:hover:underline transition-all"
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

const Home: NextPage = () => {
    const session = true;
    return (
        <Container>
            {/* Intro to me */}

            <div className="flex flex-col-reverse tablet:flex-row items-start mt-2 tablet:p-4">
                <div className="flex flex-col tablet:mr-10 min-h-[200px]">
                    <p className="text-2xl tablet:text-5xl font-semibold mb-2">
                        Pranjal Gupta
                    </p>
                    <p className="text-base tablet:text-lg italic mb-2">
                        Aspiring Web Developer
                    </p>
                    <p className="text-base text-zinc-500">
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
                <p className="text-2xl mb-4 tablet:text-4xl font-semibold">
                    Posts
                </p>
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
                <p className="text-2xl mb-4 tablet:text-4xl font-semibold">
                    Guestbook
                </p>
                <p className="text-base text-zinc-500">
                    The Guestbook is a place where you can leave a message for
                    me. This could be anything, some feedback, a helpful
                    comment, appreciation or some wisdom for me and other
                    people.
                </p>
                <div className="border-zinc-500 w-full rounded-xl py-4">
                    <p className="my-2 font-semibold text-xl items-start">
                        The latest comment:
                    </p>
                    <div className="mb-4 bg-zinc-800 px-4 py-4 rounded-xl">
                        <p className="tablet:text-lg text-base">
                            Hey! Your website is so cool!
                        </p>
                        <div className="mx-2 mt-2 tablet:text-lg text-sm text-zinc-500 flex flex-row">
                            <p>testUser</p>
                            <p className="mx-4">/</p>
                            <p>2021-08-01</p>
                        </div>
                    </div>
                    <p className="mb-2 font-semibold text-xl tablet:text-2xl">
                        Sign in to use the Guestbook.
                    </p>
                    <p className="mb-6 text-base tablet:text-lg">
                        And leave a cool message for future viewers!
                    </p>
                    <a
                        href="/signin"
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 text-lg tablet:text-xl mt-6 transition-all hover:ml-2"
                    >
                        Sign In
                    </a>
                    <p className="mt-6 italic text-base text-zinc-500">
                        Only your name will be shown.
                    </p>
                </div>
            </Indexcard>

            {/* Links */}

            <Indexcard>
                <p className="text-2xl mb-4 tablet:text-4xl font-semibold">
                    Links
                </p>
                <p className="text-base text-zinc-500">
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
};

export default Home;
