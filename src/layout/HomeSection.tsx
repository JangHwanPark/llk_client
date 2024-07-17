import React from 'react';

interface SectionLayoutProps {
  title?: string;
  className: string;
  children: React.ReactNode
}

const SectionLayout = ({title, className, children}: SectionLayoutProps) => {
  return (
    <section className={className}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default SectionLayout;
