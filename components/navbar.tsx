import React from "react";

export default function navbar() {
    return (
        <div className="z-20 min-h-[75px] sticky top-0 right-0 left-0 min-w-full flex justify-around items-center text-sm md:text-xl font-semibold">
            <div className="mx-10 flex justify-between">
                <a href="/" className="px-4 py-2 rounded-lg hover:bg-zinc-800 ">
                    Home
                </a>
                {/* <a href="#" className="px-4 py-2">
                    Guestbook
                </a> */}
            </div>
        </div>
    );
}
