"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ItemPortfolio({
  id,
  titulo,
  descrip,
  categ1,
  categ2,
  destacado,
  imagen,
  url,
  target,
  tituloBtn,
}) {
  const itemsportafolio = [
    {
      id: 1,
      titulo: "CriptoMine",
      descrip:
        "Simple billetera para criptomonedas, para trading, esta plantilla es para la venta",
      categ1: "HTML, CSS, JS",
      categ2: "Admin Lite",
      destacado: "bg-gradient-to-r from-green-400 to-blue-500",
      imagen: "/img/proyectos/cripto.jpg",
      url: "https://www.templatemonster.com/website-templates/criptomine-wallet-website-template-248029.html",
      target: "_blank",
      tituloBtn: "comprar",
    },
    {
      id: 2,
      titulo: "Federación Venezolana de Esgrima",
      descrip:
        "Página oficial de la federación venezolana de esgrima, hecha con tecnologia de Wordpress.",
      categ1: "Wordpress",
      categ2: "Elementor",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/fencingven.jpg",
      url: "https://fencingven.com",
      target: "_blank ",
      tituloBtn: "visitar",
    },
    {
      id: 3,
      titulo: "Gotoca Imports",
      descrip:
        "Diseño y desarrollo de un ecommerce para la empresa importadora de repuestos para camiones Gotoca Imports.",
      categ1: "Wordpress",
      categ2: "Woocommerce Elementor",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/gotoca.jpg",
      url: "https://gotoca.net.ve",
      target: " _blank",
      tituloBtn: "visitar",
    },
    {
      id: 4,
      titulo: "Luis Cast Code",
      descrip:
        "Desarrollo de mi propia web portafolio, hecha con react, nextjs y framer motion.",
      categ1: "React",
      categ2: "NextJS Framework",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/lcc.jpg",
      url: "https://castillowebdev.netlify.app/",
      target: " ",
      tituloBtn: "visitar",
    },
    {
      id: 5,
      titulo: "Directorio IA",
      descrip: "Directorio de aplicaciones webs con inteligencia artificial.",
      categ1: "React",
      categ2: "Astro Framework",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/directorioia.webp",
      url: "https://directorioappsia.online",
      target: "_blank ",
      tituloBtn: "visitar",
    },
    {
      id: 6,
      titulo: "Viralization Mkt",
      descrip:
        "Agencia de marketing digital radicada en Lima, Peru, diseño y configuración de su web.",
      categ1: "Wordpress",
      categ2: "Diseño Web",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/viralmkt.jpg",
      url: "https://viralizationmkt.com/",
      target: "_blank ",
      tituloBtn: "visitar",
    },
    {
      id: 7,
      titulo: "Bodegón Diesel",
      descrip:
        "Tienda retail para venta de respuestos para camiones diesel y transporte de carga.",
      categ1: "Wordpress",
      categ2: "Elementor",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/bd.jpg",
      url: "https://bodegondiesel.pro",
      target: "_blank",
      tituloBtn: "visitar",
    },

    {
      id: 8,
      titulo: "Qantyka",
      descrip:
        "Mi primera web internacional, rediseño general de su web a un diseño más corporativo.",
      categ1: "Wordpress",
      categ2: "Elementor",
      destacado: "bg-[#252734]",
      imagen: "/img/proyectos/quanthyka.png",
      url: "",
      target: " ",
      tituloBtn: "inactivo",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-1">
        {itemsportafolio.map(
          ({
            id,
            titulo,
            descrip,
            categ1,
            categ2,
            destacado,
            imagen,
            url,
            target,
            tituloBtn,
          }) => (
            <div
              key={id}
              className={`${destacado} w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{
                  ease: "linear",
                  duration: 2,
                  x: { duration: 1 },
                }}
              >
                <Image
                  width="1200"
                  height="750"
                  className="rounded-t-lg cursor-pointer"
                  src={imagen}
                  alt={descrip}
                />
              </motion.div>

              <div className="p-5">
                <a href={url} target={target}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {titulo}
                  </h5>
                </a>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {categ1}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {categ2}
                </span>
                <p className="mb-3 font-normal text-white dark:text-white">
                  {descrip}
                </p>
                <button
                  className="relative uppercase px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-lime-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:bg-amber-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                >
                  <a
                    href={url}
                    target={target}
                    className="inline-flex text-gray-900 fon-bold text-center "
                  >
                    {tituloBtn}
                  </a>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
