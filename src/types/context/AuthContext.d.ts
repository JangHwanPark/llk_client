import { ReactNode } from 'react';
export interface AuthContextType {
    accessToken: string | null;
    login: (credentials: {
        email: string;
        password: string;
    }) => Promise<void>;
    logout: () => void;
    loginCheck: () => Promise<void>;
    getRemainingTime?: () => number | null;
    fetchUserInfo?: () => Promise<void>;
    userInfo?: UserInfo | null;
}
interface UserInfo {
    id?: number;
    username: string;
    email: string;
    role: string;
}
export declare const AuthContext: import("react").Context<AuthContextType>;
export declare const AuthProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export {};
