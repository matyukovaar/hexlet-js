import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  stylistic.configs.recommended,
  pluginJs.configs.recommended,
  {
    files: ['**/*.js'], // Проверяем только .js-файлы
    languageOptions: {
      globals: {
        ...globals.browser, // или globals.node, в зависимости от среды
      },
    },
    rules: {
      // Пример правил (можно настроить под себя)
      'semi': 'error',
      'quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],
    },
  },
  {
    ignores: ['dist/'], // Игнорируемые папки/файлы
  },
];
