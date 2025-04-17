import { Repository } from '../../@types/Repository';
import { JSX } from 'react';
import { RepoCard } from '../RepoCard';

interface RepoListProps {
  repos: Repository[];
  onClick: (repo: Repository) => void;
}

export const RepoList = ({ repos, onClick }: RepoListProps): JSX.Element => {

  return (
    <div>
      {repos.map(repo =>
        <RepoCard onClick={(repo:Repository) => onClick(repo)} repo={repo} key={repo.id} buttonVariant={"danger"} label={"Remover da lista"}/>
      )}
    </div>
  );
};