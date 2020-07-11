import React from 'react';
import PostPreview from './PostPreview';
import { withKnobs, text } from '@storybook/addon-knobs';

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

export const PreviewWithImageAndTopSection = () => (
  <PostPreview
    {...PreviewWithImageProps}
    topSection={<span>Created By Bojack!</span>}
  />
);

export const PreviewWithABrokenURLOrWhenLoading = () => (
  <PostPreview {...PreviewWithImageProps} image="broken" />
);
