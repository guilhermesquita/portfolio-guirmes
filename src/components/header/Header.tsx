import { Content } from "./Content"

export const Header = () => {
    return(
        <header className="pt-20">
            <nav className="flex flex-row gap-20">
                <Content text="meus projetos" link="#" target="_self"/>
                <Content text="formação" link="#" target="_self"/>
                <Content text="experiência" link="#" target="_self"/>
                <Content text="contato" link="#" target="_self"/>
                <Content text="github" link="https://github.com/guilhermesquita" target="_blank"/>
                <Content text="linkedin" link="https://www.linkedin.com/in/guilhermesquita/" target="_blank"/>
            </nav>
        </header>
    )
} 