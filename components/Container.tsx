import Navbar from "@/components/Navbar";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start justify-center gap-4 w-full min-h-screen h-full transition-all">
      <Navbar />
      <div className="w-full max-w-3xl mx-auto min-h-lvh justify-center py-10 md:px-0 px-2 flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}
