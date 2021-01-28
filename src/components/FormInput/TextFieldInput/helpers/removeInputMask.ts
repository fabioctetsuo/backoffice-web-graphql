const removeInputMask = (inputValue = '') => {
  return (inputValue.match(/\d/g) || []).join('');
};

export default removeInputMask;
