import React, { ReactNode } from 'react';
import Navigation from '../components/Navigation';

const Container: React.FC<{children?: ReactNode}> = (
  {
    children
  }) => {
  return (
    <div className="container">
      <Navigation />
      {children}
    </div>
  );
};

export default Container;
