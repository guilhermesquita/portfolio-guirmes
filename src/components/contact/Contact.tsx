import { MyLinks } from "./MyLinks";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#141517] flex flex-col justify-center items-center mt-10 pt-10 gap-2 pb-10 w-full"
    >
      <h3
        className="text-3xl font-montserrat w-4/6
                font-semibold text-[#ACA7A7] md:flex hidden"
      >
        Contato
      </h3>

      <article className="flex gap-20 w-4/6 lg:flex-row flex-col">
        <img
          src="https://live.staticflickr.com/65535/53575384190_a46a941600_n.jpg"
          className="rounded-s-2xl "
        />
        <article className="flex flex-col justify-between lg:gap-2 gap-10">
          <p className="text-sm font-montserrattext-sm font-montserrat">
            Eu sou o Guilherme Mesquita, um desenvolvedor full-stack (mobile,
            front-end, back-end) com experiência em grandes projetos. Meu
            objetivo é sempre entregar soluções de alta qualidade e que atendam
            às necessidades dos clientes. Gosto de trabalhar em equipe e
            colaborar com outros desenvolvedores, compartilhando conhecimento e
            aprendendo novas habilidades.
            <br />
            <br />
            <strong className="text-[#FF00D6]">email</strong>:
            guirozmesquita@gmail.com
            <br />
            <br />
          </p>
          {/* <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-40"
          >
            Baixe meu currículo
          </button> */}
          <MyLinks />
        </article>
      </article>
    </section>
  );
};
