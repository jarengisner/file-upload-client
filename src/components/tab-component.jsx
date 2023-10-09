import React, { useState } from 'react';
import { Tab, Tabs, TabContent } from 'react-bootstrap';

import { LoadedFiles } from './loaded-files-component';
import { ResizedFiles } from './resized-components';

export const TabComponent = () => {
  const [active, setActive] = useState('first');

  const handleTabSelect = (selectedTab) => {
    setActive(selectedTab);
  };

  return (
    <div className='text-center'>
      <Tabs activeKey={active} onSelect={handleTabSelect}>
        <Tab eventKey='first' title='Original Images'>
          <TabContent>{active === 'first' && <LoadedFiles />}</TabContent>
        </Tab>
        <Tab eventKey='second' title='Resized Images'>
          <TabContent>{active === 'second' && <ResizedFiles />}</TabContent>
        </Tab>
      </Tabs>
    </div>
  );
};
