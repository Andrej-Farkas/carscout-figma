import { Search, BarChart3, Bell } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Not another car marketplace. A smarter way to monitor the used-car market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            [
              Search,
              'Step 1',
              'Search once',
              'Enter your budget, model, fuel type, transmission, year, and distance. One search checks the demo inventory across sources.',
            ],
            [
              BarChart3,
              'Step 2',
              'Compare deal signals',
              'CarScout ranks listings using mock value signals like price, mileage, age, distance and MOT-style checks to surface stronger deals faster.',
            ],
            [
              Bell,
              'Step 3',
              'Act fast or save alerts',
              'Click through to the original seller or save your search so matching cars can be sent to you when they appear.',
            ],
          ].map(([Icon, step, title, copy]) => (
            <div key={step as string} className="bg-white rounded-xl p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon className="w-8 h-8 text-[#312E81]" />
              </div>
              <div className="inline-block px-3 py-1 bg-[#312E81] text-white rounded-full text-sm font-medium mb-4">
                {step as string}
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{title as string}</h3>
              <p className="text-gray-600">{copy as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
