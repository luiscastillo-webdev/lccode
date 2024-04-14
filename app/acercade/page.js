import HeroInterno from "../components/HeroInterno";
import EncabezadoSeccion from "../components/EncabezadoSeccion";
import Cta from "../components/Cta";
import Image from "next/image";
export const metadata = {
  title: "Acerca De Luis | Soluciones web para tu emprendimiento",
  description:
    "Creación y desarrollo de soluciones webs para emprendimientos que desean avanzar al siguiente nivel.",
};
export default function Acercade({ titulohero }) {
  return (
    <>
      <div class="mt-8 grid grid-cols-2 justify-center items-center dark:bg-gray-900 gap-4">
        <div>
          <HeroInterno
            titulohero="Hola, Soy Luis"
            descriphero="Cuento con más de 10 años de experiencia en desarrollo web frontend, especializado en Wordpress, Joomla y Prestashop. Y ahora con todo el poder de react y nextjs
             deasarrollo proyectos ligeros y escalables."
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/img/yo.png"
            alt="yos"
            width={334}
            height={748}
          />
        </div>
      </div>
      <section className="rounded-lg shadow dark:bg-gray-900">
        <EncabezadoSeccion
          idseccion="exp"
          tituloseccion="Experiencia"
          descripseccion=""
        />

        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Febrero 2023 - Actual 2024
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-amber-600">
                Webmaster Principal
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Responsable de la plataforma web de la Federación Venezolana de
                Esgrima.
              </p>
              <a
                href="https://fencingven.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Ver plataforma
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Desde el 2015
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-amber-600">
                Diseñador Web Freelancer
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Mas de 9 años de experiencia en el diseño web primero con
                Joomla, luego con Wordpress y ahora con React y sus derivados.
              </p>
            </li>
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Abril 2021 - Marzo 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-amber-600">
                Diseñador Web en ViralizationMKT
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Encargado de diseñar webs para los clientes de la agencia de
                marketing ViralizationMKT en Lima, Perú.
              </p>
            </li>
          </ol>
        </div>
        <Cta
          titulocta="Vamos a conversar!"
          descripcta="Si deseas que tu emprendimiento avance al siguiente nivel escribeme y te mostraré lo que se puede hacer con pocos recursos."
          idcta=" "
          urlcta="mailto:castilloluis2005@gmail.com"
          textboton="Contacto"
        />
      </section>
    </>
  );
}
