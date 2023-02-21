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
                <meta
                    property="og:image"
                    content="/GitHub-Social-Preview.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/pglogo.png" />
            </Head>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>
    );
}
