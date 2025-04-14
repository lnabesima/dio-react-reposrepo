import GithubLogo from './assets/github.svg';
import { FormContainer } from './components/FormContainer';
import { FormProps } from './@types/FormContainer';
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { z } from 'zod';
const inputNameSchema = z.string().regex(/^[A-Za-z0-9_.-]+\/[A-Za-z0-9-._$]/);

export default function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const { repository, loading, error, fetchRepository } = useGithub();

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
    inputValid: isValid,
    buttonLabel: "Buscar",
    buttonOnClick: handleSubmit
  };

  useEffect(() => {
    const result = inputNameSchema.safeParse(inputValue);
    setIsValid(result.success);
  }, [inputValue])

  return (
    <>
      <img src={GithubLogo} alt="Github Logo"/>
      <FormContainer formProps={formProps}/>
    </>
  );
}