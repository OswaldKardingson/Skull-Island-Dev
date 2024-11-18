// Mock the __DEV__ global variable used by React Native
global.__DEV__ = true;

// Mock the Platform module to resolve correctly in Jest
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios', // Change to 'android' if testing Android-specific code
  select: (options) => options.ios,
}));
