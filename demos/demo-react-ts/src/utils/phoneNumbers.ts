export const PHONE_NUMBER_ONE = "+16179483986";
export const PHONE_NUMBER_TWO = "+442073238299";
export const FORMATTED_PHONE_NUMBER_ONE = "+1 617-948-3986";
export const FORMATTED_PHONE_NUMBER_TWO = "+44 20 7323 8299";

export const PHONE_NUMBERS_MAP = {
  [PHONE_NUMBER_ONE]: FORMATTED_PHONE_NUMBER_ONE,
  [PHONE_NUMBER_TWO]: FORMATTED_PHONE_NUMBER_TWO,
};

export type PhoneNumber = typeof PHONE_NUMBER_ONE | typeof PHONE_NUMBER_TWO;

export const formatPhoneNumber = (phoneNumber: string) => {
  return PHONE_NUMBERS_MAP[phoneNumber as PhoneNumber] || phoneNumber;
};
