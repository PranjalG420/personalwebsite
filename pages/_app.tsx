import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="min-h-screen flex flex-col items-center ">
            <div className="md:max-w-[900px] mx-10">
            <Navbar />
            <div>
                <div className="flex flex-1 flex-col">
                    <Component {...pageProps} />
                </div>
            </div>
            </div>
        </div>
    );
}

export default MyApp;
