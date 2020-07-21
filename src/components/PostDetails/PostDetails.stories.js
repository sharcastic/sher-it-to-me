import React, { useState } from 'react';
import PostDetails from './PostDetails';
import { withKnobs, text } from '@storybook/addon-knobs';

const defaultProps = {
  link: 'https://theoffice.com',
  description: 'Post Description',
  onCopy: () => alert('Link Copied!'),
  taggedUsers: [{ image: 'url', name: 'User 1' }]
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
          marginTop: '20px',
          boxShadow: '0 5px 10px rgba(0,0,0,.1)',
          borderRadius: '5px',
          background: '#fff'
        }}
      >
        {storyFn()}
      </div>
    )
  ]
};

export const DefaultPostDetails = () => {
  const [activeLinkDetails, setActiveLinkDetails] = useState({});
  const changeActiveLinkDetails = (linkId, selectedPanel) => {
    const { panel, id } = activeLinkDetails;
    if (id === linkId && selectedPanel === panel) {
      setActiveLinkDetails({}); 
    } else {
      setActiveLinkDetails({ id: linkId, panel: selectedPanel });
    }
  };
  return (
    <PostDetails
      description={text('Description', 'An amazing show!')}
      link={text('Link', 'https://theoffice.com')}
      comments={['comments?']}
      taggedUsers={[{ image: 'url', name: 'User 1' }]}
      onCopy={() => alert('Link Copied!')}
      selectedPanel={activeLinkDetails.panel}
      id='1'
      changeActiveLinkDetails={changeActiveLinkDetails}
    />
  );
};

export const PostDetailsWithDescriptionClamped = () => {
  const [selectedPanel, setSelectedPanel] = useState('');
  const modifySelectedPanel = panel => {
    if (!selectedPanel || panel !== selectedPanel) {
      setSelectedPanel(panel);
    } else {
      setSelectedPanel('');
    }
  };
  return (
    <PostDetails
      {...defaultProps}
      description={text(
        'Description',
        'An amazing show! The show is a masterpiece and it has an amazing cast too I guess!'
      )}
      descriptionLineClamp={2}
      selectedPanel={selectedPanel}
      modifySelectedPanel={modifySelectedPanel}
    />
  );
};

export const PostDetailsWithMultipleTaggedUsers = () => {
  const [selectedPanel, setSelectedPanel] = useState('');
  const modifySelectedPanel = panel => {
    if (!selectedPanel || panel !== selectedPanel) {
      setSelectedPanel(panel);
    } else {
      setSelectedPanel('');
    }
  };
  return (
    <PostDetails
      {...defaultProps}
      link={text('Link', 'https://theoffice.com')}
      taggedUsers={[
        { image: 'url', name: 'User 1' },
        { image: 'https://i.imgflip.com/4/4t0m5.jpg', name: 'User 2' },
        { image: 'url', name: 'User 3' }
      ]}
      tags={['tags?']}
      selectedPanel={selectedPanel}
      modifySelectedPanel={modifySelectedPanel}
    />
  );
};
