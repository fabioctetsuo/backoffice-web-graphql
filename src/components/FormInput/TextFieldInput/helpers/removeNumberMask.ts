const removeNumberMask = (inputValue = '') => {
  return inputValue.split(' ')[0].replace(',', '.');
};

export default removeNumberMask;
