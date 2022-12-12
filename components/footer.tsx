import React from "react";
import { Mail, Tool, GitBranch, Figma } from "react-feather";
import Link from "next/link";
import { FooterIcon } from "./smallcomponents";

export default function Footer() {
    return (
        <div className="tablet:mt-2 flex justify-center relative z-0 min-h-[60px] bottom-0 left-0 right-0 w-full items-center">
            <FooterIcon
                Link="mailto:pranjalg1122@gmail.com"
                target=""
                Icon={Mail}
            ></FooterIcon>
            <Link href="/tools">
                <a className="text-zinc-600 hover:text-zinc-500 transition-all mx-4">
                    <Tool
                        strokeWidth={2}
                        size={300}
                        className="w-6 h-6 tablet:w-8 tablet:h-8"
                    />
                </a>
            </Link>
            <FooterIcon
                Link="https://github.com/PranjalG420/personalwebsite"
                target="_blank"
                Icon={GitBranch}
            ></FooterIcon>
            <FooterIcon
                Link="https://www.figma.com/@pranjalg420"
                target="_blank"
                Icon={Figma}
            ></FooterIcon>
        </div>
    );
}
