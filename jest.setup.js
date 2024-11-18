// Mock the __DEV__ global variable
global.__DEV__ = true;

// Mock the Platform module correctly for testing
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios', // You can use 'android', 'web', or 'ios' depending on the test
  select: (obj) => obj.ios || obj.default, // Adjust this logic based on the platform you are testing
}));

// Additional global mocks if needed
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
