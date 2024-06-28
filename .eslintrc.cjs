module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' // Prettier 플러그인 추가
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'], // Prettier 플러그인 추가
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        endOfLine: 'lf'
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,       // 최대 빈 줄 수를 2로 설정
        maxEOF: 1,    // 파일 끝에서 최대 빈 줄 수를 1로 설정
        maxBOF: 0     // 파일 시작에서 최대 빈 줄 수를 0으로 설정
      }
    ]
  },
};