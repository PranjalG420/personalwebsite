import { variants } from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 w-full min-h-screen h-full">
      <h1 className="text-4xl font-semibold">404</h1>
      <p className="md:text-lg text-base text-neutral-400">
        That page does not exist. 
      </p>
      <Link href="/" className={variants({ variant: "primary" }) + " w-fit"}>
        Home
      </Link>
    </main>
  );
}
