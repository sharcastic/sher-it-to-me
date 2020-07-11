import React from 'react';
import { string, func, bool, node } from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

const LeftIconSpan = styled.span`
  margin-right: 10px;
  display: flex;
`;

const Pill = styled.div`
  display: flex;
  align-items: center;
  background-color: lightgray;
  width: fit-content;
  padding: 3px 10px;
  border-radius: 15px;
  .close-icon {
    cursor: pointer;
    margin-left: 10px;
    fill: black;
  }
`;
const PillLabel = ({ value, id, onRemove, className, removable, leftIcon }) => {
  const onRemoveClick = () => {
    onRemove(id);
  };
  return (
    <Pill className={className}>
      {leftIcon && <LeftIconSpan>{leftIcon}</LeftIconSpan>}
      <span>{value}</span>
      {removable && (
        <CloseIcon
          title="remove icon"
          className="close-icon"
          onClick={onRemoveClick}
        />
      )}
    </Pill>
  );
};

PillLabel.propTypes = {
  value: string.isRequired,
  id: string.isRequired,
  onRemove: func,
  className: string,
  removable: bool,
  leftIcon: node
};

PillLabel.defaultProps = {
  className: '',
  onRemove: () => {},
  removable: false,
  leftIcon: null
};

export default PillLabel;
