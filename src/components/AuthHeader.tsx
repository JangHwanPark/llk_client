import React from 'react';
import {Link} from "react-router-dom";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  path: string;
  pathTitle: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = (
  {
    title,
    path,
    subtitle,
    pathTitle,
  }
) => {
  return (
    <header className='header-auth'>
      <h1 className='header-title'>{title}</h1>
      <p className='header-contents'>
        {subtitle}
        <Link to={path}>{pathTitle}</Link>
      </p>
    </header>
  );
};

export default AuthHeader;