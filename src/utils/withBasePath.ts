/**
 * Includes the basePath in a url or file path
 */
export const withBasePath = (path: string): string => {
  const isTest = process.env.NODE_ENV === 'test';
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd || isTest ? process.env.NEXT_PUBLIC_BASE_PATH : '';

  return `${basePath}${path}`;
};
