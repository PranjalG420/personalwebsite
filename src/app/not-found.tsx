import "../../styles/globals.css";
import Link from "next/link";
import Navbar from "../../components/navbar";

export default function NotFound() {
    return (
        <main className="w-full bg-neutral-900 flex flex-col items-center justify-center my-auto">
            <title>404</title>
            <p className="text-3xl desktop:text-4xl font-medium">
                404 Not Found
            </p>
            <p className="text-base tablet:text-lg my-4 italic text-neutral-400">
                It seems what you are trying to find does not exist. Perhaps you
                entered something wrong.
            </p>

            <Link
                href="/"
                className="px-4 py-2 text-xl bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
                Home
            </Link>
        </main>
    );
}
