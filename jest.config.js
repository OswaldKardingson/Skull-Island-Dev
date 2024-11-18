module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Transforms JavaScript and TypeScript files using Babel
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-vector-icons|@react-navigation)/)',
    // Ensures React Native and related libraries in node_modules are transformed
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // File extensions Jest will resolve
  setupFilesAfterEnv: ['<rootDir>/node_modules/@testing-library/jest-native/extend-expect'], // Adds custom matchers for testing React Native
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'], // Ignores these paths during testing
};

