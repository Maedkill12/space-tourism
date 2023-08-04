export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="z-[5] max-w-7xl mx-auto flex md:flex-1 w-full">
      <div className=" flex-1 flex flex-col md:flex-row items-center md:items-end">
        {children}
      </div>
    </main>
  );
}
