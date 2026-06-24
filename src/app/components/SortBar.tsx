import { ArrowUpDown } from 'lucide-react';

type SortOption = 'Highest Value Score' | 'Lowest Price' | 'Newest Listing' | 'Lowest Mileage' | 'Closest Distance';

interface SortBarProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export default function SortBar({ sortBy, onSortChange }: SortBarProps) {
  const sortOptions: SortOption[] = [
    'Highest Value Score',
    'Lowest Price',
    'Newest Listing',
    'Lowest Mileage',
    'Closest Distance'
  ];

  return (
    <div className="flex-1 flex items-center gap-3 bg-white rounded-lg px-4 py-2 border border-gray-300">
      <ArrowUpDown className="w-4 h-4 text-gray-600 shrink-0" />
      <span className="text-sm text-gray-600 shrink-0">Sort:</span>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="flex-1 bg-transparent outline-none text-[#0f172a] font-medium"
      >
        {sortOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
