import React from 'react';
import LinkCard from './LinkCard';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Link Card',
  component: LinkCard,
  decorators: [
    withKnobs,
    storyFn => (
      <div
        style={{
          width: '350px',
          fontFamily: 'Goldplay-Regular',
          margin: 'auto',
          paddingTop: '20px'
        }}
      >
        {storyFn()}
      </div>
    )
  ]
};

const previewData = {
  image: 'https://d24cgw3uvb9a9h.cloudfront.net/static/94014/image/thumb.png',
  linkURL: 'https://guardian.co.uk',
  title: 'Title',
  description: 'Description'
};

const postData = {
  taggedUsers: [
    { image: 'url', name: 'User 1' },
    { image: 'https://i.imgflip.com/4/4t0m5.jpg', name: 'User 2' },
    { image: 'url', name: 'User 3' }
  ],
  tags: ['tags?'],
  link: 'https://theoffice.com',
  description: 'Post Description'
};

export const DefaultLinkCard = () => (
  <LinkCard previewData={previewData} postData={postData} />
);

export const LinkCardWhileLoading = () => (
  <LinkCard previewData={null} postData={postData} />
);
