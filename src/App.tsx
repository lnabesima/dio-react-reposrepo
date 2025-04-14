import GithubLogo from './assets/github.svg';
import { FormContainer } from './components/FormContainer';
import { FormProps } from './@types/FormContainer';
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      console.log("Form Submitted");

    } catch (e) {
      console.log(e);
    } finally {
      setInputValue("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const formProps: FormProps = {
    onSubmit: handleSubmit,
    inputValue: inputValue,
    inputOnChange: handleInputChange,
    buttonLabel: "Buscar",
    buttonOnClick: handleSubmit
  };

  return (
    <>
      <img src={GithubLogo} alt="Github Logo"/>
      <FormContainer formProps={formProps}/>
    </>
  );
}