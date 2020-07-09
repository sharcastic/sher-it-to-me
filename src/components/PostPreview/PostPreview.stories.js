import React from 'react';
import PostPreview from './PostPreview';
import { withKnobs, text } from '@storybook/addon-knobs';

const PreviewWithImageProps = {
  image:
    'https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png',
  linkURL: 'https://guardian.co.uk',
  title: 'Title',
  description: 'Description'
};

export default {
  title: 'Post Preview',
  component: PostPreview,
  decorators: [
    withKnobs,
    storyFn => (
      <div style={{ width: '300px', fontFamily: 'Goldplay-Regular' }}>
        {storyFn()}
      </div>
    )
  ]
};

export const PreviewWithImage = () => (
  <PostPreview
    {...PreviewWithImageProps}
    title={text('Title', 'Random Title')}
    description={text('Description', 'Random Description')}
  />
);

export const PreviewWithABrokenURL = () => (
  <PostPreview {...PreviewWithImageProps} image="broken" />
);
