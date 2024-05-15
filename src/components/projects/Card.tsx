interface IProps {
    name: string,
    description: string,
    link?: string
}

export const Card = (props: IProps) => {
    return (
        <section className='relative inline-block cursor-pointer lg:w-4/12'>
            <section className='absolute top-0 left-0 w-full h-full text-center bg-[#434141] transition-opacity opacity-0 hover:opacity-80 font-montserrat font-semibold'>
                <article className='w-full h-full flex flex-col items-center justify-evenly'>
                    <h3 className='text-[#FF710B] text-xl'>{props.name.toUpperCase()}</h3>
                    <p className='text-[#FFFFFF] opacity-100 text-lg'>{props.description}</p>
                </article>
            </section>
            <img src={props.link} className='max-h-96 max-w-full'/>
        </section>
    )
}