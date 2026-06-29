import { useState } from 'react';
import { Search } from 'lucide-react';
import type { SearchParams } from '../App-figma';

interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [formData, setFormData] = useState<SearchParams>({
    makeModel: '',
    maxBudget: '',
    minYear: 'Any',
    fuelType: 'Any',
    transmission: 'Any',
    postcode: '',
    range: 'Any distance'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(formData);
  };

  const handleChange = (field: keyof SearchParams, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Make/Model */}
        <div className="sm:col-span-2 lg:col-span-1">
          <label htmlFor="makeModel" className="block text-sm font-medium text-[#0f172a] mb-2">
            Make / Model
          </label>
          <input
            type="text"
            id="makeModel"
            value={formData.makeModel}
            onChange={(e) => handleChange('makeModel', e.target.value)}
            placeholder="e.g. Golf, Fiesta, BMW 1 Series"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#312E81] focus:border-transparent outline-none"
          />
        </div>

        {/* Max Budget */}
        <div>
          <label htmlFor="maxBudget" className="block text-sm font-medium text-[#0f172a] mb-2">
            Max Budget
          </label>
          <input
            type="number"
            id="maxBudget"
            value={formData.maxBudget}
            onChange={(e) => handleChange('maxBudget', e.target.value)}
            placeholder="e.g. 10000"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#312E81] focus:border-transparent outline-none"
          />
        </div>

        {/* Minimum Year */}
        <div>
          <label htmlFor="minYear" className="block text-sm font-medium text-[#0f172a] mb-2">
            Minimum Year
          </label>
          <select
            id="minYear"
            value={formData.minYear}
            onChange={(e) => handleChange('minYear', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#312E81] focus:border-transparent outline-none bg-white"
          >
            <option>Any</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
          </select>
        </div>

        {/* Fuel Type */}
        <div>
          <label htmlFor="fuelType" className="block text-sm font-medium text-[#0f172a] mb-2">
            Fuel Type
          </label>
          <select
            id="fuelType"
            value={formData.fuelType}
            onChange={(e) => handleChange('fuelType', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#312E81] focus:border-transparent outline-none bg-white"
          >
            <option>Any</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Hybrid</option>
            <option>Electric</option>
          </select>
        </div>

        {/* Transmission */}
        <div>
          <label htmlFor="transmission" className="block text-sm font-medium text-[#0f172a] mb-2">
            Transmission
          </label>
          <select
            id="transmission"
            value={formData.transmission}
            onChange={(e) => handleChange('transmission', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#312E81] focus:border-transparent outline-none bg-white"
          >
            <option>Any</option>
            <option>Manual</option>
            <option>Automatic</option>
          </select>
        </div>

        {/* Postcode */}
        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-[#0f172a] mb-2">
            Postcode
          </label>
          <input
            type="text"
            id="postcode"
            value={formData.postcode}
            onChange={(e) => handleChange('postcode', e.target.value)}
            placeholder="e.g. SW9"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#312E81] focus:border-transparent outline-none"
          />
        </div>

        {/* Range */}
        <div>
          <label htmlFor="range" className="block text-sm font-medium text-[#0f172a] mb-2">
            Range
          </label>
          <select
            id="range"
            value={formData.range}
            onChange={(e) => handleChange('range', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#312E81] focus:border-transparent outline-none bg-white"
          >
            <option>Any distance</option>
            <option>5 miles</option>
            <option>10 miles</option>
            <option>25 miles</option>
            <option>50 miles</option>
            <option>100 miles</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <button
        type="submit"
        className="w-full py-3 px-6 bg-[#312E81] text-white rounded-lg hover:bg-[#26236b] transition-colors flex items-center justify-center gap-2 font-medium"
      >
        <Search className="w-5 h-5" />
        Search Cars
      </button>
    </form>
  );
}
