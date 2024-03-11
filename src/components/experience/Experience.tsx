import { Work } from "."

export const Experience = () => {
    return (
        <section id='experience' className="w-2/3 pt-36">
            <h3 className="text-3xl font-montserrat 
                font-semibold text-[#ACA7A7] md:flex">Experiência</h3>
            <article className="w-full bg-[#2d2e30] rounded-s-2xl">
                <Work time="Jul 2021 - Mar 2022" title="Jovem Aprendiz Norte Tech" description="Programa de Jovem Aprendiz da Norte Tech para o desenvolvimento de aplicações WEB" />
                <hr/>
                <Work time="Mar 2023 - Fev 2024" title="Desenvolvedor FullStack - AquaApia" description="Desenvolvimento de sites, aplicativos e Api's com NodeJS, VueJs e SpringBoot." />
            </article>
        </section>
    )
}