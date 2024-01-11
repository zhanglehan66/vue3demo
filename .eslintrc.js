module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    extends: [
        'plugin:vue/vue3-recommended',
    ],

    rules: {
        // override/add rules settings here, such as:
    }
};

