const path = require("path");

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: '@import "@/assets/scss/main.scss";'
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set("@", resolve("./src"))
            .set("@model", resolve("./src/models"))
            .set("@component", resolve("./src/components"))
            //Работает везде кроме внутри тега style =)
            .set("@style", resolve("./src/assets/scss"))
            //Работает внутри тега style
            .set("_style", resolve("./src/assets/scss"));
    },
}