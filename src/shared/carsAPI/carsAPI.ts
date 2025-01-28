import { fetchClient } from './clients';
import type { VehicleMake } from '@/types';

const { BASE_URL } = process.env;

export async function getCarMakes(options?: RequestInit) {
  const response = await fetchClient<unknown>(
    `${BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
    { ...options },
  );

  return response;
}
