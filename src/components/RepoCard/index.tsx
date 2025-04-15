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
  props: Repository | null;
}

export const RepoCard = ({ props }: RepoCardProps) => {
  console.log(props);
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

    <StyledRepoCardLanguageContainer><p>Language: {props?.language ?? ""}</p>
    </StyledRepoCardLanguageContainer>

    <StyledRepoCardButtonContainer>
      <button>Adicionar ao repositório</button>
    </StyledRepoCardButtonContainer>
  </StyledRepoCardContainer>;
};