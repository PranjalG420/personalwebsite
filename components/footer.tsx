import React from "react";
import { Mail, Tool, GitBranch } from "react-feather";

export function FooterIcon({ Icon, Link, target }) {
    return (
        <a
            href={Link}
            target={target}
            className="text-zinc-600 hover:text-zinc-500 transition-all mx-4"
        >
            <Icon strokeWidth={2} size={300} className="w-7 h-7" />
        </a>
    );
}

export default function Footer() {
    return (
        <div className="tablet:m-0 flex justify-center relative z-0 min-h-[60px] bottom-0 left-0 right-0 w-full items-center">
            <FooterIcon
                Link="mailto:pranjalg1122@gmail.com"
                target=""
                Icon={Mail}
            ></FooterIcon>
            <FooterIcon Link="/tools" Icon={Tool} target=""></FooterIcon>
            <FooterIcon
                Link="https://github.com/PranjalG420/personalwebsite"
                target="_blank"
                Icon={GitBranch}
            ></FooterIcon>
        </div>
    );
}
