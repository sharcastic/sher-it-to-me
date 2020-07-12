import styled from 'styled-components/macro';

export const StyledPanel = styled.div`
  position: relative;
  width: fit-content;
`;

export const StyledHiddenComponent = styled.div`
  background: green;
  width: 150px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  background: #f1f3f5;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    display: flex;
    padding: 7px 10px;
    align-items: center;
    cursor: pointer;
  }
`;

export const StyledPanelItem = styled.li`
  cursor: pointer;
`;
