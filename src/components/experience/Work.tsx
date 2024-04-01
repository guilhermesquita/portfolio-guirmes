export interface IProps {
    title: string,
    time: string
    description: string
}

export const Work = (props: IProps) => {
    return (
            <article className="flex md:flex-row flex-col w-full items-center justify-between p-5 md:gap-20">
                <article className="flex flex-col gap-5 justify-center items-center">
                    <h3 className="text-sm font-montserrat 
                font-semibold text-[#ACA7A7] w-full ">{props.title}</h3>
                    <article className="text-sm w-36 flex justify-center bg-[#b08b04] text-center font-montserrat">{props.time}</article>
                </article>

                <p className="text-center font-montserrat text-sm p-2">
                    {props.description}
                </p>
            </article>
    )
}