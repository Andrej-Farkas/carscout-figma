import { useMemo, useState } from 'react';
import type { SearchParams } from '../App-figma';
import SortBar from './SortBar';
import FilterPanel from './FilterPanel';
import VehicleCard from './VehicleCard';
import EmptyState from './EmptyState';
import { X, SlidersHorizontal, Bell } from 'lucide-react';
import { defaultFilters, Filters, Vehicle } from '../types';
import { vehicles } from '../vehicleData';

interface ResultsDashboardProps {
  searchParams: SearchParams;
  onReset: () => void;
  onViewAll: () => void;
  onSaveSearch: () => void;
}

type SortOption = 'Highest Value Score' | 'Lowest Price' | 'Newest Listing' | 'Lowest Mileage' | 'Closest Distance';

const scoreCloseMatch = (vehicle: Vehicle, searchParams: SearchParams) => {
  let score = vehicle.valueScore;
  const term = searchParams.makeModel.trim().toLowerCase();

  if (term && `${vehicle.make} ${vehicle.model} ${vehicle.title}`.toLowerCase().includes(term)) score += 40;
  if (searchParams.maxBudget && vehicle.price <= +searchParams.maxBudget) score += 20;
  if (searchParams.minYear !== 'Any' && vehicle.year >= +searchParams.minYear) score += 12;
  if (searchParams.fuelType !== 'Any' && vehicle.fuelType === searchParams.fuelType) score += 10;
  if (searchParams.transmission !== 'Any' && vehicle.transmission === searchParams.transmission) score += 10;
  if (searchParams.range !== 'Any distance' && vehicle.distanceMiles <= parseInt(searchParams.range)) score += 8;

  return score;
};

export default function ResultsDashboard({ searchParams, onReset, onViewAll, onSaveSearch }: ResultsDashboardProps) {
  const [sortBy, setSortBy] = useState<SortOption>('Highest Value Score');
  const [showFilters, setShowFilters] = useState(false);
  const [pendingFilters, setPendingFilters] = useState<Filters>(defaultFilters);
  const [appliedFilters, setAppliedFilters] = useState<Filters>(defaultFilters);

  const filteredVehicles = useMemo(() => {
    let results = [...vehicles];
    const filters = appliedFilters;

    results = results
      .filter((vehicle) => !searchParams.makeModel || `${vehicle.make} ${vehicle.model}`.toLowerCase().includes(searchParams.makeModel.toLowerCase()))
      .filter((vehicle) => !searchParams.maxBudget || vehicle.price <= +searchParams.maxBudget)
      .filter((vehicle) => searchParams.minYear === 'Any' || vehicle.year >= +searchParams.minYear)
      .filter((vehicle) => searchParams.fuelType === 'Any' || vehicle.fuelType === searchParams.fuelType)
      .filter((vehicle) => searchParams.transmission === 'Any' || vehicle.transmission === searchParams.transmission)
      .filter((vehicle) => searchParams.range === 'Any distance' || vehicle.distanceMiles <= parseInt(searchParams.range))
      .filter((vehicle) => !filters.maxPrice || vehicle.price <= +filters.maxPrice)
      .filter((vehicle) => !filters.minYear || vehicle.year >= +filters.minYear)
      .filter((vehicle) => !filters.fuelTypes.length || filters.fuelTypes.includes(vehicle.fuelType))
      .filter((vehicle) => !filters.transmissions.length || filters.transmissions.includes(vehicle.transmission))
      .filter((vehicle) => !filters.maxDistance || vehicle.distanceMiles <= +filters.maxDistance)
      .filter((vehicle) => !filters.sources.length || filters.sources.includes(vehicle.source))
      .filter((vehicle) => !filters.maxMileage || vehicle.mileage <= +filters.maxMileage);

    const sorts = {
      'Highest Value Score': (a: Vehicle, b: Vehicle) => b.valueScore - a.valueScore,
      'Lowest Price': (a: Vehicle, b: Vehicle) => a.price - b.price,
      'Newest Listing': (a: Vehicle, b: Vehicle) => Date.parse(b.listedAt) - Date.parse(a.listedAt),
      'Lowest Mileage': (a: Vehicle, b: Vehicle) => a.mileage - b.mileage,
      'Closest Distance': (a: Vehicle, b: Vehicle) => a.distanceMiles - b.distanceMiles,
    };

    return results.sort(sorts[sortBy]);
  }, [searchParams, appliedFilters, sortBy]);

  const suggestedVehicles = useMemo(
    () =>
      [...vehicles]
        .sort((a, b) => scoreCloseMatch(b, searchParams) - scoreCloseMatch(a, searchParams))
        .slice(0, 6),
    [searchParams],
  );

  const chips = [
    searchParams.makeModel,
    searchParams.maxBudget && `Under £${(+searchParams.maxBudget).toLocaleString()}`,
    searchParams.transmission !== 'Any' && searchParams.transmission,
    searchParams.fuelType !== 'Any' && searchParams.fuelType,
    appliedFilters.maxPrice && `Panel budget £${(+appliedFilters.maxPrice).toLocaleString()}`,
    appliedFilters.minYear && `${appliedFilters.minYear}+`,
    ...appliedFilters.fuelTypes,
    ...appliedFilters.transmissions,
  ].filter(Boolean) as string[];

  const resetFilters = () => {
    setPendingFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-3">
            <div>
              <h2 className="text-2xl font-bold text-[#0f172a]">Found {filteredVehicles.length} matching vehicles</h2>
              <p className="text-sm text-gray-500 mt-1">Showing results for your applied filters.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={onSaveSearch} className="px-4 py-2 bg-[#312E81] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#26236b]">
                <Bell className="w-4 h-4" />
                Save Search / Set Alert
              </button>
              <button onClick={onReset} className="px-4 py-2 bg-white border rounded-lg">
                New search
              </button>
            </div>
          </div>

          {chips.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {chips.map((chip) => (
                <span key={chip} className="px-3 py-1 bg-violet-50 text-[#312E81] rounded-full text-sm border border-violet-100">
                  {chip}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-4">
            <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden px-4 py-2 bg-white border rounded-lg flex gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <SortBar sortBy={sortBy} onSortChange={setSortBy} />
          </div>
        </div>

        <div className="flex gap-6">
          <div className="hidden lg:block">
            <FilterPanel filters={pendingFilters} onFiltersChange={setPendingFilters} onApply={() => setAppliedFilters(pendingFilters)} onReset={resetFilters} />
          </div>

          {showFilters && (
            <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setShowFilters(false)}>
              <div className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto" onClick={(event) => event.stopPropagation()}>
                <div className="flex justify-between mb-6">
                  <h3 className="font-semibold">Filters</h3>
                  <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                    <X />
                  </button>
                </div>
                <FilterPanel
                  filters={pendingFilters}
                  onFiltersChange={setPendingFilters}
                  onApply={() => {
                    setAppliedFilters(pendingFilters);
                    setShowFilters(false);
                  }}
                  onReset={resetFilters}
                />
              </div>
            </div>
          )}

          <div className="flex-1">
            {filteredVehicles.length === 0 ? (
              <EmptyState
                vehicles={suggestedVehicles}
                onReset={() => {
                  resetFilters();
                  onViewAll();
                }}
                onViewAll={() => {
                  resetFilters();
                  onViewAll();
                }}
              />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredVehicles.slice(0, 80).map((vehicle) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
