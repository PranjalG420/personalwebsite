import "../../styles/globals.css";
import Navbar from "../../components/navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    display: "swap",
    weight: ["400"],
});

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
            <body
                className={
                    "bg-neutral-950 text-neutral-100 " + roboto.className
                }
            >
                <Navbar />
                <div className="flex flex-col justify-start min-h-screen max-w-6xl desktop:px-2 px-4 w-full mx-auto pb-12 ">
                    {children}
                </div>
            </body>
        </html>
    );
}
