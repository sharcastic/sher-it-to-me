import React from 'react';
import ProfileIcon from './ProfileIcon';

export default {
  title: 'Profile Icon',
  component: ProfileIcon,
  decorators: [
    storyFn => (
      <div
        style={{
          width: '50px',
          height: '50px',
          margin: 'auto',
          paddingTop: '20px'
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
