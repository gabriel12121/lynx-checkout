import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <section className="mx-auto flex max-w-6x1 flex-col-reverse gap-2
      px-4 pb-12 transition-all md-flex-row md:gap-4">
        <div className="flex flex-col items-center gap-6 pt-8 text-center
        md:w-1/2 md:items-start md:gap-10 md-pt-32 md:text-left">
          <h1 className="text-4x1 font-semibold md:text-6x1">
            A forma inteligente de potencializar
          </h1>
        </div>
      </section>
    </div>
  );
}
