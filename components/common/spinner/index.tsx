import { FC } from 'react';
import cn from 'classnames';

import s from './spinner.module.css';

interface Props {
    className?: string;
    color?: string;
}
const Spinner: FC<Props> = ({ className = 'w-6 h-6', color = 'white' }) => {
    return (
        <svg className={cn(s.spinner, className)} viewBox="0 0 50 50">
            <circle
                className={cn(s.path)}
                cx="25"
                cy="25"
                r="20"
                stroke={color}
                fill="none"
                strokeWidth="5"
            ></circle>
        </svg>
    );
};

export default Spinner;
