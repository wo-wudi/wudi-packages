"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

require("./index.less");

var Foo = function Foo(_ref) {
  var name = _ref.name;
  console.log('Foo');
  return (0, _jsxRuntime.jsx)("div", {
    className: "foo-box",
    children: name
  });
};

var _default = Foo;
exports.default = _default;