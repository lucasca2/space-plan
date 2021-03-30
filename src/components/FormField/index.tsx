import React from 'react';

import { Label, Error } from './styles';

type TFormField = {
  label?: string;
  width?: number;
  children: React.ReactNode;
  meta: any;
}

const FormField: React.FC<TFormField> = ({
  label,
  children,
  width,
  meta: { error, touched },
}: TFormField) => (
  <Label error={(error && touched)} width={width}>
    {label}
    {children}
    {(error && touched) && <Error>{error}</Error>}
  </Label>
);

FormField.defaultProps = {
  label: undefined,
  width: 1,
};

export default FormField;
