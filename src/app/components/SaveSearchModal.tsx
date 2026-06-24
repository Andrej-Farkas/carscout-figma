import { useState, useEffect, useRef } from 'react';
import { X, Bell, CheckCircle } from 'lucide-react';
import type { SearchParams } from '../App-figma';

interface SaveSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchParams: SearchParams;
  sortOption?: string;
}

function SearchSummaryChips({ searchParams }: { searchParams: SearchParams }) {
  const chips: string[] = [];

  if (searchParams.makeModel) chips.push(searchParams.makeModel);
  if (searchParams.maxBudget) chips.push(`Under £${parseInt(searchParams.maxBudget).toLocaleString()}`);
  if (searchParams.minYear && searchParams.minYear !== 'Any') chips.push(`From ${searchParams.minYear}`);
  if (searchParams.fuelType && searchParams.fuelType !== 'Any') chips.push(searchParams.fuelType);
  if (searchParams.transmission && searchParams.transmission !== 'Any') chips.push(searchParams.transmission);
  if (searchParams.postcode) chips.push(searchParams.postcode.toUpperCase());
  if (searchParams.range && searchParams.range !== 'Any distance') chips.push(`Within ${searchParams.range}`);

  if (chips.length === 0) {
    return (
      <p className="text-sm text-gray-500 italic">Any make, any budget, any distance</p>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip, i) => (
        <span
          key={i}
          className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 text-[#2563eb] text-xs font-medium border border-blue-100"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}

export default function SaveSearchModal({ isOpen, onClose, searchParams, sortOption = 'Best Value' }: SaveSearchModalProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !submitted) {
      setTimeout(() => emailRef.current?.focus(), 50);
    }
  }, [isOpen, submitted]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setEmail('');
      setFirstName('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const searchSummaryText = [
    searchParams.makeModel || 'Any',
    searchParams.maxBudget ? `Under £${parseInt(searchParams.maxBudget).toLocaleString()}` : 'Any budget',
    searchParams.minYear && searchParams.minYear !== 'Any' ? `${searchParams.minYear}+` : 'Any year',
    searchParams.fuelType !== 'Any' ? searchParams.fuelType : 'Any fuel',
    searchParams.transmission !== 'Any' ? searchParams.transmission : 'Any transmission',
    searchParams.postcode || 'Any location',
    searchParams.range !== 'Any distance' ? searchParams.range : 'Any distance',
  ].join(', ');

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Save search alert modal"
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full shadow-xl border border-gray-100 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close alert modal"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-2">Search alert created</h3>
              <p className="text-gray-600 text-sm mb-6">
                {"We'll use your saved filters to notify you when matching cars appear in the prototype directory."}
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors font-medium"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-5">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-5 h-5 text-[#2563eb]" />
                </div>
                <h2 className="text-xl font-bold text-[#0f172a] mb-1.5">
                  Never miss a matching car
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Save your current filters and get an email when similar vehicles are added to the directory. No account required.
                </p>
              </div>

              {/* Search Summary */}
              <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-4 mb-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">Your search</p>
                <SearchSummaryChips searchParams={searchParams} />
              </div>

              {/* Netlify Form */}
              <form
                name="car-alerts"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                {/* Netlify hidden fields */}
                <input type="hidden" name="form-name" value="car-alerts" />
                <input type="hidden" name="query" value={searchParams.makeModel} />
                <input type="hidden" name="maxBudget" value={searchParams.maxBudget} />
                <input type="hidden" name="minYear" value={searchParams.minYear} />
                <input type="hidden" name="fuelType" value={searchParams.fuelType} />
                <input type="hidden" name="transmission" value={searchParams.transmission} />
                <input type="hidden" name="postcode" value={searchParams.postcode} />
                <input type="hidden" name="radius" value={searchParams.range} />
                <input type="hidden" name="maxMileage" value="" />
                <input type="hidden" name="source" value="" />
                <input type="hidden" name="sortOption" value={sortOption} />
                <input type="hidden" name="searchSummary" value={searchSummaryText} />

                <div className="space-y-4 mb-5">
                  <div>
                    <label htmlFor="modal-email" className="block text-sm font-medium text-[#0f172a] mb-1.5">
                      Email address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      id="modal-email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] outline-none transition-all bg-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-firstname" className="block text-sm font-medium text-[#0f172a] mb-1.5">
                      First name <span className="text-gray-400 text-xs font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="modal-firstname"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Alex"
                      autoComplete="given-name"
                      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#2563eb]/30 focus:border-[#2563eb] outline-none transition-all bg-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-4">
                  Prototype form powered by Netlify Forms. No account required.
                </p>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm text-[#0f172a] font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2.5 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors text-sm font-medium shadow-sm"
                  >
                    Create Email Alert
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
