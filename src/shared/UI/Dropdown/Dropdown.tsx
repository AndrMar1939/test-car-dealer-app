import { FC } from 'react';

interface DropdownProps {
  id: string;
  label: string;
  options: { value: string | number; label: string }[];
  onChange: (value: number | string) => void;
  value: number | string | null;
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
      className="w-full border rounded p-2"
      value={value || ''}
      onChange={e => onChange(e.target.value)}
    >
      <option value="">
        Select
        {label.toLowerCase()}
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
