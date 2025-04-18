import { Repository } from '../../@types/Repository';
import { JSX } from 'react';
import { RepoCard } from '../RepoCard';
import { StyledRepoListContainer } from './styles.ts';

interface RepoListProps {
  repos: Repository[];
  onClick: (repo: Repository) => void;
}

export const RepoList = ({ repos, onClick }: RepoListProps): JSX.Element => {

  return (
    <StyledRepoListContainer>
      {repos.map(repo =>
        <RepoCard onClick={(repo:Repository) => onClick(repo)} repo={repo} key={repo.id} buttonVariant={"danger"} label={"Remover da lista"}/>
      )}
    </StyledRepoListContainer>
  );
};