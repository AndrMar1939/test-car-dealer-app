import type { VehicleMake, MakeIdParams } from '@/types';

export const prepareMakesStaticParams = (response: { Results?: unknown }): MakeIdParams[] => {
  if (response?.Results) {
    const vehicleMakers = response.Results as VehicleMake[];

    const slugs = vehicleMakers
      ?.filter(maker => maker.MakeId)
      ?.map(maker => {
        const preparedSlug = { makeId: maker.MakeId.toString() };

        return preparedSlug;
      });

    return slugs;
  }
  return [];
};
