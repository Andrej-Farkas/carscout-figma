import { ExternalLink, TrendingUp, Database, Percent, Mail } from 'lucide-react';

export default function DealerSection() {
  const benefits = [
    [Percent, '0% sale commission', 'CarScout does not take a percentage of the vehicle sale. You keep the full sale value.'],
    [ExternalLink, 'Direct website leads', 'Buyers click through to your own listing pages, helping you build traffic and own the customer journey.'],
    [TrendingUp, 'Lower dependency', 'Reduce reliance on expensive closed marketplace platforms by adding another discovery channel.'],
    [Database, 'Inventory sync ready', 'The MVP is static, but the long-term direction supports CSV/API-style inventory ingestion.'],
  ];
  const subject = encodeURIComponent('CarScout MVP Feedback');
  const body = encodeURIComponent(`Hi, I tried the CarScout demo and wanted to share some feedback...

I am a:
Buyer / car flipper / dealer / other

What I think of the idea:
Would direct seller or dealer leads be useful?
Would 0% purchase fees matter to me?
Would saved searches and email alerts be useful?
What feels confusing, missing, or untrustworthy?

Thanks.`);
  const mailtoHref = `mailto:Suhacakir@hotmail.co.uk?subject=${subject}&body=${body}`;

  return (
    <section id="for-dealers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Send buyers straight to your dealership - without giving up a cut.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            CarScout helps independent dealers get discovered by high-intent buyers, then routes them directly to your website or original listing page.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map(([Icon, title, copy]) => (
              <div key={title as string} className="bg-[#f8fafc] rounded-xl p-5 border border-gray-100">
                <div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#312E81]" />
                </div>
                <h3 className="text-base font-semibold text-[#0f172a] mb-1.5">{title as string}</h3>
                <p className="text-sm text-gray-600">{copy as string}</p>
              </div>
            ))}

            <div className="sm:col-span-2 bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl p-5 border border-violet-200">
              <p className="text-sm font-medium text-[#0f172a]">
                No forced checkout. No platform commission. Just direct buyer traffic.
              </p>
            </div>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl p-8 border border-gray-200 text-center">
            <div className="w-12 h-12 bg-violet-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-[#312E81]" />
            </div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">Tell us what you think</h3>
            <p className="text-gray-600 mb-6">
              Your email will include a few prompts to make feedback quick.
            </p>
            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#312E81] text-white rounded-lg hover:bg-[#26236b] transition-colors font-medium shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Email Feedback
            </a>
            <p className="text-xs text-gray-400 text-center mt-4">
              This MVP does not process payments or take commission. It demonstrates buyer discovery and lead-routing demand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
