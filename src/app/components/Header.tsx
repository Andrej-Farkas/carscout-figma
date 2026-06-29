import { Car } from 'lucide-react';

interface HeaderProps { onNavigate: (id: string) => void; }

export default function Header({ onNavigate }: HeaderProps) {

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('search')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-[#312E81] rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#0f172a]">CarScout</span>
            </button>
            <span className="hidden sm:inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">
              MVP Platform Concept
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => onNavigate('search')}
              className="text-[#0f172a] hover:text-[#312E81] transition-colors"
            >
              Search
            </button>
            <button 
              onClick={() => onNavigate('for-dealers')}
              className="text-[#0f172a] hover:text-[#312E81] transition-colors"
            >
              For Dealers
            </button>
            <button 
              onClick={() => onNavigate('how-it-works')}
              className="text-[#0f172a] hover:text-[#312E81] transition-colors"
            >
              How It Works
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => onNavigate('search')}
            className="px-4 py-2 bg-[#312E81] text-white rounded-lg hover:bg-[#26236b] transition-colors"
          >
            Start Search
          </button>
        </div>
      </div>
    </header>
  );
}
