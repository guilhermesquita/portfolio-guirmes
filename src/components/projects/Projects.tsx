import { Card } from "./Card";
import { ProjectsList } from "../../projects.ts";

export const Projects = () => {
  return (
    <section
      id="proj"
      className=" w-full
        h-3/5 pt-10 flex justify-center gap-10 flex-col items-center"
    >
      <h3
        className="text-3xl font-montserrat 
                font-semibold text-[#ACA7A7]"
      >
        Meus Projetos
      </h3>

      <article
        className="flex flex-row flex-wrap 
                gap-10 h-full w-full items-center justify-center"
      >
        {ProjectsList.map((project) => {
          return (
            <Card
              name={project.name}
              link={project.link}
              image={project.image}
              description={project.description}
            />
          );
        })}
      </article>
    </section>
  );
};
