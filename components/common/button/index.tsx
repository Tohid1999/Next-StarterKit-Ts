import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

import { Spinner } from '../index';

export interface ButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isLoading?: boolean;
    children: ReactNode;
    spinnerColor?: string;
    spinnerClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    isLoading,
    spinnerColor,
    spinnerClassName,
    ...otherProps
}) => {
    return (
        <button {...otherProps}>
            {isLoading ? <Spinner color={spinnerColor} className={spinnerClassName} /> : children}
        </button>
    );
};

export default Button;
