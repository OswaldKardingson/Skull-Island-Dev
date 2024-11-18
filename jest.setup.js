// Mock the __DEV__ global variable
global.__DEV__ = true;

// Mock the Platform module
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'web', // or 'ios'/'android' based on the tests
  select: (obj) => obj.web, // Resolve platform-specific code paths
}));

// Add any other global mocks if needed
// For example, if you need to mock Animated or other modules
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
