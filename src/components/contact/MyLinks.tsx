import { faBehance, faGithub, faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const MyLinks = () => {
    return (
        <div className="w-full flex gap-2 lg:w-full items-center justify-center md:justify-start">
            <a href="https://wa.me/5592981489190" target="_blank" className="border-2 border-[#252629] 
                       hover:border-[#FF00D6] duration-500  
                       bg-[#0e1012] rounded-xl min-w-16 max-w-20 flex justify-center items-center">
                <FontAwesomeIcon icon={faWhatsapp} color="#FF00D6" fontSize='3rem' className="p-2" />
            </a>
            <a href="https://github.com/guilhermesquita" target="_blank" className="border-2 border-[#252629] 
                       hover:border-[#FF00D6] duration-500 min-w-16 max-w-20
                       bg-[#0e1012] rounded-xl"><FontAwesomeIcon icon={faGithub} color="#FF00D6" fontSize='3rem' className="p-2" />
            </a>

            <a href="https://www.linkedin.com/in/guilhermesquita/" target="_blank" className="border-2 border-[#252629] flex
                       hover:border-[#FF00D6] duration-500  
                       bg-[#0e1012] rounded-xl min-w-16 max-w-20 justify-center">
                <FontAwesomeIcon icon={faLinkedinIn} color="#FF00D6" fontSize='3rem' className="p-2" />
            </a>

            <a href="https://www.behance.net/guilhemmesquit" target="_blank" className="border-2 border-[#252629] 
                       hover:border-[#FF00D6] duration-500  
                       bg-[#0e1012] rounded-xl max-w-20">
                <FontAwesomeIcon icon={faBehance} color="#FF00D6" fontSize='3rem' className="p-2" />
            </a>

            <a href="https://www.instagram.com/guirmes_/" target="_blank" className="border-2 border-[#252629] 
                       hover:border-[#FF00D6] duration-500  
                       bg-[#0e1012] rounded-xl min-w-16 max-w-20 flex justify-center">
                <FontAwesomeIcon icon={faInstagram} color="#FF00D6" fontSize='3rem' className="p-2" />
            </a>
        </div>
    )
}