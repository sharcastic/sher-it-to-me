import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const TextInput = ({ value, className, onChange, placeholder, onBlur }) => {
  const onInputChange = e => onChange(e.target.value);
  return (
    <Input
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={onInputChange}
      onBlur={onBlur}
    />
  );
};

TextInput.propTypes = {
  value: string.isRequired,
  className: string,
  onChange: func,
  placeholder: string,
  onBlur: func
};

TextInput.defaultProps = {
  onChange: () => {},
  className: '',
  placeholder: '',
  onBlur: () => {}
};

export default TextInput;
