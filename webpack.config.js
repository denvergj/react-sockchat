module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,
		filename: 'app/js/main.js',
		publicPath: 'http://localhost:3000/' 
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader:'babel',
			exclude: /node_modules/
		}]
	}
}