import { StyledRepoCardContainer } from './styles.ts';
import { Repository } from '../../@types/Repository';

interface RepoCardProps {
  props: Repository | null
}

export const RepoCard = ({props}:RepoCardProps) => {
  return <StyledRepoCardContainer>
    <p>Name: {props?.full_name ?? ""}</p>
    <p>Description: {props?.description ?? ""}</p>
    <p>Language: {props?.language ?? ""}</p>
    <p>Stars: {props?.stargazers_count ?? 0}</p>
    <p>Watchers: {props?.watchers_count ?? 0}</p>
    <button>Adicionar ao repositório</button>
  </StyledRepoCardContainer>;
};