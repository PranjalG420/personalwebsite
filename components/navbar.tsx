import React, { useEffect, useState } from "react";
import { Sun, Moon, LogIn, LogOut, Home, Edit2, BookOpen } from "react-feather";
import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function IconBlock({ Icon }) {
    return (
        <Icon
            strokeWidth={2}
            size={30}
            className="tablet:w-8 tablet:h-8 w-6 h-6"
        />
    );
}

export default function navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // Getting user data
    const { data: session } = useSession();

    useEffect(() => setMounted(true), []);
    return (
        <div className="flex justify-between max-w-[1200px] w-full z-20 min-h-[60px] sticky top-0 right-0 left-0 backdrop-blur items-center text-sm tablet:text-xl font-semibold">
            <div className="flex items-center">
                <Link href="/">
                    <a className="px-4 py-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
                        <Home className="tablet:hidden visible" />
                        <p className="max-tablet:hidden">Home</p>
                    </a>
                </Link>
                <Link href="/projects">
                    <a className="px-4 py-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 tablet:w-auto w-full text-center transition-all">
                        <Edit2 className="tablet:hidden visible" />
                        <p className="max-tablet:hidden">Projects</p>
                    </a>
                </Link>
                <Link href="/guestbook">
                    <a className="px-4 py-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 tablet:w-auto w-full text-center transition-all">
                        <BookOpen className="tablet:hidden visible" />
                        <p className="max-tablet:hidden">Guestbook</p>
                    </a>
                </Link>
            </div>
            <div className="flex flex-row">
                {(session && (
                    <div className="flex flex-row items-center">
                        <img
                            src={session.user.image}
                            className="max-h-8 tablet:max-h-9 px-4 rounded-[50%]"
                        ></img>
                        <button
                            onClick={() => signOut()}
                            className="hover:bg-zinc-200 dark:hover:bg-zinc-800 px-4 py-2 rounded transition-all"
                        >
                            <IconBlock Icon={LogOut} />
                        </button>
                    </div>
                )) || (
                    <button
                        onClick={() => signIn()}
                        className="hover:bg-zinc-200 dark:hover:bg-zinc-800 px-4 py-2 rounded transition-all"
                    >
                        <IconBlock Icon={LogIn} />
                    </button>
                )}
                <button
                    className="hover:bg-zinc-200 dark:hover:bg-zinc-800 px-4 py-2 rounded transition-all"
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                >
                    {mounted && theme == "dark" ? (
                        <IconBlock Icon={Sun} />
                    ) : (
                        <IconBlock Icon={Moon} />
                    )}
                </button>
            </div>
        </div>
    );
}
