import Link from "next/link";
export default function Cta({
  titulocta,
  descripcta,
  idcta,
  urlcta,
  targetcta,
  textboton,
}) {
  return (
    <div className="w-full mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div
        id={idcta}
        className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16"
      >
        <h1 className="mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-transparent bg-clip-text bg-gradient-to-r to-amber-600 from-sky-400">
          {titulocta}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          {descripcta}
        </p>
        <Link href={urlcta} target={targetcta} rel="noreferrer noopener">
          <button
            className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-amber-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            {textboton}
          </button>
        </Link>
      </div>
    </div>
  );
}
