import { FormContainer } from './components/FormContainer';
import { FormProps } from './@types/FormContainer';
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from 'react';
import { useGithub } from './hooks/useGithub.ts';
import { z } from 'zod';
import { RepoCard } from './components/RepoCard';
import { Repository } from './@types/Repository';
import { RepoList } from './components/RepoList';
import { Header } from './components/Header';

const inputNameSchema = z.string().regex(/^[A-Za-z0-9_.-]+\/[A-Za-z0-9-._$]/);

export default function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [repos, setRepos] = useState<Repository[]>([]);
  const { repository, loading, error, fetchRepository } = useGithub();

  const handleSubmit = async (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await fetchRepository(inputValue);
    } catch (e) {
      console.log(`this error is in the catch: ${e}`);
    } finally {
      setInputValue("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddRepoToList = () => {
    if (repository) {
      const alreadyExists = repos.some(repo => repo.id === repository.id);
      if (!alreadyExists) {
        setRepos([...repos, repository]);
      }
    }
  };

  const handleRemoveRepoFromList = (repo:Repository) => {
    const filteredRepoList = repos.filter(r => r.id !== repo.id);
    setRepos(filteredRepoList);
  }

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
  }, [inputValue]);

  return (
    <main>
      <Header />
      <FormContainer formProps={formProps}/>

      {loading && <p>Loading...</p>}

      {repository && <RepoCard repo={repository} onClick={handleAddRepoToList}/>}

      {error && <p>O repositório não foi encontrado. ☹️</p>}

      <hr/>

      {repos.length !== 0 && <RepoList repos={repos} onClick={(repo) => handleRemoveRepoFromList(repo)}/>}

    </main>
  );
}