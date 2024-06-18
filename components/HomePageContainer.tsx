export default function HomePageContainer({
  children,
  link
}: {
  children: React.ReactNode;
  link: string
}) {
  return (
    <div id={link} className="flex flex-col items-start justify-center gap-4 w-full max-w-3xl min-h-screen h-full transition-all ">
      {children}
    </div>
  );
}
