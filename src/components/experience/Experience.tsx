import { Columns, List } from "."

export const Experience = () => {
    return (
        <section className="w-2/3">
            <h3 className="text-3xl font-montserrat 
                font-semibold text-[#ACA7A7]">Experiência Profissional</h3>
            <section className="flex flex-col gap-5">
                <Columns />
                <List />
            </section>
        </section>
    )
}