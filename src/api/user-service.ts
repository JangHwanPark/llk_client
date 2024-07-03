import {axiosInstance} from "./axios-instance";

/**
 * 회원가입 API
 */
export const registerAPI = async (
  user: {
    email: string
    password: string;
    phone: string;
  }) => {
  try {
    // 회원가입 API 호출
    const res = await axiosInstance.post(import.meta.env.VITE_API_REGISTER, user);
    console.log('res', res)
    return res;
  } catch (error) {
    console.error("Register error", error);
    return undefined;   // 오류 발생 시 undefined 반환
  }
}

/**
 * 로그인 API
 */
export const loginAPI = async(
  credentials: {
    email: string;
    password: string;
  }) => {
  try {
    // 로그인 API 호출
    const response  = await axiosInstance.post(import.meta.env.VITE_API_LOGIN, credentials);
    const accessToken = response.headers['Access']
    console.log('accessToken', accessToken)
    console.log('res', response)
    return response;
  } catch (error) {
    console.error("Login error", error);
    return undefined;   // 오류 발생 시 undefined 반환
  }
}

/**
 * LOGOUT API
 */
export const logoutAPI = async () => {
  try {
    // 로그아웃 API 호출
    return await axiosInstance.post(import.meta.env.VITE_API_OUT);
  } catch (error) {
    console.error("Logout error", error);
    return undefined;   // 오류 발생 시 undefined 반환
  }
};

/**
 * 사용자 정보 조회 API
 */
export const getUserInfoAPI = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      throw new Error("No access token found");
    }

    // 사용자 정보 조회 API 호출
    return await axiosInstance.get(import.meta.env.VITE_API_USERS, {
      headers: {
        'access': `${accessToken}`
      }
    });
  } catch (error) {
    console.error("Fetch user info error", error);
    return undefined;   // 오류 발생 시 undefined 반환
  }
};