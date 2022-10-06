import React, { PropsWithChildren } from "react";
import Navbar from "./navbar";
//v className="justify-around items-center h-full p-5 tablet:p-20 rounded-xl"
export default function Container({ children }) {
    return (
        <main className="flex flex-1 flex-col justify-around items-center tablet:max-w-[900px] mx-10">
            <Navbar />
            {children}
        </main>
    );
}
