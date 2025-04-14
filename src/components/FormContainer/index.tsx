import { InputComponent } from '../Input';
import { StyledFormContainer } from './styles.ts';
import { FormProps } from '../../@types/FormContainer';

interface FormContainerProps {
  formProps: FormProps;

}

export function FormContainer({ formProps }: FormContainerProps) {
  return <StyledFormContainer onSubmit={formProps.onSubmit}>
    <InputComponent
      type={formProps.inputType}
      name={formProps.inputName}
      placeholder={formProps.inputPlaceholder}
      value={formProps.inputValue}
      onChange={formProps.inputOnChange}
    />
    <button type={'button'} disabled={!formProps.inputValue}>Buscar</button>
  </StyledFormContainer>;
}