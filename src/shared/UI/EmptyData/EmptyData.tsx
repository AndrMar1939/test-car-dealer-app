import { FC } from 'react';
import { Container, HomeLink } from '@/shared';

export const EmptyData: FC = () => (
  <Container className="flex flex-col gap-10 items-center">
    <h2>no data</h2>

    <HomeLink />
  </Container>
);
