import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  background-color: #eeeeee;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const UpperLoader = styled.div`
  background-color: #cccccc;
  border-radius: 5px;
  width: 100%;
  height: 150px;
`;

const LinkCardLoader = () => (
  <LoaderContainer>
    <UpperLoader>
      <ContentLoader
        speed={1}
        width="100%"
        height={150}
        viewBox="0 0 350 150"
        foregroundColor="#AAAAAA"
      >
        <circle cx="22" cy="24" r="12" left="" />
        <rect x="40" y="12" rx="3" ry="3" width="80" height="10" />
        <rect x="40" y="26" rx="3" ry="3" width="105" height="10" />
        <rect x="10" y="110" rx="3" ry="3" width="210" height="10" />
        <rect x="10" y="125" rx="3" ry="3" width="320" height="10" />
      </ContentLoader>
    </UpperLoader>
    <ContentLoader
      speed={1}
      width="100%"
      height={130}
      viewBox="0 0 350 130"
      foregroundColor="#AAAAAA"
    >
      <rect x="10" y="16" rx="3" ry="3" width="320" height="10" />
      <rect x="10" y="60" rx="3" ry="3" width="320" height="10" />
      <rect x="10" y="75" rx="3" ry="3" width="220" height="10" />
    </ContentLoader>
  </LoaderContainer>
);

export default LinkCardLoader;
