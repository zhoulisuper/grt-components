import * as React from 'react';
import { ButtonProps } from 'antd';
import './index.scss';
export interface GrtButtonProps {
    /**
     * 类型
     */
    type?: "primary" | "secondary" | "normal";
    color?: 'string';
    style?: 'object';
    onClick?: ButtonProps["onClick"];
    value?: ButtonProps["value"];
}
declare const GrtButton: React.FC<GrtButtonProps>;
export default GrtButton;
