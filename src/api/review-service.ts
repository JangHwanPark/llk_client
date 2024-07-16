import {axiosInstance} from "./axios-instance";

export const getReviewAPI = async () => {
  const response = await axiosInstance.get(import.meta.env.VITE_API_REVIEW);
  console.log(response)
  return response;
}
