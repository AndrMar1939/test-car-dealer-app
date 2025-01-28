import { FC } from 'react';
import type { YearParams } from '@/types';
import { createYearsStaticParams } from '@/shared';
import { fetchMakesStaticParams } from '@/shared/carsAPI';

interface PageProps {
  params: YearParams;
}

export async function generateStaticParams(): Promise<YearParams[]> {
  const makes = await fetchMakesStaticParams();
  return createYearsStaticParams(makes);
}

const Page: FC<PageProps> = async ({ params }) => {
  console.log(params);

  return <h2>page</h2>;
};

export default Page;
