import { FC, Suspense } from 'react';
import { VehicleForm } from '@/features';

const Loading = () => <div>loading</div>;

export const FilterPage: FC = () => (
  <Suspense fallback={<Loading />}>
    <VehicleForm />
  </Suspense>
);
