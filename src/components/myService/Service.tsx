import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IProps {
    img: IconProp,
    title: string,
    description: string
}

export const Service = (props: IProps) => {
    return (
        <section  
        className="flex flex-col 
        justify-start
        bg-[#2B2F30] 
        w-11/12 lg:w-1/4
        h-96 mt-6 rounded-md
        shadow-2xl items-center cursor-pointer
        p-10 gap-10 border border-[#393e40] hover:border-[#FF00D6] duration-500"
        >

            <article className="flex flex-col
            justify-center items-center gap-5">
                <FontAwesomeIcon icon={props.img} color="#FF00D6"/>
                <p className="text-2xl font-montserrat
                font-semibold pl-2 w-full">{props.title}</p>
            </article>

            <p className="text-center font-montserrat text-sm p-2">{props.description}</p>
        </section>
    )
}