interface IProps {
    name: string,
    type: string,
    description: string,
    link?: string
}

function notLinked() {
    alert(`Projeto Privado!`)
}

// const testee = (props: IProps) => {
//     return (
//         <a href={props.link} target='_blank' 
//         // onClick={teste}
//         className="flex flex-col 
//         gap-3 justify-center 
//         bg-[#2B2F30] w-7/12 
//         rounded-3xl h-44 mt-6 hover:mt-4 
//         hover:ease-in-out duration-300
//         shadow-2xl hover:shadow-[#FF00D6] items-center">

//             <article className="flex flex-col 
//             justify-center items-center">
//                 <h4 className="text-sm font-montserrat 
//                 font-semibold text-[#ACA7A7]">{props.type}</h4>
//                 <p className="text-2xl font-montserrat
//                 font-semibold">{props.name}</p>
//             </article>

//             <p className="text-center font-montserrat">{props.description}</p>
//         </a>
//     )
// }

// const notLink = (props: IProps) => {
//     return (
//         <a href={props.link} target='_blank' 
//         onClick={teste}
//         className="flex flex-col 
//         gap-3 justify-center 
//         bg-[#2B2F30] w-7/12 
//         rounded-3xl h-44 mt-6 hover:mt-4 
//         hover:ease-in-out duration-300
//         shadow-2xl hover:shadow-[#FF00D6] items-center">

//             <article className="flex flex-col 
//             justify-center items-center">
//                 <h4 className="text-sm font-montserrat 
//                 font-semibold text-[#ACA7A7]">{props.type}</h4>
//                 <p className="text-2xl font-montserrat
//                 font-semibold">{props.name}</p>
//             </article>

//             <p className="text-center font-montserrat">{props.description}</p>
//         </a>
//     )
// }

export const Card = (props: IProps) => {
    return (
        <a href={props.link} target='_blank' onClick={() => {
            if (!props.link) {
                return notLinked();
            }
        }}
        className="flex flex-col 
        gap-3 justify-center 
        bg-[#2B2F30] w-7/12 
        rounded-3xl h-44 mt-6 hover:mt-4 
        hover:ease-in-out duration-300
        shadow-2xl hover:shadow-[#FF00D6] items-center cursor-pointer"
        
        >

            <article className="flex flex-col 
            justify-center items-center">
                <h4 className="text-sm font-montserrat 
                font-semibold text-[#ACA7A7]">{props.type}</h4>
                <p className="text-2xl font-montserrat
                font-semibold">{props.name}</p>
            </article>

            <p className="text-center font-montserrat text-sm p-2">{props.description}</p>
        </a>
    )
}