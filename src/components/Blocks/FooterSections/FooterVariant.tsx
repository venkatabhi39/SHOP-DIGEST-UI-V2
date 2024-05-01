import React from 'react';
import { SiteLogo } from '@/components/SiteLogo';
import SocailMediaLinks from '@/components/Blocks/SocailMediaLink';
import { Dropdown } from 'flowbite-react';
import { GlobeIcon, LineArrowDown } from '@/components/SvgIcons/IconList';

interface FooterLinkProps {
  title: string;
  links: string[];
}
function IconCombo() {
  return (
    <Dropdown
      label=""
      //dismissOnClick={false}
      renderTrigger={() => (
        <div className="cursor-pointer mt-6 inline-flex border p-1 px-2 border-gray-300 align-middle items-center rounded-md">
          <GlobeIcon classProp="!w-4 !h-4 mr-2" />
          <span className="text-sm">English</span>
          <LineArrowDown />
        </div>
      )}
    >
      <Dropdown.Item>Spanish</Dropdown.Item>
      <Dropdown.Item>Hindi</Dropdown.Item>
      <Dropdown.Item>Russian</Dropdown.Item>
      <Dropdown.Item>French</Dropdown.Item>
    </Dropdown>
  );
}

const FooterSection: React.FC<FooterLinkProps> = ({ title, links }) => {
  return (
    <div className="lg:mx-auto">
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h2>
      <ul className="text-gray-500 dark:text-gray-400">
        {links.map((link, index) => (
          <li key={index} className="mb-4">
            <a href="#" className="hover:underline text-gray-700">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer: React.FC = () => {
  const sections: { title: string; links: string[] }[] = [
    { title: 'Company', links: ['About', 'Careers', 'Brand Center', 'Blog'] },
    { title: 'Help center', links: ['Discord Server', 'Twitter', 'Facebook', 'Contact Us'] },
    { title: 'Legal', links: ['Privacy Policy', 'Licensing', 'Terms'] },
    { title: 'Download', links: ['iOS', 'Android', 'Windows', 'MacOS'] },
  ];

  return (
    <footer className=" ">
      <div className="py-6 mx-auto lg:-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          <div className="col-span-2">
            <SiteLogo />
            <p className="my-4 font-light text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of over 400+ web components and interactive
              elements built with the utility classes from Tailwind CSS.
            </p>

            <SocailMediaLinks />
            <IconCombo />
            {/* Social Media Icons */}
            {/* Icons placeholders */}
          </div>
          {sections.map((section, index) => (
            <FooterSection key={index} title={section.title} links={section.links} />
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2023-2024{' '}
          <a href="#" className="hover:underline">
            ShopDigest
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
