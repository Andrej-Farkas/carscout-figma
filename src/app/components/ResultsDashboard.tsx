import { useEffect, useMemo, useState } from 'react';
import type { SearchParams } from '../App-figma';
import SortBar from './SortBar';
import FilterPanel from './FilterPanel';
import VehicleCard from './VehicleCard';
import EmptyState from './EmptyState';
import { X, SlidersHorizontal, Bell } from 'lucide-react';
import { defaultFilters, Filters, Vehicle } from '../types';
import bundledCarsCsv from '../data/cars.csv?raw';
interface ResultsDashboardProps { searchParams: SearchParams; onReset: () => void; onSaveSearch: () => void; onViewListing: (vehicle: Vehicle) => void; }
type SortOption = 'Highest Value Score' | 'Lowest Price' | 'Newest Listing' | 'Lowest Mileage' | 'Closest Distance';
const parseCsv = (text: string): Vehicle[] => { const [header, ...lines] = text.trim().split(/\r?\n/); const keys = header.split(','); return lines.map(line => { const raw = Object.fromEntries(keys.map((key, index) => [key, line.split(',')[index] ?? ''])); return { ...raw, price: +raw.price, year: +raw.year, mileage: +raw.mileage, distanceMiles: +raw.distanceMiles, valueScore: +raw.valueScore } as Vehicle; }); };
export default function ResultsDashboard({ searchParams, onReset, onSaveSearch, onViewListing }: ResultsDashboardProps) {
  const [sortBy, setSortBy] = useState<SortOption>('Highest Value Score'); const [showFilters, setShowFilters] = useState(false); const [pendingFilters, setPendingFilters] = useState<Filters>(defaultFilters); const [appliedFilters, setAppliedFilters] = useState<Filters>(defaultFilters); const [vehicles, setVehicles] = useState<Vehicle[]>([]); const [loadError, setLoadError] = useState(false);
  useEffect(() => {
    const csvUrl = `${import.meta.env.BASE_URL}data/cars.csv`;
    fetch(csvUrl)
      .then(response => {
        if (!response.ok) throw new Error(`Unable to load vehicle data (${response.status})`);
        return response.text();
      })
      .then(text => {
        const parsed = parseCsv(text.replace(/^\uFEFF/, ''));
        if (!parsed.length) throw new Error('Vehicle data was empty');
        setVehicles(parsed);
      })
      // Some embedded design previews do not expose Vite's public directory.
      // Keep the public CSV as the primary source, with the exact same file
      // bundled only as a static-MVP fallback.
      .catch(() => {
        try {
          const parsed = parseCsv(bundledCarsCsv.replace(/^\uFEFF/, ''));
          if (!parsed.length) throw new Error('Vehicle data was empty');
          setVehicles(parsed);
        } catch {
          setLoadError(true);
        }
      });
  }, []);
  const filteredVehicles = useMemo(() => { let r = [...vehicles], f = appliedFilters; r = r.filter(v => !searchParams.makeModel || `${v.make} ${v.model}`.toLowerCase().includes(searchParams.makeModel.toLowerCase())).filter(v => !searchParams.maxBudget || v.price <= +searchParams.maxBudget).filter(v => searchParams.minYear === 'Any' || v.year >= +searchParams.minYear).filter(v => searchParams.fuelType === 'Any' || v.fuelType === searchParams.fuelType).filter(v => searchParams.transmission === 'Any' || v.transmission === searchParams.transmission).filter(v => searchParams.range === 'Any distance' || v.distanceMiles <= parseInt(searchParams.range)).filter(v => !f.maxPrice || v.price <= +f.maxPrice).filter(v => !f.minYear || v.year >= +f.minYear).filter(v => !f.fuelTypes.length || f.fuelTypes.includes(v.fuelType)).filter(v => !f.transmissions.length || f.transmissions.includes(v.transmission)).filter(v => !f.maxDistance || v.distanceMiles <= +f.maxDistance).filter(v => !f.sources.length || f.sources.includes(v.source)).filter(v => !f.maxMileage || v.mileage <= +f.maxMileage); const sorts = { 'Highest Value Score': (a: Vehicle,b: Vehicle) => b.valueScore-a.valueScore, 'Lowest Price': (a: Vehicle,b: Vehicle) => a.price-b.price, 'Newest Listing': (a: Vehicle,b: Vehicle) => Date.parse(b.listedAt)-Date.parse(a.listedAt), 'Lowest Mileage': (a: Vehicle,b: Vehicle) => a.mileage-b.mileage, 'Closest Distance': (a: Vehicle,b: Vehicle) => a.distanceMiles-b.distanceMiles }; return r.sort(sorts[sortBy]); }, [vehicles, searchParams, appliedFilters, sortBy]);
  const chips = [searchParams.makeModel, searchParams.maxBudget && `Under £${(+searchParams.maxBudget).toLocaleString()}`, searchParams.transmission !== 'Any' && searchParams.transmission, searchParams.fuelType !== 'Any' && searchParams.fuelType, appliedFilters.maxPrice && `Panel budget £${(+appliedFilters.maxPrice).toLocaleString()}`, appliedFilters.minYear && `${appliedFilters.minYear}+`, ...appliedFilters.fuelTypes, ...appliedFilters.transmissions].filter(Boolean) as string[];
  const resetFilters = () => { setPendingFilters(defaultFilters); setAppliedFilters(defaultFilters); };
  if (loadError) return <div className="min-h-screen p-12 text-center"><h2 className="text-2xl font-bold">We couldn't load the mock listings.</h2><p className="text-gray-600 mt-2">Please refresh and try again.</p></div>;
  if (!vehicles.length) return <div className="min-h-screen p-12 text-center text-gray-600">Loading mock vehicle listings…</div>;
  return <div className="min-h-screen bg-[#f8fafc] py-8"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="mb-6"><div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-3"><div><h2 className="text-2xl font-bold text-[#0f172a]">Found {filteredVehicles.length} matching vehicles</h2><p className="text-sm text-gray-500 mt-1">Showing results for your applied filters.</p></div><div className="flex gap-3"><button onClick={onSaveSearch} className="px-4 py-2 bg-[#2563eb] text-white rounded-lg font-medium flex items-center gap-2"><Bell className="w-4 h-4" />Save Search / Set Alert</button><button onClick={onReset} className="px-4 py-2 bg-white border rounded-lg">New search</button></div></div>{chips.length > 0 && <div className="flex flex-wrap gap-2 mb-3">{chips.map(c => <span key={c} className="px-3 py-1 bg-blue-50 text-[#2563eb] rounded-full text-sm border border-blue-100">{c}</span>)}</div>}<div className="flex gap-4"><button onClick={() => setShowFilters(!showFilters)} className="lg:hidden px-4 py-2 bg-white border rounded-lg flex gap-2"><SlidersHorizontal className="w-4 h-4" />Filters</button><SortBar sortBy={sortBy} onSortChange={setSortBy} /></div></div><div className="flex gap-6"><div className="hidden lg:block"><FilterPanel filters={pendingFilters} onFiltersChange={setPendingFilters} onApply={() => setAppliedFilters(pendingFilters)} onReset={resetFilters} /></div>{showFilters && <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setShowFilters(false)}><div className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto" onClick={e => e.stopPropagation()}><div className="flex justify-between mb-6"><h3 className="font-semibold">Filters</h3><button onClick={() => setShowFilters(false)}><X /></button></div><FilterPanel filters={pendingFilters} onFiltersChange={setPendingFilters} onApply={() => { setAppliedFilters(pendingFilters); setShowFilters(false); }} onReset={resetFilters} /></div></div>}<div className="flex-1">{filteredVehicles.length === 0 ? <EmptyState onReset={onReset} /> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">{filteredVehicles.slice(0, 80).map(v => <VehicleCard key={v.id} vehicle={v} onViewListing={onViewListing} />)}</div>}</div></div></div></div>;
}
