'use client';

import Link from 'next/link';
import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import type { VehicleMake } from '@/types';
import { Dropdown, createMakersOptions, createYearsOptions } from '@/shared';

interface VehicleFormSchema {
  selectedMakeId: string;
  selectedYear: string;
}

interface VehicleInputsProps {
  vehicleMakes: VehicleMake[];
}
export const VehicleInputs: FC<VehicleInputsProps> = ({ vehicleMakes }) => {
  const { control, watch } = useForm<VehicleFormSchema>({
    defaultValues: {
      selectedMakeId: '',
      selectedYear: '',
    },
  });

  const yearOptions = createYearsOptions();
  const makeOptions = createMakersOptions(vehicleMakes);

  const selectedMakeId = watch('selectedMakeId');
  const selectedYear = watch('selectedYear');

  const isNextButtonEnabled = selectedMakeId && selectedYear;

  return (
    <form className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Select Vehicle Details</h2>

      <Controller
        name="selectedMakeId"
        control={control}
        render={({ field }) => (
          <Dropdown
            id="makers"
            label="Vehicle Make"
            options={makeOptions}
            onChange={value => field.onChange(value)}
            value={field.value}
          />
        )}
      />

      <Controller
        name="selectedYear"
        control={control}
        render={({ field }) => (
          <Dropdown
            id="Year"
            label="Model Year"
            options={yearOptions}
            onChange={value => field.onChange(value)}
            value={field.value}
          />
        )}
      />

      <Link
        href="#"
        className={`block w-full text-center py-2 px-4 rounded mt-4 ${
          isNextButtonEnabled
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </Link>
    </form>
  );
};
