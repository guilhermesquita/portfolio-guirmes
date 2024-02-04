interface IProps {
    name: string,
    type: string,
    url_photo: string,
    link: string
}

export const Card = (props: IProps) => {
    return( 
        <a href={props.link} target='_blank' className="flex flex-row 
        gap-10 justify-center 
        bg-[#2B2F30] w-7/12 
        rounded-3xl h-3/6 
        shadow-2xl">
            <article className="flex flex-col 
            justify-center items-center">
                <h4 className="text-sm font-montserrat 
                font-semibold text-[#ACA7A7]">{props.type}</h4>
                <p className="text-2xl font-montserrat
                font-semibold">{props.name}</p>
            </article>

            <article>
                {props.url_photo} 
            </article>
        </a>
    )
}