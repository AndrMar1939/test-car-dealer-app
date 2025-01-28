import type { VehicleMake } from '@/types';

export const extractCarsMakers = (response: { Results?: unknown }): VehicleMake[] => {
  if (response.Results) {
    return response.Results as VehicleMake[];
  }
  return [];
};
