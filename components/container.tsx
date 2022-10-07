import React, { PropsWithChildren } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Container({ children }) {
    return (
        <main className="flex flex-1 flex-col justify-around items-center tablet:max-w-[900px] mx-10">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
}
