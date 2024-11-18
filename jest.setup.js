// Mock the __DEV__ global variable
global.__DEV__ = true;

// Mock the Platform module correctly for testing
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'andriod', // You can use 'android', 'web', or 'ios' depending on the test
  select: (obj) => obj.andriod || obj.default, // Adjust this logic based on the platform you are testing
}));

// Additional global mocks if needed
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
