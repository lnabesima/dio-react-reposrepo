import { StyledButton } from './styles.ts';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  label: string;
}

export const Button = ({label, ...rest}: ButtonProps) => {
  return <StyledButton {...rest}>{label}</StyledButton>;
}