import { FC, Suspense } from 'react';
import { Loader, Container } from '@/shared';
import { VehicleForm } from '@/features';

export const FilterPage: FC = () => (
  <Container className="flex justify-center">
    <Suspense fallback={<Loader />}>
      <VehicleForm />
    </Suspense>
  </Container>
);
