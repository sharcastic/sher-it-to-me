import React from 'react';
import PostDetails from './PostDetails';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { primaryTheme, typographyTheme } from '../../styles/themes';

export default {
  title: 'PostDetailsV2',
  component: PostDetails,
  decorators: [
    withKnobs,
    storyFn => (
      <div
        style={{
          width: '300px',
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

export const Default = () => (
  <PostDetails
    comments={['one', 'two']}
    tags={['one']}
    taggedUsers={[
      { image: 'lol' },
      { image: 'lol2' },
      { image: 'lo3' },
      { image: 'lol4' }
    ]}
    linkDescription="Title or Description for the link shared which can go into multiple
    lines"
    link="https://guardian.co.uk"
  />
);
