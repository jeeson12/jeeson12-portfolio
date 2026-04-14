export default function Projects() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-8 relative overflow-y-auto">
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter mt-24">Projects</h2>
      
      <div className="max-w-4xl w-full z-10 flex flex-col items-center justify-center p-12 bg-white/5 rounded-3xl border border-white/10 text-center">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">I am working on it</h3>
        <p className="text-zinc-400 max-w-md">
          Great things take time. I am currently busy building and documenting my latest projects. Check back soon for updates!
        </p>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 pointer-events-none whitespace-nowrap z-0">
        WORKS
      </div>
    </div>
  );
}
