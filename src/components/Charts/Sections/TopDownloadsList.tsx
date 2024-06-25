import React from 'react';
import { Heading } from '@/components/Heading';
import GroupedDropdown from '@/components/FormFields/GroupedDropdown';

interface Props {
  data: AppRank[];
  title: string;
}

interface AppRank {
  name: string;
  rank: number;
  icon: string; // URL or path to the icon image
}

interface RankingData {
  totalReviews: AppRank[];
  reviewChanges: AppRank[];
  averageRating: AppRank[];
}

const Ranking: React.FC<Props> = ({ data, title }) => {
  const filterConfig = [
    {
      id: 'apps',
      default: 'today',
      label: 'Today',
      items: [
        {
          label: 'Today',
          value: 'today',
        },
        {
          label: 'Last Week',
          value: 'last-week',
        },
      ],
    },
    {
      id: 'location',
      default: 'country',
      label: 'Country',
      items: [
        {
          label: 'Country',
          value: 'country',
        },
        {
          label: 'India',
          value: 'india',
        },
      ],
    },
  ];
  return (
    <div>
      <div className="mt-2 text-center border p-4 ">
        <Heading as="h4" className="mb-0 text-lg font-bold">
          {title}
          <div className="mt-2">
            <GroupedDropdown filters={filterConfig} />
          </div>
        </Heading>
      </div>

      <ul className="list-none border p-4 min-h-96">
        {data.map((app, index) => (
          <li key={index} className="flex list-none items-center mb-2">
            <b className="mr-2 min-w-6">{app.rank}</b>
            <img src={app.icon} alt={app.name} style={{ width: 34, height: 34 }} className="mr-2" />
            <div className="text-sm font-medium">{app.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AppRankings: React.FC<{ data: RankingData }> = ({ data }) => {
  return (
    <div className="flex max-w-screen-xl overflow-x-auto">
      <Ranking data={data.totalReviews} title="Total Reviews" />
      <Ranking data={data.reviewChanges} title="Review Changes" />
      <Ranking data={data.averageRating} title="Avg Rating" />
      <Ranking data={data.averageRating} title="Avg Rating Changes" />
      <Ranking data={data.averageRating} title="Recommendations" />
    </div>
  );
};
const icons = {
  WhatsApp: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/whatsapp-64.png',
  Messenger: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/skype-64.png',
  Facebook: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/appstore-64.png',
  Snapchat: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/snapchat-64.png',
  Instagram: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/instagram-64.png',
  YouTube: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/youtube-64.png',
  Uber: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_uber-64.png',
  Spotify: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Spotify-64.png',
  Twitter: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/twitter-64.png',
  Netflix: 'https://cdn3.iconfinder.com/data/icons/apple-ios-app-big-sur-dark/1024/Netflix-64.png',
};
// Sample data
const sampleData: RankingData = {
  totalReviews: [
    {
      name: 'WhatsApp',
      rank: 1,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/whatsapp-64.png',
    },
    {
      name: 'Snapchat',
      rank: 2,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/snapchat-64.png',
    },
    {
      name: 'YouTube',
      rank: 3,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/youtube-64.png',
    },
    {
      name: 'Instagram',
      rank: 4,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/instagram-64.png',
    },
    {
      name: 'WhatsApp',
      rank: 5,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/whatsapp-64.png',
    },
    {
      name: 'Snapchat',
      rank: 6,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/snapchat-64.png',
    },
    {
      name: 'YouTube',
      rank: 7,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/youtube-64.png',
    },
    {
      name: 'Instagram',
      rank: 8,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/instagram-64.png',
    },
    {
      name: 'Snapchat',
      rank: 9,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/instagram-64.png',
    },
    {
      name: 'WhatsApp',
      rank: 10,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/whatsapp-64.png',
    },
  ],
  reviewChanges: [
    {
      name: 'YouTube',
      rank: 1,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/youtube-64.png',
    },

    {
      name: 'Snapchat',
      rank: 2,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/snapchat-64.png',
    },
    {
      name: 'YouTube',
      rank: 3,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/youtube-64.png',
    },
    {
      name: 'Instagram',
      rank: 4,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/instagram-64.png',
    },
    {
      name: 'WhatsApp',
      rank: 5,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/whatsapp-64.png',
    },
    {
      name: 'Snapchat',
      rank: 6,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/snapchat-64.png',
    },
    {
      name: 'YouTube',
      rank: 7,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/youtube-64.png',
    },
    {
      name: 'Instagram',
      rank: 8,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/instagram-64.png',
    },
    {
      name: 'Snapchat',
      rank: 9,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/instagram-64.png',
    },
    {
      name: 'WhatsApp',
      rank: 10,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/whatsapp-64.png',
    },
  ],
  averageRating: [
    {
      name: 'Instagram',
      rank: 1,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/instagram-64.png',
    },
    {
      name: 'Snapchat',
      rank: 2,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/snapchat-64.png',
    },
    {
      name: 'YouTube',
      rank: 3,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/youtube-64.png',
    },
    {
      name: 'Instagram',
      rank: 4,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/instagram-64.png',
    },
    {
      name: 'WhatsApp',
      rank: 5,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/whatsapp-64.png',
    },
    {
      name: 'Snapchat',
      rank: 6,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/snapchat-64.png',
    },
    {
      name: 'YouTube',
      rank: 7,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/youtube-64.png',
    },
    {
      name: 'Instagram',
      rank: 8,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/instagram-64.png',
    },
    {
      name: 'Snapchat',
      rank: 9,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/instagram-64.png',
    },
    {
      name: 'WhatsApp',
      rank: 10,
      icon: 'https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/whatsapp-64.png',
    },
  ],
};

const TopDownloads: React.FC = () => {
  return (
    <div>
      <AppRankings data={sampleData} />
    </div>
  );
};

export default TopDownloads;
