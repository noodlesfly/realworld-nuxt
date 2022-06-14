import { request } from "@/plugins/request.js";

/**
 *
 * @param {*} params 用户输入数据
 * @returns 返回公共文章列表数据
 */
export const getArticles = (params) => {
  return request({
    method: "GET",
    url: "/api/articles",
    params,
  });
};

/**
 *
 * @param {*} params 用户输入数据
 * @returns 返回用户文章列表数据
 */
export const getYourFeedArticles = (params) => {
  return request({
    method: "GET",
    url: "/api/articles/feed",
    params,
  });
};

/**
 *
 * @param {*} slug 当前文章slug
 * @returns 返回article
 */
export const addFavorite = (slug) => {
  return request({
    method: "POST",
    url: `/api/articles/${slug}/favorite`,
  });
};

/**
 *
 * @param {*} slug 当前文章slug
 * @returns 返回article
 */
export const delFavorite = (slug) => {
  return request({
    method: "DELETE",
    url: `/api/articles/${slug}/favorite`,
  });
};

/**
 *
 * @param {*} slug 当前文章slug
 * @returns 返回article详情
 */
export const getArticleDetail = (slug) => {
  return request({
    method: "GET",
    url: `/api/articles/${slug}`,
  });
};

/**
 *
 * @param {*} slug 当前文章slug
 * @returns 返回article详情
 */
export const getComments = (slug) => {
  return request({
    method: "GET",
    url: `/api/articles/${slug}/comments`,
  });
};

/**
 * 发布评论信息
 * @param {*} params: {slug,comment}
 * @returns
 */
export const postComment = (params) => {
  return request({
    method: "POST",
    url: `/api/articles/${params.slug}/comments`,
    data: {
      // slug: params.slug,
      comment: {
        body: params.body,
      },
    },
  });
};

/**
 *
 * @param {*} article 添加文章
 * @returns 
 */
export const addArticle = (article) => {
  return request({
    method: "POST",
    url: "/api/articles",
    data: {
      article,
    },
  });
};
