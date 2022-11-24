import Head from "next/head";
import React from "react";
import Container from "../components/container";
import { ProjectBlock } from "../components/smallcomponents";

export default function Projects() {
    return (
        <Container top="flex-0">
            <Head>
                <title>Projects</title>
            </Head>
            <ProjectBlock
                title="Swift Songs"
                gitLink="https://github.com/PranjalG420/SwiftSongs"
                siteLink={"https://swiftsongs.vercel.app/"}
            >
                This is my first major React project. It involves the use of
                Javascript, HTML, CSS and Tailwind CSS for styling. It is a
                music player that uses uploaded songs. It is hosted on Vercel.
                Some features about this player: It has a button for shuffling
                songs, a button to loop the current song, a seek bar, a volume
                bar and a playlist.
            </ProjectBlock>
        </Container>
    );
}
