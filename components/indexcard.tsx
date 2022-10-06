import React, { PropsWithChildren } from "react";

export default function Indexcard({ children }) {
    return (
        <main className="flex flex-grow flex-col items-center tablet:p-4 rounded-xl">
            {children}
        </main>
    );
}
