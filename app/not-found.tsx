import { variants } from "@/components/Button";
import Container from "@/components/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <div className="w-full flex flex-col items-center gap-2">
        <h1 className="text-4xl font-semibold">404</h1>
        <p className="md:text-lg text-base text-neutral-400">
          That page does not exist.
        </p>
        <Link
          href="/"
          className={variants({ variant: "primary" }) + " max-w-fit"}
        >
          Home
        </Link>
      </div>
    </Container>
  );
}
