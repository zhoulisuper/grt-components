import _Button from "antd/es/button";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["type", "color", "style", "value"];
import * as React from 'react';
// import { ButtonProps } from '@alifd/next/types/button';
import "./index.scss";

var GrtButton = function GrtButton(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'primary' : _ref$type,
      color = _ref.color,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? "主按钮" : _ref$value,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _style = style || {};

  if (color) {
    _style.backgroundColor = color;
  }

  var _otherProps = otherProps || {};

  _otherProps.style = _style;
  return /*#__PURE__*/React.createElement(_Button, _extends({
    type: type
  }, _otherProps), value);
};

GrtButton.displayName = 'GrtButton';
export default GrtButton;