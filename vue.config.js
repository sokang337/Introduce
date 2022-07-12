const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: './docs',
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    includePaths: ['./node_modules', './src/assets']
                }
            }
        }
    }
    /* css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/scss/common.scss"
                `
            }
        }
    } */
})

/* module.exports = {
    css: {
        loaderOptions: {
          sass: {
            data: `
                @import "@/assets/scss/common.scss"
            `
          }
        }
    }
} */
