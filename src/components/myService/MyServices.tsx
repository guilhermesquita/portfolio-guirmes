import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { Service } from "./Service";
import { faCode, faPenNib } from "@fortawesome/free-solid-svg-icons";

export const MyServices = () => {
  return (
    <section
      id="services"
      className="bg-[#141517] flex flex-col justify-center items-center pt-10 gap-2 pb-10 w-full"
    >
      <h3
        className="text-3xl font-montserrat w-full
                font-semibold text-[#ACA7A7] flex justify-center"
      >
        Meus Serviços
      </h3>

      <article className="flex gap-20 w-full lg:flex-row flex-col flex-wrap justify-center md:flex items-center">
        <Service
          title="UI DESIGN"
          description="Desenvolvimento de interfaces e protótipos para aplicações que tornam a expêriencia do usuário clara e confortável."
          img={faFigma}
        />
        <Service
          title="DESENVOLVIMENTO"
          description="Desenvolvimento de software, APIs, aplicativos e sites (blogs, landing pages, e-commerces)."
          img={faCode}
        />
        <Service
          title="DESIGN GRÁFICO"
          description="Criação soluções visuais para comunicar mensagens específicas de forma eficaz e atraente.  logotipos, identidades visuais de marcas, layouts de páginas, design de embalagens, etc"
          img={faPenNib}
        />
      </article>
    </section>
  );
};
