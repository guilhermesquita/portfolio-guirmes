interface Iprops {
    text: string;
    link: string;
    target: string;
}

export const Content = (props: Iprops) => {
    return (
        <nav className="flex flex-row gap-5">
            <a href={props.link} target={props.target}>
                <ul className="text-[#ACA7A7]
                hover:text-[#fca903] duration-300">{props.text}</ul>
            </a>
        </nav>
    )
}