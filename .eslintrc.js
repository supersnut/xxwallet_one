module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
