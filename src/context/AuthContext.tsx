// 컨텍스트 API 타입 정의
import { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import { getUserInfoAPI, loginAPI, logoutAPI } from '../api/user-service';


/*interface JwtPayload {
  exp: number;
}*/


export interface AuthContextType {
  accessToken: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
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


// 컨텍스트 생성
export const AuthContext = createContext<AuthContextType>(undefined);


// 프로바이더 생성
export const AuthProvider = ({children}: { children: ReactNode }) => {
  // const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem("accessToken"));

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken)
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem("accessToken");
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [accessToken]);


  const login = async (credential: {
    email: string,
    password: string,
  }) => {
    const response = await loginAPI(credential);

    if (response && response.status === 200) {
      const accessToken = response.headers["access"];
      setAccessToken(accessToken);
      await getUserInfoAPI();
    } else {
      console.error("Login failed with status " + response?.status);
    }
  };


  const logout = async () => {
    try {
      const response = await logoutAPI();
      console.log(response)
      if (response.status == 200) {
        localStorage.removeItem("accessToken");
        setAccessToken(null)
      } else {
        console.error("Logout failed with status: " + response?.status);
      }

    } catch (error) {
      console.error("Logout error: " + error);
    }
  };

  const loginCheck = async () => {
    if (!accessToken) {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/reissue`,
        {},
        {
          headers: {
            "Contents-Type": import.meta.env.VITE_API_HEADERS,
            withCredential: true,
          }
        }
      );

      if (response.status === 200) {
        const newAccessToken = response.data.accessToken;
        setAccessToken(newAccessToken);
        localStorage.setItem("accessToken", newAccessToken);
      } else {
        console.error("Failed to reissue token: status " + response.status);
        await logout();
      }
    }
  };

  return (
    <AuthContext.Provider value={{
      accessToken,
      login,
      logout,
      loginCheck,
      // userInfo
    }}>
      {children}
    </AuthContext.Provider>
  )
}
