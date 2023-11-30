import Image from "next/image";
import {
    GitHub,
    Linkedin,
    Twitter,
    Mail,
    BookOpen,
    FileText,
} from "react-feather";
import { IconBlock } from "./iconblock";

const socials = [
    {
        key: 1,
        name: "GitHub",
        icon: GitHub,
        link: "https://github.com/PranjalG1122",
    },
    {
        key: 2,
        name: "LinkedIn",
        icon: Linkedin,
        link: "https://www.linkedin.com/in/pranjalg1122/",
    },
    {
        key: 3,
        name: "E-Mail",
        icon: Mail,
        link: "mailto:pranjalg1122@gmail.com",
    },
    {
        key: 4,
        name: "Twitter",
        icon: Twitter,
        link: "https://twitter.com/pranjalg1122",
    },
    {
        key: 5,
        name: "Blog",
        icon: BookOpen,
        link: "https://pranjalg1122blog.vercel.app/",
    },
    {
        key: 6,
        name: "Resume",
        icon: FileText,
        link: "./Pranjal_Gupta_Resume.pdf",
    },
];

export default function SocialLinks() {
    return (
        <div className="w-full items-center justify-center md:gap-4 gap-2 flex flex-row flex-wrap text-white">
            {socials.map(({ key, name, icon, link }) => {
                return (
                    <a
                        key={key}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-neutral-950 flex flex-row items-center justify-center gap-2 border border-neutral-700 mobile:w-auto w-full rounded hover:bg-neutral-800 transition-all min-w-[10rem] px-4 py-2"
                    >
                        {(icon != Twitter && <IconBlock Icon={icon} />) || (
                            <Image
                                src="/twitter.png"
                                alt=""
                                width={40}
                                height={32}
                            />
                        )}
                        <p className="desktop:text-lg text-base">{name}</p>
                    </a>
                );
            })}
        </div>
    );
}
