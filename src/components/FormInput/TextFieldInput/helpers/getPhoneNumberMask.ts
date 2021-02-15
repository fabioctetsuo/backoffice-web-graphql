import {
  CELLPHONE_NUMBER_MASK,
  CELLPHONE_NUMBER_MASK_WITH_DDI,
  PHONE_NUMBER_MASK,
  PHONE_NUMBER_MASK_WITH_DDI,
} from './mask';

import removeInputMask from './removeInputMask';

const CELLPHONE_SIZE = 11;

const getPhoneNumberMask = (rawValue: string) => {
  const isCellphone = (phone: string) => phone.length >= CELLPHONE_SIZE;
  const phoneNumber = removeInputMask(rawValue);
  const phoneContainsDDI = phoneNumber.length > CELLPHONE_SIZE;

  if (phoneContainsDDI) {
    const phoneNumberWithoutDDI = phoneNumber.substr(2);
    return isCellphone(phoneNumberWithoutDDI)
      ? CELLPHONE_NUMBER_MASK_WITH_DDI
      : PHONE_NUMBER_MASK_WITH_DDI;
  }

  return isCellphone(phoneNumber) ? CELLPHONE_NUMBER_MASK : PHONE_NUMBER_MASK;
};

export default getPhoneNumberMask;
