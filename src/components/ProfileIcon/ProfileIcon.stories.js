import React from 'react';
import ProfileIcon from './ProfileIcon';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Post Preview',
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
  <ProfileIcon
    className="class"
    img="https://cdn1.iconfinder.com/data/icons/office-222/91/General_Office_33-512.png"
  />
);

export const ProfileIconWithABrokenURLOrWhenLoading = () => <ProfileIcon />;
