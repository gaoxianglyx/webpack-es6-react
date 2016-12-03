var webpack = require('webpack');

module.exports = {
    //页面入口文件配置
    entry: {
        index : './src/js/page/index.js'
    },
    //入口文件输出配置
    output: {
        path: './build',
        filename: 'bundle.js'
    },
     module: {
        //webpack牛逼的加载器
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass" },
            {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: "babel-loader",
            }
        ]
    },
    //其他处理方案
    resolve:{
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions:['','.js','.json']
    },
    devServer: {
        //设置热更新，更新形式为inline
        hot: true,
        inline: true
    },
    //插件项
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
};