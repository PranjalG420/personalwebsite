import "../../styles/globals.css";
import Link from "next/link";
import Navbar from "../../components/navbar";

export default function NotFound() {
    return (
        <main className="w-full bg-neutral-900">
            <div className="flex flex-col justify-start min-h-screen max-w-[72rem] px-4 w-full mx-auto text-neutral-100 ">
                <Navbar />
                <div className="flex flex-col items-center my-auto h-full justify-center ">
                    <title>404</title>
                    <div className="flex flex-col items-center justify-around mx-auto">
                        <p className="text-3xl desktop:text-4xl font-medium">
                            404 Not Found
                        </p>
                        <p className="text-base tablet:text-lg my-4 italic text-neutral-400">
                            It seems what you are trying to find does not exist.
                            Perhaps you entered something wrong.
                        </p>
                    </div>
                    <Link
                        href="/"
                        className="px-4 py-2 text-xl bg-neutral-800 hover:bg-neutral-700 transition-colors"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
