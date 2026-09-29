const path = require('path')

module.exports = {
  devServer: {
    port: 3003
  },
  // webpack 配置
  webpack: {
    // 配置別名
    alias: {
      // 約定：使用 @ 表示 src 檔案所在路徑
      '@': path.resolve(__dirname, 'src')
    }
  }
}