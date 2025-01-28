import { fetchClient } from './clients';
import { extractCarsMakers, prepareMakesStaticParams, prepareResultPageData } from './helpers';
import type { YearParams } from '@/types';

const { BASE_URL } = process.env;

export async function getCarMakes(options?: RequestInit) {
  const response = await fetchClient<unknown>(
    `${BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
    { ...options },
  ) as { Results?: unknown };

  return extractCarsMakers(response);
}

export async function fetchMakesStaticParams(options?: RequestInit) {
  const response = await fetchClient<unknown>(
    `${BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
    { ...options },
  ) as { Results?: unknown };

  return prepareMakesStaticParams(response);
}

export async function fetchResultPageData(params: YearParams) {
  const { makeId, year } = params;

  const response = await fetchClient<unknown>(
    `${BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  ) as { Results?: unknown };

  return prepareResultPageData(response);
}
