import Link from "next/link";

export default function navbar() {
    return (
        <nav className="flex flex-row sticky top-0 w-full desktop:justify-start justify-between desktop:text-xl text-base backdrop-blur print:hidden">
            <div className="flex items-center flex-row">
                <Link href="/">
                    <p className="px-4 py-2 hover:cursor-pointer hover:bg-neutral-800">
                        home
                    </p>
                </Link>
                <Link href="/projects">
                    <p className="px-4 py-2 hover:cursor-pointer hover:bg-neutral-800">
                        about
                    </p>
                </Link>
                <Link href="/guestbook">
                    <p className="px-4 py-2 hover:cursor-pointer hover:bg-neutral-800">
                        guestbook
                    </p>
                </Link>
            </div>
        </nav>
    );
}
