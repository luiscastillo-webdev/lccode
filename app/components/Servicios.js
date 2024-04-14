import {
  IconBrush,
  IconShoppingBag,
  IconCode,
  IconGitBranch,
  IconSeo,
  IconTool,
} from "@tabler/icons-react";

export default function Servicios({ id, icon, nombreserv, descripserv }) {
  const itemservicios = [
    {
      id: 1,
      icono: <IconBrush />,
      titulo: "Diseño Web",
      descrip: "Paginas web con buen gusto, diseños webs a la medida.",
    },
    {
      id: 2,
      icono: <IconShoppingBag />,
      titulo: "E Commerce",
      descrip: "Tiendas on line, pasarelas de pagos, woocommerce, Prestashop.",
    },
    {
      id: 3,
      icono: <IconSeo />,
      titulo: "Optimización SEO",
      descrip:
        "No solo es el el diseño, tambien es necesario rankear en los motores de busquedas como Google.",
    },
    {
      id: 4,
      icono: <IconCode />,
      titulo: "Consultorias",
      descrip:
        "Te ayudo a elegir las mejores herramientas a implementar en tu web.",
    },
    {
      id: 5,
      icono: <IconGitBranch />,
      titulo: "Gestion de Redes Sociales",
      descrip:
        "Mejora tu presencia en redes sociales, aumenta tu audiencia y potenciales clientes",
    },
    {
      id: 6,
      icono: <IconTool />,
      titulo: "Mantenimiento de Sitios",
      descrip:
        "Manteniniento y actualizaciones a tu sitio web, manten tu web al día",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-1">
        {itemservicios.map(({ id, icono, titulo, descrip }) => (
          <div
            key={id}
            className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <span className="text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {icono}
            </span>

            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {titulo}
            </h5>

            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {descrip}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
