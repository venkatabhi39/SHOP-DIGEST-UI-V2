import { MainNavigation } from './MainNavigation';
import { SecondaryHeader } from './SecondaryHeader';
import NeedHelpSection from '../siteHeader/NeedHelpSection';

export function SiteHeader() {
  return (
    <header className="max-w-full sticky top-0 z-50">
      {/* <NeedHelpSection /> */}

      <MainNavigation />
      {/* <SearchAndBookSection /> */}
    </header>
  );
}
