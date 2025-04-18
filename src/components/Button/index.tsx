import { StyledButton } from './styles.ts';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  label: string;
  variant?: 'default' | 'danger' | undefined
}

export const Button = ({label, variant = 'default', ...rest}: ButtonProps) => {
  return <StyledButton variant={variant} {...rest}>{label}</StyledButton>;
}