import React from 'react';
import OptionsPanel, { PanelItem } from './OptionsPanel';

import { ReactComponent as OptionsIcon } from '../../assets/icons/options.svg';

export default {
  title: 'Options Panel',
  component: OptionsPanel,
  decorators: [
    storyFn => (
      <div
        style={{
          width: '50px',
          height: '50px',
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

export const DefaultPanelWithHiddenContent = () => (
  <OptionsPanel>
    <OptionsPanel.VisibleComponent>
      <OptionsIcon
        title="Options Icon"
        style={{
          width: '25px',
          height: '25px',
          padding: '5px',
          border: '1px solid',
          borderRadius: '100%'
        }}
      />
    </OptionsPanel.VisibleComponent>
    <OptionsPanel.HiddenComponent>
      <p>Hidden Content!</p>
    </OptionsPanel.HiddenComponent>
  </OptionsPanel>
);

const onPanelClick = e => {
  console.log('Clicked element', e.currentTarget.innerText);
};

export const DefaultPanelWithHiddenListOfOptions = () => (
  <OptionsPanel>
    <OptionsPanel.VisibleComponent>
      <OptionsIcon
        title="Options Icon"
        style={{
          width: '25px',
          height: '25px',
          padding: '5px',
          border: '1px solid',
          borderRadius: '100%'
        }}
      />
    </OptionsPanel.VisibleComponent>
    <OptionsPanel.HiddenComponent>
      <ul>
        <PanelItem onClick={onPanelClick}>Item 1</PanelItem>
        <PanelItem onClick={onPanelClick}>Item 2</PanelItem>
        <PanelItem onClick={onPanelClick}>Item 3</PanelItem>
      </ul>
    </OptionsPanel.HiddenComponent>
  </OptionsPanel>
);
