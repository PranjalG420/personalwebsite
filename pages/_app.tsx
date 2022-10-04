import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="min-h-screen flex flex-col items-center">
          <Navbar />
          <div className="max-w-[900px]">
            <div className="flex flex-1 flex-col">
                <Component {...pageProps} />
            </div>
          </div>
        </div>
    );
}

export default MyApp;
