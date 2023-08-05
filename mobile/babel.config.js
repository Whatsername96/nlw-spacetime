module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      // "expo-router/babel - Na documentação atual está dessa forma"
      require.resolve("expo-router/babel")
    ],
  };
};
