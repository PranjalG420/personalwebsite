import React from "react";

export default function errorPage() {
    return (
        <div className="flex flex-col items-center justify-center mt-40 md:mt-60">
            <p className="text-3xl md:text-5xl font-semibold">404 Not Found</p>
            <p className="text-base md:text-xl mt-4 italic text-zinc-600">
                It seems that the page you are looking for simply does not
                exist.
            </p>
            <a
                href="/"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 text-xl md:text-2xl mt-4 transition-all hover:ml-2"
            >
                Home
            </a>
        </div>
    );
}
