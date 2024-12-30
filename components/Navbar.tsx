import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { variants } from "./Button";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between fixed top-0 left-0 backdrop-blur-sm px-4 py-2 w-full z-20 animate-fadeIn">
      <Link href="/">
        <Image src={logo} alt="logo" className="w-8 h-8" />
      </Link>
      <div className="flex flex-row items-center md:gap-10 gap-4 md:px-0 px-2">
        <Link href="/#about" className={variants({ variant: "navbarLink" })}>
          About
        </Link>
        <Link href="/#projects" className={variants({ variant: "navbarLink" })}>
          Projects
        </Link>
        <Link href="/#contact" className={variants({ variant: "navbarLink" })}>
          Contact
        </Link>
        <Link href="/blog" className={variants({ variant: "navbarLink" })}>
          Blog
        </Link>
      </div>
    </nav>
  );
}
