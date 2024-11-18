// Mock the __DEV__ global variable used by React Native
global.__DEV__ = true;

// Correct path for Platform module mock
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios', // Use 'android' if you want to test for Android
  select: (options) => options.ios,
}));
