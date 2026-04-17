export default function SkillsEducation() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 md:px-8 relative overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tighter mt-8 md:mt-12">Experience & Skills</h2>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-5xl w-full relative z-10">
        <div className="flex-1 space-y-4 md:space-y-6">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white/95 border-b border-white/20 pb-2 md:pb-3">Work Experience</h3>
            <div className="bg-white/10 p-4 md:p-5 rounded-xl border border-white/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-white"></div>
              <div className="text-xs md:text-sm text-white/70 font-bold uppercase tracking-widest mb-1">Software Developer</div>
              <div className="text-lg md:text-xl text-white font-bold leading-tight">ItProfound Bangalore</div>
              <div className="text-xs md:text-sm text-white/80 mt-1 font-semibold">2025 June — Present</div>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white/95 border-b border-white/20 pb-2 md:pb-3">Academics</h3>
            <div className="bg-white/5 p-4 md:p-5 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-white/40"></div>
              <div className="text-xs md:text-sm text-white/60 font-bold uppercase tracking-widest mb-1">B.Tech Degree</div>
              <div className="text-lg md:text-xl text-white font-bold leading-tight">Computer Science Engineering</div>
              <div className="text-xs md:text-sm text-white/80 mt-1">Mar Baselios Christian College</div>
              <div className="text-xs md:text-sm text-white/50 mt-1 font-bold">Graduated: 2025</div>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-8">
        <div className="flex-1 space-y-6">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white/95 border-b border-white/20 pb-2 md:pb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {['React', 'TypeScript', 'Tailwind CSS'].map(skill => (
                <span key={skill} className="px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-full border border-white/30 text-white font-bold bg-white/10 hover:bg-white/20 transition-all shadow-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-white/95 border-b border-white/20 pb-2 md:pb-3">Backend & Services</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {['Firebase', 'Git & GitHub', 'Vercel', 'Cloudinary'].map(skill => (
                <span key={skill} className="px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-full border border-white/30 text-white font-bold bg-white/10 hover:bg-white/20 transition-all shadow-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 pointer-events-none whitespace-nowrap z-0">
        SKILLS
      </div>
    </div>
  );
}
