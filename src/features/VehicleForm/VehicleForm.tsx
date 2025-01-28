import { FC } from 'react';
import { getCarMakes } from '@/shared/carsAPI';

export const VehicleForm:FC = async () => {
  const makes = await getCarMakes({ cache: 'no-store' });

  console.log(makes);

  return (
    <div>
      <h1 className="">cars</h1>
    </div>
  );
};
