import comp from "C:/Users/ZYL/Desktop/note/docs/.vuepress/.temp/pages/javascript.html.vue"
const data = JSON.parse("{\"path\":\"/javascript.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"javascript\",\"slug\":\"javascript\",\"link\":\"#javascript\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"javascript.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
