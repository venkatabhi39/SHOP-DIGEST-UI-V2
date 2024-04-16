import { Avatar } from 'flowbite-react';
import { BsTelephoneFill } from 'react-icons/bs';
import SectionContainer from '../appPage/SectionContainer';
import Image from 'next/image';
import thomasImage from '@/assets/thomas-lean.png';

export default function NeedHelpSection() {
  return (
    <nav className="bg-black text-white text-sm py-2">
      <SectionContainer>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <Avatar
            className="max-sm:hidden"
            size="xs"
            rounded
            // eslint-disable-next-line react/no-unstable-nested-components
            img={({ alt, ...imgProps }) => (
              <Image
                alt="Support Engineer"
                {...imgProps}
                width={24}
                height={24}
                src={thomasImage}
              />
            )}
          />
          <span className="font-bold">Need help with your test?</span>
          <a
            href="tel:1231231231"
            target="_blank"
            className="flex items-center justify-center gap-2 px-4 py-1 border-2 border-dashed rounded-md font-semibold"
            rel="noreferrer"
          >
            <BsTelephoneFill className="w-3 h-3" /> <span>+91 1231231231</span>
          </a>
        </div>
      </SectionContainer>
    </nav>
  );
}
