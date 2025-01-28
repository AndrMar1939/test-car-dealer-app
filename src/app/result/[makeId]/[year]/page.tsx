import { FC } from 'react';
import type { YearParams } from '@/types';
import { createYearsStaticParams } from '@/shared';
import { fetchMakesStaticParams, fetchResultPageData } from '@/shared/carsAPI';

interface PageProps {
  params: YearParams;
}

export async function generateStaticParams(): Promise<YearParams[]> {
  const makes = await fetchMakesStaticParams();
  return createYearsStaticParams(makes);
}

const Page: FC<PageProps> = async ({ params }) => {
  const pageContent = await fetchResultPageData(params);

  if (!pageContent.length) {
    return <h2>no data</h2>;
  }

  return <h2>page</h2>;
};

export default Page;
