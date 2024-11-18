module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest', // Transforms JavaScript and TypeScript files using Babel
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-vector-icons|@react-navigation)/)', 
    // Transforms React Native and related libraries in node_modules
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // File extensions Jest will resolve
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'], // Adds custom matchers for testing React Native
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'], // Ignore these paths
  globals: {
    __DEV__: true, // Define the __DEV__ variable globally
  },
};
