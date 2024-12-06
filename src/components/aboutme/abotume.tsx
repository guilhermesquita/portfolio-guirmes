export const AboutMe = () => {
  return (
    <main
      className="w-4/6
        h-full mt-20 pb-56"
    >
      <section
        className="flex gap-8 md:bg-[#2B2F30] 
            h-64 items-center justify-center 
            rounded-3xl md:shadow-2xl cursor-pointer
            md:w-full w-5/6"
      >
        <img
          src={
            "https://live.staticflickr.com/65535/53575377965_84c4b3a719_b.jpg"
          }
          className="rounded-full w-3/12 md:flex hidden"
        />

        <article>
          <p
            className="font-montserrat 
                        font-semibold text-5xl"
          >
            GUILHERME{" "}
            <span
              className="text-[#FF00D6] 
                        font-montserrat font-semibold"
            >
              MESQUITA
            </span>
          </p>
          <p className="font-montserrat font-semibold md:text-3xl">
            full-stack developer
          </p>
        </article>
      </section>
    </main>
  );
};
