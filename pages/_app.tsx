import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <SessionProvider session={session}>
            <Head>
                <title>Pranjal Gupta</title>
                <meta name="title" content="Pranjal Gupta" />
                <meta name="description" content="" />

                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://pranjalg420.vercel.app/"
                />
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
            </Head>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>
    );
}
