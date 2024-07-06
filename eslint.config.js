import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    rules: {
      'vue/no-unused-vars': 'error'
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential']
];
