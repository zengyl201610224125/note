export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/ZYL/Desktop/note/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/ZYL/Desktop/note/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/javascript.html", { loader: () => import(/* webpackChunkName: "javascript.html" */"C:/Users/ZYL/Desktop/note/docs/.vuepress/.temp/pages/javascript.html.js"), meta: {"title":""} }],
  ["/java.html", { loader: () => import(/* webpackChunkName: "java.html" */"C:/Users/ZYL/Desktop/note/docs/.vuepress/.temp/pages/java.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
