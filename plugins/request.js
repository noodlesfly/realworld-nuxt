import axios from "axios";

export const request = axios.create({
  // baseURL: "https://api.realworld.io",
  baseURL: "http://realworld.api.fed.lagounews.com",
});

export default ({ store }) => {
  request.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const { user } = store.state;

      if (user && user.token) {
        config.headers.Authorization = `Token ${user.token}`;
      }

      // 返回 config 请求配置对象
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
};
