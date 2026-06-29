import { Car } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#312E81] rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[#0f172a]">CarScout</span>
            </div>
            <p className="text-gray-600 mb-3 max-w-md">
              MVP Platform Concept - buyer-first used car aggregation with direct dealer lead routing.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              CarScout is a static MVP validation prototype using mock listings. It does not process vehicle purchases, take payment, or take commission from sales.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0f172a] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ['top', 'Search'],
                ['for-dealers', 'For Dealers'],
                ['how-it-works', 'How It Works'],
              ].map(([id, label]) => (
                <li key={id}>
                  <button onClick={() => scrollToSection(id)} className="text-gray-600 hover:text-[#312E81] transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#0f172a] mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#312E81] transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#312E81] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; 2026 CarScout. MVP Platform Concept.</p>
        </div>
      </div>
    </footer>
  );
}
