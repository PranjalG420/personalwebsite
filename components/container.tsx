import React, { PropsWithChildren } from "react";

export default function Container({ children, top }) {
    return (
        <main
            className={
                `flex flex-col justify-around items-start w-full px-4 tablet:max-w-[900px] tablet:mx-10 ` +
                top
            }
        >
            {children}
        </main>
    );
}
