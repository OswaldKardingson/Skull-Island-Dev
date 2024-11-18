module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Transforms JavaScript and TypeScript files
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-vector-icons|@react-navigation)/)', // Transforms React Native-related modules
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Extensions Jest will resolve
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Include the setup file
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'], // Ignore these paths
};
