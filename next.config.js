module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__(server_tests|tests)__\//));
    config.module.rules.push({ test: /\.graphql?$/, loader: 'webpack-graphql-loader' });

    return config;
  },
};
