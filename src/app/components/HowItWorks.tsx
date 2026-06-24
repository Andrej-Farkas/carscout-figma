import { Search, BarChart3, Bell } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your next used car in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-[#2563eb]" />
            </div>
            <div className="inline-block px-3 py-1 bg-[#2563eb] text-white rounded-full text-sm font-medium mb-4">
              Step 1
            </div>
            <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
              Search once
            </h3>
            <p className="text-gray-600">
              Enter your budget, model, fuel type, transmission, year, and distance. One form covers every source.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-[#2563eb]" />
            </div>
            <div className="inline-block px-3 py-1 bg-[#2563eb] text-white rounded-full text-sm font-medium mb-4">
              Step 2
            </div>
            <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
              Compare by Value Score
            </h3>
            <p className="text-gray-600">
              CarScout ranks listings using mock value signals like price, mileage, age, and distance to surface stronger deals faster.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="w-8 h-8 text-[#2563eb]" />
            </div>
            <div className="inline-block px-3 py-1 bg-[#2563eb] text-white rounded-full text-sm font-medium mb-4">
              Step 3
            </div>
            <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
              Go direct or save alerts
            </h3>
            <p className="text-gray-600">
              Open the original listing in a new tab or save your search to get email alerts when similar cars appear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
