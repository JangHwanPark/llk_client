import { AuthContext, AuthContextType } from '../context/AuthContext';
import { useContext } from 'react';

export const useAuthorization = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthorization must be used within an AuthProvider");
  }
  return context;
}