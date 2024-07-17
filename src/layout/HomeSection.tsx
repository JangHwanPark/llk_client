import React from 'react';

const HomeSection = ({title, className, children}) => {
  return (
    <section className={className}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default HomeSection;
