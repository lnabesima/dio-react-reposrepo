import {
  StyledRepoCardButtonContainer,
  StyledRepoCardContainer,
  StyledRepoCardDescriptionContainer,
  StyledRepoCardLanguageContainer,
  StyledRepoCardNumbersContainer,
  StyledRepoCardRepoHighlight,
  StyledRepoCardTitleContainer
} from './styles.ts';
import { Repository } from '../../@types/Repository';
import { Button } from '../Button';

interface RepoCardProps {
  repo: Repository;
  onClick: (() => void) | ((repo:Repository) => void);
  label?: string | undefined;
  buttonVariant?: 'default' | 'danger';
}

export const RepoCard = ({ repo, onClick, label = "Adicionar à lista", buttonVariant = 'default' }: RepoCardProps) => {
  const { updated_at } = repo;
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(updated_at));

  const handleButtonClick = () => {
    if(typeof onClick === 'function') {
      onClick(repo);
    }
  }

  return <StyledRepoCardContainer>

    <StyledRepoCardTitleContainer>
      <p>{repo?.owner}/<StyledRepoCardRepoHighlight>{repo?.name}</StyledRepoCardRepoHighlight></p>
    </StyledRepoCardTitleContainer>

    <StyledRepoCardNumbersContainer>
      <p>
        <StyledRepoCardRepoHighlight>{repo?.stargazers_count ?? 0}</StyledRepoCardRepoHighlight> stars
      </p>
      <p>
        <StyledRepoCardRepoHighlight>{repo?.watchers_count ?? 0}</StyledRepoCardRepoHighlight> watchers
      </p>
      <p><StyledRepoCardRepoHighlight>{repo?.forks_count ?? 0}</StyledRepoCardRepoHighlight> forks
      </p>
    </StyledRepoCardNumbersContainer>


    <StyledRepoCardDescriptionContainer>
      <p>{repo?.description ?? ""}</p>
    </StyledRepoCardDescriptionContainer>

    <StyledRepoCardLanguageContainer><p>Atualizado em: {formattedDate ?? ""}</p>
    </StyledRepoCardLanguageContainer>

    <StyledRepoCardButtonContainer>
      <Button variant={buttonVariant} label={label} onClick={handleButtonClick}/>
    </StyledRepoCardButtonContainer>
  </StyledRepoCardContainer>;
};