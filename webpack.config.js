const { library } = require("webpack");

module.exports = {
    // mode:'production',
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname + 'dist/lib'),
        library: 'Reacts-UI',
        libraryTarget: 'umd',
    },
    modules: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
}