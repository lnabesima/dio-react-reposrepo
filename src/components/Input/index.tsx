import { StyledInput } from './styles.ts';
import { ChangeEvent } from 'react';

interface InputComponentProps {
  type?: string;
  name?: string;
  placeholder?: string;
  value: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputComponent({
  name, value, onChange, placeholder = "your-name/an-awesome-repo", type = "text"
}: InputComponentProps) {
  return <>
    <StyledInput
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  </>;
}