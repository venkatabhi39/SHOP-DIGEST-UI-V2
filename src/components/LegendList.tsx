// components/MessagingAppList.tsx
import React from 'react';
import { Heading } from '@/components/Heading';

interface MessagingApp {
  name: string;
  color: string;
}

const messagingApps: MessagingApp[] = [
  { name: 'Facebook Messenger', color: '#51cb99' },
  { name: 'WhatsApp', color: '#305bff' },
  { name: 'Telegram', color: '#eb2772' },
  { name: 'Viber', color: '#f5b700' },
  { name: 'WeChat', color: '#ee7300' },
  { name: 'Snapchat', color: '#b248ef' },
  { name: 'LINE: Free Calls & Messages', color: '#4fbced' },
  { name: 'KakaoTalk: Messenger', color: '#000000' },
  { name: 'Zalo', color: '#eb2772' },
];

const MessagingAppList: React.FC = () => {
  return (
    <div className="flex flex-col space-y-5">
      {messagingApps.map(app => (
        <div key={app.name} className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: app.color }}></div>
          <span>{app.name}</span>
        </div>
      ))}
    </div>
  );
};

const LegendList: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Heading as="h3" className="mb-0"></Heading>
      <MessagingAppList />
    </div>
  );
};

export default LegendList;
