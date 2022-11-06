import axios from "axios";

//import axiosApiInstance from './utils/aixos'
//axiosApiInstance.post('/user')

export const axiosApiInstance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  // 백엔드와 프론트엔드의 쿠키를 공유하겠다 (refrss_token, acces_token)
});

axiosApiInstance.interceptors.request.use(
  async (config) => {
    const access_token = TokenService.get(process.env.REACT_APP_TOEKN_KEY);

    // 인증토큰이 만료되면 실패
    // 실패를 캐치해서 다시 refresh토큰으로 인증토큰 재발급 요청을 보내고
    // 재발급된 인증토큰으로 retry 하는 로직
    /*
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
        }
        */

    if (!access_token) {
      return config;
    } else {
      config.headers = {
        Authorization: `Bearer ${access_token}`,
      };
      return config;
    }
  },
  (error) => {
    throw new Error(error);
  }
);
