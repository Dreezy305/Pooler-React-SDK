import React from 'react';
import { PoolerConfig } from './types';
interface PoolerButtonProps extends PoolerConfig {
    children?: string | React.ReactNode;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
}
export default function poolerButton({ children, className, disabled, loading, ...rest }: PoolerButtonProps): JSX.Element;
export {};
