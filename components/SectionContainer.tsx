export default function SectionContainer({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id || "#"}
      className="flex flex-col items-start justify-center w-full min-h-screen h-full max-w-5xl md:gap-8 gap-4 px-4 py-16 z-10"
    >
      {children}
    </section>
  );
}
