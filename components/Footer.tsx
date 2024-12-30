import { roboto } from "@/lib/font";

export default function Footer() {
  return (
    <footer
      className={
        roboto.className +
        " flex flex-row items-center justify-center w-full py-4"
      }
    >
      <p className="text-sky-200 text-opacity-75 md:text-xs text-xs">
        Hand Crafted with Care by Pranjal Gupta
      </p>
    </footer>
  );
}
