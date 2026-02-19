import type { HTMLAttributes, ReactNode } from 'react';

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Section({ children, ...props }: SectionProps) {
  return <section {...props}>{children}</section>;
}
