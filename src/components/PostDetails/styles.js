import styled from 'styled-components/macro';

export const PostDetailsContainer = styled.div`
  padding: 12px 15px 10px 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UrlContainer = styled.div`
  font-family: 'Goldplay-Medium';
`;

export const UrlContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;

  svg {
    fill: turquoise;
    width: 14px;
    height: 14px;

    &.httpsIcon {
      margin-right: 5px;
    }
  }
`;

export const UrlText = styled.p`
  margin: 0;
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
  color: #27ae8e;
  width: 70vw;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  @media screen and (orientation: landscape) {
    width: 85%;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DescriptionText = styled.p`
  font-size: 1.1rem;
  ${({ lineClamp }) =>
    lineClamp &&
    `
  overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  `}
`;

export const IconRow = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 5px;
    fill: #233767;
  }
`;

export const NumberSpan = styled.span`
  font-family: Goldplay-Semibold;
  color: #233767;
`;

export const PeopleIconContainer = styled.div`
  margin-right: 5px;
  position: relative;
  display: flex;
  div {
    width: 21px;
    height: 21px;
    margin-left: -5px;
  }
`;

export const IconSections = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: ${props =>
    props.active ? '3px solid turquoise' : '3px solid transparent'};
  cursor: pointer;
`;
