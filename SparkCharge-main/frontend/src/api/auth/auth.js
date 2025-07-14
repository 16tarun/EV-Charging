import { axiosInstance } from "../axios"

export const login = async (loginInfo) => {
  try {
    const { data, status } = await axiosInstance.post("/user/login", loginInfo);

    if (status !== 200) {
      throw new Error(data);
    }

    return { success: true, userData: data.data };
  } catch (e) {
    const message =
      e?.response?.data?.data ||
      e?.response?.data?.message ||
      e?.message ||
      "Login failed";
    return { success: false, message };
  }
};
  

export const register = async (loginInfo) => {
  try {
    const { data, status } = await axiosInstance.post(
      "/user/register",
      loginInfo
    );

    if (status !== 201) {
      throw new Error(data);
    }

    return { success: true, userData: data.data };
  } catch (e) {
    const message =
      e?.response?.data?.data ||
      e?.response?.data?.message ||
      e?.message ||
      "Registration failed";
    return { success: false, message };
  }
};
  
export const authLogin = async (token) => {
  try {
    const { data, status } = await axiosInstance.get("/user/get-user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (status === 200) {
      return data.data;
    }
  } catch (e) {
    const message =
      e?.response?.data?.data ||
      e?.response?.data?.message ||
      e?.message ||
      "Authentication failed";
    return { success: false, message };
  }
};
  