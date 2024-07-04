import Link from "next/link";
import { variants } from "@/components/Button";

export default function Navbar() {
  return (
    <nav className="flex justify-center w-full fixed top-0 z-10 backdrop-blur-sm">
      <div className="flex flex-row items-center md:gap-8 gap-4 md:text-base text-sm w-full max-w-3xl py-1 md:px-0 px-2">
        <Link href="/" className={variants({ variant: "navbarLink" })}>
          home
        </Link>
        <Link href="/skills" className={variants({ variant: "navbarLink" })}>
          skills
        </Link>
        <Link href="/projects" className={variants({ variant: "navbarLink" })}>
          projects
        </Link>
        <Link href="/blog" className={variants({ variant: "navbarLink" })}>
          blog
        </Link>
      </div>
    </nav>
  );
}
