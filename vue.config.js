const path = require("path")
module.exports = {
  configureWebpack: (config) => {
    config.resolve.alias = {
      "@": path.resolve(__dirname, "src"),
      views: "@/views"
    }
  }
}
