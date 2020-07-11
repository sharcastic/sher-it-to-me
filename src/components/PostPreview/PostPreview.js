import React, { useState } from 'react';
import { string, node } from 'prop-types';

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

const PostPreview = ({ linkURL, title, description, image, topSection }) => {
  const [showActualImage, setShowImage] = useState(false);
  const onImageLoad = () => setShowImage(true);
  const onAnchorClick = e => {
    if (!linkURL) {
      e.preventDefault();
    }
  };
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
            <span className="title">{title}</span>
            <span className="description">{description}</span>
          </AnchorTag>
        </LinkDetails>
      </PostInfo>
      {image && (
        <CoverImage
          src={image}
          alt="backdrop"
          onLoad={onImageLoad}
          hidden={!showActualImage}
        />
      )}
      {!showActualImage && <CoverImage src={DefaultImage} alt="backdrop" />}
    </Container>
  );
};

PostPreview.propTypes = {
  title: string,
  description: string,
  image: string,
  linkURL: string,
  topSection: node
};

PostPreview.defaultProps = {
  title: '',
  description: '',
  image: '',
  linkURL: '',
  topSection: null
};

export default PostPreview;
