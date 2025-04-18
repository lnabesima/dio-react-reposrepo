export interface FormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;

  inputType?: string,
  inputName?: string,
  inputPlaceholder?: string,
  inputValue: string,
  inputValid: boolean,
  inputOnChange: (e: ChangeEvent<HTMLInputElement>) => void;

  buttonLabel: string;
  buttonType?: string;
  buttonOnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}