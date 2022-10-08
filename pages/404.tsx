import React from "react";
import Container from "../components/container";

export default function errorPage() {
    return (
        // <div className="flex flex-col items-center justify-around h-full mt-5">

        <Container top="flex-1">
            <div className="flex flex-col items-center justify-around">
                <p className="text-3xl tablet:text-5xl font-semibold">
                    404 Not Found
                </p>
                <p className="text-base tablet:text-lg mt-4 italic text-zinc-600">
                    It seems what you are trying to find does not exist. Perhaps
                    you entered something wrong.
                </p>
                <a
                    href="/"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 text-xl tablet:text-2xl mt-4 transition-all tablet:hover:ml-2"
                >
                    Home
                </a>
            </div>
        </Container>
    );
}
