export default function SkillsEducation() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-8 relative overflow-y-auto">
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter mt-24">Academics & Skills</h2>
      
      <div className="flex flex-col md:flex-row gap-16 max-w-5xl w-full relative z-10">
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-semibold text-white/80 border-b border-white/20 pb-4">Academics</h3>
          <div className="space-y-6 text-zinc-300">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-white/40"></div>
              <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider mb-1">Degree</div>
              <div className="text-xl text-white font-medium">B.Tech in Computer Science</div>
              <div className="text-sm opacity-80 mt-1">Mar Baselios Christian Collage of Engineering</div>
              <div className="text-xs opacity-50 mt-1 italic">(currently pursuing)</div>
            </div>
            
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-white/20"></div>
              <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider mb-1">Higher Secondary</div>
              <div className="text-xl text-white font-medium">Computer Science</div>
              <div className="text-sm opacity-80 mt-1">St Joseph Central School, Mundakayam</div>
              <div className="text-xs opacity-50 mt-1">2019 - 2021</div>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-white/10"></div>
              <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider mb-1">Matriculation</div>
              <div className="text-xl text-white font-medium">10th Grade</div>
              <div className="text-sm opacity-80 mt-1">St Joseph Central School, Mundakayam</div>
              <div className="text-xs opacity-50 mt-1">2019 • Grade: 90%</div>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-semibold text-white/80 border-b border-white/20 pb-4">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {['C', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL'].map(skill => (
              <span key={skill} className="px-5 py-3 rounded-full border border-white/20 text-white font-medium bg-white/5 hover:bg-white/10 transition-colors shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 pointer-events-none whitespace-nowrap z-0">
        SKILLS
      </div>
    </div>
  );
}
