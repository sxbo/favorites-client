var path = require('path');
var webpack = require('webpack');
//var config = require('./config.js');//不需要使用git上传的文件配置，在gitignore文件中限制
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:['./src/index.js'],
    output:{
		path:path.resolve(__dirname,'app'),
		publicPath:'/',
        filename:'[name].js'
    },
    module:{
        rules:[ //rules的值是一个数组，数组中的每个对象是一个Rule
            {
				test:/\.jsx?$/,     //这里是一个Rule，？前边字符为任意字符，
				exclude:/node_modules/,
                loaders:['react-hot-loader','babel-loader']
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.(jpg|png|gif|svg)$/,
				loader:'url-loader',
				query:{
					limit:8192,	//超过8192字节使用base64编码发送
					name:'res/img/[name].[ext]'
				}
			},
			{
				test:/\.(ttf|woff|eot)$/,
				loader:'url-loader',
				query:{
					limit:8192,
					name:'res/font/[name].[ext]'
				}
			}
        ], 
    },
    resolve:{
        alias:{
            __module:path.join(__dirname,'src','module'), //join两种方式都可导入，resolve只能严格使用该方法导入
            __public:path.join(__dirname,'src','public'),
            __resource:path.join(__dirname,'src','res'),
            __config:path.join(__dirname,'src','config'),
            __utils:path.join(__dirname,'src','utils')
        }
	},
	
	devServer:{
		contentBase:'./app',
		port:88,
		open:true,
		inline:true,
		hot:true,
		historyApiFallback:true,	
		proxy:{
			"/api/*":{
				target:"http://localhost:8080/",

				// bypass: function(req, res, proxyOptions) {
				// 	if (req.headers.accept.indexOf("html") !== -1) {
				// 	  	console.log("Skipping proxy for browser request.");
				// 	  	console.log(path.resolve(__dirname,'src','index.html'));	
				// 		return (path.resolve(__dirname,'src','index.html'))
				// 	}
				// },
				secure:false,
				pathRewrite:{"/api":"/"}
			}
		}
	},
    plugins:[
		new HtmlWebpackPlugin({
			template:__dirname+"/src/index.html",
            filename:'index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
    ],

}