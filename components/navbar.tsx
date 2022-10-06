import React from "react";
import { useState } from "react";
import { Sun, Moon } from "react-feather";

export default function navbar() {
    const [theme, setTheme] = useState(true);
    function switchTheme() {
        setTheme(!theme);
    }
    return (
        <div className="flex justify-between z-20 min-h-[60px] sticky top-0 right-0 backdrop-blur left-0 items-center text-sm md:text-xl font-semibold">
            <div className="flex justify-center">
                <a
                    href="/"
                    className="px-4 py-2 rounded-lg hover:bg-zinc-800 transition-all"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="px-4 py-2 rounded-lg hover:bg-zinc-800 transition-all"
                >
                    Guestbook
                </a>
            </div>
            <button
                className="hover:bg-zinc-800 px-4 py-2 rounded transition-all"
                onClick={switchTheme}
            >
                {theme ? (
                    <Sun
                        strokeWidth={2}
                        size={300}
                        className="md:w-8 md:h-8 w-4 h-4"
                    />
                ) : (
                    <Moon
                        strokeWidth={2}
                        size={300}
                        className="md:w-8 md:h-8 w-4 h-4"
                    />
                )}
            </button>
        </div>
    );
}
