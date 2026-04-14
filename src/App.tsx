import { useState } from 'react';
import NavigationTab from './components/NavigationTab';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import SkillsEducation from './pages/SkillsEducation';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

type PageType = 'home' | 'about' | 'skills' | 'projects' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // The background matches the image aesthetic closely (#9ca3af roughly or #858b8f)
  // We'll use Tailwind's `bg-zinc-400` which is a nice neutral mid-grey.
  return (
    <div className="w-full h-screen bg-[#9BA3A5] font-sans selection:bg-white/20 overflow-hidden relative">
      <main className="relative w-full h-full">
        <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentPage === 'home' ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}>
          <Home />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentPage === 'about' ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}>
          <AboutMe />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentPage === 'skills' ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}>
          <SkillsEducation />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentPage === 'projects' ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}>
          <Projects />
        </div>
        <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentPage === 'contact' ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}>
          <ContactMe />
        </div>
      </main>

      <NavigationTab currentPage={currentPage} setPage={setCurrentPage} />
    </div>
  );
}
