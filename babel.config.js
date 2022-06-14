module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          src: './src',
          api: './src/api',
          features: './src/features',
          types: './src/types',
        },
      },
    ],
  ],
};
