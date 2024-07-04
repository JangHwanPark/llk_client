import React from 'react';

export default function SignInGoogle() {
  const handleGoogleLogin = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectURL = import.meta.env.VITE_REDIRECT_URL;
    const scope = 'profile email';
    const responseType = 'code';
    window.location.href = `${import.meta.env.VITE_LOCATION_GOOGLE}${clientId}&redirect_uri=${redirectURL}&response_type=${responseType}&scope=${scope}`;

  }

  return (
    <div className='button-social'>
      <button onClick={handleGoogleLogin}>Google Login</button>
    </div>
  );
}