import React from 'react';
import DynamicLinkCard from './DynamicLinkCard';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { primaryTheme, typographyTheme } from '../../styles/themes';

const PreviewWithImageProps = {
  image: 'https://d24cgw3uvb9a9h.cloudfront.net/static/94014/image/thumb.png',
  linkURL: 'https://guardian.co.uk',
  title: 'Title',
  description: 'Description'
};

export default {
  title: 'Dynamic Link Card!',
  component: DynamicLinkCard,
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
  <DynamicLinkCard
    comments={['one', 'two']}
    tags={['one']}
    taggedUsers={[
      { image: 'lol' },
      { image: 'lol2' },
      { image: 'lo3' },
      { image: 'lol4' }
    ]}
  />
);
