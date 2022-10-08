import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <div className="min-h-screen flex flex-col items-center">
                <Navbar />
                <div className="flex flex-col flex-1 items-center tablet:max-w-[900px]">
                    <Component {...pageProps} />
                </div>
                <Footer />
            </div>
        </SessionProvider>
    );
}

export default MyApp;
