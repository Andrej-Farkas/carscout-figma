import { Vehicle } from './types';
import carsCsv from './data/cars.csv?raw';

export const parseCsv = (text: string): Vehicle[] => {
  const [header, ...lines] = text.trim().replace(/^\uFEFF/, '').split(/\r?\n/);
  const keys = header.split(',');

  return lines.map((line) => {
    const values = line.split(',');
    const raw = Object.fromEntries(keys.map((key, index) => [key, values[index] ?? '']));

    return {
      ...raw,
      price: +raw.price,
      year: +raw.year,
      mileage: +raw.mileage,
      distanceMiles: +raw.distanceMiles,
      valueScore: +raw.valueScore,
    } as Vehicle;
  });
};

export const vehicles = parseCsv(carsCsv);

export const getVehicleById = (id: string | undefined) =>
  vehicles.find((vehicle) => vehicle.id === id);
