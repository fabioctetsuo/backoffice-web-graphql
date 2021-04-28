const isObjectEmpty = (obj?: Record<string, any>) => {
  if (!obj) return true;
  return Object.values(obj).every(el => !el);
};

export default isObjectEmpty;
