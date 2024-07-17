import {axiosInstance} from "./axios-instance";

export const getReviewAPI = async () => {
  try {
    return await axiosInstance.get(
      import.meta.env.VITE_API_REVIEW, {
        timeout: 5000,
      });
  } catch (error) {
    throw new Error("getReviewAPI Error: " + error)
  }
}
