import { useState } from "react";
import Navbar from "./navbar";

export default function Container({ children }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    return (
        <>
            <div className="overflow-hidden absolute h-full w-full left-0 top-0 desktop:visible invisible blur-[170px] ">
                <div
                    style={{
                        position: "absolute",
                        top: mousePosition.y,
                        left: mousePosition.x,
                        height: "250px",
                        aspectRatio: "1",
                        borderRadius: "50%",
                        translate: "-50% -50%",
                        animation: "wiggle 20s linear infinite",
                    }}
                    className="bg-gradient-to-r from-sky-300 to-violet-500"
                ></div>
            </div>
            <div
                className="flex flex-col w-full justify-start h-full min-h-screen text-white bg-black font-mono"
                onPointerMove={(e) => {
                    const { clientX, clientY } = e;
                    setMousePosition({ x: clientX, y: clientY });
                }}
            >
                <Navbar />
                <main className="flex flex-col mx-auto h-full justify-center flex-1 max-w-[72rem] px-4 z-20">
                    {children}
                </main>
            </div>
        </>
    );
}
