import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Container from "../components/container";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="flex flex-col items-center tablet:max-w-[900px]">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
