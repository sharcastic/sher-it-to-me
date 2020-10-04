import styled from 'styled-components';

export const CompactCardContainer = styled.div`
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0px 5px 25px rgba(35, 55, 103, 0.25);
  border-radius: 5px;
`;
export const CompactCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  & .authorIcon {
    height: 35px;
    width: 35px;
    margin-right: 10px;
  }
  margin-bottom: 10px;
`;
export const CompactCardHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .authorName {
    margin-right: 5px;
    line-height: inherit;
  }
  & .post-title {
    font-family: Goldplay-Medium;
  }
`;
export const HeaderLeftSection = styled.div`
  display: flex;
  align-items: center;
`;
export const TopHeaderText = styled.div`
  display: flex;
`;
