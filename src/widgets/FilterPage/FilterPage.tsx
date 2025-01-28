import { FC, Suspense } from 'react';
import { getCarMakes } from '@/shared/carsAPI';

const CarMakesContent = async () => {
  const makes = await getCarMakes({ cache: 'no-store' });
  console.log(makes);
  return (
    <div>
      <h1 className="">Car Dealer App</h1>
    </div>
  );
};

const Loading = () => <div>loading</div>;

export const FilterPage: FC = () => (
  <Suspense fallback={<Loading />}>
    <CarMakesContent />
  </Suspense>
);
