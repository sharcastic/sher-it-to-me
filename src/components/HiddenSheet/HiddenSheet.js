import React from 'react';
import { string, bool, node, func, oneOf } from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

const Container = styled.div`
  position: fixed;
  transition: all 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .close-icon {
    padding: 10px;
    fill: #233767;
    height: 20px;
    width: 20px;
    border: 1px solid;
    border-radius: 100%;
    cursor: pointer;
  }

  ${({ originDirection, isOpen }) => {
    if (originDirection === 'bottom') {
      return `
        flex-direction: column;
        left: 0;
        bottom: 0;
        transform: ${isOpen ? 'translateY(0%)' : 'translateY(100%)'};
        width: 100%;
        height: fit-content;
        .close-icon {
          margin-bottom: 20px;
        }
      `;
    } else if (originDirection === 'right') {
      return `
        top: 0;
        transform: ${isOpen ? 'translateX(0%)' : 'translateX(100%)'};
        width: fit-content;
        height: 100%;
        .close-icon {
          margin-right: 20px;
        }
      `;
    }
  }}
  /* transform: ${({ isOpen, originDirection }) => {
    if (originDirection === 'bottom') {
      return isOpen ? 'translateY(0%)' : 'translateY(100%)';
    } else if (originDirection === 'right') {
      return isOpen ? 'translateX(0%)' : 'translateX(100%)';
    }
    return '';
  }}; */
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ originDirection, isOpen }) => {
    if (originDirection === 'bottom') {
      return `
        padding-top: 10px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        box-shadow: ${isOpen ? '0px -5px 15px rgba(0, 0, 0, 0.25)' : 'none'};
        width: 100%;
      `;
    } else if (originDirection === 'right') {
      return `
        padding-left: 10px;
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
        box-shadow: ${isOpen ? '0px -5px 15px rgba(0, 0, 0, 0.25)' : 'none'};
        height: 100%;
      `;
    }
  }}
`;

const HiddenSheet = ({ children, isOpen, originDirection, closeIcon, onClose }) => {
  return (
    <Container isOpen={isOpen} originDirection={originDirection}>
      {closeIcon && <CloseIcon className="close-icon" title="Close Icon" onClick={onClose} />}
      <Content originDirection={originDirection} isOpen={isOpen}>
        {children}
      </Content>
    </Container>
  );
};

HiddenSheet.propTypes = {
  children: node.isRequired,
  isOpen: bool.isRequired,
  originDirection: oneOf(['bottom', 'right']).isRequired,
  onToggle: func.isRequired,
  closeIcon: bool,
  onClose: func
};

HiddenSheet.defaultProps = {
  closeIcon: false,
  onClose: () => {}
}

export default HiddenSheet;
