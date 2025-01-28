import { FC } from 'react';
import type { DropdownOption } from '@/types';

interface DropdownProps {
  id: string;
  label: string;
  options: DropdownOption[];
  onChange: (value: number | string) => void;
  value: string;
}

export const Dropdown: FC<DropdownProps> = ({
  id,
  label,
  options,
  onChange,
  value,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
    </label>

    <select
      id={id}
      className="w-full border rounded p-2 cursor-pointer"
      value={value || ''}
      onChange={e => onChange(e.target.value)}
    >
      <option value="">
        {`Select ${label}`}

      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
