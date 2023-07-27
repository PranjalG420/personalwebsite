export default function Navbar() {
    return (
        <nav className="h-[8vh] flex justify-center sticky top-0 left-0 w-full z-50 bg-none backdrop-blur-sm">
            <div className="flex flex-row justify-start w-full gap-2 desktop:text-lg text-base items-center py-2 max-w-6xl">
                <a
                    href="/#"
                    className="px-2 py-1 hover:bg-neutral-700 transition-colors"
                >
                    Home
                </a>
                <a
                    href="#about"
                    className="px-2 py-1 hover:bg-neutral-700 transition-colors"
                >
                    About
                </a>
                <a
                    href="#projects"
                    className="px-2 py-1 hover:bg-neutral-700 transition-colors"
                >
                    Projects
                </a>
            </div>
        </nav>
    );
}
