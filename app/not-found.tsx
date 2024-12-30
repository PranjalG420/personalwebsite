import { variants } from "@/components/Button";
import Navbar from "@/components/Navbar";
import { roboto } from "@/lib/font";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen md:gap-8 gap-4 px-4">
      <Navbar />
      <h1 className={roboto.className + " text-sky-300 md:text-9xl text-4xl"}>
        404
      </h1>
      <h1 className="md:text-4xl text-2xl font-semibold">Page Not Found</h1>
      <Link href="/" className={variants({ variant: "primary" }) + " mx-auto"}>
        Take me back!
      </Link>
    </main>
  );
}
