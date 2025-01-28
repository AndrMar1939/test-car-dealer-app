import { START_YEAR } from '../constants/constants';
import type { YearParams, MakeIdParams } from '@/types';

export const createYearsStaticParams = (makes: MakeIdParams[]): YearParams[] => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - START_YEAR + 1 },
    (_, i) => (START_YEAR + i).toString(),
  );

  return makes.flatMap(({ makeId }) => years.map(year => ({
    makeId,
    year,
  })));
};
