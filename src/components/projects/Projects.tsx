import { Card } from "./Card"

export const Projects = () => {
    return (
        <section className="pt-20 w-2/3 
        h-3/5">
            <article className="flex flex-col 
            gap-5 h-full">
                <h3 className="text-3xl font-montserrat 
                font-semibold text-[#ACA7A7]">Meus Projetos</h3>

                <article className="flex flex-row 
                gap-10 h-full">
                    <Card name="umsiteai" link="https://www.google.com/" type="front-end" url_photo="cd"/>
                    <Card name="Labeddit" link="https://www.google.com/" type="full-stack" url_photo="cd"/>
                    <Card name="Vent Blog" link="https://www.google.com/" type="back-end" url_photo="cd"/>
                </article>

            </article>
        </section>
    )
}