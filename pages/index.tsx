import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { GitHub, Linkedin, Twitter } from "react-feather";

const Home: NextPage = () => {
    return (
        <div className="flex flex-col mt-4">
            <div className="flex flex-row bg-zinc-800 p-10 rounded-xl">
                <div className="flex flex-col mr-10 min-h-[200px]">
                    <p className="text-5xl font-semibold mb-2">Pranjal Gupta</p>
                    <p className="text-lg italic mb-5">
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
                    src="https://avatars.githubusercontent.com/u/95481637?v=4"
                    className="rounded-[50%] max-h-[200px]"
                />
            </div>
            <div className="flex flex-col items-center bg-zinc-800 p-8 rounded-xl mt-14">
                <p className="text-4xl font-semibold">My Portfolio</p>
                <div className="mt-10 flex flex-row justify-around min-w-full">
                    <a
                        href="https://github.com/pranjalG420"
                        target="_blank"
                        className="bg-gradient-to-r from-blue-500 to-blue-800 p-[5px] rounded-xl hover:text-zinc-600 transition-all"
                    >
                        <div className="bg-zinc-900 p-16 rounded-xl">
                            <GitHub
                                strokeWidth={2}
                                size={300}
                                className="md:w-14 md:h-14 w-8 h-8"
                            />
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pranjal-gupta-10a595224/"
                        target="_blank"
                        className="bg-gradient-to-r from-blue-500 to-blue-800 p-[5px] rounded-xl hover:text-zinc-600 transition-all"
                    >
                        <div className="bg-zinc-900 p-16 rounded-xl">
                            <Linkedin
                                strokeWidth={2}
                                size={300}
                                className="md:w-14 md:h-14 w-8 h-8"
                            />
                        </div>
                    </a>
                    <a
                        href="https://twitter.com/PranjalG420"
                        target="_blank"
                        className="bg-gradient-to-r from-blue-500 to-blue-800 p-[5px] rounded-xl hover:text-zinc-600 transition-all"
                    >
                        <div className="bg-zinc-900 p-16 rounded-xl">
                            <Twitter
                                strokeWidth={2}
                                size={300}
                                className="md:w-14 md:h-14 w-8 h-8"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
