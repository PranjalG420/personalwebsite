import React, { PropsWithChildren } from "react";
//v className="justify-around items-center h-full p-5 md:p-20 rounded-xl"
export default function Container({ children }) {
    return (
        <main className="flex flex-1 flex-col justify-around items-center">
            {children}
        </main>
    );
}
