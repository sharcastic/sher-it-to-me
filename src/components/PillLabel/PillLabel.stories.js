import React from 'react';
import PillLabel from './PillLabel';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ReactComponent as DefaultPerson } from '../../assets/icons/defaultPerson.svg';

export default {
  title: 'Pill Label',
  component: PillLabel,
  decorators: [
    withA11y,
    withKnobs,
    storyFn => (
      <div
        style={{
          width: 'fit-content',
          fontFamily: 'Goldplay-Regular',
          margin: 'auto',
          'padding-top': '20px'
        }}
      >
        {storyFn()}
      </div>
    )
  ]
};

export const PillLabelWithoutRemoveOption = () => (
  <PillLabel id={1} value={text('Label value', 'Scranton')} />
);

export const PillLabelWithRemoveOption = () => (
  <PillLabel id={1} value={text('Label value', 'Scranton')} removable />
);

export const PillLabelWithRemoveOptionAndLeftIcon = () => (
  <PillLabel
    id={1}
    value={text('Label value', 'Jim Halpert')}
    removable
    leftIcon={<DefaultPerson style={{ height: '20px', width: '20px' }} />}
  />
);
