import GithubLogo from './assets/github.svg';
import { FormContainer } from './components/FormContainer';
import { FormProps } from './@types/FormContainer';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function App() {
  const [inputValue, inputOnChange] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleButtonClick = () => {
    console.log("Button Clicked!");
  };

  const formProps: FormProps = {
    onSubmit: handleSubmit,
    inputValue: inputValue,
    inputOnChange: handleInputChange,
    buttonLabel: "Buscar",
    buttonOnClick: handleButtonClick
  };

  return (
    <>
      <img src={GithubLogo} alt="Github Logo"/>
      <FormContainer formProps={formProps}/>
      aaa
    </>
  );
}