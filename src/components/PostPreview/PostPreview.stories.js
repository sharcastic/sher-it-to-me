import React from 'react';
import PostPreview from './PostPreview';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

const PreviewWithImageProps = {
  image: 'https://d24cgw3uvb9a9h.cloudfront.net/static/94014/image/thumb.png',
  linkURL: 'https://guardian.co.uk',
  title: 'Title',
  description: 'Description'
};

export default {
  title: 'Post Preview',
  component: PostPreview,
  decorators: [
    withKnobs,
    withA11y,
    storyFn => (
      <div
        style={{
          width: '300px',
          fontFamily: 'Goldplay-Regular',
          margin: 'auto',
          'padding-top': '20px'
        }}
      >
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

export const PreviewWithABrokenURLOrWhenLoading = () => (
  <PostPreview {...PreviewWithImageProps} image="broken" />
);
