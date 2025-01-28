import { FC } from 'react';
import { CarIcon } from 'lucide-react';
import { Container } from '@/shared';

export const Header: FC = () => (
  <header>
    <Container className="flex justify-between align-middle py-4">
      <CarIcon className="w-10 aspect-square" />

      <h2>Car Dealer App</h2>
    </Container>
  </header>
);
