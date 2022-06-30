import _Button from "antd/es/button";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
var _excluded = ["type", "value"];
import * as React from 'react';
// import { ButtonProps } from '@alifd/next/types/button';
import "./index.scss";

// const GrtButton: React.FC<GrtButtonProps> = function GrtButton({
//   type = 'primary',
//   color,
//   style = {},
//   value = "主按钮",
//   ...otherProps
// }) {
//   const _style = style || {};
//   if (color) {
//     _style.backgroundColor = color;
//   }
//   const _otherProps = otherProps || {};
//   _otherProps.style = _style;
//   return (
//     <Button type={type} { ..._otherProps } >{value}</Button>
//   );
// };
// GrtButton.displayName = 'GrtButton';
// export default GrtButton;
var GrtButton = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(GrtButton, _React$Component);

  function GrtButton(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = GrtButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        type = _this$props.type,
        value = _this$props.value,
        otherProps = _objectWithoutPropertiesLoose(_this$props, _excluded);

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Button, _extends({
      type: type
    }, otherProps), value), /*#__PURE__*/React.createElement(_Button, _extends({
      type: type
    }, otherProps), value));
  };

  return GrtButton;
}(React.Component);

GrtButton.defaultProps = {
  type: 'primary',
  value: '主按9999钮'
};
GrtButton.displayName = 'GrtButton';
export default GrtButton;