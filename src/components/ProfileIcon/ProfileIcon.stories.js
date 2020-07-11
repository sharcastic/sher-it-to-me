import React from 'react';
import ProfileIcon from './ProfileIcon';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Profile Icon',
  component: ProfileIcon,
  decorators: [
    withA11y,
    storyFn => (
      <div
        style={{
          width: '50px',
          height: '50px',
          margin: 'auto',
          'padding-top': '20px'
        }}
      >
        {storyFn()}
      </div>
    )
  ]
};

export const ProfileIconWithImage = () => (
  <ProfileIcon className="class" img="https://i.imgflip.com/4/4t0m5.jpg" />
);

export const ProfileIconWithABrokenURLOrWhenLoading = () => <ProfileIcon />;