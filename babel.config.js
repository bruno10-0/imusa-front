module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [["nativewind/babel", {

      moduleName: '@env',
      path: '.env',
      safe: false,
      allowUndefined: true,

    },
      'react-native-reanimated/plugin',
    ],
    ],
  };
};