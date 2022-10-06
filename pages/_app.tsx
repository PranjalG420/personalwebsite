import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import Container from "../components/container";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="min-h-screen flex flex-col items-center ">
            <div className="md:max-w-[900px] mx-10">
                <Navbar />
                <div>
                    <Container>
                        <Component {...pageProps} />
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default MyApp;
