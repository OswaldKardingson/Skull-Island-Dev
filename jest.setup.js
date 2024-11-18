// Mock the __DEV__ global variable
global.__DEV__ = true;

// Mock the Platform module
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios', // Mock the operating system as 'ios' (or 'android' depending on your test needs)
  select: jest.fn((options) => options.ios), // Return the iOS-specific option
}));

// Add any other global mocks if needed
// For example, if you need to mock Animated or other modules
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
