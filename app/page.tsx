import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen min-h-screen flex-1">
      <div className="flex flex-col items-start w-full max-w-3xl">
        <Navbar />
      </div>
    </main>
  );
}
