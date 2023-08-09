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
        primaryColor: "bg-slate-800",
        secondaryColor: "bg-slate-700",
        icon: GitHub,
        link: "https://github.com/pranjalg420",
    },
    {
        key: 2,
        name: "LinkedIn",
        primaryColor: "bg-blue-900",
        secondaryColor: "bg-blue-800",
        icon: Linkedin,
        link: "https://www.linkedin.com/in/pranjal-gupta-10a595224/",
    },
    {
        key: 3,
        name: "E-Mail",
        primaryColor: "bg-red-900",
        secondaryColor: "bg-red-800",
        icon: Mail,
        link: "mailto:pranjalg1122@gmail.com",
    },
    {
        key: 4,
        name: "X/Twitter",
        primaryColor: "bg-sky-950",
        secondaryColor: "bg-sky-900",
        icon: Twitter,
        link: "https://twitter.com/pranjalg420",
    },
    {
        key: 5,
        name: "Blog",
        primaryColor: "bg-neutral-950",
        secondaryColor: "bg-neutral-800",
        icon: BookOpen,
        link: "https://pranjalg420blog.vercel.app",
    },
    {
        key: 6,
        name: "Resume",
        primaryColor: "bg-green-800",
        secondaryColor: "bg-green-700",
        icon: FileText,
        link: "./Pranjal_Gupta_Resume.pdf",
    },
];

export default function SocialLinks() {
    return (
        <div className="w-full items-center justify-center md:gap-4 gap-2 flex flex-row flex-wrap text-white">
            {socials.map(
                ({ key, name, primaryColor, secondaryColor, icon, link }) => {
                    return (
                        <a
                            key={key}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                                "flex flex-row items-center mobile:w-auto w-full rounded hover:-translate-y-1 transition-all min-w-[10rem] text-center " +
                                primaryColor
                            }
                        >
                            {(icon != Twitter && <IconBlock Icon={icon} />) || (
                                <Image
                                    src="/twitter.png"
                                    alt=""
                                    width={40}
                                    height={36}
                                />
                            )}
                            <p
                                className={
                                    "w-full px-6 py-4 rounded-r desktop:text-lg text-base " +
                                    secondaryColor
                                }
                            >
                                {name}
                            </p>
                        </a>
                    );
                }
            )}
        </div>
    );
}
