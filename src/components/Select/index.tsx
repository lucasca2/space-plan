import React, { useCallback, useState } from 'react';
import { MdCheckCircle, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import FormField from 'components/FormField';
import { useField } from 'formik';
import {
  StyledSelect,
  PlaceHolder,
  Cursor,
  Dropdown,
  Option,
  Value,
} from './styles';

type TSelect = {
  multiple?: boolean;
  label?: string;
  placeholder?: string;
  width?: number;
  name: string;
  options: any[];
  getOptionValue: (option: any) => any;
  getOptionLabel: (option: any) => string;
}

const Select: React.FC<TSelect> = ({
  label,
  placeholder,
  width,
  name,
  options,
  getOptionValue,
  getOptionLabel,
  multiple,
}: TSelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [field, meta, helpers] = useField(name);

  const handleChange = useCallback((option) => {
    const rawValue = getOptionValue(option);
    let newValue = field.value;

    if (multiple) {
      if (!Array.isArray(newValue)) newValue = [];

      if (newValue?.includes(rawValue)) {
        newValue = field.value.filter((value: any) => value !== rawValue);
      } else {
        newValue = [...newValue, rawValue];
      }

      helpers.setValue(newValue);
    } else {
      helpers.setValue(rawValue);
    }
  }, [field, multiple, helpers]);

  const hasActive = useCallback((option) => {
    const rawValue = getOptionValue(option);

    if (Array.isArray(field.value) && field.value?.includes(rawValue)) return true;
    if (field.value === rawValue) return true;

    return false;
  }, [field]);

  return (
    <FormField
      label={label}
      meta={meta}
      width={width}
    >
      <StyledSelect onClick={() => setIsOpen((prev) => !prev)}>
        {(field.value && Array.isArray(field.value)) && field.value?.map((value, index) => (
          <Value>
            {index !== 0 && ', '}
            {getOptionLabel(value)}
          </Value>
        ))}

        {field.value && !Array.isArray(field.value) && (
        <Value>{getOptionLabel(field.value)}</Value>
        )}

        {(!field.value || field.value?.length === 0) && (
        <PlaceHolder>{placeholder}</PlaceHolder>
        )}

        <Cursor>
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }
        </Cursor>
        <Dropdown isOpen={isOpen}>
          {options.map((option) => (
            <Option
              active={hasActive(option)}
              onClick={() => handleChange(option)}
            >
              {hasActive(option) && (
                <MdCheckCircle />
              )}
              {getOptionLabel(option)}
            </Option>
          ))}
        </Dropdown>
      </StyledSelect>
    </FormField>
  );
};

Select.defaultProps = {
  multiple: false,
  label: undefined,
  placeholder: undefined,
  width: undefined,
};

export default Select;
