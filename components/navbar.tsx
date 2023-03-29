export default function navbar() {
    return (
        <nav className="flex flex-row sticky top-0 w-full justify-between p-2 bg-none desktop:text-xl text-base backdrop-blur print:hidden">
            <div className="flex items-center flex-row gap-2">
                <a
                    href="#"
                    className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:bg-gradient-to-br focus:outline-none shadow-sm shadow-blue-800/80 font-semibold rounded text-xl px-4 py-2 text-center"
                >
                    Home
                </a>
                <a
                    href="#about"
                    className="px-4 py-2 rounded hover:bg-emerald-700 transition-colors font-semibold"
                >
                    About
                </a>
                <a
                    href="#projects"
                    className="px-4 py-2 rounded hover:bg-emerald-700 transition-colors font-semibold"
                >
                    Projects
                </a>
            </div>
            <button className="px-4 py-2 rounded hover:bg-emerald-700 transition-colors font-semibold">
                Resume
            </button>
        </nav>
    );
}
