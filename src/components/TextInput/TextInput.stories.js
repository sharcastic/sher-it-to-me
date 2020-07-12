import React, { useState } from 'react';
import TextInput from './TextInput';

export default {
  title: 'Text Input',
  component: TextInput,
  decorators: [
    storyFn => (
      <div
        style={{
          width: 'fit-content',
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

export const DefaultTextInput = () => {
  const [value, setValue] = useState('');
  return <TextInput value={value} onChange={setValue} />;
};
