import {
  validateEmail,
  validatePassword,
  validationTrim,
  validatePhoneNumber,
  validateURL,
  validateUsername,
  validateAddress,
} from '../service/validation';

describe('Validation Tests', () => {
  describe('validateEmail', () => {
    it('유효한 이메일 형식 테스트', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    it('유효하지 않은 이메일 형식 테스트', () => {
      expect(validateEmail('testexample.com')).toBe(false);
      expect(validateEmail('test@.com')).toBe(false);
      expect(validateEmail('test@com')).toBe(false);
    });
  });

  describe('validatePassword', () => {
    it('유효한 비밀번호 테스트', () => {
      expect(validatePassword('password123')).toBe(true);
    });

    it('유효하지 않은 비밀번호 테스트', () => {
      expect(validatePassword('short')).toBe(false);
      expect(validatePassword('')).toBe(false);
    });
  });

  describe('validationTrim', () => {
    it('공백으로만 이루어진 문자열 테스트', () => {
      expect(validationTrim('   ')).toBe(true);
    });

    it('공백이 아닌 문자열 테스트', () => {
      expect(validationTrim('valid')).toBe(false);
      expect(validationTrim(' valid ')).toBe(false);
    });

    it('비문자열 입력 테스트', () => {
      expect(() => validationTrim(null as any)).toThrow(TypeError);
      expect(() => validationTrim(undefined as any)).toThrow(TypeError);
      expect(() => validationTrim(123 as any)).toThrow(TypeError);
    });
  });

  describe('validatePhoneNumber', () => {
    it('유효한 전화번호 형식 테스트', () => {
      expect(validatePhoneNumber('01012345678')).toBe(true);
      expect(validatePhoneNumber('0212345678')).toBe(true);
    });

    it('유효하지 않은 전화번호 형식 테스트', () => {
      expect(validatePhoneNumber('123')).toBe(false);
      expect(validatePhoneNumber('phone123456')).toBe(false);
      expect(validatePhoneNumber('010-1234-5678')).toBe(false); // 하이픈이 있는 경우
    });
  });

  describe('validateURL', () => {
    it('유효한 URL 형식 테스트', () => {
      expect(validateURL('http://example.com')).toBe(true);
      expect(validateURL('https://example.com')).toBe(true);
      expect(validateURL('ftp://example.com')).toBe(true);
    });

    it('유효하지 않은 URL 형식 테스트', () => {
      expect(validateURL('example.com')).toBe(false);
      expect(validateURL('http//example.com')).toBe(false);
      expect(validateURL('://example.com')).toBe(false);
    });
  });

  describe('validateUsername', () => {
    it('유효한 사용자 이름 테스트', () => {
      expect(validateUsername('John')).toBe(true);
    });

    it('유효하지 않은 사용자 이름 테스트', () => {
      expect(validateUsername('J')).toBe(false);
      expect(validateUsername('')).toBe(false);
    });
  });

  describe('validateAddress', () => {
    it('유효한 주소 테스트', () => {
      expect(validateAddress('123 Main St')).toBe(true);
    });

    it('유효하지 않은 주소 테스트', () => {
      expect(validateAddress('123')).toBe(false);
      expect(validateAddress('')).toBe(false);
    });
  });
});