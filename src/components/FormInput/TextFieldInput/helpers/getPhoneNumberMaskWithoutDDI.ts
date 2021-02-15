import { CELLPHONE_NUMBER_MASK, PHONE_NUMBER_MASK } from './mask';

import removeInputMask from './removeInputMask';

const CELLPHONE_SIZE = 11;

const getPhoneNumberMaskWithoutDDI = (rawValue: string) => {
  const isCellphone = (phone: string) => phone.length >= CELLPHONE_SIZE;
  const phoneNumber = removeInputMask(rawValue);

  return isCellphone(phoneNumber) ? CELLPHONE_NUMBER_MASK : PHONE_NUMBER_MASK;
};

export default getPhoneNumberMaskWithoutDDI;
