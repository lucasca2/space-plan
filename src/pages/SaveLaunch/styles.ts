import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  border-radius: ${(p) => p.theme.baseRadius};
  padding: ${(p) => p.theme.spacing.medium};
  background-color: ${(p) => p.theme.colors.secondary};
  
  display: flex;
  flex-wrap: wrap;
`;

export const WrapperActions = styled.div`
  display: flex; 
  width: 100%;
  justify-content: flex-end;
  padding: ${(p) => p.theme.spacing.small} ${(p) => p.theme.spacing.ultraSmall} 0;
`;
