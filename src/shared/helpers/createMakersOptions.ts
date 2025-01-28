import { VehicleMake, DropdownOption } from '@/types';

export const createMakersOptions = (
  vehicleMakes: VehicleMake[],
): DropdownOption[] => vehicleMakes.map(make => ({
  value: make.MakeId,
  label: make.MakeName,
}));
