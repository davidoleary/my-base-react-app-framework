module.exports = {
  preset: 'jest-puppeteer-preset',
  testRegex: './*\\.test\\.js$',
  setupFiles: [
    '<rootDir>..//config/polyfills.js',
  ],
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>../node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>../config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>../config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
  ],
};
