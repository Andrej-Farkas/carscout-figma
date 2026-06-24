import { useState } from 'react';
import { Store, ExternalLink, TrendingUp, Database, Percent } from 'lucide-react';

export default function DealerSection() {
  const [formData, setFormData] = useState({
    dealershipName: '',
    email: '',
    website: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ dealershipName: '', email: '', website: '' });
    }, 3000);
  };

  return (
    <section id="for-dealers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
            Send buyers straight to your dealership — without giving up a cut.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            CarScout helps independent dealers get discovered by high-intent buyers, then routes them directly to your website or original listing page.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Benefits Panel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#f8fafc] rounded-xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                <Percent className="w-5 h-5 text-[#2563eb]" />
              </div>
              <h3 className="text-base font-semibold text-[#0f172a] mb-1.5">
                0% sale commission
              </h3>
              <p className="text-sm text-gray-600">
                CarScout does not take a percentage of the vehicle sale. You keep the full sale value.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                <ExternalLink className="w-5 h-5 text-[#2563eb]" />
              </div>
              <h3 className="text-base font-semibold text-[#0f172a] mb-1.5">
                Direct website leads
              </h3>
              <p className="text-sm text-gray-600">
                Buyers click through to your own listing pages, helping you build traffic and own the customer journey.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-[#2563eb]" />
              </div>
              <h3 className="text-base font-semibold text-[#0f172a] mb-1.5">
                Lower dependency
              </h3>
              <p className="text-sm text-gray-600">
                Reduce reliance on expensive closed marketplace platforms by adding another discovery channel.
              </p>
            </div>

            <div className="bg-[#f8fafc] rounded-xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                <Database className="w-5 h-5 text-[#2563eb]" />
              </div>
              <h3 className="text-base font-semibold text-[#0f172a] mb-1.5">
                Inventory sync ready
              </h3>
              <p className="text-sm text-gray-600">
                The MVP is static, but the long-term direction supports CSV/API-style inventory ingestion.
              </p>
            </div>

            {/* Key value line */}
            <div className="sm:col-span-2 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
              <p className="text-sm font-medium text-[#0f172a]">
                No forced checkout. No platform commission. Just direct buyer traffic.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#f8fafc] rounded-2xl p-8 border border-gray-200">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                  {"You're on the waitlist!"}
                </h3>
                <p className="text-gray-600">
                  {"We'll be in touch about early access, listing visibility, and direct lead routing."}
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[#0f172a] mb-1.5">
                  Join the dealer partner waitlist
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Register your dealership interest and {"we'll"} contact you about early access, listing visibility, and direct lead routing.
                </p>
                <form
                  name="dealer-waitlist"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="dealer-waitlist" />
                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="dealershipName" className="block text-sm font-medium text-[#0f172a] mb-1.5">
                        Dealership name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="dealershipName"
                        name="dealershipName"
                        value={formData.dealershipName}
                        onChange={(e) => setFormData({ ...formData, dealershipName: e.target.value })}
                        required
                        placeholder="Your dealership name"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="dealerEmail" className="block text-sm font-medium text-[#0f172a] mb-1.5">
                        Work email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="dealerEmail"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="you@dealership.com"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-[#0f172a] mb-1.5">
                        Website URL <span className="text-gray-400 text-xs font-normal">(optional)</span>
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourdealership.com"
                        className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] outline-none bg-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors font-medium shadow-sm"
                  >
                    Join Dealer Waitlist
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    This MVP does not process payments or take commission. It demonstrates buyer discovery and lead-routing demand.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
