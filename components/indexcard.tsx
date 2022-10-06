import React, { PropsWithChildren } from "react";

export default function Indexcard({ children }) {
    return (
        <main className="flex flex-col items-center md:p-4 rounded-xl">
            {children}
        </main>
    );
}
