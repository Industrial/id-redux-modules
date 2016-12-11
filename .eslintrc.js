module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "import",
  ],
  "settings": {
  },
  "rules": {
    "semi": 0,
    "max-len": 0,
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "require-jsdoc": [2, {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": false,
      }
    }],
    "valid-jsdoc": [2, {
      "prefer": {
        "arg": "param",
        "argument": "param",
        "class": "constructor",
        "return": "returns",
        "virtual": "abstract"
      },
      "preferType": {
        "array": "Array",
        "boolean": "Boolean",
        "date": "Date",
        "error": "Error",
        "function": "Function",
        "generator": "Generator",
        "json": "JSON",
        "map": "Map",
        "null": "Null",
        "number": "number",
        "object": "Object",
        "promise": "Promise",
        "regexp": "RegExp",
        "string": "String",
        "symbol": "Symbol",
        "undefined": "Undefined",
      },
      "requireReturn": true,
      "requireReturnType": true,
      "requireParamDescription": true,
      "requireReturnDescription": false,
    }],
  }
};