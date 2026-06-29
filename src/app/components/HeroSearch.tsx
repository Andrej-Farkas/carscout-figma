import { useState } from 'react';
import type { SearchParams } from '../App-figma';
import SearchForm from './SearchForm';
import { Bell, Layers, ExternalLink, Percent, Target, CheckCircle2, Store, ShieldCheck } from 'lucide-react';

interface HeroSearchProps {
  onSearch: (params: SearchParams) => void;
}

const feedbackHref = `mailto:Suhacakir@hotmail.co.uk?subject=${encodeURIComponent('CarScout MVP Feedback')}&body=${encodeURIComponent('Hi, I tried the CarScout demo and wanted to share some feedback...')}`;

const featurePills = [
  { label: '0% purchase fee', icon: Percent },
  { label: 'Email alerts for saved searches', icon: Bell },
  { label: 'Direct dealer lead routing', icon: ExternalLink },
];

const hunterFeatures = [
  ['Search across the web', 'Compare cars from marketplaces, dealer websites and local sellers in one place.', Layers],
  ['Spot better value cars', 'Use value scores and listing comparisons to identify cars that look underpriced.', Target],
  ['Save your searches', 'Set your filters once and get alerts when matching cars appear.', Bell],
  ['Check before you buy', 'Use MOT-style checks and deal signals to understand whether a listing is worth acting on.', ShieldCheck],
  ['Contact sellers directly', 'Go straight to the original seller or dealer without paying a platform purchase fee.', ExternalLink],
  ['Help smaller dealers get seen', 'Give independent dealerships another way to reach buyers without relying only on expensive marketplaces.', Store],
];

export default function HeroSearch({ onSearch }: HeroSearchProps) {
  const [activePill, setActivePill] = useState(0);

  return (
    <div id="search" className="bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
            Find better used-car deals faster.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            CarScout compares listings across the web so you can spot the best value cars and contact the original seller directly.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <button
              type="button"
              onClick={() => document.getElementById('search-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="px-5 py-3 bg-[#312E81] text-white rounded-lg hover:bg-[#26236b] transition-colors font-medium"
            >
              Try the demo search
            </button>
            <a
              href={feedbackHref}
              className="px-5 py-3 bg-white text-[#312E81] rounded-lg border border-violet-200 hover:bg-violet-50 transition-colors font-medium"
            >
              Tell us what you think
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12" onMouseLeave={() => setActivePill(0)}>
            {featurePills.map(({ label, icon: Icon }, index) => {
              const isActive = activePill === index;

              return (
                <button
                  key={label}
                  type="button"
                  onMouseEnter={() => setActivePill(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                    isActive
                      ? 'bg-[#312E81] text-white border border-[#312E81]'
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-violet-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#312E81]'}`} />
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div id="search-form" className="max-w-4xl mx-auto mb-6 scroll-mt-24">
          <SearchForm onSearch={onSearch} />
        </div>

        <div className="max-w-4xl mx-auto mb-14">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1.5 before:content-['·'] before:text-gray-300 first:before:hidden">No account needed</span>
            <span className="flex items-center gap-1.5 before:content-['·'] before:text-gray-300">No checkout middleman</span>
            <span className="flex items-center gap-1.5 before:content-['·'] before:text-gray-300">Mock listings for MVP testing</span>
            <span className="flex items-center gap-1.5 before:content-['·'] before:text-gray-300">Built for buyers, flippers and independent dealers</span>
          </div>
        </div>

        <section className="max-w-5xl mx-auto mb-14">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-[#312E81] mb-2">Not another car marketplace</p>
            <h2 className="text-3xl font-bold text-[#0f172a] mb-3">Built for serious car hunters</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Whether you're buying your next car or searching for undervalued stock to flip, CarScout helps you monitor the market, compare listings and move quickly when a good deal appears.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hunterFeatures.map(([title, copy, Icon]) => (
              <article key={title as string} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#312E81]" />
                </div>
                <h3 className="font-semibold text-[#0f172a] mb-1.5">{title as string}</h3>
                <p className="text-sm text-gray-600">{copy as string}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="w-12 h-12 bg-violet-50 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-[#312E81]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Compare across sources</h3>
            <p className="text-gray-600">Bring marketplace and dealer listings into one clean view. No platform markup, no hidden fees.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="w-12 h-12 bg-violet-50 rounded-lg flex items-center justify-center mb-4">
              <Bell className="w-6 h-6 text-[#312E81]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Save your search</h3>
            <p className="text-gray-600">Stop refreshing five different websites. Get email alerts when matching cars appear.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="w-12 h-12 bg-violet-50 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#312E81]" />
            </div>
            <h3 className="text-lg font-semibold text-[#0f172a] mb-2">Find cars worth acting on</h3>
            <p className="text-gray-600">Use value scores, MOT-style checks and deal signals to move faster with more confidence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
