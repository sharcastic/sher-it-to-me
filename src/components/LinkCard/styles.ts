import styled from 'styled-components';

export const Post = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 5px;
`;

export const TopDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  .authorIcon {
    height: 24px;
    width: 24px;
    margin-right: 8px;
    fill: #233767;
    img {
      height: inherit;
      border-radius: 100%;
      width: inherit;
    }
  }
`;

export const PostDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 130px;
  padding: 15px;
  box-sizing: border-box;
`;

export const PostCreationDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightContent = styled.div`
  color: black;
  .options-icon {
    height: 24px;
    width: 24px;
    fill: white;
  }
  .hidden-component {
    svg {
      margin-right: 10px;
      fill: #233767;
    }
  }
`;
