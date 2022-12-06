const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // lintOnSave: false //关闭语法检查
  // 开启代理服务器
  
  // 方式一
  // devServer: {
  //   proxy: 'http://localhost:5100'
  // }

  // 方式二
  devServer: {
    proxy: {
      '/atguigu': {
        target: 'http://localhost:5100',
        pathRewrite:{'^/atguigu':''},
        ws: true,      //用于支持 websocket
        changeOrigin: true   //用于控制请求头中的 host 值
      },
      '/demo': {
        target: 'http://localhost:5101',
        pathRewrite:{'^/demo':''},
        ws: true,      //用于支持 websocket
        changeOrigin: true   //用于控制请求头中的 host 值
      }
      // ,
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
})
