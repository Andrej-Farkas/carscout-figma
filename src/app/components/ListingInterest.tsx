import { ArrowLeft, Car, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { Vehicle } from '../types';

interface ListingInterestProps {
  vehicle: Vehicle;
  onBackToResults: () => void;
  onBackToSearch: () => void;
}

export default function ListingInterest({ vehicle, onBackToResults, onBackToSearch }: ListingInterestProps) {
  const subject = encodeURIComponent('CarScout MVP Feedback');
  const body = encodeURIComponent(`Hi,

I clicked on this demo listing:
${vehicle.title}
£${vehicle.price.toLocaleString()}
${vehicle.source} - ${vehicle.dealerName}

My feedback on CarScout:

What I think of the idea:
What I like:
What I don't like / find confusing:
Would I use this when searching for a used car?
Would email alerts be useful?
Any other suggestions:

Thanks.`);
  const mailtoHref = `mailto:Suhacakir@hotmail.co.uk?subject=${subject}&body=${body}`;
  const tests = [
    ['Buyer value', 'Would this save you time compared with checking AutoTrader, eBay, dealer sites, and local garages separately?'],
    ['Email alerts', 'Would saved searches and email alerts help you avoid constantly refreshing different sites?'],
    ['Dealer lead generation', 'For dealers, CarScout could route high-intent buyers directly to their own websites instead of forcing a checkout middleman.'],
    ['0% purchase fee', 'CarScout would not process the vehicle purchase or take commission from the sale.'],
  ];
  const questions = [
    'What do you think of the CarScout idea?',
    'Would you use a site like this when looking for a used car?',
    'What do you like about the current MVP?',
    'What feels confusing, missing, or untrustworthy?',
    'Would email alerts for saved searches be useful?',
    'Would you prefer clicking directly to the dealer or seller website?',
    'If you are a dealer, would direct lead routing to your own website be useful?',
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBackToResults} className="mb-6 text-[#312E81] font-medium flex items-center gap-2 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to results
        </button>

        <section className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-8">
          <div className="grid sm:grid-cols-[220px_1fr]">
            <img src={vehicle.imageUrl} alt={vehicle.title} className="w-full h-52 sm:h-full object-cover" />
            <div className="p-6">
              <span className="inline-flex px-3 py-1 bg-violet-50 text-[#312E81] rounded-full text-xs font-semibold">Demo listing selected</span>
              <h1 className="text-2xl font-bold text-[#0f172a] mt-3">{vehicle.title}</h1>
              <p className="text-2xl font-bold text-[#312E81] mt-1">£{vehicle.price.toLocaleString()}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-gray-600">
                <span>{vehicle.year}</span>
                <span>{vehicle.mileage.toLocaleString()} miles</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {vehicle.distanceMiles} miles away
                </span>
                <span>{vehicle.source} - {vehicle.dealerName}</span>
                <span>Value Score {vehicle.valueScore}/100</span>
              </div>
              <p className="text-sm text-gray-600 mt-5">
                You clicked this demo listing, which suggests the search result caught your attention. This vehicle is not actually for sale through CarScout - it is mock data used to test the product idea.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold text-[#312E81] uppercase tracking-wide">MVP market research</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mt-2 mb-4">Help us validate CarScout</h2>
          <p className="text-lg text-gray-600">
            CarScout is a static MVP concept for a used-car deal-finding layer. Search once, compare cars across multiple sources, save alerts, and click through directly to the original seller without CarScout taking a cut from the sale.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-5">What we're testing</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {tests.map(([title, copy]) => (
              <article key={title} className="bg-white rounded-xl p-5 border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#312E81] mb-3" />
                <h3 className="font-semibold text-[#0f172a] mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-[1.35fr_.65fr] gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4">What we want to know</h2>
            <ul className="space-y-3">
              {questions.map((question) => (
                <li key={question} className="flex gap-3 text-gray-700">
                  <span className="text-[#312E81] font-bold">•</span>
                  {question}
                </li>
              ))}
            </ul>
          </div>
          <aside className="bg-violet-50 rounded-xl p-6 border border-violet-100">
            <Car className="w-7 h-7 text-[#312E81] mb-3" />
            <h2 className="text-xl font-bold text-[#0f172a] mb-2">Why this click matters</h2>
            <p className="text-sm text-gray-600">Because you clicked a demo listing, we can test whether the search results, value score, and comparison layout are strong enough to generate real buyer interest.</p>
          </aside>
        </section>

        <section className="bg-white rounded-2xl p-7 border border-gray-200 text-center mb-8">
          <h2 className="text-xl font-bold text-[#0f172a]">Tell us what you think</h2>
          <p className="text-gray-600 mt-2 mb-5">Your email will include the selected demo vehicle and a few prompts to make feedback quick.</p>
          <a href={mailtoHref} className="inline-flex items-center gap-2 px-5 py-3 bg-[#312E81] text-white rounded-lg hover:bg-[#26236b] font-medium">
            <Mail className="w-4 h-4" />
            Email Feedback
          </a>
        </section>

        <button onClick={onBackToSearch} className="text-[#312E81] hover:underline font-medium">
          Back to search
        </button>
      </div>
    </main>
  );
}
