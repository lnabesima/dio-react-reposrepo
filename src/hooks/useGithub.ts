import { useEffect, useState } from 'react';
import { Repository } from '../@types/Repository';
import { getRepoDetails } from '../services/githubService.ts';

export function useGithub() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [repository, setRepository] = useState<Repository | null>(null);

  const fetchRepository = async (fullName: string): Promise<void> => {
    setLoading(true);
    setError(false);
    setRepository(null)

    try {
      const res = await getRepoDetails(fullName);
      setRepository(res);
    } catch {
      setError(true);
      setRepository(null)
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