import next from 'eslint-config-next/core-web-vitals.js';

// Flat config for ESLint v9+
const config = [
  ...next,
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'public/**',
      'build-output.txt',
    ],
  },
];

export default config;
