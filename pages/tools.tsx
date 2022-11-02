import Head from "next/head";
import React from "react";
import Container from "../components/container";
import { ChevronRight, ChevronsRight } from "react-feather";
import Link from "next/link";

export function ToolBlock({ children, link, title }) {
    return (
        <div className="flex flex-row items-center justify-start">
            <ChevronRight strokeWidth={2} size={300} className="w-6 h-6" />
            <Link href={link}>
                <a
                    className="text-blue-600 tablet:text-xl text-base"
                    target="_blank"
                >
                    {children}
                </a>
            </Link>
            <ChevronsRight strokeWidth={2} size={300} className="w-6 h-6" />
            {/* <div className="italic tablet:text-base text-base dark:text-zinc-500 text-zinc-700">
                {title}
            </div> */}
        </div>
    );
}

export default function Tools() {
    return (
        <Container top="flex-0">
            <Head>
                <title>Tools</title>
            </Head>
            <p className="default-title">Tools Used</p>
            <p className="default-text mb-2">My list of tools.</p>
            <ToolBlock
                link="https://nextjs.org/"
                title="Awesome framework for React"
            >
                NextJs
            </ToolBlock>
            {/* <img src="/logo.svg" /> */}
        </Container>
    );
}
