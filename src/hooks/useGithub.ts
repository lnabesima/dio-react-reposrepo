import { useEffect, useState } from 'react';
import { Repository } from '../@types/Repository';
import { getRepoDetails } from '../services/githubService.ts';

export function useGithub() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | unknown | null>(null);
  const [repository, setRepository] = useState<Repository | null>(null);

  const fetchRepository = async (fullName: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const res = await getRepoDetails(fullName);
      setRepository(res);
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      console.log(repository);
    },
    [repository]);

  return {
    repository,
    loading,
    error,
    fetchRepository
  };
}