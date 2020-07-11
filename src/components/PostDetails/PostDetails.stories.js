import React from 'react';
import PostDetails from './PostDetails';
import { withKnobs, text } from '@storybook/addon-knobs';

const defaultProps = {
  description: 'Post Description',
  onCopy: () => alert('Link Copied!')
};

export default {
  title: 'Post Details',
  component: PostDetails,
  decorators: [
    withKnobs,
    storyFn => (
      <div
        style={{
          width: '350px',
          margin: 'auto',
          'margin-top': '20px',
          'box-shadow': '0 5px 10px rgba(0,0,0,.1)',
          'border-radius': '5px',
          background: '#fff'
        }}
      >
        {storyFn()}
      </div>
    )
  ]
};

export const DefaultPostDetails = () => (
  <PostDetails
    description="Post description"
    link={text('Link', 'https://theoffice.com')}
    comments={['comments?']}
    taggedUsers={[{ image: 'url', name: 'User 1' }]}
    onCopy={() => alert('Link Copied!')}
  />
);

export const PostDetailsWithMultipleTaggedUsers = () => (
  <PostDetails
    {...defaultProps}
    link={text('Link', 'https://theoffice.com')}
    taggedUsers={[
      { image: 'url', name: 'User 1' },
      { image: 'https://i.imgflip.com/4/4t0m5.jpg', name: 'User 2' },
      { image: 'url', name: 'User 3' }
    ]}
    tags={['tags?']}
  />
);
