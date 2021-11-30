const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {

    //Setting the entry point 
    entry: ['babel-polyfill', './MFE/entry/Entry.js'],


    //output file of the bundle.js
    output:{
        path:path.join(__dirname, '/public'),
        filename:'bundle.js'
    },


    //what kind of folders should and should not pickedup by babel loader
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            
            { 
              test: /\.css$/, 
              loader: "style-loader!css-loader" 
            }
        ]
    },


    //Setting up the template page
    plugins:[
        new HtmlWebpackPlugin({
            template:'./MFE/entry/Index.html'
        })
    ]
}
