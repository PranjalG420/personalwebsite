import React, { PropsWithChildren } from "react";

export default function Container({ children, top }) {
    return (
        <main
            className={
                `prose flex flex-col justify-around items-start w-full px-4 tablet:max-w-[900px] ` +
                top
            }
        >
            {children}
        </main>
    );
}
