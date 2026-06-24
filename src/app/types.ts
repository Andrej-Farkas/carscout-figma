export interface Vehicle {
  id: string;
  title: string;
  make: string;
  model: string;
  variant: string;
  price: number;
  year: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  distanceMiles: number;
  postcodeArea: string;
  source: string;
  dealerName: string;
  motExpiry: string;
  listedAt: string;
  valueScore: number;
  valueInsight: string;
  imageUrl: string;
  originalListingUrl: string;
}

export interface Filters {
  maxPrice: string;
  minYear: string;
  fuelTypes: string[];
  transmissions: string[];
  maxDistance: string;
  sources: string[];
  maxMileage: string;
}

export const defaultFilters: Filters = {
  maxPrice: '', minYear: '', fuelTypes: [], transmissions: [], maxDistance: '', sources: [], maxMileage: ''
};
