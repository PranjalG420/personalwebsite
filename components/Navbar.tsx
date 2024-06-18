import Link from "next/link";
import { variants } from "@/components/Button";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center md:gap-8 gap-4 md:text-base text-sm w-full sticky top-0 py-2">
      <Link href="/" className={variants({ variant: "navbarLink" })}>
        home
      </Link>
      <Link href="#skills" className={variants({ variant: "navbarLink" })}>
        skills
      </Link>
      <Link href="#projects" className={variants({ variant: "navbarLink" })}>
        projects
      </Link>
    </nav>
  );
}
