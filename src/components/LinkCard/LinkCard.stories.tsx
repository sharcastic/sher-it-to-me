import React, { useState } from 'react';
import LinkCard from './LinkCard';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { primaryTheme, typographyTheme } from '../../styles/themes';

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
        <ThemeProvider
          theme={{ typography: typographyTheme, activeTheme: primaryTheme }}
        >
          {storyFn()}
        </ThemeProvider>
      </div>
    )
  ]
};

const previewData = {
  imageUrl:
    'https://d24cgw3uvb9a9h.cloudfront.net/static/94014/image/thumb.png',
  link: 'https://guardian.co.uk',
  title: 'Title',
  description: 'Description'
};

const postCreationDetails = {
  authorName: 'Dwight Schrute',
  authorImageUrl: 'https://i.imgflip.com/4/4t0m5.jpg',
  createdDate: new Date()
};

const postDetails = {
  comments: ['one', 'two'],
  tags: ['one'],
  taggedUsers: [
    { image: 'lol' },
    { image: 'lol2' },
    { image: 'lo3' },
    { image: 'lol4' }
  ],
  linkDescription:
    'Title or Description for the link shared which can go into multiple lines',
  link: 'https://guardian.co.uk'
};

export const DefaultLinkCard = () => {
  return (
    <LinkCard
      postCreationDetails={postCreationDetails}
      previewData={previewData}
      postDetails={postDetails}
    />
  );
};

export const LinkCardWhileLoading = () => {
  return (
    <LinkCard
      previewData={null}
      postCreationDetails={postCreationDetails}
      postDetails={postDetails}
    />
  );
};
