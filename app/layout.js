import { Rubik_Glitch, Poppins, Noto_Sans } from "next/font/google";
import Transicion from "./components/Transicion";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const rubik_glitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubik-glitch",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-poppins",
  display: "swap",
});
const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata = {
  title: "Luis Cast Code | Soluciones Para Tu Web",
  description:
    "Soluciones para la web de tu nuevo emprendimiento, diseño web, redes sociales, optimización SEO.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body
        className={`${poppins.variable} ${rubik_glitch.variable} ${noto_sans.variable}`}
      >
        <Transicion>
          <NavBar /> {children} <Footer />
        </Transicion>
      </body>
    </html>
  );
}
