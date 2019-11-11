const path = require("path")
module.exports = {

    devServer: {
        proxy: {
            "/Service": {
                target: "http://m.mtime.cn",
                changeOrigin: true
            }
        },
        configureWebpack: {
            resolve: {
                alias: {
                    "@": path.join(__dirname, "./src"),
                    "@api": path.join(__dirname, "./src/api"),
                    "@pages": path.join(__dirname, "./src/pages"),
                    "@components": path.join(__dirname, "./src/components"),
                    "@common": path.join(__dirname, "./src/common"),
                    "@router": path.join(__dirname, "./src/router"),
                    "@store": path.join(__dirname, "./src/store"),
                    "@utils": path.join(__dirname, "./src/utils"),
                    "@assets": path.join(__dirname, "./src/assets"),
                }
            }
        }

    }

}