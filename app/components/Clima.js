import React, { useState, useEffect } from "react";
import Image from "next/image";
const apiId = process.env.CLIMA_API_KEY;
export default function Clima() {
  const [listaClima, setListaClima] = useState([
    {
      ciudad: "",
      temp: "",
      icono: "",
    },
  ]);
  useEffect(() => {
    async function obtenerClima() {
      const city = "valencia";
      const country = "VE";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();

      setListaClima([
        {
          ciudad: data.name,
          temp: data.main.temp,
          icono: data.weather[0].icon,
        },
      ]);

      console.log(data);
    }
    obtenerClima();
  }, []);

  return (
    <>
      {listaClima.map((lista, listaIndex) => (
        <div
          key={listaIndex}
          className="w-full flex flex-col justify-center items-center text-slate-200 p-7 my-10"
        >
          <h3 className="text-3xl  text-center">Clima en</h3>
          <h4 className="text-5xl  text-center">{lista.ciudad}</h4>
          <Image
            className="mx-auto"
            src={`https://openweathermap.org/img/wn/${lista.icono}@2x.png`}
            alt="icon"
          />
          <h4 className="text-5xl">Temp: {lista.temp} º</h4>
        </div>
      ))}
    </>
  );
}
