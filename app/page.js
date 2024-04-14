"use client";
import Hero from "./components/Hero";

import EncabezadoSeccion from "./components/EncabezadoSeccion";
import ItemPortfolio from "./components/ItemPortafolio";
import Servicios from "./components/Servicios";
import Cta from "./components/Cta";
import Clima from "./components/Clima";
export default function Home() {
  return (
    <>
      <Hero />
      <section className="rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <EncabezadoSeccion
            idseccion="proyectos"
            tituloseccion="Proyectos"
            descripseccion="100% dedicado a crear proyectos que aportan soluciones a mis clientes."
          />
          <ItemPortfolio />
          <Clima />
          <EncabezadoSeccion
            idseccion="servicios"
            tituloseccion="Servicios"
            descripseccion="Esto solo es un pequeño avance de lo que puedo hacer por tu emprendimiento"
          />

          <Servicios />
          <Cta
            idcta="cta"
            titulocta="Buscas Hosting en Bs?"
            descripcta="Te tengo la solución, e-hosting el mejor hosting de Venezuela, con muchos años en el país, lo mejor es que puedes pagar en Bs"
            urlcta="https://www.e-hosting.com.ve/clientes/aff.php?aff=1292"
            targetcta="_blank"
            textboton="Visitalos"
          />
        </div>
      </section>
    </>
  );
}
