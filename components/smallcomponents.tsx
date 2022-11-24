import React from "react";
import NextLink from "next/link";
import { Link } from "react-feather";

export const CustomButton = ({ children, button_function }) => {
    return (
        <button
            onClick={button_function}
            className="px-4 py-2 rounded-lg emerald-bg text-lg tablet:text-xl transition-all tablet:hover:ml-2"
        >
            {children}
        </button>
    );
};
export const CustomLink = ({ children, link }) => {
    return (
        <NextLink href={link}>
            <a className="px-4 py-2 rounded-lg emerald-bg text-lg tablet:text-xl transition-all tablet:hover:ml-2">
                {children}
            </a>
        </NextLink>
    );
};

export const Indexcard = ({ children }) => {
    return (
        <main className="classHidden flex flex-col items-center justify-center tablet:my-4 my-2 rounded-xl">
            {children}
        </main>
    );
};

export const LinkBlock = ({ link, Icon }) => {
    return (
        <div className="emerald-bg p-[5px] rounded-xl tablet:hover:translate-x-2 transition-all ">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white aspect-square flex items-center justify-around w-full p-4 md:p-12 tablet:p-16 rounded-xl dark-bg"
            >
                <Icon strokeWidth={2} size={300} className="w-full h-full " />
            </a>
        </div>
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

export const ProjectBlock = ({ children, title, gitLink, siteLink }) => {
    return (
        <div className="emerald-bg rounded-xl p-[3px] w-full">
            <div className="flex flex-col dark-bg rounded-xl p-2">
                <p className="default-subtitle">{title}</p>
                <p className="default-text my-2">{children}</p>
                <div className="flex flex-row items-center">
                    <Link
                        strokeWidth={2}
                        size={300}
                        className="mr-1 tablet:w-4 tablet:h-4 w-3 h-3"
                    ></Link>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={gitLink}
                        className="text-blue-600 hover:underline "
                    >
                        GitHub Link
                    </a>
                </div>
                <div className="flex flex-row items-center">
                    <Link
                        strokeWidth={2}
                        size={300}
                        className="mr-1 tablet:w-4 tablet:h-4 w-3 h-3"
                    ></Link>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={siteLink}
                        className="text-blue-600 hover:underline"
                    >
                        Site Link
                    </a>
                </div>
            </div>
        </div>
    );
};
