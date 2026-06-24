import type { SearchParams } from '../App-figma';
import SearchForm from './SearchForm';
import { Bell, Layers, ExternalLink, Percent } from 'lucide-react';

interface HeroSearchProps {
  onSearch: (params: SearchParams) => void;
}

export default function HeroSearch({ onSearch }: HeroSearchProps) {
  return (
    <div id="search" className="bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
            Find the best used-car deals across the web without paying platform markups.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            CarScout compares used-car listings from marketplaces, dealer websites, and local garages in one clean search. Save your results, get email alerts, and click straight through to the original seller.
          </p>

          {/* Hero Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="px-4 py-2 bg-[#2563eb] text-white rounded-lg text-sm font-medium flex items-center gap-1.5">
              <Percent className="w-3.5 h-3.5" />
              0% purchase fee
            </div>
            <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-700 flex items-center gap-1.5">
              <Bell className="w-3.5 h-3.5 text-[#2563eb]" />
              Email alerts for saved searches
            </div>
            <div className="px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-700 flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5 text-[#2563eb]" />
              Direct dealer lead routing
            </div>
          </div>
        </div>

        {/* Search Form Card */}
        <div className="max-w-4xl mx-auto mb-6">
          <SearchForm onSearch={onSearch} />
        </div>

        {/* Trust Strip */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1.5 before:content-['·'] before:text-gray-300 first:before:hidden">No account needed</span>
            <span className="flex items-center gap-1.5 before:content-['·'] before:text-gray-300">No checkout middleman</span>
            <span className="flex items-center gap-1.5 before:content-['·'] before:text-gray-300">Mock listings for MVP testing</span>
            <span className="flex items-center gap-1.5 before:content-['·'] before:text-gray-300">Built for buyers and independent dealers</span>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-[#2563eb]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
              Compare across sources
            </h3>
            <p className="text-gray-600">
              Bring marketplace and dealer listings into one clean view. No platform markup, no hidden fees.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <Bell className="w-6 h-6 text-[#2563eb]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
              Save your search
            </h3>
            <p className="text-gray-600">
              Stop refreshing five different websites. Get email alerts when matching cars appear.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              <ExternalLink className="w-6 h-6 text-[#2563eb]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
              Go direct, pay nothing extra
            </h3>
            <p className="text-gray-600">
              Click through to the original listing. CarScout does not sit in the middle of the transaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
