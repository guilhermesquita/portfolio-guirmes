export const AboutMe = () => {
    return (
        <main className="w-4/6
        h-full mt-20 pb-56">
            <h3 className="text-3xl font-montserrat 
                font-semibold text-[#ACA7A7] md:flex hidden">Quem sou eu</h3>

            <section className="flex gap-8 md:bg-[#2B2F30] 
            h-64 items-center justify-center 
            rounded-3xl md:shadow-2xl cursor-pointer
            md:w-full w-5/6">
                <img src={'https://live.staticflickr.com/65535/53575377965_84c4b3a719_b.jpg'} className='rounded-full w-3/12 md:flex hidden'/>

                <article>
                    <p className="font-montserrat 
                        font-semibold text-5xl">GUILHERME <span className="text-[#FF00D6] 
                        font-montserrat font-semibold">MESQUITA</span></p>
                    <p className="font-montserrat font-semibold md:text-3xl">full-stack develop</p>
                </article>
            </section>
            <a className="absolute h-20 w-10 left-1/2 transform -translate-x-1/2 
            bottom-3 border rounded-3xl pt-4 cursor-pointer border-[#fca903]" href="#services">
                <section className="h-3 w-3 bg-white absolute opacity-80
                content-none m-auto left-0 right-0 rounded-full	animate-bounce bg-[#fca903]"></section>
            </a>
        </main>
    )
}