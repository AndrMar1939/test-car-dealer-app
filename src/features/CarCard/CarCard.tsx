import { FC } from 'react';
import { CarModel } from '@/types';
import { cn } from '@/shared/lib';

interface CarCardProps {
  car: CarModel;
  className?: string
}

export const CarCard: FC<CarCardProps> = ({ car, className }) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { Model_Name, Model_ID, Make_Name } = car;

  return (
    <li className={cn(
      'flex flex-col justify-center items-center gap-4',
      'bg-white shadow-xl rounded-lg p-4',
      className,
    )}
    >
      <h3 className="text-xl font-semibold text-center">{Model_Name}</h3>

      <p className="text-center text-gray-500">{Make_Name}</p>

      <p className="text-center text-gray-400">
        Id:
        {Model_ID}
      </p>
    </li>
  );
};
