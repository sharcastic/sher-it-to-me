import styled from 'styled-components';
import palette from '../../constants/palette';

export const PostDetailsContainer = styled.div`
  padding: 12px 15px 10px 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UrlContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;

  .copyIcon {
    cursor: pointer;
  }

  .url {
    overflow: hidden;
    white-space: nowrap;
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
  }

  .description {
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  svg {
    width: 14px;
    height: 14px;
    fill: ${palette.darkBlue};

    &.httpsIcon {
      margin-right: 5px;
      width: 10px;
      height: 10px;
      fill: ${palette.green};
    }
  }
`;

export const IconRow = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const NumberSpan = styled.span`
  font-family: Goldplay-Semibold;
  color: #233767;
`;

export const PeopleIconContainer = styled.div`
  padding-bottom: 5px;
  margin-right: 5px;
  position: relative;
  display: flex;

  .avatarGroup {
    div {
      height: 16px;
      width: 16px;
      font-size: 12px;
    }
  }
`;

export const IconSections = styled.div`
  display: flex;
  &.leftSection {
    .iconContent {
      margin-right: 20px;
      svg {
        height: 18px;
        width: 18px;
        margin-right: 5px;
        fill: #233767;
      }
    }
  }
`;
