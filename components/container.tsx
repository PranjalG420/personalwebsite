import React, { PropsWithChildren } from "react";
import Navbar from "./navbar";

export default function Container({ children }) {
    return (
        <div className="flex flex-col w-full justify-start h-full min-h-screen text-white bg-black">
            <Navbar />
            <main className="flex flex-col mx-auto h-full justify-center flex-1 max-w-[1200px] px-4">
                {children}
            </main>
        </div>
    );
}
