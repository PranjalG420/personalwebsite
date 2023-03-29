import { GitHub, Linkedin, Twitter, Mail, BookOpen } from "react-feather";

export default function SocialLinks() {
    return (
        <div className="w-full items-center justify-center flex flex-row gap-6 flex-wrap">
            <a
                href="https://github.com/pranjalg420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-0 bg-stone-800 rounded hover:translate-x-1 transition-all min-w-[10rem] text-center"
            >
                <span className="px-4 py-2">
                    <GitHub />
                </span>
                <p className="bg-stone-700 w-full px-6 py-4 rounded-r desktop:text-lg text-base">
                    GitHub
                </p>
            </a>
            <a
                href="https://www.linkedin.com/in/pranjal-gupta-10a595224/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-0 bg-blue-900 rounded hover:translate-x-1 transition-all min-w-[10rem] text-center"
            >
                <span className="px-4 py-2">
                    <Linkedin />
                </span>
                <p className="bg-blue-800 w-full px-6 py-4 rounded-r desktop:text-lg text-base">
                    LinkedIn
                </p>
            </a>
            <a
                href="mailto:pranjalg1122@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-0 bg-red-900 rounded hover:translate-x-1 transition-all min-w-[10rem] text-center"
            >
                <span className="px-4 py-2">
                    <Mail />
                </span>
                <p className="bg-red-800 w-full px-6 py-4 rounded-r desktop:text-lg text-base">
                    E-Mail
                </p>
            </a>
            <a
                href="https://twitter.com/PranjalG420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-0 bg-sky-900 rounded hover:translate-x-1 transition-all min-w-[10rem] text-center"
            >
                <span className="px-4 py-2">
                    <Twitter />
                </span>
                <p className="bg-sky-800 w-full px-6 py-4 rounded-r desktop:text-lg text-base">
                    Twitter
                </p>
            </a>
            <a
                href="https://twitter.com/PranjalG420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-0 bg-slate-700 rounded hover:translate-x-1 transition-all min-w-[10rem] text-center"
            >
                <span className="px-4 py-2">
                    <BookOpen />
                </span>
                <p className="bg-slate-600 w-full px-6 py-4 rounded-r desktop:text-lg text-base">
                    Blog
                </p>
            </a>
        </div>
    );
}
