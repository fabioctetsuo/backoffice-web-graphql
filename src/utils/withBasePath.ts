/**
 * Includes the basePath in a url or file path
 */
export const withBasePath = (path: string): string => {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? process.env.NEXT_PUBLIC_BASE_PATH : '';
  return `${basePath}${path}`;
};
