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

interface RepoCardProps {
  props: Repository;
}

export const RepoCard = ({ props }: RepoCardProps) => {
  const { updated_at } = props;
  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(updated_at));

  return <StyledRepoCardContainer>

    <StyledRepoCardTitleContainer>
      <p>{props?.owner}/<StyledRepoCardRepoHighlight>{props?.name}</StyledRepoCardRepoHighlight></p>
    </StyledRepoCardTitleContainer>

    <StyledRepoCardNumbersContainer>
      <p>
        <StyledRepoCardRepoHighlight>{props?.stargazers_count ?? 0}</StyledRepoCardRepoHighlight> stars
      </p>
      <p>
        <StyledRepoCardRepoHighlight>{props?.watchers_count ?? 0}</StyledRepoCardRepoHighlight> watchers
      </p>
      <p><StyledRepoCardRepoHighlight>{props?.forks_count ?? 0}</StyledRepoCardRepoHighlight> forks
      </p>
    </StyledRepoCardNumbersContainer>


    <StyledRepoCardDescriptionContainer>
      <p>{props?.description ?? ""}</p>
    </StyledRepoCardDescriptionContainer>

    <StyledRepoCardLanguageContainer><p>Atualizado em: {formattedDate ?? ""}</p>
    </StyledRepoCardLanguageContainer>

    <StyledRepoCardButtonContainer>
      <button>Adicionar ao repositório</button>
    </StyledRepoCardButtonContainer>
  </StyledRepoCardContainer>;
};