module.exports = {
  resolver: 'jest-react-native-resolver',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-vector-icons|@react-navigation)/)',
  ],
  moduleFileExtensions: [
    'ios.js',
    'android.js',
    'native.js',
    'js',
    'json',
    'jsx',
    'node',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};
