import Head from "next/head";
import React from "react";
import Container from "../components/container";
import Link from "next/link";
import { CustomLink } from "../components/smallcomponents";

export default function errorPage() {
    return (
        <Container top="flex-1">
            <Head>
                <title>404</title>
            </Head>
            <div className="flex flex-col items-center justify-around mx-auto">
                <p className="text-3xl tablet:text-5xl font-semibold">
                    404 Not Found
                </p>
                <p className="text-base tablet:text-lg my-4 italic text-zinc-600">
                    It seems what you are trying to find does not exist. Perhaps
                    you entered something wrong.
                </p>
                <CustomLink link="/">Home</CustomLink>
            </div>
        </Container>
    );
}
