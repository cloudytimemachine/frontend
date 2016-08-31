module.exports = {
    context: __dirname,
     entry: './modules/index.js',
     output: {
         path: __dirname+'/public',
         filename: 'bundle.js',
     },
     devServer: {
        port: 8008,
        proxy: {
            '/api/*': {
                target: 'http://localhost:3001'
            }
        }
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query:
             {
              presets:['react','es2015']
             }
         }]
     }
 }
