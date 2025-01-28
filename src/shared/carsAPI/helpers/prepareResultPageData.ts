import type { CarModel } from '@/types';

export const prepareResultPageData = (response: { Results?: unknown }): CarModel[] => {
  if (response.Results) {
    return response.Results as CarModel[];
  }

  return [];
};
