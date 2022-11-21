import Head from "next/head";
import React from "react";
import Container from "../components/container";
import Link from "next/link";

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
                <p className="text-base tablet:text-lg mt-4 italic text-zinc-600">
                    It seems what you are trying to find does not exist. Perhaps
                    you entered something wrong.
                </p>
                <Link href="/">
                    <a className="px-4 py-2 emerald-bg rounded-lg text-xl tablet:text-xl font-semibold mt-4 transition-all tablet:hover:ml-2">
                        Home
                    </a>
                </Link>
            </div>
        </Container>
    );
}
