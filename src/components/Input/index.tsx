import React, { useCallback } from 'react';
import { useField } from 'formik';

import FormField from 'components/FormField';
import { StyledInput } from './styles';

type TInput = {
  label?: string;
  placeholder?: string;
  type?: string;
  width?: number;
  name: string;
}

const Input: React.FC<TInput> = ({
  label,
  placeholder,
  type,
  width,
  name,
}: TInput) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = useCallback((e) => {
    helpers.setValue(e.target.value);
  }, []);

  return (
    <FormField
      label={label}
      width={width}
      meta={meta}
    >
      <StyledInput
        value={field.value}
        name={field.name}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
      />
    </FormField>
  );
};

Input.defaultProps = {
  label: undefined,
  placeholder: undefined,
  type: undefined,
  width: undefined,
};

export default Input;
