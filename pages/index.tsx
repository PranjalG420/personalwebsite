import Container from "../components/container";
import Head from "next/head";
import { useMix } from "@pranjalg420/usemix";

export default function Home() {
    const [github, playGithub] = useMix({
        entry: "GitHub",
        tick: 2,
        delay: 50,
        upper: true,
    });
    const [linkedin, playLinkedin] = useMix({
        entry: "Linkedin",
        tick: 2,
        delay: 50,
        upper: true,
    });
    const [twitter, playTwitter] = useMix({
        entry: "Twitter",
        tick: 2,
        delay: 50,
        upper: true,
    });
    const [mail, playMail] = useMix({
        entry: "mail",
        tick: 2,
        delay: 50,
        upper: true,
    });

    return (
        <Container>
            <Head>
                <title>Pranjal Gupta</title>
            </Head>
            <div className="flex flex-col desktop:text-[3rem] text-2xl leading-none items-start">
                <p>
                    Hey, my name is Pranjal Gupta! I regularly create projects
                    on{" "}
                    <a
                        href="https://github.com/PranjalG420"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500"
                        onMouseOver={playGithub}
                    >
                        {github}
                    </a>
                    . Check out my{" "}
                    <a
                        href="https://www.linkedin.com/in/pranjal-gupta-10a595224/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A66C2]"
                        onMouseOver={playLinkedin}
                    >
                        {linkedin}
                    </a>{" "}
                    and tweet at me on{" "}
                    <a
                        href="https://twitter.com/PranjalG420"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1DA1F2]"
                        onMouseOver={playTwitter}
                    >
                        {twitter}
                    </a>{" "}
                    or send me a{" "}
                    <a
                        href="mailto:pranjalg1122@gmail.com"
                        className="text-red-600"
                        onMouseOver={playMail}
                    >
                        {mail}
                    </a>
                    .
                </p>
            </div>
        </Container>
    );
}
