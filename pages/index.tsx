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
    const [guestbookentry, setGuestbookentry] = useState("");

    const [text, play] = useMix({
        entry: "GITHUB",
        tick: 2,
        delay: 50,
        upper: true,
    });
    const [text2, play2] = useMix({
        entry: "Joe",
        tick: 2,
        delay: 50,
        upper: true,
    });

    return (
        <Container>
            <Head>
                <title>Pranjal Gupta</title>
            </Head>
            <div className="w-full flex flex-col text-[8rem] leading-none items-start">
                <a
                    href="https://github.com/PranjalG420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono"
                    onMouseOver={play}
                >
                    {text}
                </a>
                <a
                    href="https://github.com/PranjalG420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono"
                    onMouseOver={play2}
                >
                    {text2}
                </a>
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
