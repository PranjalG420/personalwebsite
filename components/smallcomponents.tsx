import React from "react";
import NextLink from "next/link";
import { Link } from "react-feather";

export function CustomButton({ children, button_function }) {
    return (
        <button
            onClick={button_function}
            className="px-4 py-2 rounded-lg emerald-bg text-lg tablet:text-xl transition-all tablet:hover:ml-2"
        >
            {children}
        </button>
    );
}

export function CustomLink({ children, link }) {
    return (
        <NextLink href={link}>
            <a className="">{children}</a>
        </NextLink>
    );
}

export function Indexcard({ children }) {
    return (
        <main className="classHidden flex flex-col items-center justify-center my-auto rounded-xl mt-6">
            {children}
        </main>
    );
}

export function LinkBlock({ link, Icon }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white aspect-square flex items-center justify-around w-full p-4 md:p-12 tablet:p-16 rounded-xl tablet:hover:translate-x-2 transition-all emerald-bg"
        >
            <Icon strokeWidth={2} size={300} className="w-full h-full " />
        </a>
    );
}

export function PostBlock({ children, link }) {
    return (
        <div className="w-full mb-4 emerald-bg rounded-xl p-[5px] tablet:w-[275px]">
            <div className="flex flex-col text-black dark:text-white bg-white dark:bg-zinc-900 rounded-xl text-base px-4 py-2 tablet:h-[150px] font-semibold justify-between">
                <p>{children}</p>
                <NextLink href={link}>
                    <a
                        rel="noopener noreferrer"
                        className="flex flex-row items-center text-zinc-500 tablet:hover:text-black dark:tablet:hover:text-white tablet:hover:underline transition-all"
                    >
                        Read More{" "}
                        <Link
                            strokeWidth={2}
                            size={300}
                            className="ml-1 tablet:w-4 tablet:h-4 w-2 h-2"
                        ></Link>
                    </a>
                </NextLink>
            </div>
        </div>
    );
}
