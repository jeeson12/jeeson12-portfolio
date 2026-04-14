import bgImage from '../assets/bgd5r,.png';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Top Header Information */}
      <div className="absolute top-8 left-8 text-white/80 font-medium tracking-wide">
        @ Jeeson Jacob Varghese
      </div>
      <div className="absolute top-8 right-8 text-right text-white/50 max-w-sm text-sm">
        Aspiring Computer Science Engineer with skills in Java, Python, and Web Development. Passionate about hands-on experiences and creating exceptional digital experiences.
      </div>

      {/* Large Background Typography */}
      <div className="absolute z-0 w-full flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] pointer-events-none whitespace-nowrap">
        <h1 className="text-[14vw] font-bold text-white leading-none tracking-tighter mix-blend-overlay opacity-90">
          PORTFOLIO
        </h1>
      </div>

      {/* Center Image Component */}
      <div className="z-10 relative mt-12">
        <img 
          src={bgImage} 
          alt="Profile" 
          className="max-h-[70vh] object-contain drop-shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
        />
      </div>
    </div>
  );
}
