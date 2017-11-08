module.exports = {
  "presets": [
    [
      "es2015",
      {
        "modules": false
      }
    ]
  ],
  "plugins": [
    "transform-decorators-legacy",
    "transform-class-properties",
    "transform-react-remove-prop-types"
  ]
};

/*
"plugins": [
    "transform-for-of-as-array",
    "transform-decorators-legacy",
    "transform-class-properties",
    "transform-object-rest-spread",
    "transform-react-jsx",
    "babel-plugin-external-helpers",
    "transform-react-remove-prop-types"
  ]
*/