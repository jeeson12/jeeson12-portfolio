import { HomeIcon, UserIcon, CodeIcon, FolderIcon, MailIcon } from './Icons';

type PageType = 'home' | 'about' | 'skills' | 'projects' | 'contact';

interface NavigationTabProps {
  currentPage: PageType;
  setPage: (page: PageType) => void;
}

export default function NavigationTab({ currentPage, setPage }: NavigationTabProps) {
  const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'about', icon: UserIcon, label: 'About Me' },
    { id: 'skills', icon: CodeIcon, label: 'Skills' },
    { id: 'projects', icon: FolderIcon, label: 'Projects' },
    { id: 'contact', icon: MailIcon, label: 'Contact' },
  ] as const;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-zinc-900/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-6 shadow-2xl border border-zinc-800">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`relative group p-2 rounded-full transition-all duration-300 flex items-center justify-center ${
                isActive 
                  ? 'bg-zinc-200 text-zinc-900 shadow-md scale-110' 
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
              title={item.label}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
