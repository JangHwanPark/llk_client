export default {
  // 사용할 jest 프리셋 설정 (ts 지원을 위해 ts-jest 사용)
  preset: 'ts-jest',

  // 테스트 환경을 node 환경으로 설정
  testEnvironment: 'node',

  // Jest가 인식할 파일 확장자를 지정
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // 특정 파일 또는 디렉토리를 테스트 경로에서 무시하도록 설정 (node_modules'와 'dist' 디렉토리를 무시)
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // 파일을 변환하는 데 사용할 모듈을 지정 (ts-jest 를 사용해 ts 파일을 변환)
  transform: {
    // 정규식을 사용해 ts 파일을 ts-jest 로 변환
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // ts 설정파일 지정
        tsconfig: 'tsconfig.json',
        // 커파일 경고 표시 설정
        diagnostics: {
          warnOnly: true,
        },
      },
    ],
  },

  // 모듈이름 매핑 (css, scss 파일을 identity-obj-proxy 로 매핑)
  // 테스트중 css 파일을 무시하고 빈 객체 반환
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
