export interface FormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;

  inputType?: string,
  inputName?: string,
  inputPlaceholder?: string,
  inputValue: string,
  inputOnChange: (e: ChangeEvent<HTMLInputElement>) => void;

  buttonLabel: string;
  buttonType?: string;
  buttonOnClick: () => void;
}