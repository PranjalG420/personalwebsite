import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { GitHub, Linkedin, Twitter } from "react-feather";

const Home: NextPage = () => {
    return (
        <div className="flex flex-col mt-4 md:mt-16">
            {/* Intro to me */}

            <div className="flex flex-col-reverse md:flex-row items-start bg-zinc-800 p-5 md:p-10 rounded-xl">
                <div className="flex flex-col md:mr-10 min-h-[200px]">
                    <p className="text-2xl md:text-5xl font-semibold mb-2">Pranjal Gupta</p>
                    <p className="text-base md:text-lg italic mb-2">
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
                    className="rounded-[50%] max-h-[100px] md:max-h-[200px] mb-2 mb:mb-0"
                />
            </div>

            {/* Socials */}

            <div className="flex flex-col items-center bg-zinc-800 p-5 md:p-10 rounded-xl mt-8 md:mt-16">
                <p className="text-2xl md:text-4xl font-semibold ">My Portfolio</p>
                <p className="mt-4 text-base text-zinc-500">
                    I post any updates on projects on my repository. Conenct
                    with me on LinkedIn! Follow my Twitter for my thoughts on
                    topics and any updates on future projects.
                </p>
                <div className="mt-4 md:mt-10 flex items-center md:flex-row justify-around min-w-full">
                    <a
                        href="https://github.com/pranjalG420"
                        target="_blank"
                        className="bg-gradient-to-r from-blue-500 to-blue-800 p-[5px] mr-2 rounded-xl hover:text-zinc-600 transition-all"
                    >
                        <div className="bg-zinc-900 p-6 md:p-16 rounded-xl">
                            <GitHub
                                strokeWidth={2}
                                size={300}
                                className="md:w-14 md:h-14 w-6 h-6"
                            />
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pranjal-gupta-10a595224/"
                        target="_blank"
                        className="bg-gradient-to-r from-blue-500 to-blue-800 p-[5px] mr-2 rounded-xl hover:text-zinc-600 transition-all"
                    >
                        <div className="bg-zinc-900 p-6 md:p-16 rounded-xl">
                            <Linkedin
                                strokeWidth={2}
                                size={300}
                                className="md:w-14 md:h-14 w-6 h-6"
                            />
                        </div>
                    </a>
                    <a
                        href="https://twitter.com/PranjalG420"
                        target="_blank"
                        className="bg-gradient-to-r from-blue-500 to-blue-800 p-[5px] rounded-xl hover:text-zinc-600 transition-all"
                    >
                        <div className="bg-zinc-900 p-6 md:p-16 rounded-xl">
                            <Twitter
                                strokeWidth={2}
                                size={300}
                                className="md:w-14 md:h-14 w-6 h-6"
                            />
                        </div>
                    </a>
                </div>
            </div>

            {/* Get in Touch */}

            <div className="flex flex-col items-center bg-zinc-800 p-10 rounded-xl mt-16">
                <p className="text-4xl font-semibold">Get in Touch</p>
                <p>email</p>
                <p></p>
            </div>
        </div>
    );
};

export default Home;
