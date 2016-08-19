module.exports = {
    context: __dirname,
     entry: {
        main: './src/main/main.js',
        capture:  './src/capture/capture.js'
     },
     output: {
         path: __dirname+'/public',
         filename: 'app.[name].js',
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
