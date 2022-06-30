"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _button = _interopRequireDefault(require("antd/lib/button"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React = _interopRequireWildcard(require("react"));

require("./index.scss");

var _excluded = ["type", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  (0, _inheritsLoose2["default"])(GrtButton, _React$Component);

  function GrtButton(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = GrtButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        type = _this$props.type,
        value = _this$props.value,
        otherProps = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, _excluded);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({
      type: type
    }, otherProps), value), /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({
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
var _default = GrtButton;
exports["default"] = _default;