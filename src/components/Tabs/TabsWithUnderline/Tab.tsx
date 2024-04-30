// Tab.tsx

import React from 'react';

export interface TabProps {
  isActive: boolean;
  id: string;
  title: string;
  content: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ isActive, id, title, content }) => {
  return (
    <div
      role="tabpanel"
      id={`tab-panel-${id}`}
      aria-labelledby={`tab-${id}`}
      hidden={!isActive}
      className={`tab-panel${isActive ? ' active' : ''}`}
    >
      {content}
    </div>
  );
};

export default Tab;
