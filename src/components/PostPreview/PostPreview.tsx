import React, { useState, useCallback, ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Heading, Text } from 'styled-typography';

import DefaultImage from '../../assets/icons/previewMissing.svg';

import {
  Container,
  Background,
  PostInfo,
  LinkDetails,
  AnchorTag,
  CoverImage,
  TopSection
} from './styles';

interface PostPreviewProps {
  linkURL: string;
  title: string;
  description: string;
  image: string;
  topSection?: ReactNode;
}

const PostPreview = ({
  linkURL,
  title,
  description,
  image,
  topSection
}: PostPreviewProps) => {
  const { activeTheme } = useContext(ThemeContext);
  const [showActualImage, setShowImage] = useState(false);
  const onImageLoad = useCallback(() => setShowImage(true), []);
  const onAnchorClick = useCallback(
    e => {
      if (!linkURL) {
        e.preventDefault();
      }
    },
    [linkURL]
  );
  return (
    <Container>
      <Background />
      <PostInfo>
        <TopSection>{topSection}</TopSection>
        <LinkDetails>
          <AnchorTag
            href={linkURL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onAnchorClick}
          >
            <Heading className="title" level={4} color={activeTheme.color4}>
              {title}
            </Heading>
            <Text className="description" level={5} color={activeTheme.color4}>
              {description}
            </Text>
          </AnchorTag>
        </LinkDetails>
      </PostInfo>
      <CoverImage
        src={image}
        alt="backdrop"
        onLoad={onImageLoad}
        hidden={!showActualImage}
      />
      {!showActualImage && <CoverImage src={DefaultImage} alt="backdrop" />}
    </Container>
  );
};

export default PostPreview;
