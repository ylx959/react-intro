// 擴充套件webpack的配置

const path = require('path')
// 引入輔助函式
const { whenProd, getPlugin, pluginByName } = require('@craco/craco')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置別名
    alias: {
      // 約定：使用 @ 表示 src 檔案所在路徑
      '@': path.resolve(__dirname, 'src')
    },
    // 配置CDN
    configure: (webpackConfig) => {
      let cdn = {
        js: []
      }
      whenProd(() => {
        // key: 不參與打包的包(由dependencies依賴項中的key決定)
        // value: cdn檔案中 掛載於全域性的變數名稱 為了替換之前在開發環境下
        webpackConfig.externals = {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
        // 配置現成的cdn資源地址
        // 實際開發的時候 用公司自己花錢買的cdn伺服器
        cdn = {
          js: [
            'https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js',
          ]
        }
      })
      // 通過 htmlWebpackPlugin外掛 在public/index.html注入cdn資源url
      const { isFound, match } = getPlugin(
        webpackConfig,
        pluginByName('HtmlWebpackPlugin')
      )

      if (isFound) {
        // 找到了HtmlWebpackPlugin的外掛
        match.userOptions.cdn = cdn
      }
      return webpackConfig
    }
  },
}