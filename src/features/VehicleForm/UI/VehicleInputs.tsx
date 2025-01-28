'use client';

import Link from 'next/link';
import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import type { VehicleMake } from '@/types';
import { Dropdown } from '@/shared';

interface VehicleFormState {
  selectedMakeId: string | null;
  selectedYear: string | null;
}

interface VehicleInputsProps {
  vehicleMakes: VehicleMake[];
}
export const VehicleInputs: FC<VehicleInputsProps> = ({ vehicleMakes }) => {
  const { control, watch } = useForm<VehicleFormState>({
    defaultValues: {
      selectedMakeId: null,
      selectedYear: null,
    },
  });

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, i) => ({ value: 2015 + i, label: (2015 + i).toString() }),
  );

  const makeOptions = vehicleMakes.map(make => ({
    value: make.MakeId,
    label: make.MakeName,
  }));

  const selectedMakeId = watch('selectedMakeId');
  const selectedYear = watch('selectedYear');
  const isNextEnabled = selectedMakeId && selectedYear;

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
          isNextEnabled
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </Link>
    </form>
  );
};
