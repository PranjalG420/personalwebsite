import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Container from "../components/container";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col flex-1 items-center tablet:max-w-[900px]">
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    );
}

export default MyApp;
