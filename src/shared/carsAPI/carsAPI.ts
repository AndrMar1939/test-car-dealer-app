import { fetchClient } from './clients';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getCarMakes(): Promise<unknown> {
  const response = await fetchClient<unknown>(
    `${BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
  );

  return response;
}
