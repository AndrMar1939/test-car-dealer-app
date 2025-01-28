import { ReactNode, FC } from 'react';
import { cn } from '@/shared/lib';

interface ContainerProps {
  className?: string;
  id?: string;
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({
  className,
  id,
  children,
}) => (
  <section
    className={cn(
      'mx-auto max-w-container-width',
      'p-10',
      className,
    )}
    id={id}
  >
    {children}
  </section>
);
