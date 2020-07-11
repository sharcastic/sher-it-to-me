import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  color: white;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 97%;
  background: linear-gradient(180deg, #091320b3, #0d1528cc 100.73%);
  border-radius: 8px;
`;

export const PostInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: flex-end;
  height: 100%;
`;

export const AnchorTag = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
  color: inherit;

  span {
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }

  .title {
    font-size: 1.1rem;
    font-family: 'Goldplay-Semibold';
  }

  .description {
    font-size: 0.8rem;
    max-height: 50px;
  }
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  display: ${props => (props.hidden ? 'none' : 'initial')};
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 0 10px;
`;
