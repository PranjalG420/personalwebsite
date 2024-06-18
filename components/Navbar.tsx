import Link from "next/link";
import { variants } from "@/components/Button";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center gap-4 md:text-base text-sm w-full sticky top-0">
      <Link href="/" className={variants({ variant: "primary" })}>
        home
      </Link>
    </nav>
  );
}
