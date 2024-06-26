import React from 'react';
import Image from 'next/image';
import { Card, Rating } from 'flowbite-react';
import Link, { LinkProps } from 'next/link';
import AppCard from '@/components/Cards/AppCard';
//import { StarIcon } from "@heroicons/react/solid";

interface AppCardProps {
  name: string;
  rating: number;
  imageSrc: string;
}

const apps = [
  {
    name: 'X',
    rating: 4.0,
    imageSrc: 'https://seeklogo.com/images/T/tik-tok-logo-E3F1A1B69E-seeklogo.com.png',
  },
  {
    name: 'Snapchat',
    rating: 4.1,
    imageSrc: 'https://seeklogo.com/images/A/apple-ios-app-store-logo-C39E303657-seeklogo.com.png',
  },
  {
    name: 'KakaoTalk: Messenger',
    rating: 4.0,
    imageSrc:
      'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049601.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=ais',
  },
  {
    name: 'Discord: Talk, Chat & Hang Out',
    rating: 4.2,
    imageSrc:
      'https://appcheck.mobilsicher.de/wp-content/uploads/2021/06/QPKtPRTJyhrYoPqYmjP81aCeYAQrH7ocIC25Tw8spEoKsX7eY0cqXMJp4QfkIq2bSg.png',
  },
  {
    name: 'Google Chat',
    rating: 4.5,
    imageSrc: 'https://seeklogo.com/images/W/wechat-logo-C88C575BE0-seeklogo.com.png',
  },
  {
    name: 'LINE: Calls & Messages',
    rating: 4.0,
    imageSrc: 'https://seeklogo.com/images/I/instagram-logo-041EABACE1-seeklogo.com.png',
  },
  {
    name: 'Tumblr—Fandom, Art, Chaos',
    rating: 4.4,
    imageSrc: 'https://seeklogo.com/images/F/facebook-logo-0AA7913C4D-seeklogo.com.png',
  },
  {
    name: 'Jitsi Meet',
    rating: 3.9,
    imageSrc: 'https://seeklogo.com/images/A/adobe-after-effects-logo-960B473FE4-seeklogo.com.png',
  },
  // Add more items here...
];

const AppCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2 py-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 sm:py-6 xl:grid-cols-8 xl:py-7 2xl:py-12">
      {apps.map((app, index) => (
        <Link href="#" className="">
          <AppCard key={index} {...app} />
        </Link>
      ))}
    </div>
  );
};

export default AppCards;
