import type { CarModel } from '@/types';

export const prepareResultPageData = (response: { Results?: unknown }): CarModel[] => {
  if (response?.Results) {
    const cars = response.Results as CarModel[];

    const filteredCars = cars.filter(car => car?.Model_ID);

    return filteredCars;
  }

  return [];
};
