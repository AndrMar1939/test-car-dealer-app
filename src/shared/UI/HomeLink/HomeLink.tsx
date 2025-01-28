import { FC } from 'react';
import Link from 'next/link';
import { Routes } from '@/shared';

export const HomeLink: FC = () => (
  <Link
    className="text-lg font-semibold text-blue-500 transition-colors duration-300 hover:text-blue-700"
    href={Routes.ROOT}
  >
    Back to Home
  </Link>
);
