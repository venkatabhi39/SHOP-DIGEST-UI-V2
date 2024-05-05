import MainNavigation from './MainNavigation';
import NavigationItems from './NavigationItems';
import SearchAndBookSection from './SearchAndBookSection';

export default function SiteHeader() {
  return (
    <header className="max-w-full">
      {/* <NeedHelpSection /> */}
      <MainNavigation>
        <NavigationItems />
      </MainNavigation>
      <SearchAndBookSection />
    </header>
  );
}
