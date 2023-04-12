export default function Navbar() {
    return (
        <nav className="h-[8vh] max-w-[72rem] mx-auto flex flex-row justify-start gap-2 desktop:text-lg text-base items-center bg-none backdrop-blur-sm py-2 sticky top-0 left-0 w-full z-50">
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
        </nav>
    );
}
