import React from "react";
import NextLink from "next/link";
import {
    Anchor,
    ChevronRight,
    ChevronsRight,
    GitBranch,
    GitHub,
    Link,
} from "react-feather";

export const CustomButton = ({ children, button_function }) => {
    return (
        <button
            onClick={button_function}
            className="px-4 py-2 rounded-lg dark:text-black text-zinc-200 bg-zinc-900 dark:bg-zinc-200 font-semibold text-lg tablet:text-xl transition-all hover:translate-x-1"
        >
            {children}
        </button>
    );
};

export const CustomLink = ({ children, link }) => {
    return (
        <NextLink href={link}>
            <a className="px-4 py-2 rounded-lg dark:text-black text-zinc-200 bg-zinc-900 dark:bg-zinc-200 font-semibold text-lg tablet:text-xl transition-all hover:translate-x-1">
                {children}
            </a>
        </NextLink>
    );
};

// Home Page

export const Indexcard = ({ children }) => {
    return (
        <main className="classHidden flex flex-col items-center justify-center tablet:my-4 my-2 rounded-xl">
            {children}
        </main>
    );
};

export const LinkBlock = ({ link, Icon }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl"
        >
            <Icon
                strokeWidth={2}
                size={30}
                className="tablet:h-12 tablet:w-12 h-8 w-8 p-1 text-black dark:text-white hover:translate-x-1 rounded-xl transition-all"
            />
        </a>
    );
};

export const PostBlock = ({ children, link }) => {
    return (
        <div className="w-full mb-4 emerald-bg rounded-xl p-[5px] tablet:w-[275px]">
            <div className="flex flex-col dark-bg rounded-xl text-base px-4 py-2 tablet:h-[150px] font-semibold justify-between">
                <p>{children}</p>
                <NextLink href={link}>
                    <a className="flex flex-row items-center text-zinc-500 tablet:hover:text-black dark:tablet:hover:text-white tablet:hover:underline transition-all">
                        Read More{" "}
                        <Link
                            strokeWidth={2}
                            size={300}
                            className="ml-1 tablet:w-4 tablet:h-4 w-3 h-3"
                        ></Link>
                    </a>
                </NextLink>
            </div>
        </div>
    );
};

// Project Page

export const ProjectBlock = ({ children, title, gitLink, siteLink }) => {
    return (
        <div className="rounded-xl w-full flex flex-col gap-2">
            <div className="flex flex-col dark-bg rounded-xl p-2">
                <p className="default-subtitle">{title}</p>
                <p className="default-text my-2">{children}</p>
                <div className="flex flex-row gap-6 justify-center items-center">
                    <LinkBlock link={gitLink} Icon={GitHub}></LinkBlock>
                    <LinkBlock link={siteLink} Icon={Link}></LinkBlock>
                </div>
            </div>
            <div className="border-b-2 dark:border-b-zinc-200 border-b-zinc-900 w-full mb-2"></div>
        </div>
    );
};

// Tools Page

export const ToolBlock = ({ children, link, text }) => {
    return (
        <div className="flex flex-col tablet:my-1 ml-8">
            <div className="flex flex-row items-center">
                <ChevronRight
                    strokeWidth={2}
                    size={300}
                    className="w-4 h-4 tablet:w-6 tablet:h-6"
                />
                <NextLink href={link}>
                    <a
                        className="text-blue-600 tablet:text-xl text-base hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {children}
                    </a>
                </NextLink>
            </div>
            <div className="flex flex-row items-center ml-4">
                <ChevronsRight
                    strokeWidth={2}
                    size={300}
                    className="w-4 h-4 tablet:w-6 tablet:h-6"
                />
                <div className="default-text italic">{text}</div>
            </div>
        </div>
    );
};

export const TitleBlock = ({ children }) => {
    return (
        <p className="default-subtitle flex flex-row items-center">
            <Anchor
                strokeWidth={2}
                size={300}
                className="w-4 h-4 tablet:w-5 tablet:h-5 text-zinc-500 mr-1"
            />
            {children}
        </p>
    );
};

// Footer

export const FooterIcon = ({ Icon, Link, target }) => {
    return (
        <a
            href={Link}
            target={target}
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-500 transition-all mx-4"
        >
            <Icon
                strokeWidth={2}
                size={300}
                className="w-6 h-6 tablet:w-8 tablet:h-8"
            />
        </a>
    );
};
