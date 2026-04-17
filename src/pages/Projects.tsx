export default function Projects() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 md:px-8 relative overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter mt-8 md:mt-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full z-10">
        <div className="group bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all">
          <div className="p-8 md:p-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              PG Review Platform
            </h3>
            <p className="text-white/80 text-sm md:text-base mb-6 grow font-medium">
              A web application that allows users to explore, review, and rate
              PG accommodations. Features authentication, property filtering,
              and high-quality media handling.
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Firebase", "Cloudinary"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 rounded-md text-xs font-bold text-white border border-white/20 transition-colors hover:bg-white/30"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <ul className="text-xs text-white/60 space-y-1 ml-1 font-bold tracking-tight">
                <li className="flex items-center gap-2">
                  • Secure User Authentication
                </li>
                <li className="flex items-center gap-2">
                  • Real-time Reviews & Ratings
                </li>
                <li className="flex items-center gap-2">
                  • Dynamic Image Uploads
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Placeholder for next project */}
        <div className="bg-white/10 rounded-3xl border border-white/20 border-dashed flex flex-col items-center justify-center p-12 text-center">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/40"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
          <p className="text-white/60 text-sm font-bold uppercase tracking-widest">
            Next Project Coming Soon
          </p>
        </div>
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 pointer-events-none whitespace-nowrap z-0">
        WORKS
      </div>
    </div>
  );
}
