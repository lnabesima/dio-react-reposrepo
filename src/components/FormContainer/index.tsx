import { InputComponent } from '../Input';
import { StyledFormContainer } from './styles.ts';
import { FormProps } from '../../@types/FormContainer';
import { Button } from '../Button';

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
    <Button type={'submit'} disabled={!formProps.inputValid} label={"Buscar"} onClick={formProps.buttonOnClick}/>
  </StyledFormContainer>;
}