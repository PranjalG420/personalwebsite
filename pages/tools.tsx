import Head from "next/head";
import React from "react";
import Container from "../components/container";

export default function Tools() {
    return (
        <Container top="flex-0">
            <Head>
                <title>Tools</title>
            </Head>
            <img src="/logo.svg" />
            <div className="flex items-start flex-col tablet:w-[900px]">
                <p className="default-title">Tools Used</p>
                <p className="default-subtitle my-2">Code Editor:</p>
                <p className="default-text">My list of tools.</p>
            </div>
        </Container>
    );
}
