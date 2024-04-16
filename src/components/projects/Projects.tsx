import { Card } from "./Card"
import {ProjectsList} from '../../projects.ts'

export const Projects = () => {
    return (
        <section id="proj" className="md:pt-20  w-full
        h-3/5 pt-56 flex justify-center gap-10 flex-col items-center">
           
                <h3 className="text-3xl font-montserrat 
                font-semibold text-[#ACA7A7]">Meus Projetos</h3>

                <article className="flex flex-col flex-wrap 
                gap-10 h-full w-full items-center justify-center">
                    {ProjectsList.map(project => {
                        return(
                            <Card name={project.name} link={project.link} description={project.description}/>
                        )
                    })}
                </article>

        </section>
    )
}