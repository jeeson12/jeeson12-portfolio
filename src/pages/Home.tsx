import bgImage from "../assets/2.png";

type PageType = "home" | "about" | "skills" | "projects" | "contact";

export default function Home({}: { setPage: (page: PageType) => void }) {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#9BA3A5]">
      {/* Background Large Typography - Positioned to avoid collisions */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.07] select-none">
        <h1 className="text-[22vw] font-black text-white leading-none tracking-tighter uppercase">
          Folio
        </h1>
      </div>

      {/* Main Container - Grid layout for better separation */}
      <div className="z-20 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center h-full gap-8">
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left pt-12 lg:pt-0">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8 inline-block">
            <span className="text-white text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for projects
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tighter">
            Software Developer building{" "}
            <span className="text-white/40 italic">scalable</span> web apps
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed font-medium">
            1 year of professional experience working with{" "}
            <span className="font-bold border-b-2 border-white/20 pb-0.5">
              React, TS, and Firebase
            </span>
            . Currently improving user experiences at ItProfound Bangalore.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={() => setPage('projects')}
              className="px-10 py-4 bg-white text-zinc-900 font-black rounded-full hover:bg-zinc-200 transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95"
            >
              View Projects
            </button>
            <button 
              onClick={() => setPage('contact')}
              className="px-10 py-4 bg-transparent border-2 border-white/40 text-white font-black rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Contact Me
            </button>
          </div> */}
        </div>

        {/* Right Side: Visual Image - Saturates only when pointed at */}
        <div className="group/img relative w-full h-full flex items-end justify-center lg:justify-end">
          <div className="absolute inset-0 bg-linear-to-t from-[#9BA3A5] via-transparent to-transparent z-10 lg:hidden h-1/2 bottom-0 transition-opacity group-hover/img:opacity-0"></div>
          <img
            src={bgImage}
            alt="Profile Visual"
            className="max-h-[60vh] lg:max-h-[85vh] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] grayscale contrast-125 transition-all duration-700 hover:grayscale-50 opacity-60 lg:opacity-100 hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Top Header Information - Floating */}
      <div className="absolute top-8 left-8 z-30 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-black text-black text-xs">
          J
        </div>
        <div className="text-white font-bold tracking-tight text-sm">
          @jeeson.jacob
        </div>
      </div>

      <div className="absolute top-8 right-8 z-30 hidden xl:block">
        <div className="text-right text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
          Based in Peermade, Kerala
        </div>
      </div>
    </div>
  );
}
