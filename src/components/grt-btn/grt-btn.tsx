import * as React from 'react';
import { createElement } from 'react';
import { Button, ButtonProps } from 'antd';
// import { ButtonProps } from '@alifd/next/types/button';
import './index.scss';

export interface GrtButtonProps {
  /**
   * 类型
   */
  type?: ButtonProps['type'];
  color?: 'string';
  style?: 'object';
  onClick?: ButtonProps['onClick'];
  value?: ButtonProps['value'];
}

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

class GrtButton extends React.Component<GrtButtonProps> {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    type: 'primary',
    value: '主按9999钮',
  };
  render() {
    const { type, value, ...otherProps } = this.props;
    return (
      <>
        <Button type={type} {...otherProps}>
          {value}
        </Button>
        <Button type={type} {...otherProps}>
          {value}
        </Button>
      </>
    );
  }
}
GrtButton.displayName = 'GrtButton';
export default GrtButton;
