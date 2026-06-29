import { SearchX } from 'lucide-react';
import { Vehicle } from '../types';
import VehicleCard from './VehicleCard';

interface EmptyStateProps {
  vehicles: Vehicle[];
  onReset: () => void;
  onViewAll: () => void;
}

export default function EmptyState({ vehicles, onReset, onViewAll }: EmptyStateProps) {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-8 sm:p-12 text-center border border-gray-200">
        <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <SearchX className="w-8 h-8 text-[#312E81]" />
        </div>
        <h3 className="text-xl font-semibold text-[#0f172a] mb-2">No exact matches in the demo data yet</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          This MVP currently uses a limited set of demo listings, so we may not have that specific car available yet. Try widening your filters or explore the example cars below to see how CarScout compares listings.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={onViewAll}
            className="px-6 py-3 bg-[#312E81] text-white rounded-lg hover:bg-[#26236b] transition-colors font-medium"
          >
            View all demo cars
          </button>
          <button
            onClick={onReset}
            className="px-6 py-3 bg-white text-[#312E81] rounded-lg border border-violet-200 hover:bg-violet-50 transition-colors font-medium"
          >
            Reset filters
          </button>
        </div>
      </div>

      <section>
        <h3 className="text-lg font-semibold text-[#0f172a] mb-4">Available demo cars</h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>
    </div>
  );
}
