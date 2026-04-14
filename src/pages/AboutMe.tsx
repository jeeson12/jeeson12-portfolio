export default function AboutMe() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 md:px-8 relative overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tighter">
        About Me
      </h2>

      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-6 md:gap-8 text-zinc-300 relative z-10">
        <div className="flex-1 text-sm md:text-base leading-relaxed space-y-3 md:space-y-4">
          <p>
            I am an aspiring engineer currently pursuing a B.Tech majoring in
            Computer Science at Mar Baselios Christian College of Engineering in
            Peermade, Kerala.
          </p>
          <p>
            I'm very much interested in coding and love to learn about new
            technical stuff. I have acquired skills in languages like C, Java,
            Python, HTML, CSS, and SQL. As an engineering student, I believe in
            the power of hands-on experiences and practical application of
            knowledge.
          </p>
          <p>
            I am actively seeking opportunities to gain practical exposure,
            whether through internships or research projects. I am eagerly
            trying to expand and develop my skills and very much excited about
            the future.
          </p>
        </div>

        <div className="md:w-80 space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm h-fit">
          <div className="space-y-1">
            <span className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-semibold">
              Name
            </span>
            <div className="text-sm md:text-base text-white">Jeeson Jacob Varghese</div>
          </div>
          <div className="space-y-1">
            <span className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-semibold">
              Email
            </span>
            <div className="text-sm md:text-base text-white">jeeson0987@gmail.com</div>
          </div>
          {/* <div className="space-y-1">
            <span className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-semibold">
              Address
            </span>
            <div className="text-white text-sm md:text-base">
              Ponnamplackal (h) Karinilam P.O Mundakayam
            </div>
          </div> */}
          <div className="space-y-1">
            <span className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest font-semibold">
              Birthday
            </span>
            <div className="text-sm md:text-base text-white">18 March 2003</div>
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 pointer-events-none whitespace-nowrap z-0">
        ABOUT
      </div>
    </div>
  );
}
