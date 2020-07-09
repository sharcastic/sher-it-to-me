import React, { useState } from 'react';
import { string } from 'prop-types';

import DefaultImage from '../../assets/icons/previewMissing.svg';

import {
  Container,
  Background,
  PostInfo,
  LinkDetails,
  AnchorTag,
  CoverImage
} from './styles';

const PostPreview = ({ linkURL, title, description, image }) => {
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
  linkURL: string
};

PostPreview.defaultProps = {
  title: '',
  description: '',
  image: '',
  linkURL: ''
};

export default PostPreview;
