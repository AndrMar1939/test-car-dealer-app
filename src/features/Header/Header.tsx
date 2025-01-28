import { FC } from 'react';
import Link from 'next/link';
import { CarIcon } from 'lucide-react';
import { Container, Routes } from '@/shared';
import { cn } from '@/shared/lib';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => (
  <header className={cn(
    'bg-gray-100 shadow-md',
    className,
  )}
  >
    <Container className="flex justify-between items-center py-4">
      <Link href={Routes.ROOT} className="flex items-center gap-2">
        <CarIcon className="w-10 h-10 text-blue-500" />
        <span className="text-xl font-bold text-gray-800">Car Dealer</span>
      </Link>
    </Container>
  </header>
);
