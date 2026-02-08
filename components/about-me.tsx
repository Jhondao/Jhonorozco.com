import React from "react";
import Title from "./shared/title";
import { dataAboutMe, dataSlider } from "@/data";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import Link  from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
      <Title title="Sobre mí" subtitle="Conóceme" />

      <div className="grid md:grid-cols-2">
        {/* <div className="py-12 md:py-9 flex items-center justify-center">
          <Carousel  opts={{
              align: "start"
            }}
            orientation="vertical"
            className="w-full max-w-xs h-fit">

           <CarouselContent className="-m-1 h-[200px]">
            {dataSlider.map((data) => (
              <CarouselItem key={data.id}>
                <div className="flex items-center justify-center">
                  <Image src={data.url} alt="Image" width={250} height={400} className="w-full h-auto rounded-lg"/>
                </div>
              </CarouselItem>
            ))}
           </CarouselContent>
           <CarouselPrevious/>
           <CarouselNext />
          </Carousel>
        </div> */}
        <div className="grid md:grid-cols-1 mt-7 gap-4 ">
          {dataAboutMe.map((data) => (
            <div
              key={data.id}
              className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:shadow-slate-800"
            >
              {data.icon}
              <p className="my-2"> {data.name}</p>
              <p className="text-gray-400"> {data.description}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="m-8 flex flex-col items-start justify-center">
            <p className="my-8">
              Como desarrollador web me apasiona el diseño y la usabilidad, por lo
              que siempre busco crear experiencias de usuario intuitivas y
              atractivas. Además, me mantengo actualizado en las últimas
              tendencias y tecnologías en el mundo del desarrollo web para poder
              ofrecer soluciones innovadoras y eficientes a mis clientes.
              <br /><br />
              He trabajado en proyectos de diversa complejidad y tamaño, desde
              sitios web corporativos hasta aplicaciones web escalables y
              complejas. También tengo experiencia en la optimización de sitios
              web para mejorar su rendimiento y velocidad de carga, lo que
              contribuye a una mejor experiencia de usuario y una mayor
              visibilidad en los motores de búsqueda.
            </p>
              <Button>
                <Phone size={20} className="mr-2"/> <Link href="mailto:jhondao.desarrollo@hotmail.com">Hablamos</Link>
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
