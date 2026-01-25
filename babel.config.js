/** @type {import('react-native-worklets/plugin').PluginOptions} */
const workletsPluginOptions = {
  // Your custom options.
};

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'babel-plugin-react-compiler',
    ['react-native-worklets/plugin', workletsPluginOptions],
  ],
};
