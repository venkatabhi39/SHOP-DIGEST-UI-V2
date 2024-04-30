import React from 'react';
import Tabs from './Tabs'; // Assume Tabs is exported from a file named Tabs.tsx
import TabLinks from './Links'

const TabsWithOutline = () => {
    const tabs = [
        {
            id: 'profile',
            title: 'Profile',
            content: <TabLinks/>
        },
        {
            id: 'dashboard',
            title: 'Dashboard',
            content: <p>This is the dashboard content.</p>
        },
        {
            id: 'settings',
            title: 'Settings',
            content: <p>This is the settings content.</p>
        },
        {
            id: 'contacts',
            title: 'Contacts',
            content: <p>This is the contacts content.</p>
        }
    ];

    return <Tabs tabs={tabs} />;
};


export default TabsWithOutline;