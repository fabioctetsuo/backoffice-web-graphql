import { withBasePath } from './withBasePath';

describe('Utils: withBasePath', () => {
  const INITIAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
  });

  afterAll(() => {
    process.env = INITIAL_ENV;
  });

  it('Should include base path if is a production enviroment', () => {
    process.env = {
      ...INITIAL_ENV,
      NODE_ENV: 'production',
      NEXT_PUBLIC_BASE_PATH: '/base-path',
    };

    const filePath = withBasePath('/file.png');
    expect(filePath).toBe('/base-path/file.png');
  });
  it('Should not include the base path if it is NOT a production enviroment', () => {
    process.env = {
      ...INITIAL_ENV,
      NODE_ENV: 'development',
      NEXT_PUBLIC_BASE_PATH: '/base-path',
    };

    const filePath = withBasePath('/file.png');
    expect(filePath).toBe('/file.png');
  });
});
