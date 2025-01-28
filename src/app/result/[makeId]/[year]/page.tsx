import { FC } from 'react';
import type { YearParams } from '@/types';
import { createYearsStaticParams, EmptyData } from '@/shared';
import { fetchMakesStaticParams, fetchResultPageData } from '@/shared/carsAPI';
import { ResultPage } from '@/widgets';

interface PageProps {
  params: YearParams;
}

export async function generateStaticParams(): Promise<YearParams[]> {
  const makes = await fetchMakesStaticParams();

  return createYearsStaticParams(makes);
}

const Page: FC<PageProps> = async ({ params }) => {
  const cars = await fetchResultPageData(params);

  if (!cars.length) {
    return <EmptyData />;
  }

  return <ResultPage cars={cars} />;
};

export default Page;
