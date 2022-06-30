import * as React from 'react';
import { ButtonProps } from 'antd';
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
declare class GrtButton extends React.Component<GrtButtonProps> {
    constructor(props: any);
    static defaultProps: {
        type: string;
        value: string;
    };
    render(): JSX.Element;
}
export default GrtButton;
