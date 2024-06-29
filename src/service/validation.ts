/**
 * 이메일 형식이 유효한지 검증
 *
 * @param {string} email - 검증할 이메일 주소
 * @returns {boolean} - 이메일 형식이 유효하면 true, 그렇지 않으면 false
 */
export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

/**
 * 비밀번호가 유효한지 검증<br>
 * 비밀번호는 최소 8자 이상이어야 함
 *
 * @param {string} password - 검증할 비밀번호
 * @returns {boolean} - 비밀번호가 유효하면 true, 그렇지 않으면 false
 */
export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

/**
 * 입력값이 공백으로만 이루어져 있는지 확인
 *
 * @param {string} value - 검증할 문자열
 * @returns {boolean} - true이면 입력값이 공백으로만 이루어져 있음을 의미, false이면 공백이 아님
 */
export const validationTrim = (value: string): boolean => {
  if (typeof value !== 'string') {
    throw new TypeError('입력 값은 문자열이어야 합니다.');
  }

  const trimmed = value.trim();
  return trimmed.length === 0;
};

/**
 * 전화번호 형식이 유효한지 검증
 *
 * @param {string} phoneNumber - 검증할 전화번호
 * @returns {boolean} - 전화번호 형식이 유효하면 true, 그렇지 않으면 false
 */
export const validatePhoneNumber = (phoneNumber: string): boolean => {
  const re = /^\d{10,11}$/;
  return re.test(phoneNumber);
};

/**
 * 사용자 이름이 유효한지 검증<br>
 * 사용자 이름은 최소 2자 이상이어야 함
 *
 * @param {string} username - 검증할 사용자 이름
 * @returns {boolean} - 사용자 이름이 유효하면 true, 그렇지 않으면 false
 */
export const validateUsername = (username: string): boolean => {
  return username.trim().length >= 2;
};

/**
 * 주소가 유효한지 검증<br>
 * 주소는 최소 5자 이상이어야 함
 *
 * @param {string} address - 검증할 주소
 * @returns {boolean} - 주소가 유효하면 true, 그렇지 않으면 false
 */
export const validateAddress = (address: string): boolean => {
  return address.trim().length >= 5;
};

/**
 * URL 형식이 유효한지 검증
 *
 * @param {string} url - 검증할 URL
 * @returns {boolean} - URL 형식이 유효하면 true, 그렇지 않으면 false
 */
export const validateURL = (url: string): boolean => {
  const re = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return re.test(url);
};
