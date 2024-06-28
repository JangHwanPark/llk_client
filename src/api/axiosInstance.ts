import axios from "axios";

/**
 * baseURL: axios 인스턴스를 통해 이루어지는 모든 HTTP 요청의 기본 경로
 * timeout: 요청이 타임아웃되기 전까지 기다리는 시간(밀리초)
 * headers: 모든 요청에 대해 기본적으로 설정될 HTTP 헤더를 정의
 */
export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1000,
    headers: {
        "Content-Type": import.meta.env.VITE_API_HEADERS,
    }
});