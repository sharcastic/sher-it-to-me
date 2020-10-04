import React from 'react';
import CompactCard from './CompactCard';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { primaryTheme, typographyTheme } from '../../styles/themes';

export default {
  title: 'Compact Card',
  component: CompactCard,
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
    <CompactCard
      postDetails={postDetails}
      authorName="Dwight Schrute"
      createdDate={new Date()}
      description="Description for the Card!"
    />
  );
};
