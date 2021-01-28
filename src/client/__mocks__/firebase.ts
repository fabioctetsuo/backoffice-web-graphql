const firebase = {
  auth: () => ({
    signOut: jest.fn().mockImplementation(() => Promise.resolve()),
    onIdTokenChanged: jest.fn(),
  }),
};

export { firebase };
