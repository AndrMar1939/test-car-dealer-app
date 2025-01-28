import { DropdownOption } from '@/types';
import { START_YEAR } from '../constants/constants';

export const createYearsOptions = (): DropdownOption[] => {
  const currentYear = new Date().getFullYear();

  const yearOptions = Array.from(
    { length: currentYear - START_YEAR + 1 },
    (_, i) => {
      const year = (START_YEAR + i).toString();

      return { value: year, label: year };
    },

  );

  return yearOptions;
};
