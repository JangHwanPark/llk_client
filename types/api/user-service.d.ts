/**
 * 회원가입 API
 */
export declare const registerAPI: (user: {
    email: string;
    password: string;
    phone: string;
}) => Promise<import("axios").AxiosResponse<any, any>>;
/**
 * 로그인 API
 */
export declare const loginAPI: (credentials: {
    email: string;
    password: string;
}) => Promise<import("axios").AxiosResponse<any, any>>;
/**
 * LOGOUT API
 */
export declare const logoutAPI: () => Promise<import("axios").AxiosResponse<any, any>>;
/**
 * 사용자 정보 조회 API
 */
export declare const getUserInfoAPI: () => Promise<import("axios").AxiosResponse<any, any>>;
/**
 *  contact us (문의하기)
 **/
export declare const postSubmitContactUs: (contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    description: string;
}) => Promise<void>;
