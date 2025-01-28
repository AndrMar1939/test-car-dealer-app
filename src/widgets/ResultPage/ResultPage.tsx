import { FC } from 'react';
import { CarCard } from '@/features';
import { Container, HomeLink } from '@/shared';
import { CarModel } from '@/types';

interface ResultPageProps {
  cars: CarModel[];
}

export const ResultPage: FC<ResultPageProps> = ({ cars }) => (
  <Container className="flex flex-col gap-10 items-center">
    <HomeLink />

    <ul className="grid gap-3 xl:gap-5 w-full grid-cols-1 sm:grid-cols-2">
      {cars.map(car => (
        <CarCard key={car.Model_ID} car={car} className="w-full" />
      ))}
    </ul>
  </Container>
);
