import "../../styles/globals.css";
import fs from "node:fs";


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <title>Pranjal Gupta</title>
            <meta name="title" content="Pranjal Gupta" />
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://pranjalg420.vercel.app/" />
            <meta property="og:title" content="Pranjal Gupta" />
            <meta property="og:description" content="" />
            <meta
                property="og:image"
                content="https://pranjalg420.vercel.app/GitHub-Social-Preview.png"
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:url"
                content="https://pranjalg420.vercel.app/"
            />
            <meta property="twitter:title" content="Pranjal Gupta" />
            <meta property="twitter:description" content="" />
            <meta
                property="twitter:image"
                content="https://pranjalg420.vercel.app/GitHub-Social-Preview.png"
            />
            <body className="flex flex-col mx-auto justify-start h-full min-h-screen bg-red-900 text-red-500 font-sans w-[72rem]">
                {/* <Navbar /> */}
                <div className="flex flex-col mx-auto h-full justify-center flex-1 px-0">
                    {children}
                </div>
            </body>
        </html>
    );
}
