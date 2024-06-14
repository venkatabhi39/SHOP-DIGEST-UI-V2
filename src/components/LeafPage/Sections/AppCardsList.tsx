import React from 'react';
import Image from 'next/image';
import { Card, Rating } from 'flowbite-react';
import Link, { LinkProps } from 'next/link';
import AppCard from '@/components/Cards/AppCard';
import { Heading } from '@/components/Heading';
import AnchorLink from '@/components/Links/AcnhorLink';
//import { StarIcon } from "@heroicons/react/solid";

interface AppCardProps {
  name: string;
  rating: number;
  imageSrc: string;
}

const apps = [
  {
    name: 'X',
    category: 'Entertainment',
    imageSrc: 'https://seeklogo.com/images/T/tik-tok-logo-E3F1A1B69E-seeklogo.com.png',
  },
  {
    name: 'Snapchat',
    category: 'Books',
    imageSrc: 'https://seeklogo.com/images/A/apple-ios-app-store-logo-C39E303657-seeklogo.com.png',
  },
  {
    name: 'KakaoTalk: Messenger',
    category: 'Books',
    imageSrc:
      'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049601.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=ais',
  },
  {
    name: 'Discord: Talk, Chat & Hang Out',
    category: 'Entertainment',
    imageSrc:
      'https://appcheck.mobilsicher.de/wp-content/uploads/2021/06/QPKtPRTJyhrYoPqYmjP81aCeYAQrH7ocIC25Tw8spEoKsX7eY0cqXMJp4QfkIq2bSg.png',
  },
  {
    name: 'Google Chat',
    category: 'Books',
    imageSrc: 'https://seeklogo.com/images/W/wechat-logo-C88C575BE0-seeklogo.com.png',
  },
  {
    name: 'LINE: Calls & Messages',
    category: 'Entertainment',
    imageSrc: 'https://seeklogo.com/images/I/instagram-logo-041EABACE1-seeklogo.com.png',
  },

  // Add more items here...
];

const AppCards: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading as="h2" className="mt-2 text-center">
          More By This Developer
        </Heading>
        <AnchorLink
          href={'#'}
          variant="default"
          classProp="text-sm font-semibold inline-flex items-center hover:underline"
        >
          View all
        </AnchorLink>
      </div>
      <div className="grid grid-cols-2 gap-2 py-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 sm:py-6 xl:grid-cols-6 xl:py-7 2xl:py-12">
        {apps.map((app, index) => (
          <Link href="#" className="">
            <AppCard key={index} {...app} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppCards;
