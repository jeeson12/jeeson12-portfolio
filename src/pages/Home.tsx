import bgImage from "../assets/2.png";

type PageType = "home" | "about" | "skills" | "projects" | "contact";

export default function Home({
  setPage,
}: {
  setPage: (page: PageType) => void;
}) {
  return (
    <div className="group relative w-full h-full overflow-hidden flex items-center justify-center bg-[#9BA3A5]">
      {/* Background Large Typography */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.05] select-none">
        <h1 className="text-[25vw] font-black text-white leading-none tracking-tighter uppercase">
          Folio
        </h1>
      </div>

      {/* Profile Image - Centered Background Component with Saturation effect */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <img
          src={bgImage}
          alt="Profile Background"
          className="h-[120vh] w-auto object-contain drop-shadow-2xl grayscale contrast-125 opacity-30 lg:opacity-40 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-60"
        />
        {/* Subtle Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9BA3A5]/20 to-[#9BA3A5] transition-opacity duration-700 group-hover:opacity-40"></div>
      </div>

      {/* Main Content - Centered Layered Component */}
      <div className="z-20 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full mb-8 inline-flex items-center gap-2.5 shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
          <span className="text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
            Available for New Projects
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tighter drop-shadow-sm">
          Software Developer <br />
          <span className="text-white/40 italic">Building Scalable Apps</span>
        </h1>
        
        <p className="text-base md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed font-bold drop-shadow-sm">
          1 year of professional experience specializing in <br className="hidden md:block" />
          <span className="text-white bg-white/10 px-2 py-0.5 rounded">React, TypeScript, and Firebase</span>
          <br /> at ItProfound Bangalore.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <button 
            onClick={() => setPage('projects')}
            className="group/btn px-12 py-5 bg-white text-zinc-900 font-black rounded-full hover:bg-zinc-200 transition-all transform hover:-translate-y-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95 flex items-center justify-center gap-2"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
          <button 
            onClick={() => setPage('contact')}
            className="px-12 py-5 bg-transparent border-2 border-white/40 text-white font-black rounded-full hover:bg-white/10 transition-all transform hover:-translate-y-1.5 active:scale-95 shadow-lg flex items-center justify-center gap-2"
          >
            Contact me
          </button>
        </div>
      </div>

      {/* Corner Branding */}
      <div className="absolute top-10 left-10 z-30 hidden md:flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center font-black text-black text-xl shadow-2xl rotate-3">J</div>
        <div>
          <div className="text-white font-black tracking-tight text-lg">Jeeson Jacob</div>
          <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Varghese</div>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 z-30 hidden xl:block">
        <div className="text-right text-white/40 text-[10px] font-black uppercase tracking-[0.4em] mb-1">
          Currently Based
        </div>
        <div className="text-right text-white font-bold text-sm tracking-tighter">
          PEERMADE, KERALA
        </div>
      </div>
    </div>
  );
}
