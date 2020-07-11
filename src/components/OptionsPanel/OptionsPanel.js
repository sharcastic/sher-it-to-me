import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useRef
} from 'react';
import { func, node, string } from 'prop-types';

import { StyledHiddenComponent, StyledPanel, StyledPanelItem } from './styles';
import useOnOutsideClick from '../../hooks/useOnOutsideClick';

const PanelContext = createContext();

const PanelContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const setOpen = useCallback((state = undefined) => {
    setIsOpen(state === undefined ? !isOpen : state);
  }, []);
  return (
    <PanelContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </PanelContext.Provider>
  );
};

const Panel = ({ children, className }) => {
  const { isOpen, setOpen } = useContext(PanelContext);
  const ref = useRef();
  useOnOutsideClick(ref, () => {
    if (isOpen) {
      setOpen(false);
    }
  });
  const onClick = useCallback(() => setOpen(), []);
  return (
    <StyledPanel ref={ref} onClick={onClick} className={className}>
      {children}
    </StyledPanel>
  );
};

const VisibleComponent = ({ children }) => {
  return <>{children}</>;
};

const HiddenComponent = ({ children, headerElement = null, className }) => {
  const { isOpen } = useContext(PanelContext);
  if (isOpen) {
    return (
      <StyledHiddenComponent className={className}>
        {headerElement}
        {children}
      </StyledHiddenComponent>
    );
  }
  return null;
};

const PanelContainer = ({ children, className }) => {
  return (
    <PanelContextProvider>
      <Panel className={className}>{children}</Panel>
    </PanelContextProvider>
  );
};

PanelContainer.VisibleComponent = VisibleComponent;
PanelContainer.HiddenComponent = HiddenComponent;

export default PanelContainer;

export const PanelItem = ({ children, onClick, className }) => {
  const { setOpen } = useContext(PanelContext);
  const onItemClick = useCallback(e => {
    e.stopPropagation();
    onClick(e);
    setOpen(false);
  }, []);
  return (
    <StyledPanelItem onClick={onItemClick} className={className}>
      {children}
    </StyledPanelItem>
  );
};

PanelItem.propTypes = {
  children: node,
  onClick: func,
  className: string
};

PanelItem.defaultProps = {
  children: null,
  onClick: () => {},
  className: ''
};
