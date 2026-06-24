import { SearchX } from 'lucide-react';

interface EmptyStateProps {
  onReset: () => void;
}

export default function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <SearchX className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
        No cars match those filters yet
      </h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Try widening your budget, distance, year, or transmission preferences.
      </p>
      <button
        onClick={onReset}
        className="px-6 py-3 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors font-medium"
      >
        Reset Active Filters
      </button>
    </div>
  );
}
