import axios, { AxiosRequestConfig } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

interface AxiosOptions extends AxiosRequestConfig {
  token?: string;
}

export const axiosClient = async (endpoint: string, options: AxiosOptions = {}) => {
  const { token, ...config } = options;

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(config.headers || {}),
  };

  try {
    const response = await axios({
      url: `${API_BASE_URL}`,
      headers,
      ...config,
    });

    return response.data; // Axios auto-parses JSON

  } catch (error: any) {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";

    throw new Error(message);
  }
};
