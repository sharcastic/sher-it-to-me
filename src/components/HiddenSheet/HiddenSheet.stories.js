import React, { useState } from 'react';
import HiddenSheet from './HiddenSheet';

export default {
  title: 'Hidden Sheet',
  component: HiddenSheet,
  decorators: [storyFn => <div style={{}}>{storyFn()}</div>]
};

export const HiddenSheetFromRight = () => {
  const [isOpen, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={onToggle}>Toggle State</button>
      <HiddenSheet
        isOpen={isOpen}
        onToggle={onToggle}
        originDirection="right"
        closeIcon
      >
        <div
          style={{
            backgroundColor: 'goldenrod',
            height: '200px',
            width: '100px'
          }}
        >
          This is the content!
        </div>
      </HiddenSheet>
    </div>
  );
};

export const HiddenSheetFromBottom = () => {
  const [isOpen, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={onToggle}>Toggle State</button>
      <HiddenSheet
        isOpen={isOpen}
        onToggle={onToggle}
        originDirection="bottom"
        closeIcon
        onClose={onToggle}
      >
        <div
          style={{
            backgroundColor: 'goldenrod',
            height: '200px',
            width: '100px'
          }}
        >
          This is the content!
        </div>
      </HiddenSheet>
    </div>
  );
};
