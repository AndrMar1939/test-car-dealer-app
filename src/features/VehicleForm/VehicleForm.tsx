import { FC } from 'react';
import { getCarMakes } from '@/shared/carsAPI';
import { VehicleInputs } from './UI';

export const VehicleForm:FC = async () => {
  const vehicleMakes = await getCarMakes({ cache: 'no-store' });

  if (!vehicleMakes.length) {
    return <h2>no data</h2>;
  }

  return (
    <VehicleInputs vehicleMakes={vehicleMakes} />
  );
};
