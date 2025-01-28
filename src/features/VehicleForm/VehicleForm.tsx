import { FC } from 'react';
import { getCarMakes } from '@/shared/carsAPI';
import { VehicleInputs } from './UI';

const CACHE_REVALIDATION_TIME = 3600;

export const VehicleForm:FC = async () => {
  const vehicleMakes = await getCarMakes({
    next: {
      revalidate: CACHE_REVALIDATION_TIME,
    },
  });

  if (!vehicleMakes.length) {
    return <h2>No data</h2>;
  }

  return (
    <VehicleInputs vehicleMakes={vehicleMakes} />
  );
};
