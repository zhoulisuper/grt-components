import * as React from 'react';
import { createElement } from 'react';
import { Button,ButtonProps } from 'antd';
// import { ButtonProps } from '@alifd/next/types/button';
import './index.scss';

export interface GrtButtonProps{
  /**
   * 类型
   */
  type?: "primary" | "secondary" | "normal";
  color?: 'string';
  style?: 'object',
  onClick?:ButtonProps["onClick"],
  value?:ButtonProps["value"]
}

const GrtButton: React.FC<GrtButtonProps> = function GrtButton({
  type = 'primary',
  color,
  style = {},
  value = "主按钮",
  ...otherProps
}) {
  const _style = style || {};
  if (color) {
    _style.backgroundColor = color;
  }
  const _otherProps = otherProps || {};
  _otherProps.style = _style;
  return (
    <Button type={type} { ..._otherProps } >{value}</Button>
  );
};

GrtButton.displayName = 'GrtButton';
export default GrtButton;


