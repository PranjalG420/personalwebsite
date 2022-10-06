import type { NextPage } from "next";
import { GitHub, Linkedin, Code, Twitter } from "react-feather";
import Container from "../components/container";
import Indexcard from "../components/indexcard";

const Home: NextPage = () => {
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
                <p className="text-2xl my-4 tablet:text-4xl font-semibold">
                    Posts
                </p>
                <p className="text-base text-zinc-500">
                    I write about my experiences and what I learn in the
                    development world. I also write about my opinions on
                    different topics. I hope you enjoy reading my posts!
                </p>
                <div className="flex flex-col tablet:flex-row items-start tablet:items-center justify-between min-w-full">
                    <a href="/#">
                        <p className="text-base mr-5 border-2  tablet:w-[270px]">
                            What is the MERN stack?
                        </p>
                    </a>
                    <a href="/#">
                        <p className="text-base mr-5 border-2  tablet:w-[270px]">
                            What is the JAMstack and why is it so popular?
                        </p>
                    </a>
                    <a href="/#">
                        <p className="text-base border-2  tablet:w-[270px]">
                            Why is Rust so popular?
                        </p>
                    </a>
                </div>
            </Indexcard>

            {/* Links */}

            <Indexcard>
                <p className="text-2xl my-4 tablet:text-4xl font-semibold">
                    Links
                </p>
                <p className="text-base text-zinc-500">
                    I post any updates on projects on my repository. Conenct
                    with me on LinkedIn! Check out my Leetcode account to see
                    what programs I've solved! Follow me on Twitter to see what
                    I'm up to!
                </p>
                <div className="mt-4 tablet:mt-5 flex items-center tablet:flex-row justify-around min-w-full">
                    <a
                        href="https://github.com/pranjalG420"
                        target="_blank"
                        className="bg-gradient-to-r from-blue-500 to-blue-800 p-5 tablet:p-16 rounded-xl tablet:hover:translate-x-2 transition-all"
                    >
                        <GitHub
                            strokeWidth={2}
                            size={300}
                            className="tablet:w-14 tablet:h-14 w-6 h-6"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pranjal-gupta-10a595224/"
                        target="_blank"
                        className="bg-gradient-to-r from-blue-500 to-blue-800 p-5 tablet:p-16 rounded-xl tablet:hover:translate-x-2 transition-all"
                    >
                        <Linkedin
                            strokeWidth={2}
                            size={300}
                            className="tablet:w-14 tablet:h-14 w-6 h-6"
                        />
                    </a>
                    <a
                        href="https://leetcode.com/pranjal_gupta1122/"
                        target="_blank"
                        className="bg-gradient-to-r from-blue-500 to-blue-800 p-5 tablet:p-16 rounded-xl tablet:hover:translate-x-2 transition-all"
                    >
                        <Code
                            strokeWidth={2}
                            size={300}
                            className="tablet:w-14 tablet:h-14 w-6 h-6"
                        />
                    </a>
                    <a
                        href="https://twitter.com/PranjalG420"
                        target="_blank"
                        className="bg-gradient-to-r from-blue-500 to-blue-800 p-5 tablet:p-16 rounded-xl tablet:hover:translate-x-2 transition-all"
                    >
                        <Twitter
                            strokeWidth={2}
                            size={300}
                            className="tablet:w-14 tablet:h-14 w-6 h-6"
                        />
                    </a>
                </div>
            </Indexcard>

            {/* Get in Touch */}

            <Indexcard>
                <p className="text-2xl my-4 tablet:text-4xl font-semibold">
                    Get in Touch
                </p>
                <p className="text-base tablet:text-lg mb-2">
                    My email: pranjalg1122@gmail.com
                </p>
            </Indexcard>
        </Container>
    );
};

export default Home;
