export default function AboutMe() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 md:px-8 relative overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tighter">
        About Me
      </h2>

      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-6 md:gap-8 text-zinc-300 relative z-10">
        <div className="flex-1 text-sm md:text-base leading-relaxed space-y-4 text-white/90">
          <p>
            I am a <span className="text-white font-bold">Software Developer</span> with professional experience, currently working at <span className="text-white font-bold">ItProfound Bangalore</span>. I graduated with a B.Tech in Computer Science from Mar Baselios Christian College of Engineering and Technology, Peermade, Kerala.
          </p>
          <p>
            I specialize in frontend development using <span className="text-white font-bold">React, TypeScript, and Tailwind CSS</span>, along with backend integration using <span className="text-white font-bold">Firebase</span>. My work focuses on writing clean, maintainable code and delivering smooth user experiences.
          </p>
          <p>
            In my current role, I contribute to feature development, improve application performance, and collaborate on building scalable solutions.
          </p>
          
          <div className="mt-6 pt-6 border-t border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">What I bring:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Clean and maintainable code
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Strong frontend fundamentals
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Real-world project experience
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Fast learner with execution focus
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-80 space-y-4 bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md h-fit shadow-lg">
          <div className="space-y-1">
            <span className="text-xs md:text-sm text-white/60 uppercase tracking-widest font-bold">
              Name
            </span>
            <div className="text-sm md:text-base text-white font-bold">Jeeson Jacob Varghese</div>
          </div>
          <div className="space-y-1">
            <span className="text-xs md:text-sm text-white/60 uppercase tracking-widest font-bold">
              Email
            </span>
            <div className="text-sm md:text-base text-white font-bold">jeeson0987@gmail.com</div>
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
            <span className="text-xs md:text-sm text-white/60 uppercase tracking-widest font-bold">
              Graduation
            </span>
            <div className="text-sm md:text-base text-white font-bold">B.Tech (CSE), 2025</div>
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 pointer-events-none whitespace-nowrap z-0">
        ABOUT
      </div>
    </div>
  );
}
