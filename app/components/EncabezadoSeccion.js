export default function EncabezadoSeccion({
  tituloseccion,
  descripseccion,
  idseccion,
}) {
  return (
    <div
      id={idseccion}
      className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16"
    >
      <h1 className="mt-6 mb-4 text-4xl tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {tituloseccion}
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
        {descripseccion}
      </p>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    </div>
  );
}
