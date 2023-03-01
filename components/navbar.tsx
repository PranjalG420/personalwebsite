import Link from "next/link";

export default function navbar() {
    return (
        <nav className="flex flex-row sticky top-0 w-full justify-start desktop:text-xl text-base backdrop-blur print:hidden z-40">
            <div className="flex items-center flex-row">
                <Link href="/">
                    <p className="px-4 py-2 hover:cursor-pointer hover:bg-neutral-800">
                        home
                    </p>
                </Link>
                <Link href="/about">
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
