const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    outputDir: './docs',
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production' ? '/Introduce/' : '/'
    /* css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/scss/common2.scss";
                `
            }
        }
    } */

    /* css: {
        extract: {
            filename: '[name].css', // to have a name related to a theme
            chunkFilename: 'css/[name].css'
        },
        sourceMap: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: 'vue-style-loader'
                },
                {
                    loader: 'css-loader?sourceMap'
                }
                ]
            }
        ]
    } */
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
