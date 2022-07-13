const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: './docs',
    lintOnSave: false,
    chainWebpack: config => {
        config.entry('theme') // you can add here as much themes as you want
            .add('./src/assets/scss/common.scss')
            .end()
    },

    css: {
        extract: {
            filename: '[name].css', // to have a name related to a theme
            chunkFilename: 'css/[name].css'
        },
        sourceMap: true
    }
    /* css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    includePaths: ['./node_modules', './src/assets']
                }
            }
        }
    } */
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
