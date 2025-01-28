import { ReactNode, FC } from 'react';
import { cn } from '@/shared/lib';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({
  className,
  children,
}) => (
  <section
    className={cn(
      'mx-auto max-w-container-width',
      'px-6 xl:px-10 py-2',
      className,
    )}
  >
    {children}
  </section>
);
