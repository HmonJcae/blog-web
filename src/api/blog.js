import { request } from "../utils/request";

// 增加文章
export function addBlog(data) {
  return request({
    url: "/blog/add",
    method: "post",
    data: data
  });
}

// 获取所有
export function getBlog() {
  return request({
    url: "/blog/",
    method: "get"
  });
}

// 获取用户的文章
export function getUserBlog(name) {
  return request({
    url: "/blog/solo/" + name,
    method: "get"
  });
}

// 更新用户的文章
export function updataBlog(data) {
  return request({
    url: "/blog/updata",
    method: "put",
    data: data
  });
}
// 获取单篇文章
// export function getSingleArticle(articleId) {
//   return request({
//     url:'/blog/${articleId}',
//     method:'get',
//   })
// }

// //删除文章通过id
// export function removeArticleById(removeId) {
//   return request({
//     url:'/api/articles/${removeId}',
//     method:'delete',
//   })
// }

// //更新文章
// export function updateArticleById(updateId,data) {
//   return request({
//     url:'/api/articles/${updateId}',
//     method:'put',
//     data:data
//   })
// }
