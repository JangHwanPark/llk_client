// 컨텍스트 API 타입 정의
import {createContext, ReactNode, useState} from "react";

export interface AuthContextType {
  accessToken: string | null;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => void;
  checkLogin: () => Promise<void>;
  getRemainingTime?: () => number | null;
  fetchUserInfo: () => Promise<void>;
  userInfo: UserInfo | null;
}

interface UserInfo {
  id?: number;
  username: string;
  email: string;
  role: string;
}

const AuthContext = createContext<AuthContextType>(undefined);

export const AuthProvider = ({children}: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem("accessToken"));

  
}