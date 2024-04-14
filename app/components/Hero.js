import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-10">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-transparent bg-clip-text bg-gradient-to-r to-amber-600 from-sky-400">
            Desarrollo y Diseño Web Para Emprendimientos
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Desarrollo soluciones webs para emprendimientos que desean llevar su
            empresa a otro nivel.
          </p>

          <button
            className="relative uppercase mr-4 px-8 py-2 rounded-md bg-amber-900 isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:bg-amber-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            <Link
              href="/#Proyetos"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-slate-300 dark:hover:text-slate-900"
            >
              Proyectos
            </Link>
          </button>

          <button
            className="relative uppercase px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:bg-amber-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            <Link
              href="/#servicios"
              className="inline-flex items-center justify-center px-5 py-3 text-base text-center font-bold text-gray-900 rounded-lg "
            >
              Servicios
            </Link>
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image width={600} height={600} src="/lcc.svg" alt="lcc code" />
        </div>
      </div>
    </section>
  );
}
