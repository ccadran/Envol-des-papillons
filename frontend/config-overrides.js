// const webpack = require("webpack");

// module.exports = function override(config) {
//   config.resolve.fallback = {
//     ...config.resolve.fallback,
//     path: require.resolve("path-browserify"),
//     crypto: require.resolve("crypto-browserify"),
//     stream: require.resolve("stream-browserify"),
//     zlib: require.resolve("browserify-zlib"),
//     http: require.resolve("stream-http"),
//     querystring: require.resolve("querystring-es3"),
//     // Ajoutez d'autres modules ici si nécessaire
//   };

//   config.plugins = (config.plugins || []).concat([
//     new webpack.ProvidePlugin({
//       process: "process/browser",
//       Buffer: ["buffer", "Buffer"],
//     }),
//   ]);

//   return config;
// };
