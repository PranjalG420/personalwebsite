import React, { PropsWithChildren, useEffect, useState } from "react";
import type { GetServerSidePropsContext, NextPage } from "next";
import { GitHub, Linkedin, Code, Twitter, Link } from "react-feather";
import Container from "../components/container";
import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";
import Head from "next/head";
import {
    Indexcard,
    PostBlock,
    LinkBlock,
    CustomLink,
} from "../components/smallcomponents";
import { useMix } from "@pranjalg420/usemix";

export default function Home({ data: guestbook }) {
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
            <div className="w-full flex flex-col desktop:text-[3rem] text-2xl leading-none items-start">
                <p>
                    Hello my name is Pranjal Gupta. I reguarly create projects
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
                    and tweet me on{" "}
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
