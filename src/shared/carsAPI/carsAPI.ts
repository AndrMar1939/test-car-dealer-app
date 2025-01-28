import { fetchClient } from './clients';
import { extractCarsMakers } from './helpers';

const { BASE_URL } = process.env;

export async function getCarMakes(options?: RequestInit) {
  const response = await fetchClient<unknown>(
    `${BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
    { ...options },
  ) as { Results?: unknown };

  return extractCarsMakers(response);
}
