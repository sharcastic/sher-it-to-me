import React from 'react';
import LinkCardLoader from './LinkCardLoader';

export default {
  title: 'Link Card Loader',
  component: LinkCardLoader,
  decorators: [
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

export const LinkCardLoadingState = () => <LinkCardLoader />;
