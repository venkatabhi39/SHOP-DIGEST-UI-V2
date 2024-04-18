import React, { useState, useEffect, useRef } from 'react';
import { MainNavigation } from './MainNavigation';
import { SecondaryHeader } from './SecondaryHeader';
import NeedHelpSection from '../siteHeader/NeedHelpSection';
import HeroForm from '@/components/Blocks/HeroFilter/HeroForm';

export function SiteHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null); // Create a ref for the header element

  useEffect(() => {
    const handleScroll = () => {
      // Ensure the headerRef.current is not null before accessing `offsetTop`
      if (headerRef.current) {
        const sticky = headerRef.current.offsetTop;
        // console.log(window.scrollY, sticky - 301);
        setIsSticky(sticky - 265 > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="max-w-full sticky top-0 z-10 border border-t-0 border-b-1 border-x-0"
    >
      {/* <NeedHelpSection /> */}

      <MainNavigation />
      {/* <SearchAndBookSection /> */}
      {isSticky && (
        <div className="bg-white border border-t-0 border-x-0 shadow-md">
          <HeroForm isStickyState={isSticky} />
        </div>
      )}
    </header>
  );
}
