// components/molecules/SocialMediaLinks/SocialMediaLinks.tsx
import React from 'react';
import IconLink from '@/components/Links/IconLink';
import {
  faceBookIcon,
  InstagramIcon,
  TwitterIcon,
  gitHubIcon,
  DribbleIcon,
} from '@/components/SvgIcons/IconList';

const facebookIcon = (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    {/* SVG Path for Facebook */}
  </svg>
);

const twitterIcon = (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    {/* SVG Path for Twitter */}
  </svg>
);

const SocialMediaLinks: React.FC = () => {
  return (
    <ul className="flex justify-start mt-5 space-x-5">
      <li>
        <IconLink url="#" svg={faceBookIcon} targetAttr="_blank" />
      </li>
      <li>
        <IconLink url="#" svg={InstagramIcon} targetAttr="_blank" />
      </li>
      <li>
        <IconLink url="#" svg={TwitterIcon} targetAttr="_blank" />
      </li>
      <li>
        <IconLink url="#" svg={gitHubIcon} targetAttr="_blank" />
      </li>
      <li>
        <IconLink url="#" svg={DribbleIcon} targetAttr="_blank" />
      </li>
      {/* <IconLink url="#" svg={twitterIcon} /> */}
      {/* Additional links as needed */}
    </ul>
  );
};

export default SocialMediaLinks;
