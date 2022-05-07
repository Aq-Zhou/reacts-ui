module.exports = {
    entry: {
        index: './lib/index.tsx'
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