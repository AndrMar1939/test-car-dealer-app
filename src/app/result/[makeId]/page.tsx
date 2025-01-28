import { FC } from 'react';
import { fetchMakesStaticParams } from '@/shared/carsAPI';

export async function generateStaticParams() {
  const staticParams = await fetchMakesStaticParams();

  return staticParams;
}

const Page: FC = async () => null;

export default Page;
