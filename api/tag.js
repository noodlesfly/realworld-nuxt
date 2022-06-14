import { request } from "@/plugins/request.js";
/**
 *
 * @returns 返回标签列表数据
 */
export const getTags = () => {
  return request({
    method: "GET",
    url: "/api/tags",
  });
};
