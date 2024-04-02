import { Course } from "./course"

export const Formation = () => {
    return (
        <section id='form' className="w-2/3 pt-28">
            <h3 className="text-3xl font-montserrat 
                font-semibold text-[#ACA7A7] md:flex">Formação</h3>
            <article className="w-full bg-[#2d2e30] rounded-s-2xl">
                <Course time="Ago 2022 - Mar 2023" title="Bootcamp Labenu" description="Bootcamp da instituição Labenu com experiências semanais em projetos práticos para aprofundar conhecimentos em React, NodeJs e entre outras tecnologias relacionadas. Também venho desenvolvendo soft-skills como resiliência, comunicação e empatia através de aulas focadas e vivência em grupo." />
                <hr/>
                <Course time="Ago 2023 - Set 2025" title="Análise e Desenvolvimento de Sistemas - Estácio" description="A faculdade de Análise e Desenvolvimento de Sistemas (ADS) é um curso de graduação na área de tecnologia da informação. Durante o curso, os alunos estudam diversos aspectos relacionados à análise, projeto, implementação e manutenção de sistemas de computador. Isso inclui o desenvolvimento de software, bancos de dados, redes de computadores, segurança da informação, entre outros tópicos." />
                <hr/>
                <Course time="jan 2024 - Mar 2024" title="Treinamento Flutter 2024" description="Curso projetado para o auxilio e dicas para o desenvolvimento de aplicativos práticos usando o Flutter e o Dart. Desde a criação de interfaces de usuário até a implementação de recursos avançados." />
            </article>
        </section>
    )
}