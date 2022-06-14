import { request } from "@/plugins/request.js";

/**
 *
 * @param {*} user 更新用户信息
 * @returns 返回公共文章列表数据
 */
export const updateUser = (user) => {
  return request({
    method: "PUT",
    url: "/user",
    data: {
      user,
    },
  });
};
