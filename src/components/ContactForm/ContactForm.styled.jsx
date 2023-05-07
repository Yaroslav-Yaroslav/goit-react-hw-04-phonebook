import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: ${p => p.theme.colors.error};
`;
export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Button = styled.button`
  cursor: pointer;
  padding: 5px;
  margin-bottom: 20px;
`;
