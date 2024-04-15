import { Card } from "./Card"

export const Projects = () => {
    return (
        <section id="proj" className="md:pt-20  w-full
        h-3/5 pt-56 flex justify-center flex-col items-center">
           
                <h3 className="text-3xl font-montserrat 
                font-semibold text-[#ACA7A7]">Meus Projetos</h3>

                <article className="flex flex-row flex-wrap md:flex-nowrap
                gap-10 h-full w-full items-center justify-center md:w-2/3">
                    <Card name="HUB de startups" type="front-end" description="Aplicação empresarial de um HUB de startups "/>
                    {/* <Card name="Labeddit" link="https://documenter.getpostman.com/view/21445204/2s9YysE2hR" type="full-stack" description="trabalho de conclusão do bootcamp LABENU"/> */}
                    {/* <Card name="API Cloudflare" link="https://github.com/guilhermesquita/upload-cloudflare" type="back-end" description="API de Upload e Download com CLOUDFLARE"/> */}
                </article>

        </section>
    )
}