import GithubLogo from '../../assets/github.svg';
import { StyledHeaderContainer } from './styles.ts';

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <img src={GithubLogo} alt="Github Logo" />
      <h1>Repos Repo</h1>
      <p>Adicione o nome completo do repositório (incluindo o nome de usuário antes da barra) para buscar seus dados e adicioná-lo à lista.</p>
    </StyledHeaderContainer>
  );
};