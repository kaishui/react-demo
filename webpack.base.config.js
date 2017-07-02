const path = require('path');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');


module.exports = {
    entry: {
        "actions/index" : path.resolve(SRC_PATH, 'actions/index.jsx'),
        "components/App" : path.resolve(SRC_PATH, 'components/App'),
        "components/Footer" : path.resolve(SRC_PATH, 'components/Footer.jsx'),
        "components/Link" : path.resolve(SRC_PATH, 'components/Link.jsx'),
        "components/Todo" : path.resolve(SRC_PATH, 'components/Todo.jsx'),
        "components/TodoList" : path.resolve(SRC_PATH, 'components/TodoList.jsx'),
        "containers/AddTodo" : path.resolve(SRC_PATH, 'containers/AddTodo.jsx'),
        "containers/FilterLink" : path.resolve(SRC_PATH, 'containers/FilterLink.jsx'),
        "containers/VisibleTodoList" : path.resolve(SRC_PATH, 'containers/VisibleTodoList.jsx'),
        "reducers/index" : path.resolve(SRC_PATH, 'reducers/index.jsx'),
        "reducers/todos" : path.resolve(SRC_PATH, 'reducers/todos.jsx'),
        "reducers/visibilityFilter" : path.resolve(SRC_PATH, 'reducers/visibilityFilter.jsx'),
        "index" : path.resolve(SRC_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].[hash:5].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint-loader'],
                include: SRC_PATH,
                enforce: 'pre'
            }, {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: SRC_PATH,
                exclude: path.resolve(ROOT_PATH, 'node_modules')
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require(path.resolve(ROOT_PATH, 'lib', 'manifest.json')),
            context: ROOT_PATH,
        })
    ]
};