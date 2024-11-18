// Mock the __DEV__ global variable for React Native
global.__DEV__ = true;

// Correctly mock the Platform module from React Native
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android', // Set this to 'ios', 'android', or 'web' as needed
  select: (obj) => obj.android || obj.default, // Adjust for the tested platform
}));
