import {axiosInstance} from "./axios-instance";

/**
 * 회원가입 API
 */
export const registerAPI = async (
  user: {
    email: string;
    password: string;
    phone: string;
  }) => {
  try {
    const response = await axiosInstance.post(import.meta.env.VITE_API_REGISTER, user);
    console.log('res', response)
    return response;
  } catch (error) {
    console.error("Register error", error);
    return undefined;
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
    const response  = await axiosInstance.post(import.meta.env.VITE_API_LOGIN, credentials);
    const accessToken = response.headers['access']
    localStorage.setItem("accessToken", accessToken)
    console.log('res', response)
    return response;
  } catch (error) {
    console.error("Login error", error);
    return undefined;
  }
}

/**
 * LOGOUT API
 */
export const logoutAPI = async () => {
  try {
    return await axiosInstance.post(import.meta.env.VITE_API_OUT);
  } catch (error) {
    console.error("Logout error", error);
    return undefined;
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

/**
 *  contact us (문의하기)
 **/
export const postSubmitContactUs = async (
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    description: string;
  }
) => {
  const response = await axiosInstance.post(import.meta.env.VITE_API_CONTACT, contact);
  console.log(response)
}
